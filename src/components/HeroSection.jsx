import background from '../assets/BackgroundVideo.mp4';
import H from '../assets/H.png'
import HeroNav from './HeroNav';
import navPic from '../assets/navpic.png'
import rect1 from '../assets/Rectangle1120.png'
import rect2 from '../assets/Rectangle1119.png'

function HeroSection() {
    return (
        <div className="flex flex-col w-100vw h-[835px] z-[-1]">

            <div>
                <video 
                    className="absolute z-[-100] inset-0 w-full h-full opacity-[94%]"
                    src={background} 
                    type="video/mp4" 
                    autoPlay 
                    loop 
                    muted
                />
            </div>

            <div className='flex'>
                <div className='flex gap-[9px] items-center mt-[123px] ml-[99px]'>
                    <img className='w-[38px] h-[38px]' src={H}/>
                    <p className='proxon-font text-white uppercase w-[136px] h-[36px] font-normal text-[22px] tracking-[10%] leading-[36.3px]'>HackIndia</p>
                </div>
                <div>
                    <HeroNav/>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <img className='w-[280px] h-[76px] mt-[50px]' src={navPic} />

                <div className='flex flex-col w-[866px] h-[332px] mt-[20px] pl-3 gap-[35px]'>

                    <div className='flex items-center bg-[#F86720] w-[152px] h-[107px] rounded-sm border border-white'>
                    <h1 className='w-[800px] text-[100px] pt-4 pl-3 text-white proxon-font' style={{ textShadow: "1px 3px 2px rgba(255, 255, 255, 0.5)" }}>HackIndia2025</h1>
                    </div>
                    
                    <p className='text-[28px] text-white vtf-font font-bold tracking-[2px] text-center mt-[-15px]'>India’s Biggest Web3 & AI Hackathon</p>

                    <div className='bg-[#6A1799] w-[40%] border rounded-sm ml-[30%] border-[#D9D9D94D] pt-[10px] pr-[30px] pb-[10px] pl-[30px] h-[50px]'>
                        <span className='vtf-font text-white font-bold text-[20px]'>February 28 - September 28</span>
                    </div>
                    <div>
                        <p className='flex justify-between text-[25px] text-white vtf-font font-bold'>
                            <p><span className='text-[#F86720]'>$150+ </span>Price Pool</p>
                            <span>|</span> 
                            <p><span className='text-[#F86720]'>150+ </span>University</p>
                            <span>|</span> 
                            <p><span className='text-[#F86720]'>25,000+ </span>Students</p>
                        </p>
                    </div>
                </div>

                <div className="relative bottom-[8px] right-[150px] ml-[17%] mt-10">
                    <div className='flex gap-1 w-[150px] h-[53px] '>
                        <img className='' src={rect1}/>
                        <img className='' src={rect2}/>
                                                    
                    </div>
                    <p className='text-white absolute mt-[-38px] ml-[30px] vtf-font font-thin text-base leading-[23.6px]'>Register now!</p>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;
