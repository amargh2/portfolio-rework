export default function SideNav() {
    return(
      <div className="py-2 top-0 sticky justify-start drawer-side w-20">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu mx-2 overflow-y-auto w-80 bg-gradient-to-rb from-blue-200 to-white text-base-content flex justify-center flex-col gap-4">
          <div className='flex justify-center'><button className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded bg-gradient-to-tr from-blue-200 to-white py-4 w-40 hover:text-white font-semibold">Home</button></div>
          <div className='flex justify-center'><button className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded bg-gradient-to-tr from-blue-200 to-white py-4 w-40 hover:text-white font-semibold">Portfolio</button></div>
          <div className='flex justify-center'><button className="hover:bg-gradient-to-br hover:to-cyan-300 hover:from-red-300 rounded bg-gradient-to-tr from-blue-200 to-white py-4 w-40 hover:text-white font-semibold">Blog</button></div>
          </div>
        </div>
    )
    
}   
