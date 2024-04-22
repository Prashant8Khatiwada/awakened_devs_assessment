import React from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="text-color-primary w-full h-20 absolute flex justify-around items-center bg-black bg-opacity-0 font-sound ">
      {/* For Logo  */}
      <div>
        <Image src={Logo} alt="logo" width={234} height={45.61} />
      </div>

      {/* For Menu  */}
      <div className="flex gap-8 text-font-sm">
        <div>Home</div>
        <div>Explore</div>
        <div>Travel</div>
        <div>Blogs</div>
        <div>Pricing</div>
      </div>
      <div className="flex gap-8 text-font-sm">
        <button className="rounded-12 px-4 py-2">Log In</button>
        <button className="bg-color-btn-primary rounded-md px-4 py-2">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
