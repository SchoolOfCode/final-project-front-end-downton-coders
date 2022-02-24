import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../../Form/Form";
import Navbar from "../../Navbar/Navbar";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import "./styles.css"

function MainPage() {
  return (
  <>
    <Navbar />
    <LandingPageSlider />
    <Form />
  </>
  )
}

export default MainPage;
