"use client"
import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


function About() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div>
      <div className="container items-center flex md:flex-row flex-col-reverse">
        <div className="left flex-1 mt-8 md:mt-0" data-aos="flip-left">
          <div className="img md:h-[550px] md:w-[538px]">
            <img src="/2.png" alt="" />
          </div>
        </div>
        <div className="right flex-1">
          <section className="max-w-3xl mx-auto p-6">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra.
            </p>

            {/* Skill Bars */}
            <div className="space-y-6">
              {/* UX */}
              <div>
                <h3 className="font-bold text-xl mb-2">UX</h3>
                <div className="relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 border-orange-500 border-[3px] bg-white rounded-full h-4 w-4 md:ml-[410px] ml-[230px]"></div>
                  <div className="ml-2 flex items-center">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-orange-500 h-2 rounded"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Design */}
              <div>
                <h3 className="font-bold text-xl mb-2">Website Design</h3>
                <div className="relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 border-orange-500 border-[3px] bg-white rounded-full h-4 w-4 md:ml-[440px] ml-[240px]"></div>
                  <div className="ml-2 flex items-center">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-orange-500 h-2 rounded"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Design */}
              <div>
                <h3 className="font-bold text-xl mb-2">App Design</h3>
                <div className="relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 border-orange-500 border-[3px] bg-white rounded-full h-4 w-4 md:ml-[330px] ml-[190px]"></div>
                  <div className="ml-2 flex items-center">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-orange-500 h-2 rounded"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Design */}
              <div>
                <h3 className="font-bold text-xl mb-2">Graphic Design</h3>
                <div className="relative">
                  <div className="absolute top-1/2 transform md:ml-[280px] ml-[150px] -translate-y-1/2 border-orange-500 border-[3px] bg-white rounded-full h-4 w-4"></div>
                  <div className="ml-2 flex items-center">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-orange-500 h-2 rounded"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
