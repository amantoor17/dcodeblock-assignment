import { useRef, useLayoutEffect, useState } from "react";
import rect1 from '../assets/Rectangle1120.png';
import rect2 from '../assets/Rectangle1119.png';

const tabs = [
    "Overview",
    "Create Team",
    "Prizes & Sponsors",
    "FAQs",
    "Judging & Rules",
    "Resources"
];

function HeroNav() {
    const textRefs = useRef([]);  
    const [widths, setWidths] = useState(new Array(tabs.length).fill(60)); 

    useLayoutEffect(() => {
        const updateWidths = () => {
            setTimeout(() => { // Ensures text is fully rendered before measuring
                const newWidths = textRefs.current.map(ref => 
                    ref ? ref.getBoundingClientRect().width + 30 : 60 // Add padding
                );
                setWidths(newWidths);
            }, 50); // Small delay for accurate measurement
        };

        updateWidths(); 

        window.addEventListener("resize", updateWidths);
        return () => window.removeEventListener("resize", updateWidths);
    }, []);

    return (
        <div className="bg-[#28083A] h-[60px] w-auto mt-[114px] ml-[120px] border border-[#5C3A80] rounded-lg flex items-center px-4 space-x-4">
            {tabs.map((tab, index) => (
                <div key={index} className="relative flex items-center">
                    <img src={rect1} alt="Tab Left" className="h-[40px]" />
                    <span
                        ref={el => textRefs.current[index] = el}
                        className="absolute left-6 text-white proxon-font font-normal text-sm whitespace-nowrap"
                    >
                        {tab}
                    </span>
                    <img
                        src={rect2}
                        alt="Tab Right"
                        className="h-[40px]"
                        style={{ width: `${widths[index]}px`, minWidth: "60px" }} // Prevent shrinking
                    />
                </div>
            ))}
        </div>
    );
}

export default HeroNav;
