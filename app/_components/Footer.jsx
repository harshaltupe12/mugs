import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <div>
      <div className="container flex flex-col w-full justify-center items-center bg-[#F8F8F8]">
        <div className="top">
          <div className="one flex items-center justify-center">
            <div className="image h-[220px] w-[220px] flex items-center justify-center">
              <img src="/logo.svg" alt="" />
            </div>
          </div>
          <div className="two flex flex-row ">
            <ul className="two flex flex-row gap-1.5 text-sm md:gap-8 md:text-lg">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Projects</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="three flex flex-row justify-center items-center my-20 gap-6">
            <div className="facebook">
              <Facebook />
            </div>
            <div className="twitter">
              <Twitter />
            </div>
            <div className="insta">
              <Instagram />
            </div>
            <div className="linkedin">
              <Linkedin />
            </div>
          </div>
        </div>
        <div className="bottom text-sm bg-[#545454] md:text-lg w-full flex justify-center items-center p-4 text-white">
            <div className="">
            © 2023 <span className="text-orange-500 font-bold">Mumair </span>All Rights Reserved, Inc
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
