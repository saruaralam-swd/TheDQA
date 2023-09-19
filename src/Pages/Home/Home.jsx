import React from "react";
import HomeBanner from "./HomeBanner";
import HomeAboutUs from "./HomeAboutUs";
import HomeServices from "./HomeServices";
import HomeTestimonial from "./HomeTestimonial";
import HomeNewsUpdate from "./HomeNewsUpdate";
import HomeHowItWork from "./HomeHowItWork";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAboutUs />
      <HomeServices />
      <HomeHowItWork />
      <HomeTestimonial />
      <HomeNewsUpdate />
    </>
  );
};

export default Home;
