import React from "react";
import phoneCall from "../../assets/ContactUsPage/phone-call.png";
import email from "../../assets/ContactUsPage/email.png";
import locationIcon from "../../assets/ContactUsPage/location.png";
import { Link } from "react-router-dom";
import ContactUsForm from "../../Components/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 space-y-3 md:space-y-0 gap-4 py-12 p-5 md:p-10 bg-[#191A1D] text-white">
        <div className="px-8 py-4 border border-gray-700 rounded-md text-center space-y-2">
          <img src={phoneCall} className="inline-block" alt="" />
          <h4>Phone Number</h4>
          <p>+8801797093279</p>
          <p>++8801719251254</p>
        </div>

        <div className="px-8 py-4 border border-gray-700 rounded-md text-center space-y-2">
          <img src={email} className="inline-block" alt="" />
          <h4>Email Address</h4>
          <Link>Info@Thedqa.com</Link>
        </div>

        <div className="px-8 py-4 border border-gray-700 rounded-md text-center space-y-2">
          <img src={locationIcon} className="inline-block" alt="" />
          <h4>Location</h4>
          <p>
            Holding No: 1117-07, Professor Para (Noyapara 3 Matha), Sherpur,
            Bogura-5840
          </p>
        </div>
      </div>

      <ContactUsForm />
    </>
  );
};

export default ContactUs;
