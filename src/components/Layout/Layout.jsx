import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'

function Layout() {
  return (
    <>
  
    <Header/>
    <main className=' mx-3 p-5'>
    <Outlet/>
    </main>
    </>
  )
}

export default Layout
