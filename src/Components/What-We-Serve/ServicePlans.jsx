import React from "react";
import Card from "./Card";

const ServicePlans = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold text-red-600">WHAT WE SERVE</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          Plans That Always Make You Fall In Love
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        <Card
          path={"./src/Images/tile1.png"}
          alt={"Eat Multiple Restaurants"}
          title={"Eat Multiple restaurants"}
          des={"You only need a few steps in ordering food"}
        />
        <Card
          path={"./src/Images/tile2.png"}
          alt={"Instant Meal service"}
          title={"Instant Meal service"}
          des={"Delivery that is always on time even faster"}
        />
        <Card
          path={"./src/Images/tile3.png"}
          alt={"Everyday New Meal"}
          title={"Everyday New Meal"}
          des={"Not only fast for us quality is also number one"}
        />
      </div>
    </div>
  );
};

export default ServicePlans;
