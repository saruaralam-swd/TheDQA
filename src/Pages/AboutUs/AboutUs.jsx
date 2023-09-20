import React from "react";
import banner from "../../assets/AboutUsPage/Banner.webp";
import phoneCall from "../../assets/AboutUsPage/phone-call.png";
import email from "../../assets/AboutUsPage/email.png";
import location from "../../assets/AboutUsPage/location.png";

const AboutUs = () => {
  const bg = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const slides = [
    {
      _id: 1,
      title: "",
      para1: "",
      para2: "",
    },
    {
      _id: 1,
      title: "",
      para1: "",
      para2: "",
    },
    {
      _id: 1,
      title: "",
      para1: "",
      para2: "",
    },
  ];

  return (
    <>
      <section
        className="h-[300px] flex items-center justify-center"
        style={bg}
      >
        <h2 className="text-5xl font-semibold text-white">About Us</h2>
      </section>

      <div className="grid grid-cols-3 gap-4 my-10 px-5 py-4 md:px-10 md:py-8">
        <div className="px-8 py-4 border rounded-md text-center space-y-2">
          <img src={phoneCall} className="inline-block" alt="" />
          <h4>Phone Number</h4>
          <p>+8256-569-887</p>
          <p>+8256-569-887</p>
        </div>
        <div className="px-8 py-4 border rounded-md text-center space-y-2">
          <img src={email} className="inline-block" alt="" />
          <h4>Email Address</h4>
          <p>Info@Thief.com</p>
          <p>Hello@Thief.com</p>
        </div>
        <div className="px-8 py-4 border rounded-md text-center space-y-2">
          <img src={location} className="inline-block" alt="" />
          <h4>Location</h4>
          <p>950 St Johns PI Brokely, NY, United State</p>
          <p>123, Westeeen Road, Melbourne Australia</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
