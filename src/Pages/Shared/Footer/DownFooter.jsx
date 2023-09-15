import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";

const DownFooter = () => {
  return (
    <div className="flex gap-5">
      <div>
        <h2>Thief</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores
          voluptatibus nesciunt? Ipsum tenetur impedit explicabo voluptatem
          alias excepturi magni.
        </p>
        <BiLogoFacebook className="w-5 h-5 inline-block" />
        <BiLogoFacebook className="w-5 h-5 inline-block" />
        <BiLogoFacebook className="w-5 h-5 inline-block" />
        <BiLogoFacebook className="w-5 h-5 inline-block" />
      </div>

      <div>
        <h2>UseFul Links</h2>
        <nav>
          <Link href="">Home</Link>
          <Link href="">About Us</Link>
          <Link href="">Privacy Policy</Link>
          <Link href="">Term $ condition</Link>
        </nav>
      </div>

      <div>
        <h2>Quick Links</h2>
        <nav>
          <Link href="">Blog</Link>
          <Link href="">Contact Us</Link>
          <Link href="">Services</Link>
        </nav>
      </div>

      <div>
        <h2>Newsletter</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloremque tempora non ab officiis aspernatur rem facere ipsam? Sed,
          nobis?
        </p>
        <input type="email" name="" id="" />
        <button>icon</button>
      </div>
    </div>
  );
};

export default DownFooter;
