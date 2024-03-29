import React from "react"
import { Link } from "react-router-dom"
const HeroPage = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className='flex justify-center'>
              <img src="/mesmall.jpg" className='rounded-full h-60' alt="" />
            </div>
            <h1 className="mb-5 text-5xl font-bold">Hi there, I'm Anthony</h1>
            <p className="mb-5">I'm an explorer at heart with a love for tech, travel, writing, and running.</p>
            <Link to='/home'><button className="hover:bg-gradient-to-br hover:to-cyan-500 hover:from-indigo-500 rounded bg-gradient-to-tr from-indigo-500 to-cyan-500 p-4">Come On In</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
