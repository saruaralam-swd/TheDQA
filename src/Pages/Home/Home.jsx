import React from "react";
import HomeBanner from "./HomeBanner";
import HomeAboutUs from "./HomeAboutUs";
import HomeServices from "./HomeServices";
import HomeTestimonial from "./HomeTestimonial";
import HomeNewsUpdate from "./HomeNewsUpdate";
import HomeHowItWork from "./HomeHowItWork";
import HomeWhoChoseUs from "./HomeWhoChoseUs";
import ContactUs from "../ContactUs/ContactUs";
import ContactUsForm from "../../Components/ContactUsForm";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAboutUs />
      <HomeServices />
      <HomeWhoChoseUs />
      {/* <HomeHowItWork /> */}
      <HomeTestimonial />
      {/* <HomeNewsUpdate /> */}
      <ContactUsForm />
    </>
  );
};

export default Home;
