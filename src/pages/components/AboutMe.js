import React from "react"

const AboutMe = () => {
  return (
    <div className="flex justify-center">
      <div className = 'header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center text-slate-800 shadow-lg rounded-lg justify-center'>
          <div className="flex items-center p-2">
          </div>
          <div className="flex-col /lg:flex-row items-center flex justify-center">
            <div className="flex w-3/4 justify-center"><img className='aspect-auto rounded-full h-48 w-50' src='./mesmall.jpg' alt='Picture of Anthony'></img></div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <p className="py-2 text-center mx-10 inline-block"> 
                Hey there traveler, and thanks for passing through! My name's Anthony Margherio. 
                As a queer kid from a small town in Illinois with a lot of curiosity, 
                I wanted to 'get out there' 
                and 'see the world', and I've been lucky enough to do some of that as a flight attendant, backpacker,
                and teacher. </p>
                <p className="py-2 text-center mx-10 inline-block">
                After college (IVCC + UIC), 
                I got the opportunity to teach in South Korea, which was a great experience for me as a very shy person - I met great people,
                taught the coolest students ever, and worked with amazing teachers who showed me the ropes. 
                While I was living in Korea I also briefly backpacked through Southeast Asia and spent some time in Japan. By then, I  
                had the travel bug, and I was hooked! 
                </p>
                <p className="py-2 text-center mx-10 inline-block">
                After my teaching contract I used what I was able to save and backpacked through South America on my own in old converse
                and a backpack from high school I had laying around. I still wear old converse, but I upgraded the backpack after 
                some travel companions I met gently suggested it before we went to Colca Canyon. They were right. </p>
                <p className='py-2 text-center mx-10 inline-block'>
                Even after all that travel I still didn't want to stop! I managed to land a job as a flight attendant for a big airline. 
                I got to visit Europe and see a ton of places I never thought I would as a young kid.  
                I loved my time flying and all the different people 
                I got to work with, serve, and get to know. 
                While I wouldn't trade a minute and I'm so thrilled I was able to travel professionally, 
                there were a lot of ups and downs (ba-dum-ch) in that career and lifestyle for someone on the 
                more introverted side.  </p>
                <p className='py-2 text-center mx-10 inline-block'>Truthfully, the best thing that
                came out of my time in the sky? My partner, Ernest, who is my absolute best friend and who I hope always will be. He'd been living down the
                road from me in Chicago for months, but we didn't run into each other until a Thanksgiving night in Dallas eight years ago. 
                We've been together since! He's a flight attendant too. We do a lot of sitting on the couch these days, which I very much enjoy, but we love
                going on road trips, hikes, and very occasionally hopping on airplanes when the loads are light.</p>
                <p className='py-2 text-center mx-10 inline-block'>
                During the pandemic I took a leave from flight attending 
                and discovered an old love for computers, and I've been on a new journey studying all the things 
                I find interesting about them since then. When I returned
                from my leave, I realized that a lot had changed about flying, and so had I! 
                I needed to take some time to reassess and reorient my trajectory.
                For the past six months, I've been developing front end user interfaces in React and learning full stack development, 
                and I really feel I've found what I love doing every day. </p>
                
                <p className='py-2 text-center mx-10 inline-block'> 
                Anyway, you're a brave soul if you read all that! I'm going to keep on learning, tinkering, and exploring,
                and I hope you do too, whatever that means for you! Thanks 
                for stopping by. </p> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe