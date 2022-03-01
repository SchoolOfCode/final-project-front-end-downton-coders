import React from "react";
import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm/SubmitForm";
import Navbar from "../../Navbar/Navbar";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import "./styles.css"
import Footer from "../../Footer/Footer.js";
import JoinChatButton from "../../JoinChatButton/JoinChatButton.js";


function MainPage() {
  return (
  <>
    <Navbar />
    <LandingPageSlider />
    <SubmitForm />
    <JoinChatButton/>
    <Footer/>
  </>
  )

// import "./styles.css";

// function MainPage() {
//   return (
//     <>
//       <Navbar />
//       <LandingPageSlider />
//       <SubmitForm />
//     </>
//   );

}

export default MainPage;
