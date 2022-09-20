import ProjectCarousel from './ProjectCarousel'
import AboutMe from './AboutMe'
import Nav from './Nav2'
import Footer from './Footer'
import SkillsPanelWide from './SkillsPanelWide'
import Carousel2 from './carousel2'

export default function MainPage() {
  return(
    <div class="bg-cirrus">
      <div className="md:grid grid-cols-12 md:gap-3 lg:gap-5 flex flex-col mx-2">
        <div className='col-span-full row-start-1'><Nav/></div>
        <div class="lg:col-start-2 md:col-start-1 lg:col-span-6 md:col-span-7 md:row-start-2"><AboutMe/></div>
        <div class="flex md:col-span-5 lg:col-span-6 md:row-start-2"><SkillsPanelWide/></div>
        <div class="lg:col-start-2 flex row-start-3 lg:col-span-10 md:col-start-1 md:col-span-full p-2"><ProjectCarousel/></div>
      </div>
        <Footer/>
      </div>
    
  )
}