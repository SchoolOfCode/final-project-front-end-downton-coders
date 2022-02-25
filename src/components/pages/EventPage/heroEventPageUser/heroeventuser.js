import HeroEventImage from "./heroeventimage/heroeventimage";
import styles from "./style.module.css"
import randomData from "../../../../travelData"
import HeroEventDecriptionHeader from "./heroventdescriptionsheader/heroeventheader";
import Heroeventtitledesc from "./heroeventtitledesc/heroeventtitledesc";
import HeroDescText from "./herodescriptionstext/herodesctext";
import {useLocation} from "react-router-dom"


function HeroEventUser(){
    const location = useLocation();
    
    function rendering(){
        if(location.state!== null){
        const {input}=location.state; 
        const dataFromLanding =input.input;  
        return dataFromLanding
        }else{
            return randomData
        }
    }
    const dataToUse=rendering()

    return(
        <div className={styles.heroContainer} data-testid="heroContainerTesting">
            <div className={styles.heroMainContainer}>
                <HeroEventImage dataimg={dataToUse.image}/>
                <HeroEventDecriptionHeader dataheader={dataToUse.title}/>

                <div className={styles.heroEventDescriptionSection}>
                    <Heroeventtitledesc/>
                    <HeroDescText dataText={dataToUse.description}/>
                </div>
            </div>
        </div>
    )
}

export default HeroEventUser;