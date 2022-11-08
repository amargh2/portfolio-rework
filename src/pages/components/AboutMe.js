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
                As a small town kid from central Illinois, I grew up wanting to see the world, and I feel very lucky to have done at least 
                a little bit of that as a flight attendant, English teacher, and solo backpacker. I loved my time in the air, 
                but now I'm ready to keep building new skills in a different kind of cloud! 
                As a coworker you can count on me to stay curious, communicate and collaborate
                with enthusiasm, and work problems calmly even under pressure and deadlines.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe