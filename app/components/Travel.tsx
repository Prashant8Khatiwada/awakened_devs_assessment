"use client";
import React from "react";
import gal1 from "../../public/gallery/gal-1.png";
import gal2 from "../../public/gallery/gal-2.png";
import gal3 from "../../public/gallery/gal-3.png";
import gal4 from "../../public/gallery/gal-4.png";
import smgal1 from "../../public/gallery/smgal1.png";
import smgal2 from "../../public/gallery/smgal2.png";
import smgal3 from "../../public/gallery/smgal3.png";
import smgal4 from "../../public/gallery/smgal4.png";
import leftArrow from "../../public/svg/left.png";
import rightArrow from "../../public/svg/right.png";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Travel = () => {
  return (
    <div className=" h-auto w-screen mt-20 mb-20 flex items-center justify-center">
      <div className="h-[90%] w-[82%] ">
        {/* Title Part  */}
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-3">
            <h3 className="text-font-lg leading-tight lrg:text-[50px]">
              Destination Gallery
            </h3>
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

          <div className="text-color-primary flex gap-5 sml:hidden self-end">
            <button className="custom-prev bg-color-secondary rounded-md px-5 py-3">
              <Image src={leftArrow} alt="Left Arrow" />
            </button>
            <button className="custom-next bg-color-btn-primary rounded-md px-5 py-3">
              <Image src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* Images Part  */}
        <div className="w-full mt-20 p-9 sml:hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1152: {
                slidesPerView: 3,
                spaceBetween: 30,
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

        {/* ========== FOR SMALL SCREEN ========== */}

        <div className="w-full mt-10 h-auto hidden sml:flex-col  gap-3 sml:flex">
          <div className="mt-6">
            <Image src={smgal1} alt="gal1" />
          </div>
          <div className="mt-6">
            <Image src={smgal2} alt="gal2" />
          </div>
          <div className="mt-6">
            <Image src={smgal3} alt="gal3" />
          </div>
          <div className="mt-6">
            <Image src={smgal4} alt="gal4" />
          </div>
          <div className="mt-6">
            <Image src={smgal1} alt="gal3" />
          </div>
        </div>

        <div className="text-color-primary hidden gap-5 sml:flex  mt-10">
          <button className="custom-prev bg-color-secondary rounded-md px-5 sml:px-4 py-3 sml:py-2">
            <Image
              className="xsm:w-[8px] xsm:h-[16px]"
              src={leftArrow}
              alt="Left Arrow"
            />
          </button>
          <button className="custom-next bg-color-btn-primary rounded-md px-5 sml:px-4 py-3 sml:py-2">
            <Image src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;
