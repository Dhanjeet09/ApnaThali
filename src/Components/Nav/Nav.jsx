import React from "react";

const Nav = () => {
  return (
    <div className=" flex justify-around  w-screen ">
      <div className="flex items-center w-1/5 h-1/6 ">
        <img  src="./src/Images/LOGO APNA THALI 2 conflict-02 4.png" alt="" />
        <h1 className="font-bold">
          APNA <span className="text-red-900">THALI</span>
        </h1>
      </div>
      <div className="bg-red-700 w-1/5 translate-y-14 text-center h-10 py-1 rounded-full ">
        JAHA JAO WAHA KHAO
      </div>
      <div className=" flex  gap-10">    
        <h1>Home</h1>
        <h1>Reatorents</h1>
        <h1>Shope</h1>
      </div>
    </div>
  );
};

export default Nav;
    
