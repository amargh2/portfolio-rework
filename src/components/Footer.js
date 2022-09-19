import { FaGithub, FaLink } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
export default function Footer() {
  return (
    <div className='flex justify-center pt-10 pb-10'>
      <div className='flex flex-col justify-center'>
        <p className='font-semibold prose-xl text-white'>Get In Touch!</p>
        <div className="flex justify-center">
          <a href="https:github.com/amargh2">
            <FaGithub size={35} color={'white'}/>
          </a>
          <a href="https://www.linkedin.com/in/anthony-margherio-26b26850/">
            <FaLinkedin size={35} color={'white'}/>
          </a>
        </div>
      </div>
    </div>
  )
}