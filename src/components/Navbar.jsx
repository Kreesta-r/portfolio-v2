import React from 'react';
import { useLocation , Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'>Kreesta</Link>  
      </div>
      <div className="links">
        <Link to='/' className={location.pathname === '/home' ? 'link-active': ''}>Home</Link>
        <Link to='/about' className={location.pathname === '/about' ? 'link-active': ''}>About</Link>
        <Link to='/experience' className={location.pathname === '/experience' ? 'link-active': ''}>Experience</Link>
        <Link to='/projects' className={location.pathname === '/projects' ? 'link-active': ''}>Projects</Link>
      </div>
    </div>
  );
}

export default Navbar;
