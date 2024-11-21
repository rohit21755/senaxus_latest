"use client";
import React, { useState } from "react";

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number>(1); // Set first item open by default
  const [loadedItems, setLoadedItems] = useState<number[]>([]); // Track loaded items for animation

  const faqs = [
    { id: 1, title: "What is a CPL (Commercial Pilot License)?", content: "A CPL is a license that allows you to work as a professional pilot for airlines, cargo carriers, or charter companies." },
    { id: 2, title: "What are the eligibility criteria for enrolling in a CPL program?", content: "You must be at least 18 years old, have completed 10+2 with Physics and Mathematics, and pass a Class 1 medical exam." },
    { id: 3, title: "What is the total cost of obtaining a CPL?", content: "The cost ranges from ₹35-45 lakhs, depending on the training location and additional certifications." },
    { id: 4, title: "How long does it take to complete CPL training?", content: "CPL training typically takes 12-18 months, depending on weather conditions and student progress." },
    { id: 5, title: "Can I pursue CPL training in India or abroad through Future Pilots?", content: "Yes, we offer training options in both India and internationally recognized aviation schools." },
    { id: 6, title: "Do you provide assistance with DGCA exams?", content: "Yes, we provide ground classes and materials to prepare for DGCA theory exams." },
    { id: 7, title: "What are the prerequisites for starting CPL training?", content: "You must meet the medical, educational, and age requirements, and have a valid passport for international training." },
    { id: 8, title: "What is the average starting salary of a commercial pilot?", content: "A fresh pilot in India can earn ₹2-5 lakhs per month, depending on the airline." },
    { id: 9, title: "What types of aircraft are used for flight training?", content: "Training typically involves single-engine and multi-engine aircraft like Cessna 172 and Piper Seneca." },
    { id: 10, title: "Does Future Pilots provide type-rating programs (e.g., Airbus A320, Boeing 737)?", content: "Yes, we offer type-rating programs for popular aircraft models after CPL completion." },
    { id: 11, title: "Do I need to pass a medical exam before joining the program?", content: "Yes, a Class 1 medical exam certified by DGCA-approved doctors is mandatory." },   
    { id: 12, title: "What job opportunities are available after obtaining a CPL?", content: "You can work as a commercial pilot, flight instructor, or in charter services, with further options in airlines post-type rating." },
    { id: 13, title: "Can I work as a flight instructor after CPL training?", content: "Yes, completing additional instructor training allows you to work as a flight instructor." },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id);
    if (!loadedItems.includes(id)) {
      setLoadedItems([...loadedItems, id]);
    }
  };

  return (
    <div className="md:p-16 p-8 mx-auto space-y-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-300">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 mb-8 md:w-4/5 w-11/10 mx-auto">
        Find all the essential information you need in our FAQ section, designed to address the
        most frequently asked questions and help you make informed decisions for your child&apos;s
        education.
      </p>

      <div
        className="grid md:grid-cols-2 grid-cols-1 gap-8"
        style={{
          gridAutoRows: "1fr", // Ensures all items have the same initial height
        }}
      >
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="flex flex-col border-2 border-slate-300 rounded-md text-slate-300 relative"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className={`p-4 flex justify-between items-center w-full text-left transition-colors duration-200
                ${openItem === faq.id ? "bg-opacity-10 bg-violet-600" : "hover:bg-opacity-5 hover:bg-violet-600"}
                ${openItem === faq.id ? "rounded-t-md" : "rounded-md"}`}
              aria-expanded={openItem === faq.id}
            >
              <span className="font-bold text-xl pr-4">{faq.title}</span>
              <div className="border-2 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded bg-[#6E00FF] transition-transform duration-200">
                {openItem === faq.id ? "−" : "+"}
              </div>
            </button>

            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden absolute left-0 top-full w-full bg-black border-x-1 border-b-2  border-t-2 border-slate-300 z-50
                ${openItem === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="p-4 ">
                <p className="text-gray-200 text-xl">{faq.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
