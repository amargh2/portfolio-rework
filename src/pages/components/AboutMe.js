import React from "react"

const AboutMe = () => {
  return (
    <div className="flex justify-center">
      <div className = 'header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center text-slate-800 shadow-lg rounded-lg justify-center'>
          <div className="flex items-center p-2">
            <p className='text-2xl font-semibold'>Hi, I'm Anthony</p>
          </div>
          <div className="flex-col /lg:flex-row items-center flex justify-center">
            <div className="flex w-3/4 justify-center"><img className='aspect-auto rounded-full h-48 w-50' src='./mesmall.jpg' alt='Picture of Anthony'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center mx-10 inline-block"> 
                I'm a highly curious and adaptable communicator with self-taught skills in JavaScript, React, and certified infrastructure knowledge,
                and a love for learning something new each day!  
                When I'm not coding or diving into some new topic of interest you can find me running, writing, playing the occasional video game, 
                or reading a fantasy novel. I'm interested in infrastructure and code (and infrastructure-as-code), 
                and my inner English major delights in great documentation. As a teammate you can count on me to collaborate
                with enthusiasm while staying positive in the face of challenges.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe