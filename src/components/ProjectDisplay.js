import projects from './projectlist.js'
import {FiExternalLink} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";

const ProjectDisplay = () => {
  
  const addLinks = (project) => {
    if (project.name ==='Battleship' || project.name === 'Crystal Shop') {
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
      <div className="flex gap-2 max-w-xl flex-col justify-center bg-white p-2 shadow-lg rounded-md hover:ring-2">
        <div className="flex justify-center"><img src={project.imgURL} className='h-80 w-full rounded-md'/></div>
        <div className="flex justify-between">
          <h3 className='font-semibold'>{project.name}</h3>
          {addLinks(project)}
        </div>
        <p>{project.description}</p>
      </div>
    )
  })
  
  return (
    <div>
      <div className='flex justify-center'>
        <div className="shadow-lg bg-white w-1/2 rounded-md py-20 flex justify-center">
          <p>These are my projects.</p>
        </div>
      </div>
      <div className="grid py-4 p-4 grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {processedProjects}
      </div>
    </div>
  )

}

export default ProjectDisplay