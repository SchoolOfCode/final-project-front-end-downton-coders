import styles from "./profile.module.css"
function Profile({DummyData}){
    const Dummy= DummyData[0];

    console.log(Dummy)
    return(<>
        <div className={styles.profileContainer}>
                <img className={styles.profileImg} src={Dummy.image}/>

                <div className={styles.inputStyle}>
                    <p>{Dummy.title}</p>
                </div>

                <div className={styles.inputStyle}>
                    <p>{Dummy.title}</p>
                </div>

                <div className={styles.inputStyle}>
                    <p>{Dummy.title}</p>
                </div>
        </div>
    </>)
}

export default Profile;