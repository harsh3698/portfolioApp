import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'

export const Home = () => {
  return (
    <div style={{height:"100vh"}}>
        <Navbar/>
        <About/>
    </div>
  )
}
