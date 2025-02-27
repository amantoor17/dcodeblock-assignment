import light from '../assets/light.png'
import yt from '../assets/yt.png'
import Footer from './Footer';
import Partners from './Partners';

function About() {
    return(
        <div className="bg-[#282029] sm:w-100vw sm:h-[800px]">

                {/* For Desktop View */}
                <div className='hidden sm:flex justify-evenly items-center pb-30 proxon-font'>

                    <div className='flex flex-col text-white gap-10 pt-20'>
                        <img className='hidden sm:block pr-170' src={light} />
                        <div className='sm:pl-60 sm:pt-5'>
                        <p className='flex flex-col pb-10' style={{ textShadow: "1px 4px 2px rgba(255, 255, 255, 0.5)" }}>
                            <span className='text-5xl' >150+ </span>
                            <span className='text-2xl'>Universities participating</span>
                        </p>
                        <div className='flex gap-20' >
                            <p className='flex flex-col'>
                                <span className='text-5xl'>72+ </span>
                                <span className='text-2xl'>Judges</span>
                            </p>
                            <p className='flex flex-col'>
                                <span className='text-5xl'>21 </span>
                                <span className='text-2xl'>Hackathons</span>
                            </p>
                            <p className='flex flex-col'>
                                <span className='text-5xl'>36+ </span>
                                <span className='text-2xl'>Great Speakers</span>
                            </p>
                        </div>
                        </div>
                        
                    </div>

                    <img className='pt-20 pr-40' src={yt} />
                </div>

                {/* For Mobile View */}
                <div className='sm:hidden'>
                    <img className='pt-10 pl-5 pr-5 pb-10' src={yt} />

                    <p className='text-center text-white proxon-font text-2xl pr-2 pl-2'>
                        <span>150+ </span>
                        <span>Universities participating</span>
                    </p>
                    <div className='flex items-center justify-center gap-10 pt-5 pb-10 text-white proxon-font' >
                            <p className='flex flex-col'>
                                <span className=''>72+ </span>
                                <span className=''>Judges</span>
                            </p>
                            <p className='flex flex-col'>
                                <span className=''>21 </span>
                                <span className=''>Hackathons</span>
                            </p>
                            <p className='flex flex-col'>
                                <span className=''>36+ </span>

                                <span className=''>Great Speakers</span>
                            </p>
                    </div>

                </div>

     
            <Partners/>
            <Footer/>

        </div>
    )
}

export default About;