import React from "react";
import Navbar from "../../Navbar/Navbar";

import Aboutus from "./About-Us/index";


import Hero from "../../Hero";

function LandingPage() {
  return (

    <div id="landingPageWrapper">
 
     <Navbar />
    <h1>This is Landing Page</h1>
        <Hero />
        <Aboutus/>
    </div>

  );

}

export default LandingPage;
