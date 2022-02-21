import React from 'react'

import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
    
      
            <Link href = "/about">About Us</Link> 
            <Link href = "/login">Login</Link> 
       
    </nav>

  )
}

export default Navbar
