import ProjectDisplay from "./ProjectDisplay";
import Nav from "./Nav2";
import Blurb from './ProjectBlurb.js';
import Footer from "./Footer";

const ProjectPage = () => {
  return (
    <div className="bg-cirrus">
      <div className="lg:grid grid-cols-10 flex justify-center flex-col mx-2 lg:mx-10">
        <div class="col-span-full"><Nav/></div>
        <div class="col-start-2 col-span-8"><Blurb/></div>
        <div class="col-start-2 col-span-8 flex justify-center"><ProjectDisplay/></div>
        <div class="col-span-full"><Footer/></div>
      </div>
    </div>
  )
}

export default ProjectPage