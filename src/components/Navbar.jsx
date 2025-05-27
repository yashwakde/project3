import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
    
  return (
    <div className=' justify-start  gap-x-10 mb-0 font-normal capitalize hidden md:flex  items-center text-[1vw] bg-white py-2 px-1 rounded-full  '>
      <NavLink to="/" className={(e)=>e.isActive?"text-green-900 ":"text-[#1F2232] "}>Home</NavLink>
      <NavLink to="/create-recipe" className={(e)=>e.isActive?"text-green-900 ":"text-[#1F2232]"}>create</NavLink>
      <NavLink to="/about" className={(e)=>e.isActive?"text-green-900 ":"text-[#1F2232]"}>About</NavLink>
      <NavLink to="/recipe" className={(e)=>e.isActive?"text-green-900 ":"text-[#1F2232]"}>Recipe</NavLink>

    </div>
  )
}

export default Navbar
