import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch,Provider } from 'react-redux'
import Spinner from '../../spinner/Spinner.js'
import styles from "./styles.module.css"
import DashbroadEventSection from './Dashbroadeventsection/dashbroadeventsection.js'
import dummyData from "../../../travelData"

function DashbroadPage() {


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  if (!user) {
    navigate('/login')
  }

  //this is for Dashboard front-end
  return (<>
 
    <div className={styles.dashboardBackground} data-testid="dashboardMainTesting">
      <div className={styles.dashboardContainerMain}>
        <div className={styles.dashboardProfile}>
          This is Dashbroad Page profile section
        </div>

        <div className={styles.dashboardevent}>
          <DashbroadEventSection DummyData={dummyData}/>
        </div>
      </div>
    </div>

  </>
  )

}

export default DashbroadPage;
