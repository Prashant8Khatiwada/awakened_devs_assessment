import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-screen flex justify-center items-center ">
      <div className="w-[62%] sml:w-[90%] h-[auto] py-5 border-[2px] border-black border-opacity-20  rounded-[12px] relative z-10 bg-color-primary">
        <div className="h-full flex mid:flex-col px-[30px] gap-4 i justify-between lrg:justify-normal items-center ">
          <h3 className="text-[54px] text-color-secondary-light lrg:text-[40px] ">
            Our Newsletter
          </h3>

          <div className="flex gap-4 lrg:gap-2  w-[60%] sml:w-[100%] justify-between xsm:flex-col items-center">
            <div className="flex flex-col gap-2">
              <label className="ml-3" htmlFor="Email">
                Email
              </label>
              <input
                className="px-[24px] py-[12px]  lrg:px-[16px] lrg:py-[8px] mid:w-[100%]  bg-[#FFE8D4] rounded-md border-none text-color-secondary-light"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <button className="xsm:w-[100%] bg-color-btn-primary rounded-md px-4 py-3 lrg:px-3 lrg:py-2 text-color-primary xsm:self-start self-end">
              Suscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
