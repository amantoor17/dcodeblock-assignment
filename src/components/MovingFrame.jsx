import { motion } from "framer-motion";
import moving1 from "../assets/1.png";
import moving2 from "../assets/2.png";
import moving3 from "../assets/3.png";
import moving4 from "../assets/4.png";

const images = [moving1, moving2, moving3, moving4];

function MovingFrame() {
  return (
    // Moving frame below hero section
    <div className="overflow-hidden sm:h-[90px] bg-[#D9D9D9] flex items-center">
      <motion.div
        className="flex whitespace-nowrap sm:mt-2"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...images, ...images].map((img, index) => (
          <img key={index} src={img} alt={`moving-${index}`} />
        ))}
      </motion.div>
    </div>
  );
}

export default MovingFrame;
