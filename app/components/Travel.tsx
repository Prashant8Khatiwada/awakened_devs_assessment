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
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const Travel = () => {
  return (
    <div className="min-h-screen w-screen py-20 flex items-center justify-center bg-gray-50">
      <div className="h-[90%] w-[90%] max-w-[1440px]">
        {/* Title Part  */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-font-lg leading-tight lrg:text-[50px] font-bold text-gray-800">
              Destination Gallery
            </h3>
            <hr className="w-32 border-[3px] border-[#FF7757] rounded-full" />
            <p className="text-font-md text-color-secondary-light text-lg">
              Our photo gallery on trip
            </p>
          </div>

          <div className="text-color-primary flex gap-5 sml:hidden self-end">
            <button className="custom-prev bg-color-secondary hover:bg-[#FF7757] transition-all duration-300 rounded-lg px-6 py-4 shadow-md">
              <Image src={leftArrow} alt="Left Arrow" className="w-6 h-6" />
            </button>
            <button className="custom-next bg-color-btn-primary hover:brightness-110 transition-all duration-300 rounded-lg px-6 py-4 shadow-md">
              <Image src={rightArrow} alt="Right Arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Images Part  */}
        <div className="w-full mt-20 p-9 sml:hidden">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="fade"
            loop={true}
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
              <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={gal1}
                  alt="gal1"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={gal2}
                  alt="gal2"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={gal3}
                  alt="gal3"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={gal4}
                  alt="gal4"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={gal3}
                  alt="gal3"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* ========== FOR SMALL SCREEN ========== */}
        <div className="w-full mt-10 h-auto hidden sml:flex-col gap-5 sml:flex">
          <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
            <Image src={smgal1} alt="gal1" className="rounded-2xl shadow-lg" />
          </div>
          <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
            <Image src={smgal2} alt="gal2" className="rounded-2xl shadow-lg" />
          </div>
          <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
            <Image src={smgal3} alt="gal3" className="rounded-2xl shadow-lg" />
          </div>
          <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
            <Image src={smgal4} alt="gal4" className="rounded-2xl shadow-lg" />
          </div>
          <div className="mt-6 transform hover:scale-105 transition-transform duration-300">
            <Image src={smgal1} alt="gal3" className="rounded-2xl shadow-lg" />
          </div>
        </div>

        <div className="text-color-primary hidden gap-5 sml:flex justify-center mt-10">
          <button className="custom-prev bg-color-secondary hover:bg-[#FF7757] transition-all duration-300 rounded-lg px-5 sml:px-4 py-3 sml:py-2 shadow-md">
            <Image
              className="xsm:w-[8px] xsm:h-[16px]"
              src={leftArrow}
              alt="Left Arrow"
            />
          </button>
          <button className="custom-next bg-color-btn-primary hover:brightness-110 transition-all duration-300 rounded-lg px-5 sml:px-4 py-3 sml:py-2 shadow-md">
            <Image src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;
