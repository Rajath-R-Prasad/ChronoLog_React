import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink, Link } from 'react-router'

function Header() {
    const [curr_time,setcurrtime]=useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
          setcurrtime(new Date());
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    const formattedTime=curr_time.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit',
        hour12:true
    })
    const formattedDate=curr_time.toLocaleDateString('en-GB',{
        weekday:'long',
        day:'2-digit',
        month:'long',
        year:'numeric'
    })

  return (
    <>
    <nav
    className='w-[100vw] h-[15vh] md:h-[10vh] px-2 md:py-2 flex justify-evenly md:justify-around items-center flex-wrap   bg-opacity-50 bg-zinc-400  backdrop-blur-lg sticky top-0 left-0 z-50'>
        <img src="public/logo.jpg" alt="Logo" className='w-16 md:w-20 brightness-125 backdrop-blur-md rounded-lg' />
        <div className='flex   justify-around md:w-[20vw]'>
        
        <NavLink
        to='/home' end 
        className={({isActive})=>
            `p-2 w-20 md:w-28 text-center poppins-light text-sm md:text-lg text-white  rounded-md  active:bg-zinc-400  ${isActive ? "bg-orange-500  hover:bg-orange-600" : "bg-none  hover:text-orange-500  hover:font-bold"} `}
        >Home</NavLink>
        
        <NavLink
        to='timeline'
        className={({isActive})=>
             `p-2 w-20 md:w-28 text-white text-center poppins-light text-sm md:text-lg  active:bg-zinc-400 ${isActive? "bg-orange-500 hover:bg-orange-600"  : "bg-none hover:text-orange-500  hover:font-bold"}  rounded-md ` 
        }
        >Timeline</NavLink>

       </div>

        <div
        className='flex w-[70vw] md:w-[20vw] text-xs md:text-[16px] justify-around shadow-md hover:shadow-neutral-600 hover:scale-105 text-white shadow-neutral-500 p-3 border nunito-600 border-black rounded-lg'
        ><span>{formattedDate} </span>
          <span>{formattedTime}</span>
        </div>
       
    </nav> 
    </>
  )
}

export default Header
