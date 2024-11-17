"use client";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import Location from "@/components/home/Location";
import Offered from "@/components/home/Offered";
import Requirements from "@/components/home/Requiements";
import Benefits from "@/components/home/Benefits";
import FAQAccordion from "@/components/home/Faq";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import GetHired from "@/components/home/GetHired";
import AircraftType from "@/components/about/AircraftType";
import GetinTouch from "@/components/home/GetinTouch";
export default function Home() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
   <>
   <HeroSection/>
   <Location/>
   <Offered/>
   <AircraftType/>
   <Requirements/>
   <Benefits/>
   <GetHired/>
   <FAQAccordion/>
   <TestimonialSlider/>
   <GetinTouch/>
   </>
  );
}
