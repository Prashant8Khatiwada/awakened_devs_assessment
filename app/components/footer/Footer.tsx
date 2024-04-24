import React from "react";
import NewsLetter from "./NewsLetter";
import Logo from "../../../public/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <NewsLetter />
      <div className="mt-[-90px] w-screen h-[570px] sml:h-[1052px]  bg-color-secondary text-color-primary absolute flex items-center justify-center sml:justify-start">
        <div className="grid grid-flow-col gap-36 lrg:gap-10 mt-10 sml:mt-20 px-8 sml:grid-flow-row">
          <div>
            <Image
              className="cursor-pointer w-[234px] mid:w-[200px]  "
              src={Logo}
              alt="Logo"
            />
            <p className="text-font-sm mid:text-[16px]">
              copyright © travellian 2022 All rights reserved
            </p>
          </div>
          <div>
            <h2 className="text-font-md mid:text-font-sm">
              <b>Menu</b>
            </h2>
            <ul className="text-font-sm mid:text-[16px]">
              <li>Home</li>
              <li>Explore</li>
              <li>Travel</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h2 className="text-font-md mid:text-font-sm">
              <b>Information</b>
            </h2>
            <ul className="text-font-sm mid:text-[16px]">
              <li>Destination</li>
              <li>Supports</li>
              <li>Terms and Conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-font-md mid:text-font-sm">
              <b>Contact Info</b>
            </h2>
            <ul className="text-font-sm mid:text-[16px]">
              <li>+123 456 789</li>
              <li>info@travellian.com</li>
              <li>125, New Yourk, USA</li>
            </ul>
          </div>
          <div>
            <h2 className="text-font-md mid:text-font-sm">
              <b>Follow Us</b>
            </h2>
            <ul className="text-font-sm mid:text-[16px]">
              <li>+123 456 789</li>
              <li>info@travellian.com</li>
              <li>125, New Yourk, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
