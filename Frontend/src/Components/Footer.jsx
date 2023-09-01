import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-500 text-white font-light text-lg text-center py-4'>
        <p>&copy; {new Date().getFullYear()} Blogger Hub, Inc. All rights reserved</p>
    </footer>
  )
}

export default Footer