import React, { useState } from 'react'

const Navbar = () => {

  const [isShowNav, setIsShowNav] = useState(false)

  const handleShowNav = () => {
    setIsShowNav(!isShowNav)
  }

  return (
    <header className='flex justify-between py-4 px-2 text-2xl text-white items-center md:px-4 md:py-0 fixed top-0 left-0 w-full z-30'>
      <h1 className='font-bold'>Robin.W</h1>

      <i onClick={handleShowNav} className='bx bx-menu-alt-right text-gray-300 text-3xl cursor-pointer md:hidden'></i>

      <nav className={`text-white absolute top-full ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg gap-2 duration-200 md:static md:flex md:w-auto`}>
        <a className='hover:bg-violet-700 p-4 duration-200 pl-2' href="#">Experience</a>
        <a className='hover:bg-violet-700 p-4 duration-200 pl-2' href="#">Work</a>
        <a className='hover:bg-violet-700 p-4 duration-200 pl-2' href="#">Photography</a>
        <a className='hover:bg-violet-700 p-4 duration-200 pl-2' href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar