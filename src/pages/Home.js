import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import LightboxProvider from '../context/LightboxProvider'
import LightBox from '../components/LightBox'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <LightboxProvider>
        <Header />
        <Navbar />
        <About />
        <Portfolio />
        <LightBox/>
        <Footer />
      </LightboxProvider>  
    </>
  )
}

export default Home