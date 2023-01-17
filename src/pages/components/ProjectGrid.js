import projects from './ProjectList.js'
import {FiExternalLink} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";

const ProjectGrid = () => {
  
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
  
  const processedProjects = projects.map(project => {
    return (
      <div className="flex gap-1 flex-col m-1 justify-center bg-gradient-to-br from-blue-200 to-white p-2 shadow-lg rounded-md hover:ring-2">
        <div className="flex justify-center"><img src={project.imgURL} alt='project' className='h-60 w-50 rounded-md'/></div>
        <div className="flex justify-between">
          <h3 className='font-semibold'>{project.name}</h3>
          {addLinks(project)}
        </div>
        <p>{project.description}</p>
      </div>
    )
  })
  
  return (
      <div className="flex justify-center">
        <div className="flex justify-center">
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3">
              {processedProjects}
          </div>
        </div>
      </div>
  )

}

export default ProjectGrid