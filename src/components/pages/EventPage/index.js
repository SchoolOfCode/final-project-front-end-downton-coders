import React from "react";

import AttendingEventPageUser from "./attendingEventPageUser/AttendingEventPageUser";
import HeroEventUser from "./heroEventPageUser/heroeventuser"
import {useLocation} from "react-router-dom"
import randomData from "../../../travelData"
import ChatEventPage from "./chatEventPage/chatEventPage";
import Footer from "../../Footer/Footer.js";

function EventPage() {
    const location = useLocation();
    
    function rendering(){
        if(location.state!== null){
        const {input}=location.state; 
        const dataFromLanding =input.input;  
        return dataFromLanding
        }else{
            return randomData
        }
    }
    const DataToUse=rendering()
  
  return (<>
  <h1>This is Event Page</h1>
    <HeroEventUser DataToRender={DataToUse}/>
    <AttendingEventPageUser DataToRender={DataToUse}/>
    <ChatEventPage RandomData={randomData}/>
    <Footer />
  </>);

// import HeroEventUser from "./heroEventPageUser/heroeventuser";

// function EventPage() {
//   return (
//     <>
//       <h1>This is Event Page</h1>
//       <HeroEventUser />
//     </>
//   );

}

export default EventPage;
