import React from "react";

const StepComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-8">
        How Jaha Jao Waha Khao Works?
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around relative space-y-8 md:space-y-0">
        {/* Choose Plan Section */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <img
            src="./src/Images/tile1.png"
            alt="Choose Plan"
            className="mb-4 w-3/4 md:w-[15vw]"
          />
          <h3 className="text-xl font-bold">CHOOSE Plan</h3>
          <p className="text-gray-600 mt-2 w-full md:w-[20vw] font-semibold">
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
        </div>
        <img
          className="absolute xl:block hidden w-[19vw] top-[10vh] left-[20vw] -rotate-[7deg]"
          src="./src\assets\orangeArrowLeft.png"
          alt=""
        />
        {/* Go to Partner Restaurant Section */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h3 className="text-xl font-bold">
            Go to Apna Thali <br /> partner restaurant
          </h3>
          <p className="text-gray-600 mt-2 w-full md:w-[20vw] font-semibold">
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
          <img
            src="./src/Images/RESTAURANT_img.jpg"
            alt="Partner Restaurant"
            className="mt-4 w-3/4 md:w-[20vw]"
          />
        </div>
        <img
          className="absolute hidden xl:block w-[20.5vw] top-[9vh] right-[18.5vw]  rotate-[4deg]"
          src="./src/assets/orangeArrowRight.png"
          alt="Right Arrow"
        />
        {/* Scan and Eat Section */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <img
            src="./src/Images/ScanAndPay.jpg"
            alt="Scan and Eat"
            className="mb-4 w-3/4 md:w-[15vw]"
          />
          <h3 className="text-xl font-bold">Scan & Eat</h3>
          <p className="text-gray-600 mt-2 w-full md:w-[20vw] font-semibold">
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
