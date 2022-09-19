
import projects from "./projectlist"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

export default function ProjectCarousel() {
  const addLinks = (project) => {
    if (project.name ==='Battleship' || project.name === 'Crystal Shop' || project.name === 'Message Board') {
      return (
        <div className ='flex'>
          <a href={project.link}><FiExternalLink size={22}/></a>
          <a href={project.gitHubLink}><FaGithub size={22}/></a>
        </div>
      )
    } else {
      return (
        <div className="flex">
          <a href={project.gitHubLink}><FaGithub size={22}/></a>
        </div>
      )
    }
  }

 function createItemsForCarousel() {
  const processedProjects = projects.map(project => {
    return (
      <div id={'item' + project.id.toString()} className="carousel-item w-full flex-col flex lg:flex-row justify-center gap-5 py-2">
          <img src={project.imgURL} className="w-full" alt='alt'/>
          <div class="flex flex-col justify-center">
            <div class="flex justify-center gap-4">
              <p className='font-semibold'>{project.name}</p>
              {addLinks(project)}
            </div>
              <p>{project.description}</p>
          </div>
      </div>
    )
  })
  return processedProjects
 }
  
  return (
  <div className>
    <div class="flex justify-center p-10">
      <div className='flex flex-col w-full shadow-lg rounded-lg bg-white py-2 px-4 bg-gradient-to-br from-blue-200 to-white'>
      <div class="flex justify-center">
        <h1 className='font-semibold text-xl'>Some of my projects so far</h1>
      </div>
        <div className="carousel h-80 w-full">
          {createItemsForCarousel()}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">1</a>
          <a href="#item2" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">2</a>
          <a href="#item3" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">3</a>
          <a href="#item4" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">4</a>
          <a href="#item5" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">5</a>
          <a href="#item6" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs text-slate-800">6</a>
        </div>
      </div>
    </div>
  </div>
  )
}