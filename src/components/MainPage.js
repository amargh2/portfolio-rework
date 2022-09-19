import ProjectCarousel from './ProjectCarousel'
import AboutMe from './AboutMe'
import Nav from './Nav2'
import Footer from './Footer'
import SkillsPanel from './SkillsPanel'
import SkillsPanelWide from './SkillsPanelWide'
import BlogPreview from './BlogPreview'

export default function MainPage() {
  return(
    <div class="bg-cirrus object-fit">
      <div className="flex flex-col lg:mx-20 px-10">
        <Nav/>
        <div className='grid grid-cols-2'>
          <AboutMe/>
          <SkillsPanelWide/>
        </div>
        <ProjectCarousel/>
        <Footer/>
      </div>
    </div>
    
  )
}