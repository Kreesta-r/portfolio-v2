import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen) // Use an arrow function here

  return (
    <div className='header'>
            <div className="header-container">
            <div className="logo"><Link to='/'>Kreesta</Link></div>
                <div className="hamburger" onClick={toggleOpen}>
                    {isOpen ? <FaTimes/>: <FaBars/>}
                </div>
            </div>
      {isOpen && <div className='res-nav'>
            <Link to='/' onClick={toggleOpen}>Home</Link>
            <Link to='/about' onClick={toggleOpen}>About</Link>
            <Link to='/experience' onClick={toggleOpen}>Experience</Link>
            <Link to='/projects' onClick={toggleOpen}>Projects</Link>
            <Link to='/contact' onClick={toggleOpen}>Contact</Link>
        </div>}
    </div>
  )
}

export default Header
