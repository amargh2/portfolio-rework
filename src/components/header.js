import React from "react"

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className = 'header bg-gradient-to-r from-blue-200 to-white flex flex-col items-center py-4 text-slate-800 shadow-lg w-2/3 rounded-lg bg-white justify-center pt-10'>
          <div className="flex items-center">
            <p className='text-2xl font-semibold'>Hi, I'm Anthony</p>
          </div>
          <div className="flex-col items-center flex justify-center">
            <div className="flex"><img className='rounded-full h-60 w-50' src='./mesmall.jpg'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="inline-block w-1/2 py-2">
                I'm an explorer at heart with a love for tech, travel, writing, and running.
                I was a flight attendant for nearly a decade, but now I'm aspiring to work in a different kind of cloud! My interests
                in the tech space are wide, but I am especially drawn to development and networking.
                Have a look at my projects and get in touch if I can contribute to your team!
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header