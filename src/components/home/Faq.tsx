"use client";
import React, { useState } from "react";

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number>(1); // Set first item open by default
  const [loadedItems, setLoadedItems] = useState<number[]>([]); // Track loaded items for animation

  const faqs = [
    { id: 1, title: "About the course", content: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
    { id: 2, title: "About the training", content: "We provide comprehensive training programs tailored to meet each students needs." },
    { id: 3, title: "What extracurricular activities...", content: "We offer a wide range of extracurricular activities including sports, arts, music, and academic clubs." },
    { id: 4, title: "How do you handle food allergies...", content: "We maintain a detailed record of all student allergies and dietary requirements, ensuring safe meal preparation and service." },
    { id: 5, title: "What is the teacher-to-student...", content: "We maintain small class sizes to ensure individual attention for each student." },
    { id: 6, title: "How do you handle discipline...", content: "We use positive reinforcement techniques and maintain clear communication with parents." },
    { id: 7, title: "How do I apply for admission...", content: "The admission process involves filling out an application form and scheduling an interview." },
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
