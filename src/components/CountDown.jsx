"use client"
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function Stats() {
  const gradientStyle = {
    background: "linear-gradient(to right, #37136B, #94138B)",
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <div ref={ref} className="w-full flex justify-center p-4 sm:p-6 lg:p-8">
      <div
        className={`w-full max-w-screen-xl p-8 bg-gradient-to-r from-slate-800 to-slate-900 sm:p-12 font-poppins rounded-lg shadow-lg dark:border-gray-600 ${
          animated ? "animate-fadeIn" : "opacity-0"
        }`}
        // style={gradientStyle}
      >
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Our Numbers
          </h1>
        </div>
        <div className="flex flex-wrap justify-around">
        <StatCounter start={0} end={100} duration={2} text="Clients" />
          <StatCounter start={0} end={73} duration={2} text="Projects Completed" />
          <StatCounter start={0} end={2} duration={2} text="Years in Business" />
          <StatCounter start={0} end={30} duration={2} text="Awards Won" />
        </div>
      </div>
    </div>
  );
}

const StatCounter = ({ start, end, duration, text }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (triggerAnimation) {
      setTriggerAnimation(false);
    }
  }, [triggerAnimation]);

  useEffect(() => {
    setTriggerAnimation(true);
  }, [start, end, duration, text]);

  return (
    <div className="text-center mb-4 w-full sm:w-1/2 md:w-1/4 lg:w-auto">
      <div className="flex flex-col items-center">
        <CountUp start={start} end={end} duration={duration} redraw={true} startOnMount={false} preserveValue={!triggerAnimation}>
          {({ countUpRef }) => (
            <div className="flex items-center">
              <p className="text-xl lg:text-2xl text-gray-200 font-semibold" ref={countUpRef} />
              <span className="text-lg font-bold text-white">+</span>
            </div>
          )}
        </CountUp>
        <p className="text-xs lg:text-sm text-gray-300">{text}</p>
      </div>
    </div>
  );
};
