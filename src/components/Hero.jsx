"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Hero() {
  return (
    <HeroHighlight>
      <div className="mt-[26vh] mb-[1vh]">
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
          className="h-[70vh] text-2xl px-4 md:text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          {/* <img src='/logo-hero.png' className="w-full h-full" alt="" /></div> */}
            <span className="font-bold pb-3 text-4xl sm:text-4xl md:text-8xl lg:text-8xl xl:text-9xl text-center mb-1">FinalStop</span>
            <span className="font-extrabold text-4xl sm:text-4xl md:text-8xl lg:text-8xl xl:text-9xl  text-center mb-1 text-[#7cb40c] ">.</span>
     
          <br /> <div className="pt-10 pb-4"> Your Gateway to Success. Elevating Brands, Empowering Growth, </div>
          <Highlight className="text-black px-6 dark:text-white mt-6">
            Making Dreams Reality!
          </Highlight>
        
        </motion.h1>
      </div>
    </HeroHighlight>
  );
}
