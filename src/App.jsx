import React from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home'
import ServicePlans from './Components/What-We-Serve/ServicePlans'
import FeaturedRestaurants from './Components/FeaturedRestaurants/FeaturedRestaurants'
import Footer from './Components/Footer'
import Testimonial from './Components/Testimonial'
import PromoComponent from './Components/PromoComponent'
import StepComponent from './Components/StepComponent/StepComponent'

const App = () => {

  return (
    <>
    <div className="mt-5 w-screen h-screen bg-gradient-to-r from-[white] to-[#FEF4E3]">

      <Nav/>
      <Home/>
      <ServicePlans/>
      <FeaturedRestaurants/>
      <StepComponent/>
      <Testimonial/>
      <PromoComponent/>
      <Footer/>
    </div>
    </>
  )
}

export default App