import React from "react";
import banner from "../../assets/AboutUsPage/Banner.webp";
import phoneCall from "../../assets/AboutUsPage/phone-call.png";
import email from "../../assets/AboutUsPage/email.png";
import location from "../../assets/AboutUsPage/location.png";
import map from "../../assets/AboutUsPage/map.png";

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

      <div className="md:grid grid-cols-3 space-y-3 md:space-y-0 gap-4 px-5 py-4 md:px-10 md:py-8">
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

      <div className="min-h-[500px] md:flex gap-5  px-5 py-4 md:px-10 md:py-8">
        <div className=" md:w-1/2">
          <img src={map} className="w-full object-cover" alt="" />
        </div>

        <div className="flex items-center md:w-1/2 mt-5 md:mt-0">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-5">Contact With Us!</h2>
            <form action="" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="border w-full px-3 py-2 shadow-sm text-gray-400 focus:outline-none focus:ring-1 ring-orange-500 sm:text-sm"
                  placeholder="Name*"
                  name=""
                  id=""
                />
                <input
                  type="email"
                  className="border w-full px-3 py-2 shadow-sm text-gray-400 focus:outline-none focus:ring-1 ring-orange-500 sm:text-sm"
                  placeholder="Email*"
                  name="email"
                  id=""
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  className="border w-full px-3 py-2 shadow-sm text-gray-400 focus:outline-none focus:ring-1 ring-orange-500 sm:text-sm"
                  placeholder="Phone Number*"
                  name=""
                  id=""
                />
                <input
                  type="text"
                  className="border w-full px-3 py-2 shadow-sm text-gray-400 focus:outline-none focus:ring-1 ring-orange-500 sm:text-sm"
                  placeholder="Your Subject*"
                  name=""
                  id=""
                />
              </div>

              <textarea
                className="border w-full px-3 py-2 shadow-sm text-gray-400 focus:outline-none focus:ring-1 ring-orange-500 sm:text-sm"
                placeholder="Your Message*"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>

              <button
                onClick={(e) => e.preventDefault()}
                className="w-full px-2 py-3 text-center text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 font-semibold rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
