import React, { useState } from 'react';
import './header.css'; 
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaGithub, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className="responsive" onClick={toggleMenu}>
        {isMenuOpen ? null : <FaBars className='icons' />} {/* Display bars only when menu is closed */}
      </div>
      { isMenuOpen &&
        <div className='responsive-nav'>
          <div className="responsive" onClick={toggleMenu}> {/* Close icon within responsive-nav */}
            <FaTimes className='icons' />
          </div>
          <Link to='/' onClick={toggleMenu}>Home</Link>
          <Link to='/about' onClick={toggleMenu}>About</Link>
          <Link to='/experience' onClick={toggleMenu}>Experience</Link>
          <Link to='/projects' onClick={toggleMenu}>Projects</Link>
          <Link to='/contact' onClick={toggleMenu}>Contact</Link>
        </div>
      }
        <div className='socials'>
        <FaTwitter className='icons' />
        <FaWhatsapp className='icons' />
        <FaGithub className='icons' />
        <FaFacebook className='icons' />
      </div>
    </div>
  );
};

export default Header;
