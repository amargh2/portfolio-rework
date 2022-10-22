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
                I'm an explorer at heart with a love for tech, travel, writing, and running. After I got my BA in English, I wanted to travel and see the world,
                so I did! As a small town kid from central Illinois, I have felt very blessed to see so much of the world as a flight attendant, English teacher, 
                and solo backpacker. I loved my time traveling and learning so much about people, service, and kindness in the air, but now 
                I'm aspiring to bring my skills to a different kind of cloud! 
                As a coworker, you can count on me to stay 
                curious and humble, collaborate with enthusiasm and genuine warmth, and work problems calmly and positively even under pressure.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe