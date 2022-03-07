import React from "react";
import styles from "./Footer.module.css";
import SOClogo from "../Footer/SOClogo.jpg"
import LinkedInLogo from "../Footer/LinkdInLogo.jpg"
import TwitterLogo from "../Footer/TwitterLogo.jpg"
import EmailLogo from "../Footer/EmailLogo.jpg"
import FacebookLogo from "../Footer/FacebookLogo.jpg"



function Footer() {
    return(
      
  <div className={styles.FooterContainer}>

    <div className={styles.FooterLeft}>
  <div className={styles.FooterLogo}>
    <img src={SOClogo} alt="School of Code logo" className={styles.socLogo}/>
</div>
         

      <div className={styles.FooterPoweredByText}>
      <h4><span className={styles.blockSpan}>Powered By</span> <span className={styles.blockSpan}>School of Code</span></h4>
      </div>
      </div>
     
     <div className={styles.FooterRight}>
       <div className="FooterConnectText">
       <h4>Connect with us</h4>
       </div>

      <div className={styles.FooterMediaIcon}>
      <img src={TwitterLogo} alt="Twitter logo"/>
      <img src={LinkedInLogo} alt="Linkedin Logo"/>
      <img src={EmailLogo} alt="Email Logo"/>
      <img src={FacebookLogo} alt="Facebook Logo"/>
     </div>
     </div>
       </div>
  
    
    )
}
  
  export default Footer;
