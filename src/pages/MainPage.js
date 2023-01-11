import ProjectCarousel from './components/ProjectCarousel'
import AboutMe from './components/AboutMe'
import Nav from './components/Nav'
import SkillsPanelWide from './components/SkillsPanelWide'
import Footer from './components/Footer'
export default function MainPage() {
  return(
    <div>
      <div className="md:grid grid-cols-12 md:gap-3 lg:gap-2 flex flex-col mx-2">
        <div className='col-span-full row-start-1'><Nav/></div>
        <div class="lg:col-start-3 md:col-start-1 lg:col-span-5 md:col-span-7 md:row-start-2 p-2"><AboutMe/></div>
        <div class="flex md:col-span-5 lg:col-span-3 md:row-start-2 p-2"><SkillsPanelWide/></div>
        <div class="lg:col-start-3 flex row-start-3 lg:col-span-8 md:col-start-1 md:col-span-full"><ProjectCarousel/></div>
      </div>
        <Footer/>
      </div>
    
  )
}