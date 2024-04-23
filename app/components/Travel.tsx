import React from "react";
import gal1 from "../../public/gallery/gal-1.png";
import gal2 from "../../public/gallery/gal-2.png";
import gal3 from "../../public/gallery/gal-3.png";
import gal4 from "../../public/gallery/gal-4.png";
import Image from "next/image";

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
            <button className=" bg-color-secondary rounded-md px-4 py-2">
              Left
            </button>
            <button className="bg-color-btn-primary rounded-md px-4 py-2">
              Right
            </button>
          </div>
        </div>

        {/* Images Part  */}
        <div className="w-full mt-20 h-auto flex p-9 gap-8">
          <div className="mt-6">
            <Image src={gal1} alt="gal1" />
          </div>
          <div className="mb-6">
            <Image src={gal2} alt="gal2" />
          </div>
          <div className="mt-6">
            <Image src={gal3} alt="gal3" />
          </div>
          <div className="mb-6">
            <Image src={gal4} alt="gal4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
