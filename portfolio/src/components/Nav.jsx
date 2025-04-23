import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

    <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">My Project</Link>
        <Link to="/contact">Contact Us</Link>
    </nav>
      
    </>
  )
}

export default Nav
