import styles from "./suggestionEvent.module.css";
import {Link} from "react-router-dom";


function SuggestionEvent({DataToRender}){
    let arrSuggestion=[];

    const random =DataToRender

    // const [dataIwant, setDataIwant] = useState(travelData);

    // async function fetchData() {
    //   const response = await fetch("https://xpeerience.herokuapp.com/events");
    //   const dataget = await response.json();
    //   //   console.log(data)
    //   //   setMapRes(data.payload.responseResources);
    //   setDataIwant(dataget);
    // }

    // useEffect(() => {
    //   fetchData();
    // }, []);
    
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
            {arrSuggestion.map((input,index)=>{
                return (
                  <div
                    key={index}
                    onClick={() => {
                      window.location.reload(false);
                    }}
                  >
                    <Link
                      to="/event"
                      className={styles.linkstyle}
                      state={{ input: { input } }}
                    >
                      <div className={styles.suggestionIndividualContainer}>
                        <img
                          className={styles.backgroundImage}
                          src={input.image}
                          alt=""
                        />
                        <h1 className={styles.suggestionEventHeader}>
                          {input.title}
                        </h1>
                      </div>
                    </Link>
                  </div>
                );
            })}
        </div>
    </>)
}

export default SuggestionEvent;