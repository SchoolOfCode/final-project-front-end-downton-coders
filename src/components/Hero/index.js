import React from "react";
import "./styles.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import {FaSignInAlt, FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";

import LoginButton from "../LoginButton";

function Hero({ userLogin, showModal, setShowModal }) {
>>>>>>> main

  return (
    <>
      <div className="heroWrapper">
        <header className="nav-container">
          <img src="logo2.png" width="100px" height="70px" alt="" />
          <nav className="navlink">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <LoginButton handleFormPage={() => setShowModal(true)} />
              </li>
            </ul>
            User:
            {userLogin.username}
          </nav>
        </header>


    <header className = "nav-container">
    <img  src ='logo2.png' className="nav-logo" width ='100px' height ="70px"  alt ="experience logo"/>
      <nav className = "navlink">
        <ul>
<<<<<<< HEAD
          <li><a href="/about" className = "nav-about">About</a></li>
          <li><a href="/login" className = "nav-login">Login</a></li>
        </ul>
      </nav>
    </header> 
     
      <div class="landing-container">
          <p className="landing-container-content">
            <h1 className="line">Creating <text style={{color: "#7201a5"}}>connections</text></h1>
            <h1 className="line"> through shared </h1>
            <h1 className="line-2">experiences</h1>
          </p>
        <Link to="/main" className="link-to-main">
        <Button className="submit-button">GET STARTED</Button>
        </Link>
=======
          <Link to="/about">About</Link>
          <Link to="/login"><FaSignInAlt/> Login</Link>
          <Link to="/register"><FaUser/> Register</Link>
          
        
          

        </ul>
      </nav>
    </header> 
       <div className="landing-container">
          <div className="mainText-centered">
            <h1 className="line">
              Creating <span style={{ color: "#7201a5" }}>connections</span>
            </h1>

            <h1 className="line"> through shared </h1>
            <h1 className="line-2">experiences</h1>
          </div>
          <Button className="submit-button">GET STARTED</Button>
        </div>
>>>>>>> main
      </div>
    </>
  );
}
export default Hero;
