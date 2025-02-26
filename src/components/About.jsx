import light from '../assets/light.png'
import yt from '../assets/yt.png'
import Footer from './Footer';
import Partners from './Partners';

function About() {
    return(
        <div className="bg-[#282029] w-100vw h-[800px]">

                

                <div className='flex justify-evenly items-center pb-30 proxon-font'>

                    <div className='flex flex-col text-white gap-10 pt-20'>
                        <img className='pr-170' src={light} />
                        <div className='pl-60 pt-5'>
                        <p className='flex flex-col pb-10' style={{ textShadow: "1px 4px 2px rgba(255, 255, 255, 0.5)" }}><span className='text-5xl' >150+ </span><span className='text-2xl'>Universities participating</span></p>
                        <div className='flex gap-20' >
                            <p className='flex flex-col'><span className='text-5xl'>72+ </span><span className='text-2xl'>Judges</span></p>
                            <p className='flex flex-col'><span className='text-5xl'>21 </span><span className='text-2xl'>Hackathons</span></p>
                            <p className='flex flex-col'><span className='text-5xl'>36+ </span><span className='text-2xl'>Great Speakers</span></p>
                        </div>
                        </div>
                        
                    </div>

                    <img className='pt-20 pr-40' src={yt} />
                    
                </div>

     
            <Partners/>
            <Footer/>

        </div>
    )
}

export default About;