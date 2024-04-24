import React from "react";
import Travel from "../components/Travel";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <>
      <Header opaque={true} />
      <Travel />
      <Footer />
    </>
  );
};

export default page;
