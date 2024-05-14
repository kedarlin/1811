import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
import Features from './Features'
import Plans from './Plans'
import Help from './Help'
import Contact from './Contact'

const Landing = () => {
  return (
    <div className='landing-main'>
      <Navbar />
      <Body />
      <Features />
      <Plans />
      <Help />
      <Contact />
      <Footer />
    </div>
  )
}
export default Landing