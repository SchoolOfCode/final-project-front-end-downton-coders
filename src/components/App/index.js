import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainPage from "../pages/MainPage";
import EventPage from "../pages/EventPage";
import DashbroadPage from "../pages/DashbroadPage";
import io from "socket.io-client";
import { AuthProvider } from "../Context/index.js";


import "./App.css";

function App() {
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);
  const [chatUser, setChatUser] = useState({name: "", message: ""});
  const [chatSection, setChatSection] = useState([]);
  // const chat = useRef(0)

  const [pageName, setPageName ] = useState("");

  const [locationToSearch, setLocationToSearch] = useState("");


  const socketRef = useRef();

  // const socket = io('https://xpeerience.herokuapp.com/', {transports: ['websocket']});


  // CHAT FUNCTIONS
  useEffect(
    () => {
      try {
      console.log("Connecting chat")
      socketRef.current = io('xpeerience.herokuapp.com/' );
     
      // http://localhost:5000/
      // https://xpeerience.herokuapp.com/
      // {transports: ['websocket']}
      // https://test-chat-brr.herokuapp.com

      socketRef.current.on("message", ({name, message}) => {
        setChatSection([...chatSection, {name, message}]);

        console.log("Current chat section", chatSection);
      })
      return () => socketRef.current.disconnect()
      // return () => {
      //   console.log("Disconnecting now.");
      //   socketRef.current.disconnect()
      // }
    } catch (err) {
      console.log(err);
    }
    }
  , [chatSection]);

  // CHAT FUNCTIONS
  const onTextChange = (e) => {
    setChatUser({...chatUser, [e.target.name]: e.target.value});
    console.log(chatUser);
  };

  
  // CHAT FUNCTIONS
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = chatUser;
    socketRef.current.emit("message", {name, message});
    
    setChatUser({message: "", name});
  }

  
  // CHAT FUNCTIONS
  const renderChat = () => {
    console.log("Current chatSection", chatSection);
    return chatSection.map(({name, message}, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  async function getEventData() {
    setLoading(true);
    const response = await fetch("https://xpeerience.herokuapp.com/events");
    const data = await response.json();
    setEventData(data);
    // console.log("This is the event data", eventData);
    setLoading(false);
  }

  // getEventData();

  useEffect(() => {
    getEventData();
  }, []);


  // FILTER EVENTS BY CATEGORY 
  async function handleCategoryClick(e) {
    let categoryToFilterBy;
    if (e.target.alt) {
      // console.log(e.target.alt);
       categoryToFilterBy = e.target.alt;
    } else {
       categoryToFilterBy = e.target.childNodes[0].data;
    }
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({ category: categoryToFilterBy })
    }
    // console.log("This is the body: ", options.body)
    const response = await fetch("https://xpeerience.herokuapp.com/events/searchcategory", options);
    const data = await response.json();
    // console.log("This is the data retrieved with category" , data);
    setEventData(data);
    setLoading(false);
  }

  // FILTER EVENTS BY LOCATION
  async function handleSearchClick() {
    // console.log("This is the location", locationToSearch);
    setLoading(true);
    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({ location: locationToSearch })
    }
    // console.log("This is the body: ", options.body)
    const response = await fetch("https://xpeerience.herokuapp.com/events/searchlocation", options);
    const data = await response.json();
    // console.log("This is the data retrieved with location" , data);
    setEventData(data);
    setLoading(false);
  }

  const handleSearchOnChange = (e) => {
    setLocationToSearch(e.target.value);
  }
  

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvent = eventData.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="main" element={<MainPage eventsPerPage={eventsPerPage} numbersOfEvents={eventData.length} paginate={paginate} indexLastEvent={indexOfLastEvent} indexFirstEvent={indexOfFirstEvent} currentEvent={currentEvent} eventData={eventData} onMessageSubmit={onMessageSubmit} onTextChange={onTextChange} renderChat={renderChat} chatUser={chatUser} locationToSearch={locationToSearch} handleSearchOnChange={handleSearchOnChange} handleSearchClick={handleSearchClick} handleCategoryClick={handleCategoryClick} />} />
  
        <Route path="event" element={<EventPage />} />
        <Route path="dashbroad" element={<DashbroadPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;


