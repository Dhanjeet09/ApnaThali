import React from "react";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-full flex">
      {/* Left half of the screen */}
      <div className="w-1/2 h-full">
        {/* Text content */}
        <div className="ml-[10%] h-1/2 flex flex-col mt-[12%] justify-center pl-[7%]">
          <h1 className="font-bold text-5xl leading-[10vh]">
            Eat Any <br /> Where <br />
            <span className="text-gray-700">at just </span>
            <span className="text-red-700">₹350</span>
          </h1>
          <h1 className="mt-5">
            When you purchase Plan “Jaha Jao Waha Khao”, you can easily eat
            <br />
            by only scanning the QR Code in restaurants.
          </h1>
        </div>

        {/* Buttons */}
        <div className="h-1/2">
          <button className="bg-red-500 ml-[17%] text-white py-2 px-4 rounded-full hover:bg-white hover:outline hover:text-red-700">
            Download App
          </button>

          <button className="ml-[5%] text-white font-bold py-4 px-4 rounded-full shadow-lg shadow-red-800 hover:scale-110">
            <FaPlay color="red" />
          </button>
          <label className="pl-5" htmlFor="watch Video">
            Watch Video
          </label>
        </div>
      </div>

      {/* Right half of the screen */}
      <div className="w-1/2 h-[80vh]">
        <div className="ml-[10%] w-[70%] rounded-full h-full overflow-hidden outline">
          <img src="./src/Images/chef.png" alt="Chef" />
        </div>
      </div>
    </div>
  );
};

export default Home;
