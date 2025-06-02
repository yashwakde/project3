import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
    
  return (
    <div className=' justify-start  gap-x-10  font-normal capitalize hidden md:flex font-[gilroy] items-center text-[1.5vw]   rounded-full  '>
      <NavLink to="/" className={(e)=>e.isActive?"text-yellow-200 ":"text-[#cfd6ff] "}>Home</NavLink>
      <NavLink to="/create-recipe" className={(e)=>e.isActive?"text-green-900 ":"text-[#d3d9f9]"}>create</NavLink>
      <NavLink to="/about" className={(e)=>e.isActive?"text-green-900 ":"text-[#cfd6ff]"}>About</NavLink>
      <NavLink to="/recipe" className={(e)=>e.isActive?"text-green-900 ":"text-[#e3e8ff]"}>Recipe</NavLink>
      <NavLink to="/fav" className={(e)=>e.isActive?"text-green-900 ":"text-[#e3e8ff]"}>favorite</NavLink>
    </div>
  )
}

export default Navbar
