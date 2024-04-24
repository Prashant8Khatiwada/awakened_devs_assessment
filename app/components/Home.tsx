import Image from "next/image";
import React from "react";
import background_image from "../../public/bg.jpeg";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Explore from "./Explore";
import Pricing from "./Pricing";
import Blogs from "./Blogs";
import Travel from "./Travel";
import Testimonials from "./Testimonials";
import Footer from "./footer/Footer";
import TripPlanner from "./TripPlanner";
const Home = () => {
  return (
    <>
      <div className="h-screen sml:h-[1200px] w-screen relative mb-11">
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
      <Explore />
      <Pricing />
      <Blogs />
      <TripPlanner />
      <Travel />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
