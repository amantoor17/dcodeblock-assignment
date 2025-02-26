
import p6 from '../assets/p6.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'

function Partners() {
    return(
        <div className="overflow-hidden h-[90px] bg-[#D9D9D9] flex items-center justify-evenly ">
            <img src={p6} />
            <img src={p1} />
            <img src={p2} />
            <img src={p3} />
            <img src={p4} />
            <img src={p5} />
        </div>
    )
}

export default Partners;