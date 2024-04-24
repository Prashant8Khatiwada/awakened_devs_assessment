"use client";
import Image from "next/image";
import React from "react";
import pimg1 from "../../public/pricing/pimg-1.jpg";
import pimg2 from "../../public/pricing/pimg-2.jpg";
import pimg3 from "../../public/pricing/pimg-3.jpg";
import leftArrow from "../../public/svg/left.png";
import rightArrow from "../../public/svg/right.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pricing = () => {
  return (
    <div className=" h-auto w-screen mb-20 mt-20 flex flex-row-reverse items-center justify-center">
      <div className="h-[90%] w-[82%] lrg:w-[90%] ">
        {/* Title Part  */}
        <div className="flex justify-between ">
          <div className=" text-color-primary flex sml:hidden gap-5 self-end">
            <button className="custom-prev bg-color-secondary rounded-md px-5 py-3">
              <Image src={leftArrow} alt="Left Arrow" />
            </button>
            <button className="custom-next bg-color-btn-primary rounded-md px-5 py-3">
              <Image src={rightArrow} alt="Right Arrow" />
            </button>
          </div>

          <div className="flex flex-col gap-3  ">
            <h3 className="text-font-lg leading-tight text-right lrg:text-[50px]">
              Special Offers
            </h3>
            <hr
              style={{
                width: "30%",
                borderWidth: "1.9px",
                borderColor: "#FF7757",
                fontWeight: "bold",
                alignSelf: "end",
              }}
            />

            <p className="text-font-md text-color-secondary-light lrg:text-font-sm">
              Check out our special offer and discounts
            </p>
          </div>
        </div>

        {/* Images Part  */}
        <div className="mt-20 flex gap-5   ">
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
              <div className="w-full h-[629px] flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] relative rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg1} alt="Pricing-1" layout="fill" />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3 px-[24px] py-[40px] h-[343px]  ">
                  <h3 className="text-color-secondary-light text-[28px] lrg:text-[22px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm lrg:text[14px]">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] lrg:text-[16px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px] lrg:text-[32px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] lrg:px-[20px] lrg:py-[10px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[629px] flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] relative rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg1} alt="Pricing-1" layout="fill" />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3 px-[24px] py-[40px] h-[343px]  ">
                  <h3 className="text-color-secondary-light text-[28px] lrg:text-[22px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm lrg:text[14px]">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] lrg:text-[16px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px] lrg:text-[32px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] lrg:px-[20px] lrg:py-[10px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[629px] flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] relative rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg1} alt="Pricing-1" layout="fill" />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3 px-[24px] py-[40px] h-[343px]  ">
                  <h3 className="text-color-secondary-light text-[28px] lrg:text-[22px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm lrg:text[14px]">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] lrg:text-[16px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px] lrg:text-[32px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] lrg:px-[20px] lrg:py-[10px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[629px] flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] relative rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg1} alt="Pricing-1" layout="fill" />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3 px-[24px] py-[40px] h-[343px]  ">
                  <h3 className="text-color-secondary-light text-[28px] lrg:text-[22px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm lrg:text[14px]">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] lrg:text-[16px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px] lrg:text-[32px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] lrg:px-[20px] lrg:py-[10px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" text-color-primary hidden sml:flex gap-5 mt-10 self-end">
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

export default Pricing;
