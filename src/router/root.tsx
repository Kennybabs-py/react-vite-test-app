import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Observer from "@/pages/observer";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/observer" element={<Observer />} />
    </Routes>
  );
}
