import ProjectCarousel from './ProjectCarousel'
import AboutMe from './AboutMe'
import Nav from './Nav2'
import Footer from './Footer'
import SkillsPanelWide from './SkillsPanelWide'
import BlogPreview from './BlogPreview'

export default function MainPage() {
  return(
    <div class="bg-cirrus">
      <div className="md:grid grid-cols-10 gap-5 flex flex-col mx-20">
        <div className='col-span-full'><Nav/></div>
        <div class="col-start-2 col-span-5"><AboutMe/></div>
        <div class="hidden lg:flex col-span-3"><SkillsPanelWide/></div>
        <div className='lg:hidden flex'><SkillsPanelWide/></div>
        <div class="col-start-1 col-span-10 md:flex"><ProjectCarousel/></div>
        </div>
        <Footer/>
      </div>
    
  )
}