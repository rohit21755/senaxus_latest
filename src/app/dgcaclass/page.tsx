"use client"
import Image from "next/image";

import { FaPlaneDeparture } from "react-icons/fa";

import plane from '@/assets/images/dgcaexam.jpeg';
import AOS from "aos";
import { useEffect, useState } from "react";
export default function DGCAClass() {
    useEffect(() => {
        AOS.init();
    }, []);
    const scrollToSection = (sectionId : string) => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
    const contentData: { [key: string]: string } = {
        "10th and 12th Board Verification Certificate": `The Board Verification Certificate is a certificate issued by your education board stating that the marks mentioned in your mark sheet are correct and not doctored in any manner. The verification certificate is crucial from applying for a Computer number to getting your Commercial Pilot&apos;s License. This process differs for different boards. For CBSE, it&apos;s hassle-free and readily available online. Please refer to your individual education board&apos;s website for details on how to apply for a Board Verification Certificate.`,
        "Class II Medicals": `A class 2 medical is the preliminary medical license required by aspiring pilots to get their PPL (Private Pilot&apos;s License) issued. This must be obtained before applying for a class 1 medical license. Candidates can select a DGCA empanelled, class 2 medical examiner from the DGCA website and schedule an appointment for tests such as a color-blindness test, BMI test, and general health checkup.`,
        "Class I Medical": `Class 1 medical is the final stage of pilot medicals in India. After clearing the class 2 medical and getting a PMR number, candidates can apply for a class 1 medical. This certificate is mandatory for the issuance of a CPL. Initial DGCA Class 1 medical exams are conducted at Air Force medical centers or specified hospitals.`,
        "Police Verification Certificate": `A Police Verification Certificate is simply a character certificate issued by the police authorities of your local jurisdiction or by the nearest passport office stating there are no criminal records found against you, to date, according to the police records and you are of good moral character. From applying for your visa(if flying abroad) to getting your Commercial pilot&apos;s license issued, a PVC is required in every step. The validity of a PVC depends on the state and certain states issue them online. Please check your respective state&apos;s website for further clarification, on how to apply for one.`,
        "Computer Number": `A computer number is a unique ID required by DGCA for pilots, from exam applications to CPL issuance. To apply, submit relevant documents including a board verification certificate. The issuance process typically takes 1-2 months, so apply well in advance.`,
        "Ground Classes": `A good foundation is pivotal while raising a tall building, likewise, before you headstart your Commercial Pilot Training, a thorough knowledge of all the CPL subjects is mandatory. This is where the ground classes come in handy. DGCA mandates a candidate should pass all these subject papers along with getting their 200 flying hours before a Commercial Pilot License is issued. The respective subjects are Air Regulations, Aviation Meteorology, Technical general, Technical specific, Air Navigation and Radio Telephony(RTR).`,
        "Visa Medicals": `Certain countries require you to undergo a few medical tests before your visa application is granted. This is completely different from a CLASS II or CLASS I medical and has no relation to DGCA. For the respective tests and the hospitals accredited to conduct the same, please go through the visa issuing website of that particular country.`,
        "Visa Applications": `Once the visa medical is done and all the related documents are uploaded or submitted, the visa will be issued. Generally, it is the student visa that you will apply for(if you are doing your flight training from abroad). Depending on the country, candidates might need to visit the visa office or certain countries also issue student visas online.`,
        "SPL": `SPL stands for Student Pilot&apos;s License. SPL is the preliminary license one needs to achieve before getting a PPL and CPL. An oral examination shall be conducted by a representative of the DGCA on the following subjects for the issuance of an SPL-
Air Regulation.
Air Navigation
Aviation Meteorology
Aircraft Technical (General & Specific)
SPL will be issued by the Flying Academy after the following requirements are satisfied-
The trainee shall not be less than 16 years of age on the date of application for the issue of SPL. Should have passed 10th or equivalent examination from a recognized Board.`,
        "FRTOL": `FRTOL stands for FLIGHT RADIO TELEPHONY OPERATOR&apos;S LICENSE and is mandatory to professionally handle the radio equipment on board an Indian registered aircraft.
There are two types of FRTOL- Restricted and Non-restricted.
FRTOL non-restricted is mandatory for issuance of CPL and it can be only obtained by passing the Radio Telephony Restricted Licence (RTR) exam conducted by WPC, India and clearing the written exam conducted by DGCA or by converting the RTR obtained from foreign contracting states such as UK Or NZ to an Indian RTR.`,
        "CPL": `This provides students with a solid foundation of theoretical and practical flying training, allowing them to meet the required standard to secure a relevant pilot license to pursue a full-time career as a
Commercial Pilot. A candidate must clear the above mentioned 5 DGCA subject papers and must have 200 flying hours under his belt, to get a Commercial Pilot License issued.`,
        "License Conversion Checks": `Candidates completing their flying training from foreign ICAO contracting states need to fulfil certain criteria to get their foreign Commercial Pilot license converted to a DGCA CPL. The pre- requisites are as follows-
Valid foreign Professional Pilot&apos;s License + verification letter from issuing State.
Valid foreign Class-I Medical Assessment from State of issue.
Authenticated Logbook of a period of at least preceding 5 years, which must include information regarding dates, aircraft type(single/Multi) and registration, crew status (PIC). All the entries must be verified by the appropriate authority in the State of Issue of the foreign license. Tests must be signed by the examiners as well.
Valid Certificates of Skill tests for Single as well as Multi engine(if multi-engine rating is desired).
Statement of 20Hrs Cross-country flights / 50 Hrs if Instrument Rating is also requested.
Cross-country check reports, total three(300NM with two full-stop landings, 250NM with one full stop landing, 120NM by night while returning to point of departure without landing).
5Hrs Night Flying as PIC with a certificate of 10 take-offs and 10 landings.
For IR issue: Instrument time total =40 Hrs (actual on aircraft 20 or more+ simulated 20 or less) and at least 5Hr instrument time on actual aircraft in preceding six months (for IR issue)
`,
        "License Conversion": `Once all the pre-requisites are achieved along with the general flying tests by day and night, candidates need to submit the hard copy for the License Conversion Application, with all the other required documents at DGCA. Recently DGCA also made the whole process online to minimize hassle for applicants.
Once submitted and if found satisfactory the applicant&apos;s Commercial Pilot License is issued by DGCA, within one month.`,
      };
    const [selectedSection, setSelectedSection] = useState("10th and 12th Board Verification Certificate");
    return (
        <>
            <div className="px-4 py-8 sm:px-8 lg:px-16 text-slate-300">
                

                

                <div className="my-16 px-4 sm:px-8 lg:px-16">
                    <h1 className="font-bold text-3xl sm:text-4xl text-center mt-12 mb-8">DGCA Exam Eligibility</h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-4 lg:px-16">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-up" data-aos-duration="2000">
                            <p className="font-bold text-2xl sm:text-3xl mt-8">Flight Training in India</p>
                            <ul className="my-6 space-y-4">
                                {["Navigation", "Meteorology", "Air Regulations", "Technical General", "Technical Specific", "RTR"].map((subject, index) => (
                                    <li key={index} className="flex items-center gap-4 sm:gap-8">
                                       <FaPlaneDeparture size={24} className="mt-0" color="#6E00FF"/>
                                        <p className="text-lg sm:text-xl">{subject}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <Image src={plane} alt="Plane illustration" className="rounded-md p-4" />
                        </div>
                    </div>
                </div>
                <h1 id="pilot" className="text-center text-3xl font-bold">Process to become a pilot</h1>
                <div className="flex flex-col md:flex-row gap-8 my-12">
          {/* Buttons Section */}
          <div className="w-full md:w-1/4 hidden md:block">
            <div className="flex flex-col gap-4">
              {Object.keys(contentData).map((title, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedSection(title);
                    scrollToSection(title); // Scroll to the content section
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold border-2 ${
                    selectedSection === title ? "bg-[#3F3D56]  text-white" : "text-gray-500"
                  } hover:bg-indigo-500 hover:text-white transition-colors`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display Section */}
          <div className="w-full md:w-3/4 border-2 rounded-lg p-6 shadow-lg">
            <div className="my-9">
              {Object.values(contentData).map((cont, index) => {
                const title = Object.keys(contentData).find((key) => contentData[key] === cont);
                return (
                  <div key={index} id={title} className="my-10">
                    <p className="text-2xl font-bold">{title}</p>
                    <p>{cont}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
            </div>
        </>
    );
}
