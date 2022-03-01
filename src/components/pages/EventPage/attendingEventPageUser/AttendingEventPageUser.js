import AttendingEventCounterUser from "./attendingEventCounterUser/attendingEventCounterUser";
import styles from "./AttendingEventPageUser.module.css"
import AttendingEventJoinUser from"./attendingEventJoinUser/attendingEventJoinUser"
import AttendingEventPriceUser from "./attendingEventPriceUser/attendingEventPriceuser";


function AttendingEventPageUser({DataToRender}){
    const data = DataToRender
    
    return(<>
        <div className={styles.attendingSectionContainer} data-testid="attenidngSectionContainer">
            <div className={styles.attendingSectionMainContainer}>
                <AttendingEventCounterUser dataAttend={data.id}/>
                <div className={styles.attendingGoingSection}>
                    <AttendingEventPriceUser dataprice={data.price}/>
                    <AttendingEventJoinUser/>
                </div>
            </div>
        </div>
    </>)
}

export default AttendingEventPageUser;