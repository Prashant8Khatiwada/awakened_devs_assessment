import Image from "next/image";
import React from "react";
import Explore1 from "../../public/explore/explore-1.jpeg";
import Explore2 from "../../public/explore/explore-2.jpeg";
import Explore3 from "../../public/explore/explore-3.jpeg";
import Explore4 from "../../public/explore/explore-4.jpeg";

const Explore = () => {
  return (
    <div className=" h-screen w-screen mb-11 flex items-center justify-center overflow-hidden">
      <div className="h-[90%] w-[82%] ">
        {/* Title Part  */}
        <div className="flex justify-between ">
          <div className="flex flex-col gap-3">
            <h3 className="text-font-lg leading-tight">Popular Destinations</h3>
            <hr
              style={{
                width: "30%",
                borderWidth: "1.9px",
                borderColor: "#FF7757",
                fontWeight: "bold",
              }}
            />

            <p className="text-font-md text-color-secondary-light">
              Most popular destinations around the world, from historical places
              to natural wonders.
            </p>
          </div>
          <div className="text-color-primary flex gap-5 self-end">
            <button className=" bg-color-secondary rounded-md px-4 py-2">
              Left
            </button>
            <button className="bg-color-btn-primary rounded-md px-4 py-2">
              Right
            </button>
          </div>
        </div>

        {/* Description Part */}
        <div className="flex gap-8">
          {/* one card */}
          <div className="h-auto relative mt-10">
            <div className="relative w-[497px] h-[661px] rounded-[26px] overflow-hidden">
              <Image
                src={Explore1}
                alt="explore"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute"
              />
            </div>
            <div className="absolute z-10 bottom-7 left-5 text-color-primary">
              <h3 className="text-[28px]">Monument of Berlin</h3>
              <p className="text-font-md">Berlin, Germany</p>
            </div>
          </div>

          {/* two card */}
          <div className="h-auto relative mt-10">
            <div className="relative w-[497px] h-[661px] rounded-[26px] overflow-hidden">
              <Image
                src={Explore1}
                alt="explore"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute"
              />
            </div>
            <div className="absolute z-10 bottom-7 left-5 text-color-primary">
              <h3 className="text-[28px]">Monument of Berlin</h3>
              <p className="text-font-md">Berlin, Germany</p>
            </div>
          </div>

          {/* three card */}
          <div className="h-auto relative mt-10">
            <div className="relative w-[497px] h-[661px] rounded-[26px] overflow-hidden">
              <Image
                src={Explore1}
                alt="explore"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute"
              />
            </div>

            {/* Four card */}
            <div className="absolute z-10 bottom-7 left-5 text-color-primary">
              <h3 className="text-[28px]">Monument of Berlin</h3>
              <p className="text-font-md">Berlin, Germany</p>
            </div>
          </div>
          <div className="h-auto relative mt-10">
            <div className="relative w-[497px] h-[661px] rounded-[26px] overflow-hidden">
              <Image
                src={Explore1}
                alt="explore"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute"
              />
            </div>
            <div className="absolute z-10 bottom-7 left-5 text-color-primary">
              <h3 className="text-[28px]">Monument of Berlin</h3>
              <p className="text-font-md">Berlin, Germany</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
