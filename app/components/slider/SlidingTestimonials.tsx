"use client";
import React from "react";
import person1 from "../../../public/person-1.jpg";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlidingTestimonials = () => {
  return (
    <>
      <div className="flex gap-8 w-full">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide>
            <div className="w-auto  mt-20">
              <div className="w-full h-auto rounded-[50%] bg-white overflow-hidden ml-7">
                <Image src={person1} alt="Person1" />
              </div>
              <div className="p-[40px] bg-[#F5F6F7] w-[663px] mt-[-50px] rounded-[12px]">
                <article className="mt-[30px] text-font-sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness.
                </article>
                <div>rating</div>
                <div>
                  <h2 className="text-font-md">John Doe</h2>
                  <p>Accountant</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Button Part  */}
      <div className="text-color-primary flex gap-5 self-baseline">
        <button className=" bg-color-secondary rounded-md px-4 py-2">
          Left
        </button>
        <button className="bg-color-btn-primary rounded-md px-4 py-2">
          Right
        </button>
      </div>
    </>
  );
};

export default SlidingTestimonials;
