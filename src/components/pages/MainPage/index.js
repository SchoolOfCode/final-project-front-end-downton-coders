import React from "react";
import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm/SubmitForm"
import Navbar from "../../Navbar/Navbar";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import "./styles.css"

function MainPage() {
  return (
  <>
    <Navbar />
    <LandingPageSlider />
    <SubmitForm />
  </>
  )
}

export default MainPage;
