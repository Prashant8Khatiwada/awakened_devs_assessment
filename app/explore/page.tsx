import React from "react";
import Explore from "../components/Explore";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <div>
      <Header opaque={true} />
      <Explore />
      <Footer />
    </div>
  );
};

export default page;
