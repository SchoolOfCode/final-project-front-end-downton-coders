import React from "react";
import "./styles.css";




function Hero() {
  return (
    <>
    <div className="heroWrapper">

    <header className = "nav-container">
    <img  src ='logo2.png' width ='100px' height ="70px"  alt =""/>
      <nav className = "navlink">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    </header> 
     
      <div class="container">
          <p className="mainText centered">
            <h1 className="line">Creating <text style={{color: "#7201a5"}}>connections</text></h1>
            <h1 className="line"> through shared </h1>
            <h1 className="line-2">experiences</h1>
          </p>
        <button className="getStarted">GET STARTED</button>
      </div>
    </div>
  </>
  );
}
export default Hero;
