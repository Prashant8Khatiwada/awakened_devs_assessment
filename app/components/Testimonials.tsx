import React from "react";
import person1 from "../../public/person-1.jpg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className=" h-screen w-screen mb-11 flex items-center justify-center">
      <div className="h-[90%] w-[82%] ">
        {/* Title Part  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-font-lg leading-tight">Traveler’s Experiences</h3>
          <hr
            style={{
              width: "30%",
              borderWidth: "1.9px",
              borderColor: "#FF7757",
              fontWeight: "bold",
            }}
          />

          <p className="text-font-md text-color-secondary-light">
            Here some awesome feedback from our travelers
          </p>
        </div>

        {/* testimonial Part  */}
        <div className="w-full  mt-20">
          <div className="w-[100px] h-[100px] rounded-[50%] bg-white overflow-hidden ml-7">
            <Image src={person1} alt="Person1" />
          </div>
          <div className="p-[40px] bg-white w-[663px] mt-[-50px] rounded-[12px]">
            <article className="mt-[30px] text-font-sm">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master- builder of human
              happiness.
            </article>
            <div>rating</div>
            <div>
              <h2 className="text-font-md">John Doe</h2>
              <p>Accountant</p>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Testimonials;
