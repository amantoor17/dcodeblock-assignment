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

            <div className='z-1'>
                <img src={navPic} />
                <div className='bg-[#F86720] w-[152px] h-[107px]'></div>
                <p>hackindia2025</p>
                <p>India’s Biggest Web3 & AI Hackathon</p>
                <div className='bg-[#6A1799]'>
                    <p>February 28 - September 28</p>
                </div>
                <div>
                    <p>$150+ Price Pool | 150+ University | 25,000+ Students</p>
                </div>
                <div className="relative">
                    <div className='flex w-[150px] h-[53px] '>
                        <img className='' src={rect1}/>
                        <img className='' src={rect2}/>         
                    </div>
                    <p className='text-white absolute'>Overview</p>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;
