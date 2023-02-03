import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <div class="flex align-middle justify-center py-2">
      <div class="flex justify-center align-middle">
        <div className="flex justify-center rounded-md shadow-lg bg-gradient to-blue-300 from-white">
          <Link to='/home'>
            <button
              type="button"
              className="hover:bg-gradient-to-r hover:to-cyan-300 hover:from-red-300 rounded-l-lg bg-gradient-to-br from-white to-blue-200 to-white py-1 w-24 hover:text-white font-medium"
            >
              Home
            </button>
          </Link>
          <Link to='/about'>
          <button
              type="button"
              className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 bg-gradient-to-tr from-blue-200 to-white py-1 w-24 hover:text-white font-medium"
            >
              About
            </button>
          </Link>
          <Link to='/projects'>
            <button
              type="button"
              className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded-r-lg bg-gradient-to-br from-white to-blue-200 py-1 w-24 hover:text-white font-medium"
            >
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}