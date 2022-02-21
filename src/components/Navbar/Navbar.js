import React from 'react'

import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    
    <nav className='container'>
    <div className='img'>
      <img  src ='/logo.png' width ='100px' height ="70px" />
    </div>
    <NavLink to ='/about'>About Us</NavLink>  
    <NavLink to ='/login'>login</NavLink>  
   
    </nav>

  )
}

export default Navbar
