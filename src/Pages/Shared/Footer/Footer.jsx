import React from "react";
import TopFooter from "./TopFooter";
import DownFooter from "./DownFooter";
import { useLocation } from "react-router-dom";
import TopFooter2 from "./TopFooter2";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#000213] text-white p-5 md:p-10">
      {location?.pathname === "/" && <TopFooter />}
      {location?.pathname === "/home" && <TopFooter />}
      {location?.pathname === "/services" && <TopFooter2 />}
      {location?.pathname === "/aboutUs" && <TopFooter2 />}
      {location?.pathname === "/contactUs" && <TopFooter2 />}
      {location?.pathname === "/blog" && <TopFooter2 />}

      <DownFooter />
    </footer>
  );
};

export default Footer;
