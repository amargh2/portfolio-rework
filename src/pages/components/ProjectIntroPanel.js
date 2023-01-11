import React from "react"

const Blurb = () => {
  return (
    <div className="flex justify-center p-2">
      <div className = 'p-20 header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center py-4 text-slate-800 shadow-lg rounded-lg bg-white justify-center'>
          <div className="flex items-center">
            <p className='text-2xl font-semibold'>My Work So Far</p>
          </div>
          <div className="flex-col items-center flex justify-center">
            <div className="flex w-1/2 justify-center"><img className='rounded-full md:h-48' src='./mesmall.jpg' alt='me'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center">
                This is a sample of some of the development projects I've made and deployed so far. Most of them are assignments from The Odin Project, 
                an open source course and community centered on learning the MERN stack from scratch. It's been and continues to be a fun journey of learning, 
                googling, and lots of reading and coding! While I am proud of my progress, 
                I am constantly humbled and excited by how much there is to find out and all that I don't know.
                I'd be really excited to learn the ins and outs and continue to grow with a great team.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Blurb