// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // eslint-disable-next-line no-unused-vars
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../../spinner/Spinner.js";

import { useAuthState } from "../../Context/index.js";
import DashbroadEventSection from "./Dashbroadsection/dashbroadeventsection"
import Profile from "./profile/profile.js";
import dummyData from "../../../travelData"
import styles from "./styles.module.css"
function DashbroadPage() {
  const userDetails = useAuthState(); //read user details from context

  return (
    <>
      <h1>This is Dashbroad Page</h1>
      User:
      {userDetails.username}
      <div className={styles.Container}>
        <div className={styles.mainContainer}>
          <Profile DummyData={dummyData}/>
          <DashbroadEventSection DummyData={dummyData}/>
        </div>
      </div>
    </>
  );
}

export default DashbroadPage;
