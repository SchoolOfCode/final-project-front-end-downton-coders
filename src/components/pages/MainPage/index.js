import React from "react";
//import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm";
import Navbar from "../../Navbar/index";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";


import "./styles.css"



function MainPage() {
  return (
  <>
    <Navbar />
    <SubmitForm />
    <LandingPageSlider />
  </>
  )
}

export default MainPage;
