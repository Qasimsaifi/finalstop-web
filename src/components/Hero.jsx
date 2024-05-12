"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Hero() {
  return (
    <HeroHighlight>
      <div className="mt-[20vh] lg:mt-[25vh] mb-[1vh]">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="sm:h-[40vh] lg:h-[70vh] text-2xl px-4 md:text-3xl lg:text-4xl font- text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          {/* <img src='/logo-hero.png' className="w-full h-full" alt="" /></div> */}
            <span className="font-bold pb-3 text-6xl sm:text-6xl md:text-9xl lg:text-9xl xl:text-9xl text-center mb-1">FinalStop</span>
            <span className="font-extrabold text-6xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl  text-center mb-1 text-[#7cb40c] ">.</span>
     
          <br /> <div className="pt-10 pb-4 mb-2"> Your Gateway to Success. Elevating Brands, Empowering Growth, </div>
          <Highlight className="text-black px-6 font-semibold dark:text-white mt-12">
            Making Dreams Reality!
          </Highlight>
        
        </motion.h1>
      </div>
    </HeroHighlight>
  );
}
