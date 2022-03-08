import styles from "./dashboardgoingsectiontile.module.css"
function DashboardGoingSectionTile({DummyData}){
    return(<>
                {DummyData.map((input)=>{
                    return(
                        <div className={styles.tileContainer}>
                            <div className={styles.tileContainerMain}>
                                <p className={styles.tileTitleNDate}>{input.title}</p>
                                <p className={styles.tileTitleNDate}>{input.date}</p>
                            </div>
                        </div>
                    )
                })}  
    </>)
}

export default DashboardGoingSectionTile