"use client";
import React from "react";
import person1 from "../../public/person-1.jpg";
import Image from "next/image";
import Star from "../../public/svg/star.png";
import leftArrow from "../../public/svg/left.png";
import rightArrow from "../../public/svg/right.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <div className=" h-auto w-screen mb-32 mt-20 flex items-center justify-center">
      <div className="h-[90%] w-[82%] sml:w-[90%] ">
        {/* Title Part  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-font-lg leading-tight lrg:text-[50px]">
            Traveler’s Experiences
          </h3>
          <hr
            style={{
              width: "30%",
              borderWidth: "1.9px",
              borderColor: "#FF7757",
              fontWeight: "bold",
            }}
          />

          <p className="text-font-md lrg:text-font-sm text-color-secondary-light">
            Here some awesome feedback from our travelers
          </p>
        </div>

        {/* testimonial Part  */}
        {/* <div className="flex gap-8 w-full"></div> */}
        <Swiper
          className="mt-10 sml:mt-0 w-full "
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
              slidesPerView: 2,
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
            <div className=" mt-2">
              <div className="w-[100px] h-[100px] rounded-[50%] bg-white overflow-hidden ml-7">
                <Image src={person1} alt="Person1" />
              </div>
              <div className="p-[40px] mid:p-[20px] bg-[#F5F6F7] w-[100%] mt-[-50px] flex flex-col gap-4 rounded-[12px]">
                <article className="mt-[30px] mid:mt-[50px] text-font-sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness.
                </article>
                <div className="flex gap-2">
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                </div>
                <div>
                  <h2 className="text-font-md">John Doe</h2>
                  <p>Accountant</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" mt-2">
              <div className="w-[100px] h-[100px] rounded-[50%] bg-white overflow-hidden ml-7">
                <Image src={person1} alt="Person1" />
              </div>
              <div className="p-[40px] mid:p-[20px] bg-[#F5F6F7] w-[100%] mt-[-50px] flex flex-col gap-4 rounded-[12px]">
                <article className="mt-[30px] mid:mt-[50px] text-font-sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness.
                </article>
                <div className="flex gap-2">
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                </div>
                <div>
                  <h2 className="text-font-md">John Doe</h2>
                  <p>Accountant</p>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className=" mt-2">
              <div className="w-[100px] h-[100px] rounded-[50%] bg-white overflow-hidden ml-7">
                <Image src={person1} alt="Person1" />
              </div>
              <div className="p-[40px] mid:p-[20px] bg-[#F5F6F7] w-[100%] mt-[-50px] flex flex-col gap-4 rounded-[12px]">
                <article className="mt-[30px] mid:mt-[50px] text-font-sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness.
                </article>
                <div className="flex gap-2">
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                </div>
                <div>
                  <h2 className="text-font-md">John Doe</h2>
                  <p>Accountant</p>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className=" mt-2">
              <div className="w-[100px] h-[100px] rounded-[50%] bg-white overflow-hidden ml-7">
                <Image src={person1} alt="Person1" />
              </div>
              <div className="p-[40px] mid:p-[20px] bg-[#F5F6F7] w-[100%] mt-[-50px] flex flex-col gap-4 rounded-[12px]">
                <article className="mt-[30px] mid:mt-[50px] text-font-sm">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the master-
                  builder of human happiness.
                </article>
                <div className="flex gap-2">
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                  <Image src={Star} alt="star" />
                </div>
                <div>
                  <h2 className="text-font-md">John Doe</h2>
                  <p>Accountant</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Button Part  */}
        <div className="text-color-primary flex gap-5 self-baseline mt-10">
          <button className="custom-prev bg-color-secondary rounded-md px-5 py-3">
            <Image src={leftArrow} alt="Left Arrow" />
          </button>
          <button className="custom-next bg-color-btn-primary rounded-md px-5 py-3">
            <Image src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
