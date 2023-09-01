import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Root = () => {
  return (
    <div className='grid grid-rows-layout h-screen w-full'>
        <Header/>
        <main className='container mx-auto py-4'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Root