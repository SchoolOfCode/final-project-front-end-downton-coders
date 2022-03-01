import React, { useState } from "react";
import Aboutus from "./About-Us/index";
import LandingPageSlider from "./landingPageSlider/landingPageSlider";
import Footer from "../../Footer/Footer.js";
import LoginPopup from "../../LoginPopup";
// import { API_URL } from "../../../config";

import Hero from "../../Hero";

function LandingPage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div id="landingPageWrapper">
      <LoginPopup showModal={showLoginPopup} setShowModal={setShowLoginPopup} />
      <Hero showModal={showLoginPopup} setShowModal={setShowLoginPopup} />

      <LandingPageSlider />
      <Aboutus />
      <Footer />

    </div>
  );
}

export default LandingPage;
