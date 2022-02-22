import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";
import EventPage from "../pages/EventPage";
import DashbroadPage from "../pages/DashbroadPage";

import "./App.css";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="event" element={<EventPage />} />
      <Route path="dashbroad" element={<DashbroadPage />} />
    </Routes>
    </>
  );
}

export default App;
