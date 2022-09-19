import ProjectCarousel from './ProjectCarousel'
import AboutMe from './AboutMe'
import Nav from './Nav2'
import Footer from './Footer'
import SkillsPanelWide from './SkillsPanelWide'
import BlogPreview from './BlogPreview'

export default function MainPage() {
  return(
    <div class="bg-cirrus">
      <div className="flex gap-4 justify-center items-center flex-col px-10">
        <Nav/>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <AboutMe/>
          <div class="hidden lg:flex"><SkillsPanelWide/></div>
        </div>
        <div class="flex justify-center"><ProjectCarousel/></div>
        <div className='lg:hidden flex'><SkillsPanelWide/></div>
        <Footer/>
      </div>
    </div>
    
  )
}