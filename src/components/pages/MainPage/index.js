import React from "react";



//import SubmitForm from "../../SubmitForm"
//import Navbar from "../../Navbar";
import JoinChatButton from "../../JoinChatButton/JoinChatButton.js";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import Pagination from "../../Pagination/Pagination"
import MainEventsSection from "../../MainEventsSection/index";
import "./styles.css"
import Footer from "../../Footer/Footer.js";
import { current } from "@reduxjs/toolkit";

//import { NavLink } from "react-router-dom";
// import SubmitForm from "../../SubmitForm";
import Navbar from "../../Navbar/index";

import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm/SubmitForm";

import SearchBar from "../../SearchBar/SearchBar.js";

function MainPage({paginate, eventsPerPage, numbersOfEvents, indexLastEvent, indexFirstEvent, currentEvent, eventData  }) {
  return (

  <>
    <Navbar />
    <SubmitForm />
    <JoinChatButton/>
    {/* <LandingPageSlider /> */}
      <SearchBar/>
    <LandingPageSlider />
    <MainEventsSection indexLastEvent={indexLastEvent} indexFirstEvent={indexFirstEvent} currentEvent={currentEvent} eventData={eventData} /> 
    <Pagination paginate={paginate} eventsPerPage={eventsPerPage} numbersOfEvents={numbersOfEvents} />
    
      <Footer/>
  </>
  )
  
}

export default MainPage;
