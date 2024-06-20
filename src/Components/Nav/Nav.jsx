import React, { useState } from "react";
import apnaThaliLogo from '../../Images/LOGO APNA THALI 2 conflict-02 4.png'
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="pt-5 px-10 xl:px-24 lg:px-24 flex justify-between items-center w-full  ">
      <div className="flex items-center w-1/5 h-1/6 pt-5">
        <img className="w-20" src={apnaThaliLogo} alt="Logo" />
        <h1 className="font-bold">
          APNA <span className="text-red-500">THALI</span>
        </h1>
      </div>
      <div className="bg-[#F5DDC1] p-2 hidden md:block translate-y-14 font-semibold text-center text-[#FF4F3D] h-10 py-2 rounded-full">
        JAHA JAO WAHA KHAO
      </div>
      <div className="hidden  md:flex translate-y-10 gap-8">
        <h1>Home</h1>
        <h1>Plans</h1>
        <h1>Restaurants</h1>
        <h1>Shop</h1>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none ">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-20 right-0 w-1/3 bg-[#F5DDC1] shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <h1>Home</h1>
          <h1>Plans</h1>
          <h1>Restaurants</h1>
          <h1>Shop</h1>
        </div>
      )}
    </nav>
  );
};

export default Nav;
