import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./hero.module.css";

import { Button } from 'react-bootstrap'
import {FaSignInAlt, FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";


function Hero({ userLogin, showModal, setShowModal }) {

  return (
    <>
      <div className={styles.heroWrapper}>

    <header className = {styles.navContainer}>
    <img  src ='logo2.png' className={styles.navLogo} alt ="experience logo"/>
      <nav className = "navlink ">
          <Link to="/about" className={styles.navAbout}> About</Link>
          <Link to="/login" className={styles.navLogin} ><FaSignInAlt className={styles.reactIcons} /> Login</Link>
          <Link to="/register"><FaUser className={styles.navRegister} /> Register</Link>
      </nav>
    </header> 
     
      <div class={styles.landingContainer}>
          <p className={styles.landingContainerContent}>
            <h1 className={styles.line}>Creating <text style={{color: "#7201a5"}}>connections</text></h1>
            <h1 className={styles.line}> through shared </h1>
            <h1 className={styles.line2}>experiences</h1>
          </p>
        <Link to="/main" className={styles.linkToMain}>
        <Button className={styles.submitButton}>GET STARTED</Button>
        </Link>
    </div>

    </div>

    </>
  
  );
}

export default Hero;
