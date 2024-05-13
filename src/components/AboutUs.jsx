import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
  <div className="flex flex-col lg:flex-row justify-between gap-8">
    <div className="w-full lg:w-5/12 flex flex-col justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
        About Us
      </h1>
      <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
      In the heart of our bustling city, four friends united with a bold vision: to redefine the market. With diverse skills and boundless creativity, they launched their agency, driven by a commitment to excellence. Their journey is guided by integrity, client satisfaction, and a desire to make a lasting impact. Through innovation and collaboration, they challenge norms, overcome obstacles, and inspire change. With each project, they prove that success is measured not just by profits, but by the difference they make. Together, they're not just building a business—they're shaping a legacy of transformation
      </p>
    </div>
    <div className="w-full lg:w-8/12">
      <img
        className="w-full h-full"
        src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
        alt="A group of People"
      />
    </div>
  </div>
  
</div>

    </div>
  )
}

export default AboutUs