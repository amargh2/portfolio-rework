import ProjectDisplay from "./ProjectDisplay";
import Header from "./header";
import Nav from "./Nav2";
import Footer from "./Footer";
const ProjectPage = () => {
  return (
    <div className="bg-gradient-to-bl to-cyan-200 from-red-200">
      <Nav/>
      <ProjectDisplay/>
      <Footer/>
    </div>
  )
}

export default ProjectPage