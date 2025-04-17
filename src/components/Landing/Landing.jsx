import React from 'react'
import { Link } from 'react-router'

function Landing() {
  return (
    <>
    <div
    className='h-lvh w-lvw flex flex-col justify-center items-center backdrop-brightness-75  bg-[url("/vertical_background.jpg")] md:bg-[url("/desktop_background")] bg-cover bg-fixed bg-center'>
    <img src="logo.jpeg" alt="logo" 
    className='w-[200px] md:w-[350px] rounded-t-full mix-blend-darken backdrop-blur-lg '/>
    <h1
    className='text-2xl md:text-4xl w-[200px] md:w-[350px] text-sky-950 font-semibold backdrop-blur-lg font-serif px-4 py-2 m-3 '>"Capture your thoughts one day at a time"</h1>
    <Link
    to='/home'
    className='px-4 py-6 w-[200px] md:w-[350px] text-white text-xl md:text-4xl font-sans md:font-serif text-center bg-sky-900 md:hover:bg-sky-950 rounded-b-full md:rounded-full hover:rounded-t-none hover:transition-all'>Get started</Link>
    </div>

    </>
  )
}

export default Landing
