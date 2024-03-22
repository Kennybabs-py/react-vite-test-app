/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, createRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import gridItems from "@/data.json";
import "./styles.scss";

export default function Observer() {
  const [mouseX, setMouseX] = useState(0);
  const videosRef = useRef(gridItems.map(() => createRef<HTMLDivElement>()));
  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };
    if (!pageRef.current || pageRef.current === null) return;
    const videoNodeItems = pageRef?.current.querySelectorAll(".video__item");

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        console.log(entry);
      });
    }, options);
  }, []);

  //   useGSAP(
  //     () => {
  //       if (!gridContainerRef.current || gridContainerRef.current === null)
  //         return;
  //       const gridNodeItems =
  //         gridContainerRef?.current.querySelectorAll(".grid__item");

  //       gridNodeItems.forEach((_, index) => {
  //         if (!itemsRef.current) return;

  //         const itemRef = itemsRef.current[index];
  //         if (!itemRef.current) return;
  //         const previousElementSibling = itemRef.current.previousElementSibling;

  //         let isLeftSide = false;

  //         //Rightmost position of the current item
  //         const currentItemRightEdge =
  //           itemRef.current.offsetLeft + itemRef.current.offsetWidth;

  //         // Getting the ref of the previous item
  //         if (!previousElementSibling || index === 0) return;
  //         const previousElementSiblingRef = itemsRef.current[index - 1];

  //         //Leftmost position of the previous item (+ 1 for a buffer)
  //         if (!previousElementSiblingRef.current) return;
  //         const previousItemLeftEdge =
  //           previousElementSiblingRef.current.offsetLeft +
  //           previousElementSiblingRef.current.offsetWidth +
  //           1;

  //         if (currentItemRightEdge <= previousItemLeftEdge) {
  //           isLeftSide = true;
  //         }

  //         const originX = isLeftSide ? 100 : 0;

  //         const rect = itemRef.current.getBoundingClientRect();
  //         const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

  //         if (isInView) return;

  //         gsap
  //           .timeline({
  //             defaults: { ease: "power4.out" },
  //             scrollTrigger: {
  //               trigger: itemRef.current,
  //               start: `top bottom-=0%`,
  //               end: "+=100%",
  //               scrub: 1,
  //               markers: true,
  //             },
  //           })
  //           .fromTo(
  //             itemRef.current.querySelector(".image__wrapper"),
  //             { scale: 0, transformOrigin: `${originX}% 0%` },
  //             { scale: 1 }
  //           )
  //           .fromTo(
  //             itemRef.current.querySelector("img"),
  //             { scale: 5, transformOrigin: `${originX}% 0%` },
  //             { scale: 1 },
  //             0
  //           )
  //           .fromTo(
  //             itemRef.current.querySelector("span"),
  //             { opacity: 0, xPercent: isLeftSide ? -100 : 100 },
  //             {
  //               ease: "power2.out",
  //               opacity: 1,
  //               xPercent: 0,
  //             },
  //             0
  //           );
  //       });
  //     },
  //     { scope: itemsRef }
  //   );

  return (
    <main ref={pageRef} className="videos_page">
      {gridItems.map((item, index) => (
        <div
          className="video__item"
          key={item.id}
          ref={videosRef.current[index]}
        >
          <figure className="image__wrapper">
            <img src={item.image} alt="grid image" />
          </figure>
          <span>{item.text}</span>
        </div>
      ))}
    </main>
  );
}
