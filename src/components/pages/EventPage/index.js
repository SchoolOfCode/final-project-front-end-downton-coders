import React from "react";

import AttendingEventPageUser from "./attendingEventPageUser/AttendingEventPageUser";
import HeroEventUser from "./heroEventPageUser/heroeventuser"
import {useLocation} from "react-router-dom"
import randomData from "../../../travelData"
import ChatEventPage from "./chatEventPage/chatEventPage";
import Footer from "../../Footer/Footer.js";
import {useState,useEffect,useCallback} from "react";

function EventPage() {
    const location = useLocation();
    
    // function rendering(){
    //     if(location.state!== null){
    //     const {input}=location.state; 
    //     const dataFromLanding =input.input;  
        
    //     return dataFromLanding
    //     }else{
    //         return randomData
    //     }
    // }
   

    const handle = useCallback(() => {
      const hello=location
     if (hello.state !== null) {
       const { input } = hello.state;
       const dataFromLanding = input.input;

       return dataFromLanding;
     } else {
       return randomData;
     }
    }, [location]);
     const DataToUse = handle();
    console.log(randomData)
    // let firstRender = DataToUse.attendance_id.length;
    const [dataToRender, setDataToRender] = useState(randomData);
    const [dummyNum , setDummyNum] =useState(0)
    const [dummyNumCounter, setDummyNumCounter] = useState(0);
    const [dummyNumCounterNo, setDummyNumCounterNo] = useState(0);
    const [noAttending, setAttending] = useState(
      DataToUse.attendance_id.length
    );
    useEffect(() => {
      async function Database() {
        const response = await fetch(`https://xpeerience.herokuapp.com/events`);
        const data = await response.json();
        setDataToRender(data);
       
      }
      Database();

      async function NoAttending() {
        let eventID = DataToUse;
        const response = await fetch(
          `https://xpeerience.herokuapp.com/events/${eventID._id}`
        );
        const data = await response.json();
        setAttending(data[0].attendance_id.length);
        
      }
      NoAttending();

      if (dummyNumCounter === 1) {
        setDummyNumCounter(0);
      }
    }, [dummyNum, DataToUse, dummyNumCounter, handle]);

    // useEffect(() => {
    //   async function NoAttending() {
    //     let eventID = DataToUse;
    //     const response = await fetch(
    //       `https://xpeerience.herokuapp.com/events/${eventID._id}`
    //     );
    //     const data = await response.json();
    //     setAttending(data[0].attendance_id.length);
    //     if (dummyNumCounter === 1) {
    //       setDummyNumCounter(0);
    //     }
    //   }
    //   NoAttending();
    // }, [DataToUse, dummyNumCounter, handle]);

  return (
    <>
      <h1>This is Event Page</h1>
      <HeroEventUser DataToRender={DataToUse} />
      <AttendingEventPageUser
        DataToRender={DataToUse}
        setDummyNum={setDummyNum}
        setDummyNumCounter={setDummyNumCounter}
        noAttending={noAttending}
        setDummyNumCounterNo={setDummyNumCounterNo}
        dummyNumCounterNo={dummyNumCounterNo}
      />
      <ChatEventPage RandomData={dataToRender} />
      <Footer />
    </>
  );

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
