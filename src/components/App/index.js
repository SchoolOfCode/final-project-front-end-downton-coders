import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";
import EventPage from "../pages/EventPage";
import DashbroadPage from "../pages/DashbroadPage";


import "./App.css";


function App() {
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  async function getEventData() {
    setLoading(true);
    const response = await fetch("https://xpeerience.herokuapp.com/events");
    const data = await response.json();
    setEventData(data);
    console.log("This is the event data", eventData);
    setLoading(false);
  }

  // getEventData();

  useEffect(() => {
    getEventData()
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvent = eventData.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="main" element={<MainPage eventsPerPage={eventsPerPage} numbersOfEvents={eventData.length} paginate={paginate} indexLastEvent={indexOfLastEvent} indexFirstEvent={indexOfFirstEvent} currentEvent={currentEvent} eventData={eventData} />} />
      <Route path="event" element={<EventPage />} />
      <Route path="dashbroad" element={<DashbroadPage />} />
    </Routes>



  );
}

export default App;

// numbersOfEvents = {eventData.length}