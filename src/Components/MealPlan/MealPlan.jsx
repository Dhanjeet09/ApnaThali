import React from "react";
import MealPlanCard from "./MealPlanCard";

const MealPlan = () => {
  return (
    <>
      <div className=" flex-grow  xl:flex lg:flex md:flex items-center  ">
        <button className=" translate-x-24 hidden xl:block pb-1 text-white text-2xl px-2 bg-red-500 rounded-full shadow-lg shadow-red-500 hover:scale-110 disabled:opacity-50">
          ←
        </button>
        <MealPlanCard />
        <MealPlanCard />
        <MealPlanCard />
        <button className=" -translate-x-24 pb-1  hidden xl:block  text-white text-2xl px-2 bg-red-500 rounded-full shadow-lg shadow-red-500 hover:scale-110 disabled:opacity-50">
          →
        </button>
      </div>
    </>
  );
};

export default MealPlan;
