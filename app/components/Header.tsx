import React from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-color-primary w-full h-20 relative flex justify-around items-center bg-black bg-opacity-0 font-sound ">
      {/* For Logo  */}
      <div className="cursor-pointer">
        <Image src={Logo} alt="logo" width={234} height={45.61} />
      </div>

      {/* For Menu  */}
      <div className="flex gap-8 text-font-sm">
        <Link href="/">
          <div className="cursor-pointer">Home</div>
        </Link>
        <Link href="/explore">
          <div className="cursor-pointer">Explore</div>
        </Link>
        <Link href="/travel">
          <div className="cursor-pointer">Travel</div>
        </Link>
        <Link href="/blogs">
          <div className="cursor-pointer">Blogs</div>
        </Link>
        <Link href="/pricing">
          <div className="cursor-pointer">Pricing</div>
        </Link>
      </div>

      {/* For Login Button  */}
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
