import projects from "./projectlist"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
export default function carousel2() {
  function createItemsForCarousel() {
    
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

    const processedProjects = projects.map(project => {
      return (
        <div id={'item' + project.id.toString()} className="carousel-item w-full lg:flex-row flex flex-col justify-center gap-5 py-2">
            <img src={project.imgURL} className="w-1/3 lg:w-full" alt='alt'/>
              <div class="flex justify-center gap-4">
                <p className='font-semibold'>{project.name}</p>
                {addLinks(project)}
              </div>
                <p>{project.description}</p>
            </div>
      )
    })
    return processedProjects
   }
  
  return (
    <div class="bg-white bg-blue px-2">
      <div className='bg-gradient-to-b bg-blue-200 to-white p-2'>
        <div className="carousel w-full py-10">
          <div id={'item' + projects[0].id.toString()} className="carousel-item w-full lg:flex-row flex flex-col items-center justify-center gap-5 py-2">
            <img src={projects[0].imgURL} className="w-2/3 lg:w-1/2" alt='alt'/>
              <div class="flex justify-center gap-4">
                <p className='font-semibold'>{projects[0].name}</p>
              </div>
                <p>{projects[0].description}</p>
            </div>
          <div id="item2" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>
    </div>
  )
}
