import { FaGithub, FaLink } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
export default function Footer() {
  return (
    <div className='flex justify-center top-0'>
      <div className='flex flex-col justify-center'>
        <p className=''>Get In Touch!</p>
        <div className="flex">
          <FaGithub size={35} color={''}/>
          <FaLinkedin size={35} color={''}/>
        </div>
      </div>
    </div>
  )
}