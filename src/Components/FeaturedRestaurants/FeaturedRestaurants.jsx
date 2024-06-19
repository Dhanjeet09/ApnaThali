import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";

const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://devserver.apnathali.com/api/v1/get/all/shop"
        );
        setRestaurants(response.data.data);
        console.log(response.data.data
        );
        
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  // Handle click for the next button
  const handleNext = () => {
    if (currentIndex < restaurants.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle click for the previous button
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Static data simulating API response

  return <>
  <div className="container mx-auto my-8">
      <h2 className="text-center text-2xl font-bold mb-4">Featured Restaurants</h2>
      <div className="flex justify-center items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className=" bg-red-800 rounded-full shadow-lg shadow-red-800 hover:scale-110 disabled:opacity-50"
        >
          ←
        </button>
        <div className="flex overflow-hidden w-full mx-4">
          {restaurants.slice(currentIndex, currentIndex + 3).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex >= restaurants.length - 3}
          className="py-2 px-2 bg-red-800 rounded-full shadow-lg shadow-red-800 hover:scale-110 disabled:opacity-50"
        >
        →
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentIndex(0)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          See All Restaurants
        </button>
      </div>
    </div>
  </>;
};

export default FeaturedRestaurants;
