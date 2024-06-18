import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="max-w-sm w-full p-4 mx-2 bg-white rounded-lg shadow-md">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover rounded" />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{restaurant.name}</h3>
        <p className="mt-2 text-gray-600">Price: ₹{restaurant.price}</p>
        <p className="mt-2 text-yellow-500">Rating: {restaurant.rating} ⭐</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
