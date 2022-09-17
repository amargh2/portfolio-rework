import projects from './projectlist'
import ProjectCarousel from './ProjectCarousel'
import Header from './header'
import Nav from './Nav2'
import Footer from './Footer'
import BlogPreview from './BlogPreview'

export default function MainPage() {
  return(
    <div className='bg-gradient-to-tr from-blue-200 to-red-100'>
      <Nav/>
      <Header/>
      <ProjectCarousel/>
      <BlogPreview/>
      <Footer />
    </div>
  )
}