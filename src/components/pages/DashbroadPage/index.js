// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // eslint-disable-next-line no-unused-vars
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../../spinner/Spinner.js";

import Navbar from "../../Navbar";
import { useAuthState } from "../../Context/index.js";
import DashboardEventSection from "./Dashboardsection/dashboardeventsection";
import Profile from "./profile/profile.js";
//import dummyData from "../../../travelData";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
function DashbroadPage() {
  const userDetails = useAuthState(); //read user details from context

  return (
    <>
      <Navbar />

      {/* {userDetails.username} */}
      <div className={styles.Container}>
        <div className={styles.mainContainer}>
          <Profile />
          <DashboardEventSection />
        </div>
      </div>
    </>
  );
}

export default DashbroadPage;
