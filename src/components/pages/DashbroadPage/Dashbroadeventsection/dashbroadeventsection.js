import styles from "./dashbroadeventsection.module.css"
import DashBroadHeader from "./dashbroadheader/dashbroadheader"
import Dashboardgoingsection from "./DashbroadgoingSection/dashbroadgoingsection"

function DashbroadEventSection({DummyData}){
    return(<>
        <div className={styles.dashbroadEventSectionContainer}>
            <div className={styles.dashbroadEventSection}>
                <DashBroadHeader/>
                <Dashboardgoingsection DummyData={DummyData}/>
            </div>
            <div className={styles.eventdashbroadUserSection}>
                <h1>Hello world</h1>
            </div>
        </div>
    </>)
}

export default DashbroadEventSection