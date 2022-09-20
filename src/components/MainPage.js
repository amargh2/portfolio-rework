import ProjectCarousel from './ProjectCarousel'
import AboutMe from './AboutMe'
import Nav from './Nav2'
import Footer from './Footer'
import SkillsPanelWide from './SkillsPanelWide'
import Carousel2 from './carousel2'

export default function MainPage() {
  return(
    <div class="bg-cirrus">
      <div className="md:grid grid-cols-12 gap-5 flex flex-col mx-2">
        <div className='col-span-full row-start-1'><Nav/></div>
        <div class="lg:col-start-2 md:col-start-2 md:col-span-5 md:row-start-2"><AboutMe/></div>
        <div class="flex md:col-span-4 md:row-start-2"><SkillsPanelWide/></div>
        <div class="col-start-2 flex  row-start-3 col-span-9"><ProjectCarousel/></div>
      </div>
        <Footer/>
      </div>
    
  )
}