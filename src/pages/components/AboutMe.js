import React from "react"

const AboutMe = () => {
  return (
    <div className="flex justify-center">
      <div className = 'header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center py-4 text-slate-800 shadow-lg rounded-lg justify-center pt-10'>
          <div className="flex items-center p-2">
            <p className='text-2xl font-semibold'>Hi, I'm Anthony</p>
          </div>
          <div className="flex-col /lg:flex-row items-center flex justify-center">
            <div className="flex w-3/4 justify-center"><img className='aspect-auto rounded-full h-60 w-50' src='./mesmall.jpg' alt='me'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center mx-20 inline-block"> 
                I'm a highly curious and empathetic communicator looking to collaborate, learn and grow with a friendly and inclusive team.  
                When I'm not coding or diving into some new topic of interest you can find me running, writing, playing the occasional video game, 
                or reading a fantasy novel.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe