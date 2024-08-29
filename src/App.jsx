import React from 'react'
import { Route,Routes } from "react-router-dom";
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/carousel.jsx';
import Services from './components/services.jsx';
import TyresSold from './components/TyresSold.jsx';
import Payment from './components/Payment.jsx';
import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar';

function App() {
  return (
   <>
   {/* <Routes>
    <Route path='/' element={<Hero></Hero>}></Route>
   </Routes> */}
   <Navbar></Navbar>
   <Hero></Hero>
   <Carousel></Carousel>
   <Services></Services>
   <TyresSold></TyresSold>
   <Payment></Payment>
   <Footer></Footer>
   </>
  )
}

export default App
