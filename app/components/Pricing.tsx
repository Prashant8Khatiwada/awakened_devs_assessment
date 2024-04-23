"use client";
import Image from "next/image";
import React from "react";
import pimg1 from "../../public/pricing/pimg-1.jpg";
import pimg2 from "../../public/pricing/pimg-2.jpg";
import pimg3 from "../../public/pricing/pimg-3.jpg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Pricing = () => {
  return (
    <div className=" h-auto w-screen mb-32 flex flex-row-reverse items-center justify-center">
      <div className="h-[90%] w-[82%] ">
        {/* Title Part  */}
        <div className="flex justify-between ">
          <div className=" text-color-primary flex gap-5 self-end">
            <button className="custom-prev bg-color-secondary rounded-md px-4 py-2">
              Left
            </button>
            <button className="custom-next bg-color-btn-primary rounded-md px-4 py-2">
              Right
            </button>
          </div>

          <div className="flex flex-col gap-3  ">
            <h3 className="text-font-lg leading-tight text-right">
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

            <p className="text-font-md text-color-secondary-light">
              Check out our special offer and discounts
            </p>
          </div>
        </div>

        {/* Images Part  */}
        <div className="w-full mt-20 h-auto flex gap-5">
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
              <div className="w-auto h-auto flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] w-full rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg1} alt="Pricing-1" width={497} height={286} />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3  px-[24px] py-[40px] ">
                  <h3 className="text-color-secondary-light text-[28px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-auto h-auto flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] w-full rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg2} alt="Pricing-2" width={497} height={286} />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3  px-[24px] py-[40px] ">
                  <h3 className="text-color-secondary-light text-[28px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-auto h-auto flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] w-full rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg3} alt="Pricing-3" width={497} height={286} />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3  px-[24px] py-[40px] ">
                  <h3 className="text-color-secondary-light text-[28px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-auto h-auto flex flex-col  bg-[#FFF8F1] rounded-[26px] ">
                {/* image part  */}
                <div className="h-[286px] w-full rounded-tl-[26px] rounded-tr-[26px] overflow-hidden">
                  <Image src={pimg1} alt="Pricing-1" width={497} height={286} />
                </div>

                {/* description part  */}
                <div className="flex flex-col gap-3  px-[24px] py-[40px] ">
                  <h3 className="text-color-secondary-light text-[28px]">
                    Listbon, Portugal
                  </h3>
                  <div>rating</div>
                  <article className="text-font-sm">
                    5 nights and 4 days in 5 star hotel, breakfast and lunch
                    included. Very popular during the renaissance. Passage and
                    going through the cites of the world in classical
                    literature.
                  </article>

                  <div className="flex justify-between items-center">
                    <p className="text-[20px] text-color-secondary-light flex items-center gap-2">
                      From
                      <span className="text-color-btn-primary text-[40px]">
                        $250
                      </span>
                    </p>
                    <button className="bg-color-btn-primary rounded-md px-[25px] py-[12.5px] text-color-primary self-end">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
