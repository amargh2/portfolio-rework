import React from "react"

const Blurb = () => {
  return (
    <div className="flex justify-center p-2">
      <div className = 'p-20 header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center py-4 text-slate-800 shadow-lg rounded-lg bg-white justify-center'>
          <div className="flex items-center">
            <p className='text-2xl font-semibold'>My Work So Far</p>
          </div>
          <div className="flex-col lg:flex-row items-center flex justify-center">
            <div className="flex w-1/2 justify-center"><img className='rounded-full md:h-60' src='./mesmall.jpg' alt='me'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center">
                This section is a collection of some of my completed projects so far.
                 Most of these are assignments from <a href='https://www.theodinproject.com'>The Odin Project</a>, an open source bootcamp curriculum and community. When I started a year ago I knew basic HTML and some Python from my CCNA. Now, I feel comfortable building a simple full stack application from the ground up using a lot of different tools. There's so much more to learn and find out, but that's the exciting part!
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Blurb