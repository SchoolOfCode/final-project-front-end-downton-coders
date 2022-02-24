import React from "react";
import Aboutus from "./About-Us/index";
import LandingPageSlider from "./landingPageSlider/landingPageSlider";


import Hero from "../../Hero";

function LandingPage() {
  return (

    <div id="landingPageWrapper">
        <Hero />
        <LandingPageSlider/>
        <Aboutus/>
    </div>

  );

}

export default LandingPage;
