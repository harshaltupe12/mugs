"use client"
import Navbar from "@/app/_components/Navbar";
import React from "react";
import Hero from "../hero/page";
import About from "../about/page";
import Services from "../services/page";
import Projects from "../projects/page";
import Testimonial from "../testimonials/page";
import Design from "../design/page";
import Footer from "@/app/_components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

function Home() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div className="">
      <div className="Navbar mt-10 md:px-40 px-3">
        <Navbar />
        <div className="hero mt-10">
          <Hero />
        </div>
        <div className="about mt-10">
          <About />
        </div>
        <div className="services md:mt-36 mt-10">
          <Services />
        </div>
        <div className="projects mt-10 md:mt-32">
          <Projects />
        </div>
        <div className="testimonials mt-10 md:mt-32">
          <Testimonial />
        </div>
        <div className="design mt-10 md:mt-10 mb:10 md:mb-20">
          <Design />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
