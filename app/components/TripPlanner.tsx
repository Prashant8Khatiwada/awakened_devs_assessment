import React from "react";
import travel1 from "../../public/travel/travel1.png";
import travel2 from "../../public/travel/travel2.png";
import travel3 from "../../public/travel/travel3.jpeg";
import travel4 from "../../public/travel/travel4.png";

// import Star from "../../../public/svg/star.png";
import Image from "next/image";
import SlidingTrip from "./slider/SlidingTrip";
const TripPlanner = () => {
  return (
    <div className=" h-auto w-screen mt-11 mb-24 flex items-center justify-center overflow-hidden">
      <div className="h-[90%] w-[82%] flex sml:flex-col   gap-8 sml:w-[90%]">
        {/* Title Part  */}
        <div className="flex flex-col justify-between w-[40%] sml:w-[100%] py-5 px-3 pb-8 ">
          <div className="flex flex-col gap-5">
            <h3 className="text-font-lg leading-tight lrg:text-[50px]">
              Trip Planners
            </h3>
            <hr
              style={{
                width: "40%",
                borderWidth: "1.9px",
                borderColor: "#FF7757",
                fontWeight: "bold",
              }}
            />

            <p className="text-font-md text-color-secondary-light lrg:text-font-[16px]">
              20 years from now you will be more disappointed by the things that
              you didn’t do. Stop regretting and start travelling, start
              throwing off the bowlines.
            </p>

            <div className="relative z-[1] mt-5  text-color-primary self-center">
              <button className=" bg-color-btn-primary rounded-md py-3 px-[20px] ">
                View all trips plan
              </button>
              <div className="absolute top-[-15px] left-[-15px] w-[43px] h-[43px] bg-color-secondary z-[-1]"></div>
              <div className="absolute bottom-[-15px] right-[-15px] w-[43px] h-[43px] bg-color-secondary-light z-[-1]"></div>
            </div>
          </div>
        </div>

        {/* Image part  */}
        <div className="sml:hidden w-[60%] mid:w-[50%]">
          <SlidingTrip />
        </div>

        {/* ========== FOR SMALL SCREEN ==========   */}
        <div className=" hidden sml:flex flex-col items-center gap-8 ">
          <div className="w-[100%] flex flex-col py-3 ">
            {/* actual image  */}
            <div className="cursor-pointer h-[399px] sml:h-[350px] relative rounded-[26px] overflow-hidden">
              <Image
                src={travel1}
                alt="travel1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-[90%] mt-4  self-center">
              <p className="flex justify-between items-center text-font-sm mid:text-[16px]">
                GUIDED TOUR<span> $99/Day</span>
              </p>
              <h2 className="text-[28px] lrg:text-font-sm">Paris City Tour</h2>
              <div className="text-font-sm flex justify-between">
                <div>Rating</div>
                <span> 7 Days Tour</span>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col py-3 ">
            {/* actual image  */}
            <div className="cursor-pointer h-[399px] sml:h-[350px] relative rounded-[26px] overflow-hidden">
              <Image
                src={travel2}
                alt="travel2"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-[90%] mt-4  self-center">
              <p className="flex justify-between items-center text-font-sm mid:text-[16px]">
                GUIDED TOUR<span> $99/Day</span>
              </p>
              <h2 className="text-[28px] lrg:text-font-sm">Paris City Tour</h2>
              <div className="text-font-sm flex justify-between">
                <div>Rating</div>
                <span> 7 Days Tour</span>
              </div>
            </div>
          </div>{" "}
          <div className="w-[100%] flex flex-col py-3 ">
            {/* actual image  */}
            <div className="cursor-pointer h-[399px] sml:h-[350px] relative rounded-[26px] overflow-hidden">
              <Image
                src={travel3}
                alt="travel3"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-[90%] mt-4  self-center">
              <p className="flex justify-between items-center text-font-sm mid:text-[16px]">
                GUIDED TOUR<span> $99/Day</span>
              </p>
              <h2 className="text-[28px] lrg:text-font-sm">Paris City Tour</h2>
              <div className="text-font-sm flex justify-between">
                <div>Rating</div>
                <span> 7 Days Tour</span>
              </div>
            </div>
          </div>{" "}
          <div className="w-[100%] flex flex-col py-3 ">
            {/* actual image  */}
            <div className="cursor-pointer h-[399px] sml:h-[350px] relative rounded-[26px] overflow-hidden">
              <Image
                src={travel4}
                alt="travel4"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-[90%] mt-4  self-center">
              <p className="flex justify-between items-center text-font-sm mid:text-[16px]">
                GUIDED TOUR<span> $99/Day</span>
              </p>
              <h2 className="text-[28px] lrg:text-font-sm">Paris City Tour</h2>
              <div className="text-font-sm flex justify-between">
                <div>Rating</div>
                <span> 7 Days Tour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
