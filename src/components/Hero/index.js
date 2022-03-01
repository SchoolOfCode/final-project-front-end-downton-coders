import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import {FaSignInAlt, FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
    <div className="heroWrapper">

    <header className = "nav-container">
    <img  src ='logo2.png' width ='100px' height ="70px"  alt ="experience logo"/>
      <nav className = "navlink">
        <ul>
          <Link to="/about">About</Link>
          <Link to="/login"><FaSignInAlt/> Login</Link>
          <Link to="/register"><FaUser/> Register</Link>
          
        
          

        </ul>
      </nav>
    </header> 
     
      <div class="landing-container">
          <p className="mainText-centered">
            <h1 className="line">Creating <text style={{color: "#7201a5"}}>connections</text></h1>
            <h1 className="line"> through shared </h1>
            <h1 className="line-2">experiences</h1>
          </p>
        <Button className="submit-button">GET STARTED</Button>
      </div>
    </div>
  </>
  );
}
export default Hero;
