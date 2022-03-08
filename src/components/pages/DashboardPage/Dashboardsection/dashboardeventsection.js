import styles from "./dashboardeventsection.module.css"
import DashBoardHeader from "./dashboardheader/dashboardheader"
import Dashboardgoingsection from "./goingSection/dashboardgoingsection"
import UserCreateEvent from "./userCreateEvent/userCreateEvent"

function DashboardEventSection({DummyData}){
    return(<>
        <div className={styles.dashboardEventSectionContainer}>
            <div className={styles.dashboardEventSection}>
                <DashBoardHeader/>
                <Dashboardgoingsection DummyData={DummyData}/>
            </div>
            <div className={styles.eventdashboardUserSection}>
                <div>
                    <UserCreateEvent DummyData={DummyData}/>
                </div>
            </div>
        </div>
    </>)
}

export default DashboardEventSection