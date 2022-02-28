import styles from "./attendingEventJoinUser.module.css"
import {useState} from "react"

function AttendingEventJoinUser(){

    const [attendStatus,setAttendStatus]= useState("Attend Event")
    const [going, setGoing] = useState(0)
    

    function attendingStatus(){
        
        if(attendStatus === "Attend Event"){
            setAttendStatus("Going")
            setGoing(going+1)
        } else{
            setAttendStatus("Attend Event")
            setGoing(going-1)
        }
    }
 

    return(
        <button onClick={attendingStatus} className={styles.attendingEventJoin} data-testid="AttendingEventJointUserTesting">{attendStatus}</button>
    )
}

export default AttendingEventJoinUser