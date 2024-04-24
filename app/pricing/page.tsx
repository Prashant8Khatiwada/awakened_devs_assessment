import React from "react";
import Pricing from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <div>
      <Header opaque={true} />
      <Pricing />
      <Footer />
    </div>
  );
};

export default page;
