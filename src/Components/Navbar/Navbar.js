import React from 'react'
import "./Navbar.css" 

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-heading'>
        <img src='space-logo.png' alt='logo'></img>
         <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <a link = '#'>Rockets</a>
        <a link = '#'>Mission </a>
        <a link = '#'> |</a>
        <a link = '#'>My Profile</a>
      </nav>
     

    </div>
  )
}
