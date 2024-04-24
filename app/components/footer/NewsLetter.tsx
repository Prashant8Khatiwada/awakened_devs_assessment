import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-screen flex justify-center items-center ">
      <div className="w-[62%] h-[180px] flex sml:flex-col px-[30px] gap-4 justify-between lrg:justify-normal   items-center border-[2px] border-black border-opacity-20  rounded-[12px] relative z-10 bg-color-primary">
        <h3 className="text-[64px] text-color-secondary-light lrg:text-[43px] ">
          Our Newsletter
        </h3>

        <div className="flex gap-4 lrg:gap-2  w-[50%] sml:w-[100%] ">
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Email</label>
            <input
              className="px-[24px] py-[12px]  lrg:px-[16px] lrg:py-[8px] mid:w-[80%]  bg-[#FFE8D4] rounded-md border-none text-color-secondary-light"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button className="bg-color-btn-primary rounded-md px-4 py-3 lrg:px-3 lrg:py-2 text-color-primary  self-end">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
