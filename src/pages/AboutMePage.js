import React from "react"
import AboutMe2 from "./components/AboutMe2"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
export default function AboutMePage() {
  return (
      <div className='flex flex-col justify-center'>
        <div className="md:grid grid-cols-12 gap-3 lg:gap-2 flex flex-col mx-2">
          <div className='col-span-full row-start-1'><Nav/></div>
          <div class="lg:col-start-3 flex md:col-start-1 lg:col-span-8 md:col-span-full md:row-start-2"><AboutMe2/></div>
          </div>
          <Footer/>
      </div>)
}