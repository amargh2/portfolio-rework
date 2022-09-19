import React from "react"

const Blurb = () => {
  return (
    <div className="flex justify-center">
      <div className = 'header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center py-4 text-slate-800 shadow-lg rounded-lg bg-white justify-center'>
          <div className="flex items-center">
            <p className='text-2xl font-semibold'>My Work So Far</p>
          </div>
          <div className="flex-col lg:flex-row items-center flex justify-center">
            <div className="flex w-1/2 justify-center"><img className='rounded-full h-60 w-50' src='./mesmall.jpg' alt='me'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center inline-block prose-lg">
                I have been steadily improving my skills in development since November of 2021 and began studying full-stack JavaScript development with The Odin Project
                full time in May of 2022. This section is a collection of some of my completed projects so far. Many more, including what I'm currently working on, can be found on my <a className='' href='https://www.github.com/amargh2'>GitHub!</a>
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Blurb