"use client";
import React from "react";
import gal1 from "../../public/gallery/gal-1.png";
import gal2 from "../../public/gallery/gal-2.png";
import gal3 from "../../public/gallery/gal-3.png";
import gal4 from "../../public/gallery/gal-4.png";
import leftArrow from "../../public/svg/left.png";
import rightArrow from "../../public/svg/right.png";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Travel = () => {
  return (
    <div className=" h-screen w-screen mt-11 mb-11 flex items-center justify-center">
      <div className="h-[90%] w-[82%] ">
        {/* Title Part  */}
        <div className="flex justify-between ">
          <div className="flex flex-col gap-3">
            <h3 className="text-font-lg leading-tight">Destination Gallery</h3>
            <hr
              style={{
                width: "30%",
                borderWidth: "1.9px",
                borderColor: "#FF7757",
                fontWeight: "bold",
              }}
            />

            <p className="text-font-md text-color-secondary-light">
              Our photo gallery on trip
            </p>
          </div>

          <div className="text-color-primary flex gap-5 self-end">
            <button className="custom-prev bg-color-secondary rounded-md px-5 py-3">
              <Image src={leftArrow} alt="Left Arrow" />
            </button>
            <button className="custom-next bg-color-btn-primary rounded-md px-5 py-3">
              <Image src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* Images Part  */}
        <div className="w-full mt-20 h-auto flex p-9 gap-8">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={50}
            slidesPerView={4}
          >
            <SwiperSlide>
              <div className="mt-6">
                <Image src={gal1} alt="gal1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6">
                <Image src={gal2} alt="gal2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-6">
                <Image src={gal3} alt="gal3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6">
                <Image src={gal4} alt="gal4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-6">
                <Image src={gal3} alt="gal3" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Travel;
