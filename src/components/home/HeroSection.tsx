"use client";
// import Hero from '@/assets/hero.png';
import Hero from '@/assets/images/home-bg.png' 
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div 
      style={{
        backgroundImage: `url(${Hero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        color: 'white',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="relative"
    >
      {/* Dark overlay for better text visibility on mobile */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

      <div className="relative text-center px-4 md:px-8 lg:px-0">
        {/* Adjusted margin top for different screen sizes */}
        <div className="mt-[100px] md:mt-[200px] lg:mt-[300px] xl:mt-[350px]">
          {/* Responsive heading */}
          <h1 data-aos="fade-down"
                data-aos-duration="10"
                data-aos-delay="000" className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-widest leading-tight md:leading-snug">
            Your Future as a Pilot starts here
          </h1>

          {/* Responsive subheading */}
          <h4 data-aos="fade-down"
                data-aos-duration="150"
                data-aos-delay="000" className="text-lg md:text-xl lg:text-2xl tracking-widest mt-4 md:mt-6 
                         w-full md:w-4/5 lg:w-3/5 mx-auto 
                         px-0 md:px-4 lg:px-8">
            We prepare the next generation of pilots with world-class training, 
            hands-on experience, and cutting-edge technology. Whether you&apos;re 
            dreaming of a career in aviation or upgrading your skills, we&apos;re 
            here to help you soar.
          </h4>

          {/* Responsive button */}
          
        </div>
      </div>
    </div>
  );
}