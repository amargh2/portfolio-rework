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
                As a small town kid from central Illinois, I grew up wanting to see the world, and 
                I have felt very lucky to do that as a flight attendant, English teacher, 
                and solo backpacker. That said, a lot has changed since I first started my adventures as a 20-something. Somewhere in there I went vegan,
                met my partner, rediscovered my passion for tech, and decided to take a break to build new routines and explore new interests.
                These days, my ideal Friday night is spent watching a movie with my partner, playing a new video game, or going for a long run 
                with a funny podcast or fantasy audiobook.
                Coding and tech scratch my explorer's itch. There's always something
                new to learn, and I'm enjoying the journey.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe