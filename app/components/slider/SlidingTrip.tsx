"use client";
import React from "react";
import travel1 from "../../../public/travel/travel1.png";
import travel2 from "../../../public/travel/travel2.png";
import travel3 from "../../../public/travel/travel1.png";
import travel4 from "../../../public/travel/travel4.png";
import Star from "../../../public/svg/star.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlidingTrip = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={3}>
      <SwiperSlide>
        <div className="w-full">
          {/* actual image  */}
          <div className="cursor-pointer">
            <Image src={travel1} alt="travel1" />
          </div>
          <div className="w-[300px] mt-4  self-center">
            <p className="flex justify-between items-center text-font-sm">
              GUIDED TOUR<span> $99/Day</span>
            </p>
            <h2 className="text-[28px]">Paris City Tour</h2>
            <div className="text-font-sm flex justify-between">
              <div className="flex gap-2">
                <Image src={Star} alt="star" />
                <Image src={Star} alt="star" />
                <Image src={Star} alt="star" />
                <Image src={Star} alt="star" />
                <Image src={Star} alt="star" />
              </div>
              <span> 7 Days Tour</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="w-full">
          {/* actual image  */}
          <div className="cursor-pointer">
            <Image src={travel2} alt="travel2" />
          </div>
          <div className="w-[300px] mt-4  self-center">
            <p className="flex justify-between items-center text-font-sm">
              GUIDED TOUR<span> $99/Day</span>
            </p>
            <h2 className="text-[28px]">Paris City Tour</h2>
            <div className="text-font-sm flex justify-between">
              <div>Rating</div>
              <span> 7 Days Tour</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="w-full">
          {/* actual image  */}
          <div className="cursor-pointer ">
            <Image src={travel3} alt="travel3" />
          </div>
          <div className="w-[300px] mt-4  self-center">
            <p className="flex justify-between items-center text-font-sm">
              GUIDED TOUR<span> $99/Day</span>
            </p>
            <h2 className="text-[28px]">Paris City Tour</h2>
            <div className="text-font-sm flex justify-between">
              <div>Rating</div>
              <span> 7 Days Tour</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="w-full">
          {/* actual image  */}
          <div className="cursor-pointer">
            <Image src={travel4} alt="travel4" />
          </div>
          <div className="w-[300px] mt-4  self-center">
            <p className="flex justify-between items-center text-font-sm">
              GUIDED TOUR<span> $99/Day</span>
            </p>
            <h2 className="text-[28px]">Paris City Tour</h2>
            <div className="text-font-sm flex justify-between">
              <div>Rating</div>
              <span> 7 Days Tour</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlidingTrip;
