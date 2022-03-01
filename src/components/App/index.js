import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";
import EventPage from "../pages/EventPage";
import DashbroadPage from "../pages/DashbroadPage";


import "./App.css";


function App() {

  const [eventData, setEventData] = useState(null);
  
  async function getEventData () {
    const response = await fetch ("https://xpeerience.herokuapp.com/events");
    console.log(response.json);
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
      <Route path="main" element={<MainPage />} />
      <Route path="event" element={<EventPage />} />
      <Route path="dashbroad" element={<DashbroadPage />} />
    </Routes>
    


  );
}

export default App;
