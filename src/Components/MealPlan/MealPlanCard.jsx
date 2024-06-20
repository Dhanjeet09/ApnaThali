import React from 'react'

const MealPlanCard = () => {
  return (
    <>
    <div className="flex items-center flex-col max-w-sm mx-auto rounded-lg p-6 bg-gradient-to-t from-rose-100  via-transparent to-transparent">
      <div className=" size-56 p-5 -ml-5 rounded-full from-transparent via-transparent to-orange-400 bg-gradient-to-t">
        <div className="  w-48 rounded-full overflow-hidden">
          <img src="./src/Images/Thali.png" alt="Meal Plan" />
        </div>
      </div>
      <div className=" translate-x-16 -translate-y-16 h-12 w-12 bg-yellow-400 rounded-full px-1 pt-3.5 text-white border-2 border-white  font-bold text-sm">
        ₹ 200
      </div>
      <div className="text-center mt-4">
        <div className="flex justify-center items-center mb-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User 1"
            className="w-8 h-8 rounded-full border-2 border-white -ml-4"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User 2"
            className="w-8 h-8 rounded-full border-2 border-white -ml-4"
          />
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt="User 3"
            className="w-8 h-8 rounded-full border-2 border-white -ml-4"
          />
        </div>
        <div className="text-yellow-500 text-lg font-bold mb-2">★ 4.5</div>
        <div className="text-gray-800 text-xl font-bold mb-2">
          10 Days | 7 Thali's
        </div>
        <p className="text-gray-600 text-sm mb-4">
          In This Plan You Can Take 7 Meals On <br /> Duration Of 10 Days.
        </p>
        <button className="bg-red-500 translate-y-10 text-white font-bold py-2 px-4 rounded-full">
          Purchase Now
        </button>
      </div>
    </div>
    </>
  )
}

export default MealPlanCard