import React, { useState } from "react";

//import SubmitForm from "../../SubmitForm"
//import Navbar from "../../Navbar";
import JoinChatButton from "../../JoinChatButton/JoinChatButton.js";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import Pagination from "../../Pagination/Pagination";
import MainEventsSection from "../../MainEventsSection/index";
import "./styles.css";
import Footer from "../../Footer/Footer.js";
import { current } from "@reduxjs/toolkit";

//import { NavLink } from "react-router-dom";
// import SubmitForm from "../../SubmitForm";
import Navbar from "../../Navbar/index";

import { NavLink } from "react-router-dom";
import SubmitForm from "../../SubmitForm/SubmitForm";

import SearchBar from "../../SearchBar/SearchBar.js";
import LoginPopup from "../../LoginPopup";
import RegisterPopup from "../../RegisterPopup";

function MainPage({
  paginate,
  eventsPerPage,
  numbersOfEvents,
  indexLastEvent,
  indexFirstEvent,
  currentEvent,
  eventData,
}) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setRegisterPopup] = useState(false);
  return (
    <>
      <LoginPopup
        showModal={showLoginPopup}
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <RegisterPopup
        showModalRegister={showRegisterPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <Navbar
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <SubmitForm />
      <JoinChatButton />
      {/* <LandingPageSlider /> */}
      <SearchBar />
      <LandingPageSlider />
      <MainEventsSection
        indexLastEvent={indexLastEvent}
        indexFirstEvent={indexFirstEvent}
        currentEvent={currentEvent}
        eventData={eventData}
      />
      <Pagination
        paginate={paginate}
        eventsPerPage={eventsPerPage}
        numbersOfEvents={numbersOfEvents}
      />

      <Footer />
    </>
  );
}

export default MainPage;
