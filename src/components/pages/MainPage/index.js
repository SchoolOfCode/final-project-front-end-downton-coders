import React from "react";
<<<<<<< HEAD
//import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm";
import Navbar from "../../Navbar/index";
=======
import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm/SubmitForm";
import Navbar from "../../Navbar/Navbar";
import JoinChatButton from "../../JoinChatButton/JoinChatButton.js";
>>>>>>> main
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";


import "./styles.css"
import Footer from "../../Footer/Footer.js";




function MainPage() {
  return (
  <>
    <Navbar />
<<<<<<< HEAD
    <SubmitForm />
    <LandingPageSlider />
=======
    <JoinChatButton/>
    <LandingPageSlider />
    <SubmitForm />
    <Footer/>
>>>>>>> main
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
