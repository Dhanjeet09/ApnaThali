import React from "react";

// PromoComponent with mobile mockup on the right and content on the left
const PromoComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen  ">
      <div className="max-w-4xl lg:w-2/3  p-8 rounded-lg shadow-lg flex justify-between items-center ">
        {/* Promotional content */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            It’s Now <span className="text-red-500">More Easy</span> to <br />
            <span className="text-red-500">Purchase Plan</span> by Our <br />
            Mobile <span className="text-red-500"> App</span>
          </h1>
          <p className="mt-8 text-gray-600">
            All you need to do is download one of the best delivery apps,
            <br /> and most companies are opting for mobile app <br />{" "}
            development for food delivery.
          </p>
          {/* App download buttons */}
          <div className="mt-6 flex space-x-4">
            {/* Google Play button */}
            <a
              href="#"
              className="bg-black text-white px-2 py-2 rounded-md shadow-md flex items-center space-x-2"
            >
              <img
                src="./src/assets/Google-play-icon.png"
                alt="Google Play"
                className="w-10 h-10"
              />
              <span className="leading-3">
                GET IT ON <br />{" "}
                <span className="font-semibold text-2xl">Google Play</span>{" "}
              </span>
            </a>
            {/* App Store button */}
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded-md shadow-md flex items-center space-x-2"
            >
              <img
                src="./src/assets/app-store-icon.png"
                alt="App Store"
                className="w-10 h-10"
              />
              <span className="leading-3 text-sm">
                Download on the <br />{" "}
                <span className="font-semibold text-2xl">App Store</span>{" "}
              </span>
            </a>
          </div>
        </div>
        {/* Mobile screen mockup */}
        <div className="w-64 h-64 bg-gray-100 rounded-full flex justify-center items-center shadow-lg">
          <div className="w-48 h-96 bg-white border border-gray-300 rounded-2xl shadow-inner p-4">
            {/* Search bar */}
            <div className="h-10 bg-gray-200 rounded-md mb-4 flex items-center px-2">
              <input
                className="bg-transparent w-full text-sm placeholder-gray-500"
                type="text"
                placeholder="Search..."
              />
            </div>
            {/* Recently searched restaurant entry */}
            <div className="h-32 bg-orange-200 rounded-md mb-4 flex items-center justify-between px-4">
              <span className="text-sm text-orange-600 font-semibold">
                Eat Anywhere at just ₹350
              </span>
              <img
                src="./src/assets/food-icon.png"
                alt="Food"
                className="w-12 h-12"
              />
            </div>
            {/* Trending tags */}
            <div className="space-y-2 px-2 ">
              <div className=" bg-gray-200  rounded-md flex-grow items-center ">
                <span className="text-xs">#under500pp</span>
              </div>
              <div className=" bg-gray-200  rounded-md flex-grow items-center ">
                <span className="text-xs">#JohnDoeWalk</span>
              </div>
              <div className=" bg-gray-200  rounded-md flex-grow items-center ">
                <span className="text-xs">#VFM</span>
              </div>
              {/* Additional tags or content can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoComponent;
