import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-screen flex justify-center items-center ">
      <div className="w-[62%] h-[180px] flex justify-around items-center border-[2px] border-black border-opacity-20  rounded-[12px] relative z-10 bg-color-primary">
        <h3 className="text-font-lg text-color-secondary-light">
          Our Newsletter
        </h3>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Email</label>
            <input
              className="px-[24px] py-[12px] bg-[#FFE8D4] rounded-md border-none text-color-secondary-light"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button className="bg-color-btn-primary rounded-md px-4 py-3 text-color-primary self-end">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
