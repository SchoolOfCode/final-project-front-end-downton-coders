import { useAuthState } from "../../Context/index.js";
import DashboardEventSection from "./Dashboardsection/dashboardeventsection"
import Profile from "./profile/profile.js";
import dummyData from "../../../travelData"
import styles from "./styles.module.css"
function DashboardPage() {
  const userDetails = useAuthState(); //read user details from context

  return (
    <>
      <h1>Dashboard</h1>
      <h2>User:  {(userDetails.username) ? userDetails.username : "Dummy User"}</h2>
    
      <div className={styles.Container}>
        <div className={styles.mainContainer}>
          <Profile userDetails={userDetails}/>
          <DashboardEventSection DummyData={dummyData}/>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
