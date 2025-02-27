import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MovingFrame from "./components/MovingFrame";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MovingFrame />
      <About />
    </div>
  );
}

export default App;
