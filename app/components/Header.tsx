import React from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import HamBurger from "../../public/hamburger 1.png";

interface HeaderProps {
  opaque?: boolean;
}
const Header: React.FC<HeaderProps> = ({ opaque }) => {
  return (
    <div
      className={`text-color-primary w-full h-20 relative flex sml:px-4  justify-between px-12  items-center bg-color-secondary ${
        opaque ? "bg-opacity-1" : "bg-opacity-0"
      }`}
    >
      {/* For Logo  */}
      <Link href="/">
        <div className="cursor-pointer">
          <Image
            className="w-[243px] h-[45.61px] mid:w-[180px] mid:h-[36px] "
            src={Logo}
            alt="logo"
          />
        </div>
      </Link>

      {/* For Menu  */}
      <div className="flex gap-8 mid:gap-4 text-font-md mid:text-font-sm sml:hidden">
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
      <div className="flex gap-8 mid:gap-4 text-font-md mid:text-font-sm sml:hidden">
        <button className="rounded-12 px-4 py-2 mid:px-3 mid:py-1">
          Log In
        </button>
        <button className="bg-color-btn-primary rounded-md px-4 py-2 mid:px-3 mid:py-1">
          Sign Up
        </button>
      </div>

      {/* ========== FOR SMALL SCREEN =========  */}
      <Image
        src={HamBurger}
        alt="Hamburger"
        className="sml:block hidden cursor-pointer"
      />
    </div>
  );
};

export default Header;
