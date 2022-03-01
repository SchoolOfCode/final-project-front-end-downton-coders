import React from "react";

import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm"
import Navbar from "../../Navbar";
import JoinChatButton from "../../JoinChatButton/JoinChatButton.js";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
//import Pagination from "../../Pagination/Pagination"

import "./styles.css"
import Footer from "../../Footer/Footer.js";




function MainPage() {
  return (
  <>
    <Navbar />

    <JoinChatButton/>
    <LandingPageSlider />
    <SubmitForm />
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
