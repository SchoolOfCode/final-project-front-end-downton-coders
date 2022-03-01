import React from 'react'
import "../Navbar/navbar.css"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {useNavigate, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice.js'

//import { Link } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    
    <nav className='nav-container'>
    <div className='logo'>
      <img  src ='/logo2.png' width ='100px' height ="70px"  alt ="/#"/>
    </div>
    
    <div className="navlink">
    <ul>
          <li><a href="/about">About</a></li>

         
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}

        </ul>
    </div>
    </nav>

  )
}

export default Navbar
