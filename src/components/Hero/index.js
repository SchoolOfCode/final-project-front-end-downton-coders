import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./hero.module.css";

import { Button } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
//import { Link } from "react-router-dom";

import { useAuthDispatch, logout, useAuthState } from "../Context/index.js";

import LoginButton from "../LoginButton";
import RegisterButton from "../RegisterButton/registerButton";

// function Hero({ userLogin, showModal, setShowModal }) {

//   return (
//     <>
//       <div className={styles.heroWrapper}>

//     <header className = {styles.navContainer}>
//     <img  src ='logo2.png' className={styles.navLogo} alt ="experience logo"/>
//       <nav className = "navlink ">
//           <Link to="/about" className={styles.navAbout}> About</Link>
//           <Link to="/login" className={styles.navLogin} ><FaSignInAlt className={styles.reactIcons} /> Login</Link>
//           <Link to="/register"><FaUser className={styles.navRegister} /> Register</Link>
//       </nav>
//     </header>

//       <div class={styles.landingContainer}>
//           <p className={styles.landingContainerContent}>
//             <h1 className={styles.line}>Creating <text style={{color: "#7201a5"}}>connections</text></h1>
//             <h1 className={styles.line}> through shared </h1>
//             <h1 className={styles.line2}>experiences</h1>
//           </p>
//         <Link to="/main" className={styles.linkToMain}>
//         <Button className={styles.submitButton}>GET STARTED</Button>
//         </Link>
//     </div>

//     </div>

function Hero({ userLogin, showModal, setShowModal }) {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context
  console.log(userDetails);
  const handleLogout = () => {
    logout(dispatch); //call the logout action

    // props.history.push("/"); //navigate to landing page on logout
  };

  return (
    <>
      <div className={styles.heroWrapper}>
        <header className={styles.navContainer}>
          <img
            src="logo2.png"
            className={styles.navLogo}
            width="100px"
            height="70px"
            alt="experience logo"
          />
          <nav className="navlink">
            <ul>
              <li>
                <a href="/about" className={styles.navAbout}>
                  About
                </a>
              </li>
              <li>
                <LoginButton
                  className={styles.navLogin}
                  handleFormPage={() => setShowModal(true)}
                >
                  <FaSignInAlt className={styles.reactIcons} />
                  Login
                </LoginButton>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <FaSignOutAlt />
                  Signout
                </button>
              </li>
            </ul>
            Username:
            {userDetails ? userDetails.username : ""}
            <ul>
              <li>
                <RegisterButton handleFormPage={() => setShowModal(true)}>
                  <FaUser className={styles.navRegister} />
                  Register
                </RegisterButton>
              </li>
              {userDetails ? userDetails.user : ""}
            </ul>
          </nav>
        </header>

        <div class={styles.landingContainer}>
          <div className={styles.landingContainerContent}>
            <h1 className={styles.line}>
              Creating <span style={{ color: "#7201a5" }}>connections</span>
            </h1>
            <h1 className={styles.line}> through shared </h1>
            <h1 className={styles.line2}>experiences</h1>
          </div>

          <Button className={styles.submitButton}>GET STARTED</Button>

          {/* <Link to="/main" className="link-to-main">
        <Button className="submit-button">GET STARTED</Button>
        </Link> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
