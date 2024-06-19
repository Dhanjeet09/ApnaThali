import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: ["About Us", "Restaurant", "Contact", "Company"],
    },
    {
      title: "Company",
      links: ["Partnership", "Terms of Use", "Privacy", "Sitemap"],
    },
  ];

  return (
    <footer className="bg-white w-5/6 ml-[10%]  text-gray-600 text-xs font-bold body-font">
      <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="-mt-8 flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="w-20"
              src="./src/Images/FooterRestaurantIcon.png"
              alt=""
            />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          {/* Social media icons */}
          <div className="flex mt-4 justify-center md:justify-start text-orange-400">
            <a href="#">
              <FaFacebookF />
            </a>
            <a className="ml-3 " href="#">
              <FaInstagram />
            </a>
            <a className="ml-3 " href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        {/* Footer links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-orange-400 font-bold tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none mb-10">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a className="text-gray-600 hover:text-gray-800" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
          {/* Get in touch section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font text-orange-400 font-bold  tracking-widest text-sm mb-3">
              Get in touch
            </h2>
            <p className="text-gray-600 w-[20vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="flex mt-4 lg:w-[20vw]">
              <input
                type="text"
                placeholder="Email"
                className="w-2/3 h-8 bg-gray-300 text-xs font-bold bg-opacity-50 rounded-full  border-gray-300 focus:ring-2 focus:ring-orange-400 focus:bg-transparent focus:border-orange-400  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              />

              <button className=" ml-5 bg-orange-400 border-0 h-8  focus:outline-none  rounded-full text-white text-xs font-bold  px-4  hover:bg-white hover:outline hover:text-orange-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="">
        <div className="container justify-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className=" flex  items-center justify-center text-gray-500 text-sm text-center  sm:text-left">
            <img
              className="w-12 "
              src="./src/Images/FooterDishIcon.png"
              alt=""
            />
            <a href="#" className="text-gray-600 ml-5" target="_blank">
              Copyright © 2022 Foodhut.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
