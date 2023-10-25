import React from "react";
import HomeBanner from "./HomeBanner";
import HomeAboutUs from "./HomeAboutUs";
import HomeServices from "./HomeServices";
import HomeTestimonial from "./HomeTestimonial";
import HomeNewsUpdate from "./HomeNewsUpdate";
import HomeHowItWork from "./HomeHowItWork";
import HomeWhoChoseUs from "./HomeWhoChoseUs";
import HomeOurMission from "./HomeOurMission";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAboutUs />
      <HomeOurMission />
      <HomeServices />
      <HomeWhoChoseUs />
      <HomeHowItWork />
      <HomeTestimonial />
      <HomeNewsUpdate />
    </>
  );
};

export default Home;
