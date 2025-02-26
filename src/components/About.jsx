import light from '../assets/light.png'
import yt from '../assets/yt.png'
import Footer from './Footer';
import Partners from './Partners';

function About() {
    return(
        <div className="bg-[#282029] w-100vw h-[1200px]">

            <img src={light} />

            <div className='text-white'>
                <p>150+ Universities participating</p>
                <div >
                    <p>72+ Judges</p>
                    <p>21 Hackathons</p>
                    <p>36+ Great Speakers</p>
                </div>
            </div>

            <img src={yt} />

            <Partners/>
            <Footer/>

        </div>
    )
}

export default About;