import Card from "@/app/_components/Card";
import React from "react";
import Marquee from "react-fast-marquee";

function Testimonial() {
  return (
    <div>
      <div className="container">
        <div className="top w-full flex flex-col justify-center items-center">
          <div className="header">
            <h2 className="text-5xl font-bold">Testimonial</h2>
          </div>
          <div className="content flex flex-col justify-center items-center">
            <div className="flex flex-col-reverse justify-center items-center text-xs md:text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <div className="second">
                Molestias dolorem laboriosam error fugiat dignissimos possimus
              </div>
            </div>
          </div>
        </div>
        <div className="bottom mt-10">
          <Marquee className=" h-96 w-96" speed={100} >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
