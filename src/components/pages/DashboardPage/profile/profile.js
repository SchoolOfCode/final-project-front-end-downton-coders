import styles from "./profile.module.css"
function Profile(props){
    // const Dummy= DummyData[0];
console.log(props);
    // console.log(Dummy)
    return(<>
        <div className={styles.profileContainer}>
                <img className={styles.profileImg} src=""/>

                <div className={styles.inputStyle}>
                    <p></p>
                </div>

                <div className={styles.inputStyle}>
                    <p></p>
                </div>

                <div className={styles.inputStyle}>
                    <p></p>
                </div>
        </div>
    </>)
}

export default Profile;