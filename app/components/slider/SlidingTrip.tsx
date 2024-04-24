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
    <Swiper
      breakpoints={{
        1152: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className=" flex flex-col py-3 ">
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
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-col py-3 ">
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
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-col py-3 ">
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
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-col py-3 ">
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
      </SwiperSlide>
    </Swiper>
  );
};

export default SlidingTrip;
