import React from "react";

const PromoComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              It’s Now <span className="text-red-500">More Easy</span> to{" "}
              <span className="text-red-500">Purchase Plan</span> by Our Mobile{" "}
              <span className="text-red-500">App</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              All you need to do is download one of the best delivery apps, and
              most companies are opting for mobile app development for food
              delivery.
            </p>
            {/* App download buttons */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              {/* Google Play button */}
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded-md shadow-md flex items-center space-x-2"
              >
                <img
                  src="./src/assets/Google-play-icon.png"
                  alt="Google Play"
                  className="w-10 h-10"
                />
                <span className="leading-tight">
                  GET IT ON{" "}
                  <span className="font-semibold text-xl">Google Play</span>{" "}
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
                <span className="leading-tight">
                  Download on the{" "}
                  <span className="font-semibold text-xl">App Store</span>{" "}
                </span>
              </a>
            </div>
          </div>
          {/* Right side mobile mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-full bg-gray-100 rounded-full flex justify-center items-center shadow-lg">
              <div className="w-48 h-96 overflow-hidden bg-white border border-gray-300 rounded-2xl shadow-inner p-4">
              
              <img
                    src="./src/Images/screen.jpg"
                    alt="Food"
                    className=" scale-125"
                  />

                {/* <div className="h-10 bg-gray-200 rounded-md mb-4 flex items-center px-2">
                  <input
                    className="bg-transparent w-full text-sm placeholder-gray-500"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
               
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
               
                <div className="space-y-2 px-2">
                  <div className="bg-gray-200 rounded-md flex items-center">
                    <span className="text-xs">#under500pp</span>
                  </div>
                  <div className="bg-gray-200 rounded-md flex items-center">
                    <span className="text-xs">#JohnDoeWalk</span>
                  </div>
                  <div className="bg-gray-200 rounded-md flex items-center">
                    <span className="text-xs">#VFM</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoComponent;
