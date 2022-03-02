import styles from "./dashbroadgoingsection.module.css"
import DashbroadGoingSectionTile from "./DashbroadgoingSectiontile/dashbroadgoingsection";
function Dashboardgoingsection({DummyData}){
    return(<>
        <div className={styles.dashboardgoingsection}>
            <DashbroadGoingSectionTile DummyData={DummyData}/>
        </div>
    </>)
}

export default Dashboardgoingsection;