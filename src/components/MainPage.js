import projects from './projectlist'
import ProjectCarousel from './ProjectCarousel'
import Header from './header'
import Nav from './Nav2'
import Footer from './Footer'
import BlogPreview from './BlogPreview'
import SideNav from './SideNav'
import Banner from './banner'
export default function MainPage() {
  return(
    <div className='bg-gradient-to-tr from-blue-200 to-red-100 grid-cols-12 md:grid flex flex-col'>
        <div className='col-span-full'><Banner></Banner></div>
        <div className='col-span-1 row-start-2'><SideNav/></div>
        <div className='col-span-full col-start-2 row-start-2 pt-4'><Header/></div>
        <div className='col-span-full col-start-2'> <ProjectCarousel/> </div>
        <div className='col-span-full col-start-2'> <BlogPreview/></div>
        <div className='col-span-full col-start-2'> <Footer/></div>
    </div>
    
  )
}