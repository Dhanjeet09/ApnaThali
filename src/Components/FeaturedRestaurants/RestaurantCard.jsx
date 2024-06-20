import React, { useEffect } from "react";
// import images from "images"
import placeholderImage from '../../Images/Cardbg.jpg'
import nonveg from '../../assets/non-veg.png'
import veg from '../../assets/veg.png'
const RestaurantCard = ({ restaurant, index }) => {
  

  return (
    <div className="w-1/4  p-1 mx-auto rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="p-1 flex items-center translate-y-16 bg-white rounded-full translate-x-6">
          <span className="text-xl font-bold">
            {restaurant.averageRating} ⭐
            <span className="text-xs text-gray-400">{`(${restaurant.totalReviews})+`}</span>
          </span>
        </div>
      </div>

      {/* Restaurant Image */}
      <div className="p-2 md:shrink-0 mb-2">
        <img
          className="h-48 lg:w-1/1 rounded-lg object-cover md:h-full md:w-full"
          src={!restaurant.logo ? restaurant.logo : placeholderImage}
          alt={restaurant.name}
        />
      </div>

      {/* Promotional Banner */}
      <div className="-translate-y-5 uppercase font-semibold pl-2 text-white bg-gradient-to-r from-red-400 to-[#FF926F] w-2/3 rounded-l-lg">
        JAHA JAO WAHA KHAO
      </div>

      {/* Restaurant Name and Preference Icons */}
      <div className="text-center flex justify-between items-center">
        <div className="uppercase tracking-wide text-sm w-2/3 font-semibold">
          {restaurant.name} <span> ✅</span>
        </div>
        <span className="flex">
          {["nonveg", "both"].includes(restaurant.preference) && (
            <img className="w-10" src={nonveg} alt="Non-Veg" />
          )}
          {["veg", "both"].includes(restaurant.preference) && (
            <img className="w-10" src={veg} alt="Veg" />
          )}
        </span>
      </div>

      {/* Pricing Plans */}
      <div className="mt-4 flex justify-center space-x-2">
        {restaurant.plans.map((plan, idx) => (
          <button key={idx} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            ₹{plan.amount}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
