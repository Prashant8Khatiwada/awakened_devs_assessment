import Image from "next/image";
import React from "react";
import background_image from "../../public/bg.jpeg";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black relative">
      <Image
        src={background_image}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
    </div>
  );
};

export default Home;
