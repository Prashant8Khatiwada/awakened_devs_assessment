import React from "react";
import travel1 from "../../public/travel/travel1.png";
import travel2 from "../../public/travel/travel2.png";
import travel3 from "../../public/travel/travel3.png";
import travel4 from "../../public/travel/travel4.png";
import Image from "next/image";
import SlidingTrip from "./slider/SlidingTrip";
const TripPlanner = () => {
  return (
    <div className=" h-auto w-screen mb-32 flex items-center justify-center overflow-hidden">
      <div className="h-[90%] w-[82%] flex gap-8">
        {/* Title Part  */}
        <div className="flex flex-col justify-between w-[40%] p-5 pb-8 ">
          <div className="flex flex-col gap-5">
            <h3 className="text-font-lg leading-tight">Trip Planners</h3>
            <hr
              style={{
                width: "30%",
                borderWidth: "1.9px",
                borderColor: "#FF7757",
                fontWeight: "bold",
              }}
            />

            <p className="text-font-md text-color-secondary-light">
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

        <SlidingTrip />
      </div>
    </div>
  );
};

export default TripPlanner;
