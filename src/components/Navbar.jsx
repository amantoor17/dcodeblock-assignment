import logo from '../assets/logodb-PhotoRoom1.png'
import rect1 from '../assets/Rectangle1120.png'
import rect2 from '../assets/Rectangle1119.png'
import rect3 from '../assets/Rectangle 1121.png'
import '../index.css'

function Navbar() {
    return(
        <div className=" w-100vw h-[75px] border-b-2 bg-black z-10">
            <div className="flex justify-between pt-[18px] pl-[79px] ">
                <img className="w-[240px] h-[40px] " src={logo}/>
                <div className="relative bottom-[8px] right-[150px]">
                    <div className='flex gap-1 w-[150px] h-[53px] '>
                        <img className='' src={rect1}/>
                        <img className='' src={rect2}/>
                                    
                    </div>
                    <p className='text-white absolute mt-[-36px] ml-[50px] proxon-font font-normal text-base leading-[23.6px]'>Sign in</p>
                </div>
            </div>
            <img className='w-[100vw] h-[6px] mt-1' src={rect3}/>
         
        </div>
    )
}

export default Navbar;