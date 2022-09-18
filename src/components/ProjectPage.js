import ProjectDisplay from "./ProjectDisplay";
import AboutMe from "./AboutMe";
import Nav from "./Nav2";
import Blurb from './ProjectBlurb.js';
import Footer from "./Footer";

const ProjectPage = () => {
  return (
    <div className="bg-hero flex justify-center flex-col gap-4">
      <Nav/>
      <Blurb/>
      <ProjectDisplay/>
      <Footer/>
    </div>
  )
}

export default ProjectPage