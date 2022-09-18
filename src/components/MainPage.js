import projects from './projectlist'
import ProjectCarousel from './ProjectCarousel'
import AboutMe from './AboutMe'
import Nav from './Nav2'
import Footer from './Footer'
import BlogPreview from './BlogPreview'
import SideNav from './SideNav'
import Banner from './banner'
export default function MainPage() {
  return(
    <div className='bg-hero from-blue-200 to-red-100 gap-4 flex flex-col'>
        <Nav/>
        <AboutMe/>
        <ProjectCarousel/>
        <BlogPreview/>
        <Footer/>
    </div>
    
  )
}