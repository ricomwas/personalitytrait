import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <div name='home' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-bold'>
      <h1 className='w-full text-3xl font-bold text-[#003865]'>Personality Trait</h1>

      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="home">Home</Link></li>
        <li className='p-4'><Link to="about">About</Link></li>
        <li className='p-4'><Link to="test">Tests</Link></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000] ease-in-out duration-500 text-white' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#fff] m-4'>Personality Trait</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Test</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar