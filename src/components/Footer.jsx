function Footer() {
    return (
        <div className="flex w-screen text-white justify-around pt-20 proxon-font font-normal">
            <p>
                Copyright <span className="text-gray-500">©</span> 2024 DcodeBlock
            </p>
            
            <div className="flex justify-around w-full max-w-[600px]">
                <p>Help Center</p>
                <span>|</span>
                <p>Terms and Conditions</p> 
                <span>|</span>   
                <p>Privacy policy</p>    
            </div>
        </div>
    );
}

export default Footer;
