"use client";
import Image from "next/image";
import React from "react";
import Explore1 from "../../public/explore/explore-1.jpeg";
import Explore2 from "../../public/explore/explore-2.jpeg";
import Explore3 from "../../public/explore/explore-3.jpeg";
import Explore4 from "../../public/explore/explore-4.jpeg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Explore = () => {
  return (
    <div className=" h-auto w-screen mb-11 mt-11 flex items-center justify-center overflow-hidden">
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
          <div className="text-color-primary flex gap-5 self-end sml:hidden ">
            <button className="custom-prev bg-color-secondary rounded-md px-4 py-2">
              Left
            </button>
            <button className="custom-next bg-color-btn-primary rounded-md px-4 py-2">
              Right
            </button>
          </div>
        </div>

        {/* Image Part */}
        <div className="flex gap-8 mt-14">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1152: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="h-auto w-[480px] relative mt-10">
                <div className="relative w-[100%] h-[661px] rounded-[26px] overflow-hidden">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto w-[480px] relative mt-10">
                <div className="relative w-[100%] h-[661px] rounded-[26px] overflow-hidden">
                  <Image
                    src={Explore2}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto w-[480px] relative mt-10">
                <div className="relative w-[100%] h-[661px] rounded-[26px] overflow-hidden">
                  <Image
                    src={Explore3}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-auto w-[480px] relative mt-10">
                <div className="relative w-[100%] h-[661px] rounded-[26px] overflow-hidden">
                  <Image
                    src={Explore4}
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
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-color-primary hidden gap-5 self-center sml:flex mt-10">
          <button className="custom-prev bg-color-secondary rounded-md px-4 py-2">
            Left
          </button>
          <button className="custom-next bg-color-btn-primary rounded-md px-4 py-2">
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
