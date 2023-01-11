import { FaGithub } from "react-icons/fa"
export default function Footer() {
  return (
    <div className='flex justify-center pt-10 pb-10'>
      <div className='flex flex-col justify-center'>
        <a href='https://www.github.com/amargh2'><FaGithub size={36} color={'white'}/></a>
      </div>
    </div>
  )
}