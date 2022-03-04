import styles from "./dashbroadeventsection.module.css"
import DashBroadHeader from "./dashbroadheader/dashbroadheader"
import Dashboardgoingsection from "./goingSection/dashbroadgoingsection"
import UserCreateEvent from "./userCreateEvent/userCreateEvent"

function DashbroadEventSection({DummyData}){
    return(<>
        <div className={styles.dashbroadEventSectionContainer}>
            <div className={styles.dashbroadEventSection}>
                <DashBroadHeader/>
                <Dashboardgoingsection DummyData={DummyData}/>
            </div>
            <div className={styles.eventdashbroadUserSection}>
                <div>
                    <UserCreateEvent DummyData={DummyData}/>
                </div>
            </div>
        </div>
    </>)
}

export default DashbroadEventSection