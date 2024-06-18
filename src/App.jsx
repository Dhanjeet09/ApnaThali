import React from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home'
import ServicePlans from './Components/What-We-Serve/ServicePlans'
import FeaturedRestaurants from './Components/FeaturedRestaurants/FeaturedRestaurants'

const App = () => {

  return (
    <>
    <div className="mt-5 w-screen h-screen bg-gradient-to-r from-[white] to-[#FEF4E3]">

      <Nav/>
      <Home/>
      <ServicePlans/>
      <FeaturedRestaurants/>
    </div>
    </>
  )
}

export default App