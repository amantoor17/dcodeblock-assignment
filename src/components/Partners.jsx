import { motion } from "framer-motion";
import p6 from "../assets/p6.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

const images = [p6, p1, p2, p3, p4, p5];

function Partners() {
    return (
        <div className="overflow-hidden sm:h-[90px] h-[50px] bg-[#D9D9D9] flex items-center">
            {/* Static images for larger screens */}
            <div className="hidden sm:flex justify-evenly w-full">
                <img src={p6} className="h-[60px] sm:h-[70px] mx-2" />
                <img src={p1} className="h-[60px] sm:h-[70px] mx-2" />
                <img src={p2} className="h-[60px] sm:h-[70px] mx-2" />
                <img src={p3} className="h-[60px] sm:h-[70px] mx-2" />
                <img src={p4} className="h-[60px] sm:h-[70px] mx-2" />
                <img src={p5} className="h-[60px] sm:h-[70px] mx-2" />
            </div>

            {/* Moving images for mobile view */}
            <motion.div
                className="flex whitespace-nowrap sm:hidden"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
                {[...images, ...images].map((img, index) => (
                    <img key={index} src={img} className="h-[35px] mx-2" alt={`moving-${index}`} />
                ))}
            </motion.div>
        </div>
    );
}

export default Partners;
