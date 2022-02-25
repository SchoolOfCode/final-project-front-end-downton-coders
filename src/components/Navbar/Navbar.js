import React from 'react'
import "../Navbar/navbar.css"
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    
    <nav className='container'>
    <div className='logo'>
      <img  src ='/logo2.png' width ='100px' height ="70px"  alt =""/>
    </div>
    
    <div className="navlink">
    <ul>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
        </ul>
    </div>
    </nav>

  )
}

export default Navbar
