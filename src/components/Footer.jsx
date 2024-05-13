import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-black ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            {/* Center the logo and text */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse" >
                <img src="logo-hero.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FinalStop<span className="font-extrabold text-2xl text-center mb-1 text-[#7cb40c] ">.</span> </span>
              </a>
            </div>
            <div className="flex flex-col items-center mb-6 sm:mb-0">
              <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                <li>
                  <a href="/about" className="hover:underline me-4 md:me-6"> About </a>
                </li>
                <li>
                  <a href="/projects" className="hover:underline me-4 md:me-6"> projects </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline me-4 md:me-6"> Contact </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex flex-col items-center mb-6 sm:mb-0">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline"> FinalStop </a>
            {/* <span>™</span> */} . All Rights Reserved.
          </span></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;