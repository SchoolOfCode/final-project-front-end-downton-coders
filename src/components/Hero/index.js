import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

function Hero() {
  return (
    <>
    <div className="heroWrapper">

    <header className = "nav-container">
    <img  src ='logo2.png' className="nav-logo" width ='100px' height ="70px"  alt ="experience logo"/>
      <nav className = "navlink">
        <ul>
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
      </div>
    </div>
  </>
  );
}
export default Hero;
