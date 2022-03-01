import styles from "./suggestionEvent.module.css";
import {Link} from "react-router-dom";
import {useState} from"react";


function SuggestionEvent({DataToRender}){
    let arrSuggestion=[];
    const random =DataToRender
    
    let arrLength=0;

     while(arrLength<2){
        let randomNum = Math.floor(Math.random() * random.length);

        if(!arrSuggestion.includes(random[randomNum])) {
            arrSuggestion.push(random[randomNum])
            // setData(random[randomNum])
        }else{
            if(random<random.length){
                arrSuggestion.push(random[randomNum+1])
                // setData(random[randomNum])
            }else{
                arrSuggestion.push(random[randomNum-1])
                // setData(random[randomNum])
            }    
        }
        arrLength++;  
     }

    return(<>
        <div className={styles.suggestionEvent}>
            {arrSuggestion.map((input)=>{
                return(
                    <div key={input.id}>
                        <Link to="/event" className={styles.linkstyle} state={{input:{input}}}>
                            <div className={styles.suggestionIndividualContainer} >
                                    <img className={styles.backgroundImage} src={input.image}/>
                                    <h1 className={styles.suggestionEventHeader}>{input.title}</h1>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </>)
}

export default SuggestionEvent;