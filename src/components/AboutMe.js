import React from "react"

const AboutMe = () => {
  return (
    <div className="flex justify-center p-10">
      <div className = 'header bg-gradient-to-tr from-blue-100 to-red-100 flex flex-col items-center py-4 text-slate-800 shadow-lg rounded-lg bg-white justify-center pt-10'>
          <div className="flex items-center">
            <p className='text-2xl font-semibold'>Hi, I'm Anthony</p>
          </div>
          <div className="flex-col lg:flex-row items-center flex justify-center">
            <div className="flex w-3/4 justify-center"><img className='aspect-auto rounded-full h-60 w-50' src='./mesmall.jpg' alt='me'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center mx-20 prose-lg">
                I'm an explorer at heart with a love for tech, travel, writing, and running.
                I was a flight attendant for nearly a decade, but now I'm aspiring to work in a different kind of cloud! My interests
                in the tech space are wide, but I am especially drawn to development across the full stack
                and networking. Most of all, I love to learn and share knowledge!                
                Have a look at my projects and get in touch if I can contribute to your team!
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe