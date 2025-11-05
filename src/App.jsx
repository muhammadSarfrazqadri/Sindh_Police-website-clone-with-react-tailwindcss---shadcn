import React from 'react'
import MainCarousel from './components/Carousel'
import Navbar from './components/Navbar'
import DigpMessage from './components/DigMessage'
import QuickLink from './components/QuickLink'
import Footer from './components/footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <MainCarousel/>
    <DigpMessage/>
    <QuickLink/>
    <Footer/>
    </>
  )
}

export default App