import Image from "next/image";
import React from "react";
import background_image from "../../public/bg.jpeg";
import Header from "./Header";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black ">
      <Image
        src={background_image}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <Header />
    </div>
  );
};

export default Home;
