"use client";
import Image from "next/image"

import us from '@/assets/united-states.png'

import world from '@/assets/images/world.png'

import planwm from '@/assets/planwm.png'
import sa from '@/assets/images/south-africa.png'
import india from '@/assets/images/india_flag.png'
import { useEffect } from "react"
import AOS from "aos";
import 'aos/dist/aos.css'
import { FaPlaneDeparture } from "react-icons/fa";
export default function Location(){
    useEffect(() => {
        AOS.init();
    }, []);
    return<>
    <div className="px-12 py-24 text-center " style={{
                    backgroundImage: `url(${planwm.src})`,
                    backgroundSize: '36%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
        <h1 className="text-3xl font-bold text-slate-300"
        data-aos="fade-up"
        data-aos-duration="20"
        data-aos-delay="000">Flight School Locations</h1>
        <h5 className="md:text-lg text-md md:w-1/2 mx-auto mt-6 text-slate-300 p-4 md:p-8">With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child&apos;s future.</h5>
        
    </div>
    <div  className="md:p-12 flex justify-around flex-col md:flex-row gap-12">
    <div>
        <Image src={sa} alt="" height={100} width={100} className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000" />
        <p className="text-center text-2xl text-slate-300">South Africa</p>
    </div>
    <div>
        <Image src={us} alt="" height={100} width={100}  className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000"/>
        <p className="text-center text-2xl text-slate-300">United States</p>
    </div>
    <div>
        <Image src={india} alt="" height={100} width={100} className="mx-auto" data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="000"/>
        <p className="text-center text-2xl text-slate-300">India</p>
    </div>

</div>

    <div className="content-center">
        <Image src={world} alt="" width={1200} height={1200} className="mx-auto" data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-delay="000"/>
    </div>

    <div className="px-6 sm:px-12 md:px-24 py-6">
    <div className="my-8 px-4 md:px-12">
   
</div>
<div className="my-12 p-4">
<div className="flex flex-col md:flex-row justify-around gap-8 md:gap-12 my-8 md:my-12">
  {/* Flight Training in India */}
  <div className="flex-1 p-6 text-slate-300 rounded-md border-2 border-slate-300 shadow-md hover:bg-black transition duration-300 text-sm md:text-base mx-auto">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-slate-300">
      Flight Training In India
    </h1>
    <ul className="space-y-6 text-lg md:text-xl">
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Pass all applicable theory exams</p>
      </li>
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Flight Training as per regulatory guidelines</p>
      </li>
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Flight Skill checks in India with DGCA appointed examiners</p>
      </li>
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Submit documents to DGCA for the issue of commercial pilot license</p>
      </li>
    </ul>
  </div>

  {/* Flight Training Abroad */}
  <div className="flex-1 p-6 text-slate-300 rounded-md border-2 border-slate-300 shadow-md hover:bg-black transition duration-300 text-sm md:text-base mx-auto">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-slate-300">
      Flight Training Abroad
    </h1>
    <ul className="space-y-6 text-lg md:text-xl">
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Pass all applicable theory exams</p>
      </li>
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Obtain commercial pilot license abroad, return to India</p>
      </li>
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Flight Skill checks in India with DGCA appointed examiners</p>
      </li>
      <li className="flex gap-6 items-center">
        <FaPlaneDeparture size={30} className="flex-shrink-0" color="#6E00FF" />
        <p>Submit documents to DGCA for the issue of commercial pilot license</p>
      </li>
    </ul>
  </div>
</div>

</div>

</div>

   
    </>
}

/* Rectangle 9359 */

// position: absolute;
// width: 1360px;
// height: 226px;
// left: calc(50% - 1360px/2);
// top: 13579px;

// background: ;
// border-radius: 27px;

/* Rectangle 9361 */

// position: absolute;
// width: 80px;
// height: 80px;
// left: 1266px;
// top: 13406px;

// background: #313EF7;
// border-radius: 24px;

