import React from "react";
import "./styles.css";
import { useAuthDispatch, logout, useAuthState } from "../Context/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
// import { FaSignInAlt, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";

import LoginButton from "../LoginButton";

function Hero(props) {
  //{ userLogin, showModal, setShowModal }
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context
  console.log(userDetails);
  const handleLogout = () => {
    logout(dispatch); //call the logout action

    // props.history.push("/"); //navigate to landing page on logout
  };

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
                <LoginButton handleFormPage={() => props.setShowModal(true)} />
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
            Username:
            {userDetails ? userDetails.username : ""}
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
