import React from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const location = useLocation();


  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'>Kreesta</Link>
      </div>
      <div className="links">
            <Link to='/' className={location.pathname === '/home' ? 'link-active': 'nav-link'}>Home</Link>
            <Link to='/about' className={location.pathname === '/about' ? 'link-active': 'nav-link'}>About</Link>
            <Link to='/experience' className={location.pathname === '/experience' ? 'link-active': 'nav-link'}>Experience</Link>
            <Link to='/projects' className={location.pathname === '/projects' ? 'link-active': 'nav-link'}>Projects</Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'link-active': 'nav-link'}>Contact</Link> 
      </div>
    </div>
  )
}

export default Navbar
