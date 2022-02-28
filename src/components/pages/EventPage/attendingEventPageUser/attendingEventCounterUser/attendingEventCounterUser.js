import styles from "./attendingEventCounterUser.module.css"

function AttendingEventCounterUser({dataAttend}){
    const numAttending = dataAttend
    return(<>
        <div className={styles.attendingEventCounter} data-testid="attendingEventCounterUserTesting">
            <p className={styles.attendingTitle}>
                Atttending
            </p>
            <p className={styles.attendingNumber}>
                {numAttending}
            </p>
        </div>
    </>)
}

export default AttendingEventCounterUser;