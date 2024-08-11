import React from "react";
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

function Hero() {
  return (
    <div>
      <div className="container flex md:gap-[150px] gap-2 flex-col md:flex-row items-center md:mx-0">
        <div className="left">
          <div className="flex flex-col justify-center items-start md:p-10 p-3 max-w-xl mx-auto">
            <p className="text-lg font-medium text-gray-700">Hi I am</p>
            <h1 className="text-3xl font-bold text-orange-500">
              Muhammad Umair
            </h1>
            <div className="md:text-[80px] text-[60px] md:my-[-15px] font-extrabold text-black">
              UI & UX <h2 className="md:ml-[130px] md:-mt-10 -mt-5">Designer</h2>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-full">
              Hire Me
            </button>
          </div>
        </div>
        <div className="right md:h-[550px] md:w-[538px]  flex justify-start">
            <img src="/1.png" alt="" />
        </div>
      </div>
      <div className="social w-full flex flex-row justify-end md:-ml-[180px] -ml-[105px] mt-3 gap-5">
        <div className="facebook"><Facebook /></div>
        <div className="twitter"><Twitter /></div>
        <div className="insta"><Instagram /></div>
        <div className="linkedin"><Linkedin /></div>
      </div>
    </div>
  );
}

export default Hero;
