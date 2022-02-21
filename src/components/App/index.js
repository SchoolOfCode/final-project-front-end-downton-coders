import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";

import "./App.css";

function App() {
  return (
 
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="main" element={<MainPage />} />
        
      </Routes>

  );
}

export default App;
