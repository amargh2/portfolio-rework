import { Link } from "react-router-dom"
export default function SideNav() {
    return(
      <div className="py-2 flex justify-between w-20">
          <div className="menu mx-2 overflow-y-auto w-80 bg-gradient-to-rb from-blue-200 to-white text-base-content flex justify-center flex-col gap-4">
          <div className='flex justify-center'><Link to='/about'><button className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded bg-gradient-to-tr from-blue-200 to-white py-4 w-40 hover:text-white font-semibold">Home</button></Link></div>
          <div className='flex justify-center'><Link to='/projects'><button className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded bg-gradient-to-tr from-blue-200 to-white py-4 w-40 hover:text-white font-semibold">Portfolio</button></Link></div>
          <div className='flex justify-center'><Link to='/blog'><button className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded bg-gradient-to-tr from-blue-200 to-white py-4 w-40 hover:text-white font-semibold">Blog</button></Link></div>
          </div>
        </div>
    )
    
}   
