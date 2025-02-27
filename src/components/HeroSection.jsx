import background from '../assets/BackgroundVideo.mp4';
import H from '../assets/H.png'
import HeroNav from './HeroNav';
import navPic from '../assets/navpic.png'
import rect1 from '../assets/Rectangle1120.png'
import rect2 from '../assets/Rectangle1119.png'

function HeroSection() {
    return (
        <div className="flex flex-col md:h-[800px] lg:w-100vw lg:h-[835px] z-[-1]">

            <div>
                <video 
                    className="lg:absolute z-[-100] md:h-[800px] lg:inset-0 w-full lg:h-full h-screen object-cover opacity-[94%] sm:brightness-35 brightness-150"
                    src={background} 
                    type="video/mp4" 
                    autoPlay 
                    loop 
                    muted
                />
            </div>

            <div className='flex'>
                <div className='flex gap-[9px] items-center lg:mt-[70px] lg:ml-[99px] mt-[-1250px] ml-28 md:mt-[-1400px] md:ml-78 z-10'>
                    <img className='lg:w-[38px] lg:h-[38px]' src={H}/>
                    <p className='proxon-font text-white uppercase w-[136px] h-[36px] font-normal text-[22px] tracking-[10%] leading-[36.3px]'>HackIndia</p>
                </div>
                <div>
                    <HeroNav/>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>

                {/* For Mobile view */}

                <img className='lg:w-[280px] lg:h-[76px] lg:mt-[50px] mt-[-580px] md:mt-[-800px] ml-1 z-10 w-[180px] h-[40px]' src={navPic} />
                <h1 className='sm:hidden text-4xl z-10 proxon-font mt-5
                bg-gradient-to-r from-orange-600 via-white to-green-400 inline-block text-transparent bg-clip-text
                '>HackIndia2025</h1>
                <p className='lg:hidden text-lg uppercase z-10 text-white proxon-font mt-6 mb-3'>India’s Biggest Web3 & AI Hackathon</p>
                <div className='lg:hidden z-10 text-white border border-[#6A1799] backdrop-blur-sm rounded p-5 m-5'>
                        <p className='flex flex-col justify-center items-center gap-5 vtf-font font-bold'>
                            <p><span className='text-[#F86720]'>$150+ </span>Price Pool</p>
                            <p><span className='text-[#F86720]'>150+ </span>University</p>
                            <p><span className='text-[#F86720]'>25,000+ </span>Students</p>
                        </p>
                 </div>

                {/* For Desktop view */}

                <div className='flex flex-col w-[866px] h-[332px] mt-[20px] pl-3 gap-[35px]'>

                    <div className='hidden lg:flex items-center bg-[#F86720] w-[152px] h-[107px] rounded-sm border border-white'>
                    <h1 className='hidden lg:block lg:w-[800px] lg:text-[100px] lg:pt-4 lg:pl-3 text-white proxon-font' style={{ textShadow: "1px 3px 2px rgba(255, 255, 255, 0.5)" }}>HackIndia2025</h1>
                    
                    </div>
                    
                    <p className='hidden lg:block text-[28px] text-white vtf-font font-bold tracking-[2px] text-center mt-[-15px]'>India’s Biggest Web3 & AI Hackathon</p>

                    <div className='bg-[#6A1799] w-[40%] border rounded-sm ml-[30%] border-[#D9D9D94D] pt-[10px] pr-[30px] pb-[10px] pl-[30px] h-[50px] z-10 '>
                        <span className='vtf-font text-white font-bold text-[20px]'>February 28 - September 28</span>
                    </div>
                    <div>
                        <p className='hidden lg:flex justify-between text-[25px] text-white vtf-font font-bold'>
                            <p><span className='text-[#F86720]'>$150+ </span>Price Pool</p>
                            <span>|</span> 
                            <p><span className='text-[#F86720]'>150+ </span>University</p>
                            <span>|</span> 
                            <p><span className='text-[#F86720]'>25,000+ </span>Students</p>
                        </p>
                    </div>
                </div>

                <div className="relative lg:bottom-[8px] lg:right-[150px] lg:ml-[17%] lg:mt-10 mt-[-250px]
                    bg-transparent rounded-md hover:cursor-pointer transition duration-300 ease-in-out 
                    hover:brightness-150 hover:drop-shadow-[0_0_10px_#B026FF] hover:scale-110 lg:hover:scale-110 ">
                    
                    <div className="flex gap-1 w-[150px] h-[53px] ">
                        <img className="transition duration-300 ease-in-out" src={rect1} />
                        <img className="transition duration-300 ease-in-out" src={rect2} />
                    </div>

                    <p className="text-white absolute mt-[-38px] ml-[30px] vtf-font font-thin text-base leading-[23.6px] ">
                        Register now!
                    </p>
                </div>

            </div>

        </div>
    );
}

export default HeroSection;
