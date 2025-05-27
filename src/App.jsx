import React from 'react'
import Mainroute from './route/Mainroute'
import Navbar from './components/Navbar'
import { GiFruitBowl } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
const App = () => {
    
     
  return (
    <div className='px-[5%] py-4 w-screen h-screen bg-[#1e682f] text-[#f7f7f7] font-[mono]'>
      
      <div className='flex justify-between mb-5'>
        <h1 className='text-xl font-[mono] font-black uppercase flex  md:text-2xl'><span><GiFruitBowl  className='text-2xl md:text-3xl'/></span>Recipix</h1>
         <Navbar></Navbar>
           <GiHamburgerMenu className='text-2xl md:hidden' onClick={()=>alert("menu button was clickde")} />

        </div>
       <Mainroute></Mainroute>
    </div>
  )
}

export default App
