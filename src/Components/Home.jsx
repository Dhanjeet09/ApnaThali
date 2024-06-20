import React from "react";
import { FaPlay } from "react-icons/fa";
import Nav from "../Components/Nav/Nav";

const Home = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-white to-white">
      <Nav />
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left half of the screen */}
        <div className="lg:w-1/2 w-full h-full p-6 lg:p-0">
          {/* Text content */}
          <div className="lg:ml-[10%] h-1/2 flex flex-col mt-[12%] justify-center lg:pl-[7%]">
            <h1 className="font-bold text-3xl lg:text-5xl leading-tight lg:leading-[10vh]">
              Eat Any <br /> Where <br />
              <span className="text-gray-500">at just </span>
              <span className="text-red-500">₹350</span>
            </h1>
            <img
              className="absolute xl:block hidden w-[20vw] left-1/3"
              src="./src/assets/arrow.png"
              alt=""
            />
            <img
              className="absolute xl:block hidden w-[4vw] left-[52vw] top-[37vh] rotate-12"
              src="./src/assets/arrowPoint.png"
              alt=""
            />
            <h1 className="mt-5 text-sm lg:text-base">
              When you purchase Plan “Jaha Jao Waha Khao”, you can easily eat
              <br />
              by only scanning the QR Code in restaurants.
            </h1>
          </div>

          {/* Buttons */}
          <div className="h-1/2 mt-6 lg:mt-0">
            <button className="bg-red-500 xl:ml-28 lg:ml-24 text-white py-2 px-4 rounded-full hover:bg-white hover:outline hover:text-red-700">
              Download App
            </button>

            <button className="ml-4 text-white font-bold py-2 lg:py-4 px-4 rounded-full shadow-lg shadow-red-800 hover:scale-110">
              <FaPlay color="red" />
            </button>
            <label className="pl-3 lg:pl-5" htmlFor="watch Video">
              Watch Video
            </label>
          </div>
        </div>

        {/* Right half of the screen */}
        <div className="lg:w-1/2 w-full h-full lg:h-[80vh] p-6 lg:p-0">
          <img
            className="absolute xl:block hidden w-[7vw] top-28 right-8 "
            src="./src/assets/YellowArrow.png"
            alt=""
          />
          <img
            className="absolute xl:block hidden w-[1vw] right-[5vw] top-28 rotate-"
            src="./src/assets/YellowArrowPoint.png"
            alt=""
          />
          <div className="mt-5 lg:ml-[10%] w-full lg:w-[70%] rounded-full h-full overflow-hidden outline">
            <img
              className="absolute xl:block hidden right-16 opacity-60"
              src="./src/assets/Our-Happy-Customer.png"
              alt=""
            />
            <img className="w-full h-auto" src="./src/Images/chef.png" alt="Chef" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
