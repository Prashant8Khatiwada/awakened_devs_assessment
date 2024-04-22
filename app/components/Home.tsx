import Image from "next/image";
import React from "react";
import background_image from "../../public/bg.jpeg";
import Header from "./Header";
import HeroSection from "./HeroSection";
const Home = () => {
  return (
    <div className="h-screen w-screen relative">
      <Image
        src={background_image}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;