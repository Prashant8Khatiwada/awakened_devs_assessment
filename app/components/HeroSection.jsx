import React from "react";
import RightArrow from "../../public/svg/Arrow 1.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="absolute mt-44 w-[100%] text-color-primary flex flex-col gap-28">
      {/* Title section  */}
      <div className="flex justify-center w-screen">
        <div className="w-[82%] mid:w-[90%] animate-fadeIn">
          <h3 className="text-font-xl mid:text-[45px] font-bold tracking-wide">
            Start your unforgettable <br />
            <span className="text-color-btn-primary">journey</span> with us
          </h3>
          <p className="text-font-md mt-4 opacity-80">
            The best travel for your journey begins now
          </p>
        </div>
      </div>

      {/* Booking section  */}
      <div className="h-[150px] w-[78%] flex mid:h-[200px] sml:flex-col sml:w-[90%] sml:self-center shadow-2xl rounded-[20px] hover:scale-[1.01] transition-transform duration-300">
        {/* left section  */}
        <div className="bg-color-primary h-full w-[80%] sml:w-[100%] flex items-center justify-center px-10 pl-36 mid:pl-10 sml:px-5 sml:py-4 sml:rounded-t-[20px] backdrop-blur-sm bg-opacity-95">
          <div className="grid grid-flow-col mid:grid-cols-2 xsm:grid-cols-1 mid:grid-flow-row items-center justify-items-center gap-12 justify-between">
            <div className="w-full group">
              <p className="text-color-secondary-light font-medium">
                DESTINATION
              </p>
              <input className="block appearance-none w-32 bg-transparent border-b border-gray-500 focus:border-color-btn-primary transition-colors duration-300 focus:outline-none text-color-secondary m-0 p-0" />
            </div>

            <div className="w-full">
              <p className="text-color-secondary-light font-medium">PERSON</p>
              <select
                className="block appearance-none w-20 bg-transparent border-b border-gray-500 focus:border-color-btn-primary transition-colors duration-300 focus:outline-none text-color-secondary m-0 p-0 cursor-pointer"
                pattern="[0-9]+"
              >
                <option value={0}> 0</option>
                <option value={1}> 1</option>
                <option value={2}> 2</option>
                <option value={3}> 3</option>
              </select>
            </div>

            <div className="w-full">
              <p className="text-color-secondary-light font-medium">CHECK IN</p>
              <input
                className="block appearance-none w-full bg-transparent border-b border-gray-500 focus:border-color-btn-primary transition-colors duration-300 focus:outline-none text-color-secondary m-0 p-0 cursor-pointer"
                type="date"
                name="check-in"
              />
            </div>

            <div className="w-full">
              <p className="text-color-secondary-light font-medium">
                CHECK OUT
              </p>
              <input
                className="block appearance-none w-full bg-transparent border-b border-gray-500 focus:border-color-btn-primary transition-colors duration-300 focus:outline-none text-color-secondary m-0 p-0 cursor-pointer"
                type="date"
                name="check-out"
              />
            </div>
          </div>
        </div>

        {/* right section  */}
        <div className="bg-color-btn-primary h-full w-[20%] sml:w-[100%] py-8 rounded-tr-[20px] sml:rounded-tr-none rounded-br-[20px] sml:rounded-bl-[20px] flex items-center justify-center gap-5 cursor-pointer hover:bg-opacity-90 transition-colors duration-300">
          <div className="text-5xl mid:text-[30px] sml:hidden font-bold">
            Book <br /> Now
          </div>
          <div className="text-5xl mid:text-[30px] hidden sml:block font-bold">
            Book Now
          </div>
          <Image
            src={RightArrow}
            alt="Right Arrow"
            className="animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
