import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <div>
      <Header opaque={true} />
      <Blogs />
      <Footer />
    </div>
  );
};

export default page;
