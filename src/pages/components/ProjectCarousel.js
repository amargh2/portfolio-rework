import projects from "./ProjectList"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

export default function ProjectCarousel() {
  const addLinks = (project) => {
    if (project.link) {
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
      <div id={'item' + project.id.toString()} className="carousel-item w-full lg:flex-row flex flex-col items-center justify-center p-2">
          <div className='flex justify-center'><img src={project.imgURL} className="w-full h-full" alt='alt'/></div>
            <div class="flex flex-col gap-4">
              <div class="flex justify-center">
                <p className='font-semibold'>{project.name}</p>
                {addLinks(project)}
              </div>
              <p className=''>{project.description}</p>
            </div>
              
          </div>
    )
  })
  return processedProjects
 }
  
  return (
  
      <div className='flex carousel flex-col shadow-lg rounded-lg bg-white bg-gradient-to-br from-blue-200 to-white'>
      <div class="flex justify-center">
        <h1 className='font-semibold text-xl pb-2'>Some of my projects so far</h1>
      </div>
          <div class="carousel h-80">{createItemsForCarousel()}</div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">1</a>
          <a href="#item2" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">2</a>
          <a href="#item3" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">3</a>
          <a href="#item4" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">4</a>
          <a href="#item5" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs  text-slate-800">5</a>
          <a href="#item6" className="btn bg-gradient-to-br from-cyan-200 to-red-200 btn-xs text-slate-800">6</a>
        </div>
      </div>
  )
}

