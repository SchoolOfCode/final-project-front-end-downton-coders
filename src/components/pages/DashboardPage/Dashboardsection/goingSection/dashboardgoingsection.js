import styles from "./dashboardgoingsection.module.css"
import DashboardGoingSectionTile from "./DashboardgoingSectiontile/dashboardgoingsection";
function Dashboardgoingsection({DummyData}){
    return(<>
        <div className={styles.dashboardgoingsection}>
            <DashboardGoingSectionTile DummyData={DummyData}/>
        </div>
    </>)
}

export default Dashboardgoingsection;