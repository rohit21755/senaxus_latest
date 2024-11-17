"use client"
import Image from "next/image";
import Requirements from "@/components/admission/Requirement";
import Medical from "@/components/admission/Medical";
import img from '@/assets/ghghg.webp'
import AOS from "aos";
import { useEffect } from "react";
export default function Admission() {
    useEffect(() => {
        AOS.init();
    }, []);
    return<>
    <div className="p-6 md:p-16">
            <div className="relative rounded-lg p-4 sm:p-8 border-2 shadow-lg sm:h-80 md:h-96 lg:h-[60vh] flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 text-center sm:text-left px-4 sm:px-0" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-4">REQUIREMENTS To Become a Pilot</h1>
                    <p className="text-lg sm:text-xl tracking-wide mt-4">
                        Steps to follow to become a commercial pilot
                    </p>
                    <button
                        className="bg-[#3F3D56] text-white border border-white px-4 md:px-6 py-2 md:py-2.5 rounded hover:bg-black transition duration-300 text-sm md:text-base mt-6"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        Check Syllabus
                    </button>
                </div>
                
                <div className="flex-1 flex justify-center" data-aos="fade-up" data-aos-duration="2000">
                    <Image src={img} alt="Pilot requirements" width={600} height={350} className="max-w-full h-auto rounded-lg" />
                </div>
            </div>
        </div>
            <Requirements/>
            <Medical/>
    </>

}