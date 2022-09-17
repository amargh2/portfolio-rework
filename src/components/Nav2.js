import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <div class="flex justify-center py-2">
      <span className="isolate inline-flex rounded-md shadow-sm">
        <Link to='/about'>
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          >
            About Me
          </button>
        </Link>
        <Link to='/projects'>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          >
            My Projects
          </button>
        </Link>
        <Link to='/blog'>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          >
            Blog
          </button>
        </Link>
      </span>
    </div>
  )
}