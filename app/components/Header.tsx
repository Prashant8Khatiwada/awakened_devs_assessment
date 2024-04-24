"use client";
import React, { useState } from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import HamBurger from "../../public/hamburger 1.png";

interface HeaderProps {
  opaque?: boolean;
}
const Header: React.FC<HeaderProps> = ({ opaque }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    // disable scroll
    document.body.style.overflow = isOpen ? "auto" : "hidden";

    // Re-enable scroll on beforeunload event
    window.addEventListener("beforeunload", () => {
      document.body.style.overflow = "auto";
    });
  };

  return (
    <>
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
        <div className="cursor-pointer" onClick={toggleNavbar}>
          <Image
            src={HamBurger}
            alt="Hamburger"
            className="sml:block hidden cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } text-color-primary bg-color-secondary absolute top-0 z-20 w-full h-full right-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div
          className="absolute top-[12px] right-[14px] cursor-pointer"
          onClick={toggleNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-center items-center gap-14 text-font-md">
          <div className="flex flex-col items-center justify-start gap-10 h-screen mt-52 ">
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

          <div className="flex gap-2 flex-col w-[40%]">
            <button className="rounded-[12px] px-4 py-2  text-color-btn-primary bg-color-primary">
              Log In
            </button>
            <button className="bg-color-btn-primary rounded-[12px] px-4 py-2 ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
