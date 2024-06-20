import React from 'react'

import Home from './Components/Home'
import ServicePlans from './Components/What-We-Serve/ServicePlans'
import FeaturedRestaurants from './Components/FeaturedRestaurants/FeaturedRestaurants'
import Footer from './Components/Footer'
import Testimonial from './Components/Testimonial'
import PromoComponent from './Components/PromoComponent'
import StepComponent from './Components/StepComponent/StepComponent'
import MealPlan from './Components/MealPlan/MealPlan'

const App = () => {

  return (
    <>
    <div className="   overflow-x-hidden  no-scrollbar">

      
      <Home/>
      <ServicePlans/>
      <FeaturedRestaurants/>
      <StepComponent/>
      <MealPlan />
      <Testimonial/>
      <PromoComponent/>
      <Footer/>
    </div>
    </>
  )
}

export default App