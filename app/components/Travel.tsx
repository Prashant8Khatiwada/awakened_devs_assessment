import React from "react";

const Travel = () => {
  return (
    <div className=" h-screen w-screen mb-11 flex items-center justify-center">
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
        <div></div>
      </div>
    </div>
  );
};

export default Travel;
