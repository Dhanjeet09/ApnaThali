import React from 'react';

const StepComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-8">How Jaha Jao Waha Khao Works?</h2>
      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* Choose Plan Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <img src="/path/to/your/choose-plan-image.jpg" alt="Choose Plan" className="mb-4" />
          <h3 className="text-xl font-semibold">CHOOSE Plan</h3>
          <p className="text-gray-600 mt-2">
            Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!
          </p>
        </div>
        
        {/* Go to Partner Restaurant Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0">
          <img src="/path/to/your/partner-restaurant-image.jpg" alt="Partner Restaurant" className="mb-4" />
          <h3 className="text-xl font-semibold">Go to Apna Thali partner restaurant</h3>
          <p className="text-gray-600 mt-2">
            Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!
          </p>
        </div>

        {/* Scan and Eat Section */}
        <div className="flex flex-col items-center text-center">
          <img src="/path/to/your/scan-eat-image.jpg" alt="Scan and Eat" className="mb-4" />
          <h3 className="text-xl font-semibold">Scan & eat</h3>
          <p className="text-gray-600 mt-2">
            Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
