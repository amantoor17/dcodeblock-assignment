function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-screen text-white justify-center lg:justify-around items-center text-center px-4 py-6 lg:pt-20 proxon-font font-normal">
      <p className="mb-3 lg:mb-0 lg:block hidden">
        Copyright <span className="text-gray-500">©</span> 2024 DcodeBlock
      </p>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-around w-full max-w-[600px] gap-2 sm:gap-4">
        <p>Help Center</p>
        <span className="hidden sm:inline">|</span>
        <p>Terms and Conditions</p>
        <span className="hidden sm:inline">|</span>
        <p>Privacy policy</p>
      </div>

      <div className="lg:hidden block pt-5">
        <p>
          Copyright <span className="text-gray-500">©</span> 2024 DcodeBlock
        </p>
      </div>
    </div>
  );
}

export default Footer;
