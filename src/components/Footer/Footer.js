import React from "react";
import styles from "./Footer.module.css";
import SOClogo from "../Footer/SOClogo.jpg"
import LinkdInLogo from "../Footer/LinkdInLogo.jpg"
import TwitterLogo from "../Footer/TwitterLogo.jpg"
import EmailLogo from "../Footer/EmailLogo.jpg"
import FacebookLogo from "../Footer/FacebookLogo.jpg"



function Footer() {
    return(
      
  <div className={styles.FooterContainer}>

    <div className={styles.FooterLeft}>
  <div className={styles.FooterLogo}>
    <img  src ={SOClogo} width ='200px' height ="200px" alt =""/>
</div>
         

      <div className={styles.FooterPoweredByText}>
      <h4>Powered By School of Code</h4>
      </div>
      </div>
     
     <div className={styles.FooterRight}>
       <div className="FooterConnectText">
       <h4>Connect with us</h4>
       </div>

      <div className={styles.FooterMediaIcon}>
      <img  src ={TwitterLogo} alt =""/>
      <img  src ={LinkdInLogo} alt =""/>
      <img  src ={EmailLogo} alt =""/>
      <img  src ={FacebookLogo} alt =""/>
     </div>
     </div>
       </div>
  
    
    )
}
  
  export default Footer;
