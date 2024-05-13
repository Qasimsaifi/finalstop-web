import React from "react";
import { Meteors } from "./ui/meteors";

export function WhyChooseUs() {
  return (
    <div className="overflow-x-hidden">
      <h1 className="text-4xl sm:text-4xl md:text-4xl my-8 lg:text-5xl xl:text-6xl font-bold text-center mt-8 mb-8">
        Why Choose Us
      </h1>
      
      <div className="md:w-[70vw] lg:w-[70vw] mb-28 mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {whyChooseUsData.whyChooseUs.map((item, index) => (
        <div className=" w-full sm:w-screen mx-auto relative max-w-xs ">
          <div className="absolute inset-0 h-full  w-full bg-gradient-to-r from-slate-800/[0.8] to-slate-900/[0.8] transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {item.title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {item.description}
            </p>

            {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button> */}

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}


const whyChooseUsData = {
    whyChooseUs: [
      {
        title: "We are Faster",
        description: "We prioritize efficiency and timely delivery, ensuring that your projects are completed quickly without compromising quality."
      },
      {
        title: "We Do Work the Best Way",
        description: "Our team consists of skilled professionals who excel in their respective fields, guaranteeing top-notch results for every project."
      },
      {
        title: "We Use Latest Technology",
        description: "Staying ahead of the curve, we leverage cutting-edge technologies to provide innovative solutions that meet the demands of modern businesses."
      }
    ]
  };
  