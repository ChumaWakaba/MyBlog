import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-500 text-white py-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='font-semibold text-4xl'>Blogger Hub</h1>
            <nav>
                <ul className=' flex gap-6 items-center text-lg font-medium'>
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/user-blog">My Blogs</Link>
                    <Link to="/add-blog">New Entry</Link>
                </ul>
            </nav>
            <div className=' flex gap-6 items-center font-medium'>
                <button className='bg-slate-800 px-3 py-2 rounded-full'><Link to ='/author'>Login</Link></button>
                <button className='bg-slate-800 px-3 py-2 rounded-full'><Link to ='/author'>Signup</Link></button>
                <button className='bg-slate-800 px-3 py-2 rounded-full'><Link to ='/author'>Logout</Link></button>
            </div>
        </div>
    </header>
  )
}

export default Header