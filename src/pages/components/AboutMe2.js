import React from "react"

export default function AboutMe2() {
  return (
    <div className="flex justify-center">
      <div className = 'header bg-gradient-to-br from-blue-200 to-white flex flex-col items-center text-slate-800 shadow-lg rounded-lg justify-center'>
          <div className="flex items-center p-2">
          </div>
          <div className="flex-col /lg:flex-row items-center flex justify-center">
            <p className='text-2xl'>A little (a lot) more about me</p>
            <div className="flex w-3/4 justify-center">
              <img className='aspect-auto rounded-full h-48 w-50' src='./mesmall.jpg' alt='Picture of Anthony'></img>
              </div>
            <div className="flex gap-2 py-2 justify-center items-center flex-col">
              <p className="py-2 text-center mx-10 inline-block"> 
                Hey there fellow traveler, and thanks for passing through! My name's Anthony Margherio. 
                I'm a curious person who grew up in a small town in Illinois. I always wanted to 'get out there' 
                and 'see the world' as a kid, and I've been lucky enough to do some of that as a flight attendant, backpacker,
                and English teacher in South Korea. </p>
                <p className="py-2 text-center mx-10 inline-block">
                After college (A.A. from Illinois Valley Community College, B.A. in English from the University of Illinois at Chicago), 
                I got the opportunity to teach in South Korea, which was an important experience for me as a shy, 
                bookish introvert - I met great people,
                taught the coolest students ever, and worked with gracious, talented teachers who showed me the ropes. 
                While I was living in Korea I also briefly backpacked through Thailand and Cambodia and spent some time in Japan. By then, I  
                had caught the travel bug, and I was hooked! 
                </p>
                <p className="py-2 text-center mx-10 inline-block">
                After my time in Korea, I wanted to backpack through South America after some of my friends told me about their trips there. 
                With a guidebook, some novels I'd been meaning to read, and an empty notebook, 
                I hopped on a plane to Buenos Aires. 
                I traveled through northern Argentina, Bolivia, and 
                the southern half of Peru, saw some truly unforgettable sights,
                and met lots of people on a similar adventure to mine. After that, I worked at Starved Rock Lodge -
                a historic hotel in a beautiful state park staffed by some great people - and I also took some time to drive around 
                the country in my beat up '97 Honda Accord, camping in national parks and sometimes the back seat. 
                During that trip I got a call to interview for a flight attendant role,
                and to my great surprise, I got the job.</p>
                
                <p className='py-2 text-center mx-10 inline-block'>
                Working as a flight attendant gave me a lot of perspective about patience, adaptability, kindness, and resilience.
                I had the opportunity to work with new people from so many different backgrounds and perspectives every single trip, all while 
                taking care of folks on their journeys in small, direct ways - and sometimes big ways, depending on how the day shook out! 
                While I wouldn't trade a minute of my time in the air, 
                there were a lot of ups and downs (ba-dum-ch) in that career and lifestyle for someone who's ultimately still on the 
                more introverted side. I knew in the back of my mind I needed to decide where I wanted to end up, but I 
                couldn't quite figure out where to land.
                </p>
                <p className='py-2 text-center mx-10 inline-block'>
                When the pandemic turned the airline industry upside down, I took a company-offered leave 
                and rediscovered an old love for computers. I'd worked in IT in college and grew up a computer nerd - my usual Friday
                night in high school was a LAN party with my good friends - so I started studying some 
                IT certifications and playing around
                in a home lab with virtualization software to get a lay of the land and to build some knowledge.
                Studying these topics in many ways felt like coming home, and it still does even now. Right before 
                heading back to flying, I started The Odin Project, and I've been
                plugging away at learning to code ever since. I love the mix of creative and technical skills coding requires, 
                and I'm doing my best to improve on 
                those still-nascent skills every day. When I did return to flying, it was clear I had changed, the role had changed,
                and it was time for me to say goodbye while I still had happy memories.  </p>
                <p className='py-2 text-center mx-10 inline-block'>
                I'm really lucky to say that the absolute best person I met in all 
                my travels 
                is my wonderful partner, Ernest. We met by
                chance on Thanksgiving 8 years ago
                in a hotel elevator in 
                Dallas, even though we'd been living down the road from each other in Chicago for months beforehand. 
                We have been together since, and I'm grateful for him every day. We spend a lot of time in the great 
                indoors these days, 
                but we also love going on road trips, hikes, and occasionally 
                hopping on airplanes when the loads are light. We're hoping to do more of that now that the pandemic seems to be behind us.</p>
                <p className='py-2 text-center mx-10 inline-block'> 
                So there you have it: I'm a former flight attendant and travel enthusiast with an English degree and some self-taught technical skills 
                looking to work 
                in a different kind of cloud.
                I'm going to keep on learning, tinkering, and exploring,
                and I hope you do that in your own life and work too, whatever that looks like for you! 
                And of course, if you'd like to work together, please don't hesitate to reach out. </p> 
            </div>
          </div>
      </div>
    </div>
  )
}

