const Footer = () => {
  return (
    <div className="bg-white/5 mt-[159px] grid min-[1188px]:grid-cols-3 gap-[20px] text-white pb-20">
      <div className="text-white">
        <div className="lg:block pt-[65px] flex flex-col items-center w-[90%] mx-auto">
          <div className="flex gap-[2px] h-[79.75px] items-end">
            <img src="/imgs/logo.png" className="w-[53px] h-[68px]" alt="" />
            <h2 className="text-[30px] sm:text-[38px] text-[white]/75 font-bold">
              Planto.
            </h2>
          </div>
          <p className="max-lg:text-center mt-5 lg:mt-15">
            Figma ipsum component variant main layer. Union auto follower clip
            frame underline draft create manage came.
          </p>
          <div className="flex mt-8 gap-[58px]">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
        </div>
      </div>
      <div className="lg:block pt-[65px] flex flex-col items-center w-[90%] mx-auto lg:w-[228px]">
        <h2 className="text-[30px] sm:text-[38px] text-[white]/75 font-bold">Quick Links</h2>
        <ul className="flex flex-col gap-[16px] mt-5 max-lg:text-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Type of Plants</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="lg:block pt-[65px] flex flex-col items-center w-[90%] mx-auto">
        <h2 className="text-[30px] sm:text-[38px] text-[white]/75 font-bold">For Every Update</h2>
        <div className="border-2 h-[52px] mt-[58px] flex justify-between rounded">
          <input type="text" placeholder="Enter Email" className="lg:px-[21px] px-4 outline-none" />
          <button className="bg-white text-black rounded-l-[4px] lg:w-[240px] w-[100px] cursor-pointer">Subscribe</button>
        </div>
        <p className="mt-20">Planto &copy;All rights reserve</p>
      </div>
    </div>
  );
};

export default Footer;
