import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <div class="flex align-middle justify-center py-2 ">
      <div class="flex justify-center align-middle">
        <div className="flex justify-center rounded-md shadow-sm">
          <Link to='/about'>
            <button
              type="button"
              className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded-l-lg bg-gradient-to-r from-blue-200 to-white py-2 w-36 hover:text-white font-medium"
            >
              Home
            </button>
          </Link>
          <Link to='/projects'>
            <button
              type="button"
              className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 bg-gradient-to-r from-blue-200 to-white py-2 w-36 hover:text-white font-medium"
            >
              My Projects
            </button>
          </Link>
          <Link to='/blog'>
            <button
              type="button"
              className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded-r-lg bg-gradient-to-r from-blue-200 to-white py-2 w-36 hover:text-white font-medium"
            >
              Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}