import Boxes from "../ui/Boxes"
import Image from "next/image"
import Link from 'next/link'
import img from '@/assets/images/dgca-gclass.jpg'
import cpl from '@/assets/images/cpl.png'
export default function Offered(){

    return <>
        <div className="flex p-16" id="courses">
            <div className="w-1/5 text-slate-300">
            <Boxes data-aos="fade-up"
   
    // data-aos-delay="50"
    data-aos-duration="10"

    data-aos-anchor-placement="top-center"/>
            </div>
            <div className="w-3/5 text-center">
            <h2 className="md:text-4xl text-2xl font-bold text-white" data-aos="fade-up"
  
    // data-aos-delay="50"
    data-aos-duration="10"
    data-aos-easing="ease-in-out"
 
  >Aviation Course Offered</h2>
   
            </div>
            <div className="w-1/5"></div>
        </div>
        <div className="md:px-28 px-6 my-8">
        
        <div className="rounded-xl border-2 border-gray-700 flex flex-col md:flex-row gap-6 md:gap-10">
        
     
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center md:text-left w-full text-slate-300">
                <p className="text-2xl md:text-3xl font-bold my-4 md:pl-8 md:w-4/5">
                    DGCA Ground Classes For CPL Exams
                </p>
                <p className="text-lg md:text-xl md:pl-8">
                    DGCA Certified - Chief Ground Instructor
                </p>
                <div className="w-full h-fit md:pl-8">
                    <Link href="/dgcacpl">
                <button 
                    data-aos="fade-up"
                    data-aos-duration="10"
                   
                    className="bg-[#6E00FF] text-white border border-white 
                               px-4 md:px-6 py-2 md:py-2.5 rounded 
                               hover:bg-black 
                               transition duration-300 
                               text-sm md:text-base
                               mt-4 md:mt-6 lg:mt-8 mx-auto md:mx-0 ">
                    Learn More
                </button>
                </Link>
                </div>
                
            </div>
        </div>
        
   
        <div className="flex-1 flex justify-center md:justify-end">
            <div className="">
                <Image src={img} alt="" height={400} width={450} className="rounded-b-xl w-full md:rounded-r-xl md:rounded-bl-none" />
            </div>
        </div>

    </div>
        </div>
        <div className="md:px-28 px-6 my-8">
        
        <div className="rounded-xl border-2 border-gray-700 flex flex-col md:flex-row gap-6 md:gap-10">
        
     
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center md:text-left w-full text-slate-300">
                <p className="text-2xl md:text-3xl font-bold my-4 md:pl-8 md:w-4/5">
                    Commercial Pilot Training (CPL)
                </p>
                <p className="text-lg md:text-xl md:pl-8">
                    Flight Training
                </p>
                <div className="w-full h-fit md:pl-8">
                    <Link href="/flight-training">
                <button 
                    data-aos="fade-up"
                    data-aos-duration="10"
                   
                    className="bg-[#6E00FF] text-white border border-white 
                               px-4 md:px-6 py-2 md:py-2.5 rounded 
                               hover:bg-black 
                               transition duration-300 
                               text-sm md:text-base
                               mt-4 md:mt-6 lg:mt-8 mx-auto md:mx-0">
                    Learn More
                </button>
                </Link>
                </div>
                
            </div>
        </div>
        
   
        <div className="flex-1 flex justify-center md:justify-end">
            <div className="">
                <Image src={cpl} alt="" height={400} width={450} className="rounded-b-xl w-full md:rounded-r-xl md:rounded-bl-none" />
            </div>
        </div>

    </div>
        </div>
        
        

        
    </>
}