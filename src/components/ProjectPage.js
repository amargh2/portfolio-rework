import ProjectDisplay from "./ProjectDisplay";
import AboutMe from "./AboutMe";
import Nav from "./Nav2";
import Blurb from './ProjectBlurb.js';
import Footer from "./Footer";

const ProjectPage = () => {
  return (
    <div className="bg-cirrus">
      <div className="flex flex-col justify-center">
        <Nav/>
        <Blurb/>
        <ProjectDisplay/>
        <Footer/>
      </div>
    </div>
  )
}

export default ProjectPage