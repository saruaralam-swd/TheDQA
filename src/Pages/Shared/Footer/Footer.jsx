import React from "react";
import TopFooter from "./TopFooter";
import DownFooter from "./DownFooter";

const Footer = () => {
  return (
    <footer className="bg-[#000213] text-white  px-8 py-5">
      <TopFooter />
      <DownFooter />
    </footer>
  );
};

export default Footer;
