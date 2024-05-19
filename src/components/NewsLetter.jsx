import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">

        <form className="flex-1 w-sm px-6 py-8 md:p-10">
          <div className="flex w-44">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 rounded-l-md shadow-sm px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            <button className="bg-blue-500 text-white font-semibold rounded-r-md px-4 py-2 flex-shrink-0">
              Subscribe
            </button>
          </div>
        </form>
      
    </div>
  );
};

export default NewsletterSection;
