import React from "react";
import Aboutus from "./About-Us/index";
import LandingPageSlider from "./landingPageSlider/landingPageSlider";
import Footer from "../../Footer/Footer.js";


import Hero from "../../Hero";

function LandingPage() {
  return (

    <div id="landingPageWrapper">
        <Hero />
        <LandingPageSlider/>
        <Aboutus/>
        <Footer/>
    </div>

  );

}

export default LandingPage;
