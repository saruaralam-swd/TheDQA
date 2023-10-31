import React from "react";
import contactBanner from "../assets/ContactUsPage/contact-banner.svg";

const ContactUsForm = () => {
  return (
    <div
      className="min-h-[500px] md:flex gap-5 pt-12 p-5 md:p-10 text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${contactBanner})` }}
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <h2 className="text-3xl">
          We want to hear from you! <br />
          Connect With Us Today!
        </h2>
      </div>

      <div className="flex items-center md:w-1/2">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>
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

            <input
              id="draft"
              class="peer/draft"
              type="checkbox"
              name="status"
            />
            <label for="draft" className="ml-3">
              Accept{" "}
              <span className="text-orange-500 font-semibold">
                Terms & Condition
              </span>{" "}
              And{" "}
              <span className="text-orange-500 font-semibold">
                Privacy Policy
              </span>
            </label>

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
  );
};

export default ContactUsForm;
