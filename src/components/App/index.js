import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";
import EventPage from "../pages/EventPage";
import DashbroadPage from "../pages/DashbroadPage";


import "./App.css";


function App() {

  const [eventData, setEventData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  async function getEventData () {
    const response = await fetch ("https://xpeerience.herokuapp.com/events");
    const data = await response.json();
    setEventData(data);
    console.log(eventData); 
  }
  // getEventData();

useEffect(() => {
  getEventData()
}, []);

  return (
 
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="main" element={<MainPage eventsPerPage = {6} numbersOfEvents = {eventData.length} paginate = {paginate} />} />
      <Route path="event" element={<EventPage />} />
      <Route path="dashbroad" element={<DashbroadPage />} />
    </Routes>
    


  );
}

export default App;
