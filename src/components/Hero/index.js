import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LoginButton from "../LoginButton";

function Hero({ userLogin, showModal, setShowModal }) {
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
    <img  src ='logo2.png' width ='100px' height ="70px"  alt ="experience logo"/>
      <nav className = "navlink">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
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
      </div>
    </>
  );
}
export default Hero;
