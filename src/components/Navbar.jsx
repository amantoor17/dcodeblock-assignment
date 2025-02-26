import logo from '../assets/logodb-PhotoRoom1.png';
import rect1 from '../assets/Rectangle1120.png';
import rect2 from '../assets/Rectangle1119.png';
import rect3 from '../assets/Rectangle1121.png';
import '../index.css';

function Navbar() {
    return (
        <div className="w-100vw h-[75px] border-b-2 bg-black z-10">
            <div className="flex justify-between pt-[18px] pl-[79px]">
                <img className="w-[240px] h-[40px]" src={logo} />

                {/* Hover effect applied to the wrapper div */}
                <div className="relative bottom-[8px] right-[150px] bg-transparent rounded-md hover:cursor-pointer transition duration-300 ease-in-out 
                    hover:brightness-150 hover:drop-shadow-[0_0_10px_#B026FF] hover:scale-110">
                    <div className="group flex gap-1 w-[150px] h-[53px] hover:cursor-pointer">
                        {/* Apply brightness and glow effect */}
                        <img  src={rect1} />
                        <img  src={rect2} />
                    </div>
                    {/* Text with glow effect */}
                    <p className="text-white absolute mt-[-36px] ml-[50px] proxon-font font-normal text-base leading-[23.6px] hover:cursor-pointer">
                        Sign in
                    </p>
                </div>
            </div>
            <img className="w-[100vw] h-[6px] mt-1" src={rect3} />
        </div>
    );
}

export default Navbar;
