import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";

const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://devserver.apnathali.com/api/v1/get/all/shop"
        );
        setRestaurants(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the data", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (currentIndex < restaurants.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div className="container mx-auto my-8 hidden lg:block xl:block">
      <h2 className="text-center text-2xl font-bold mb-4">Featured Restaurants</h2>
      <div className="flex justify-center items-center p-3">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className=" pb-1 text-white text-2xl px-2 bg-red-500 rounded-full shadow-lg shadow-red-500 hover:scale-110 disabled:opacity-50"
        >
          ←
        </button>
        <div className="flex flex-wrap justify-center w-full mx-4 lg:flex-row md:flex-wrap">
          {restaurants.slice(currentIndex, currentIndex + 3).map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex >= restaurants.length - 1}
          className=" pb-1 text-white text-2xl px-2 bg-red-500 rounded-full shadow-lg shadow-red-500 hover:scale-110 disabled:opacity-50"
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
  );
};

export default FeaturedRestaurants;
