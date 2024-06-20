import React from "react";

import ReviewMan from '../Images/ReviewMan.jpg'

const Testimonial = () => {
  return (
    <div className="py-8">
      {/* Title */}
      <p className="text-red-500 font-semibold text-sm text-center">Testimonials</p>
      <h2 className="text-3xl font-bold text-center mb-16">Our Happy Customers Say</h2>

      {/* Testimonial Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Left Arrow */}
          <button className="sm:-ml-10 bg-red-500 text-white rounded-full p-2 sm:p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="flex-grow mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20">
                <img
                  src={ReviewMan}
                  className="w-full h-full object-cover"
                  alt="User"
                />
              </div>
              <div className="ml-3 flex flex-col items-start">
                <h3 className="font-semibold text-lg">Willians Jhone</h3>
                <p className="text-gray-500 text-xs">CEO & Co-Founder</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit
              sed dignissim ac, aliquet. Metus egestas habitant feugiat neque
              ultrices nunc, dolor egestas mus.”
            </p>
          </div>

          {/* Right Arrow */}
          <button className="sm:-mr-10 bg-red-500 text-white rounded-full p-2 sm:p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
