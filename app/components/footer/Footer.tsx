import React from "react";
import NewsLetter from "./NewsLetter";
import Logo from "../../../public/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <NewsLetter />
      <div className="mt-[-90px] w-screen h-[577px] bg-color-secondary text-color-primary absolute flex items-center justify-center">
        <div className="flex gap-36 mt-10">
          <div>
            <Image src={Logo} alt="Logo" width={234} height={45.61} />
            <p>copyright © travellian 2022 All rights reserved</p>
          </div>
          <div>
            <h2 className="text-font-md">
              <b>Menu</b>
            </h2>
            <ul className="text-font-sm">
              <li>Home</li>
              <li>Explore</li>
              <li>Travel</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h2 className="text-font-md">
              <b>Information</b>
            </h2>
            <ul className="text-font-sm">
              <li>Destination</li>
              <li>Supports</li>
              <li>Terms and Conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-font-md">
              <b>Contact Info</b>
            </h2>
            <ul className="text-font-sm">
              <li>+123 456 789</li>
              <li>info@travellian.com</li>
              <li>125, New Yourk, USA</li>
            </ul>
          </div>
          <div>
            <h2 className="text-font-md">
              <b>Follow Us</b>
            </h2>
            <ul className="text-font-sm">
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
