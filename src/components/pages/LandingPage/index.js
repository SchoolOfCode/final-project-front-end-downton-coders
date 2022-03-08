import React, { useState } from "react";
import Aboutus from "./About-Us/index";
import LandingPageSlider from "./landingPageSlider/landingPageSlider";
import Footer from "../../Footer/Footer.js";
import LoginPopup from "../../LoginPopup";
import RegisterPopup from "../../RegisterPopup";
// import { API_URL } from "../../../config";

import Hero from "../../Hero";
import Navbar from "../../Navbar";


function LandingPage({ isLoggedIn}) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setRegisterPopup] = useState(false);
  const [currentPageName, setCurrentPageName] = useState("Landing Page");

 
  return (
    <div id="landingPageWrapper">
      <LoginPopup
        showModal={showLoginPopup}
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <RegisterPopup
        showModalRegister={showRegisterPopup}
        setShowModalRegister={setRegisterPopup}
      />
      {/* <Navbar
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
      /> */}
      <Hero
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
        currentPageName={currentPageName}
        isLoggedIn={isLoggedIn}
      />

      <LandingPageSlider />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default LandingPage;
