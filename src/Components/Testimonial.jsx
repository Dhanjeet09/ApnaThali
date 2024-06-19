import React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Title */}
      <p className="text-red-500 font-semibold text-sm">Testimonials</p>
      <h2 className="text-3xl font-bold mb-16">Our Happy Customers Says</h2>

      {/* Testimonial Card */}
      <div className="h-[50vh] w-4/6 shadow-2xl rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="flex items-center mb-4 mt-16">
          {/* Left Arrow */}
          <button className="-ml-10 bg-red-500 text-white rounded-full ">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="  flex-grow  text-center">
            <span className=" flex items-center justify-center">
              <div className="flex rounded-full overflow-hidden outline outline-1">
                <img
                  src="./src/Images/ReviewMan.jpg"
                  className=" scale-x-125 w-16 h-16"
                  alt="User"
                />
              </div>

              <span className=" ml-3  flex flex-col items-start  ">
                <h3 className="font-semibold text-lg">Willians Jhone</h3>
                <p className="text-gray-500 text-xs ">CEO & Co-Founder</p>
              </span>
            </span>
            <p className="mt-4 text-gray-700  w-[33vw] font-semibold text-sm ml-[15vw]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit
              sed dignissim ac, aliquet. Metus egestas habitant feugiat neque
              ultrices nunc, dolor egestas mus.”
            </p>
          </div>

          {/* Right Arrow */}
          <button className=" bg-red-500 text-white rounded-full -mr-10">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
