import ProjectDisplay from "./components/ProjectGrid";
import Nav from "./components/Nav";
import Blurb from './components/ProjectIntroPanel.js';
import Footer from "./components/Footer";

const ProjectPage = () => {
  return (
    <div>
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