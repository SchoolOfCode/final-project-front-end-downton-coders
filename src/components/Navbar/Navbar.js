import React from 'react'
import "../Navbar/navbar.css"
//import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    
    <nav className='nav-container'>
    <div className='logo'>
      <img  src ='/logo2.png' width ='100px' height ="70px"  alt ="/#"/>
    </div>
    
    <div className="navlink">
    <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
    </div>
    </nav>

  )
}

export default Navbar
