import React from "react";

import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm"
import Navbar from "../../Navbar";
import ChatPopup from "../../ChatPopup/ChatPopup.js";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import Pagination from "../../Pagination/Pagination"
import MainEventsSection from "../../MainEventsSection/index";
import "./styles.css"
import Footer from "../../Footer/Footer.js";
import { current } from "@reduxjs/toolkit";




function MainPage({paginate, eventsPerPage, numbersOfEvents, indexLastEvent, indexFirstEvent, currentEvent, eventData, onMessageSubmit, onTextChange, renderChat, chatUser}) {
  return (
  <>
    <Navbar />
    <Pagination paginate={paginate} eventsPerPage={eventsPerPage} numbersOfEvents={numbersOfEvents} />
    <ChatPopup onMessageSubmit={onMessageSubmit} onTextChange={onTextChange} renderChat={renderChat} chatUser={chatUser}/>
    <MainEventsSection indexLastEvent={indexLastEvent} indexFirstEvent={indexFirstEvent} currentEvent={currentEvent} eventData={eventData} /> 
    {/* <LandingPageSlider /> */}
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
