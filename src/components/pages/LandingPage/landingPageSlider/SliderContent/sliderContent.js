import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./sliderContent.module.css";
import RatingStar from "./ratingStar/ratingStar";
import travelData from "../../../../../travelData";
import {Link} from "react-router-dom";
import {useState} from"react";


function SliderContent(){
const [sliderContent,setSliderContent]=useState(travelData)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return(<>
    <div className={styles.slideContainer} data-testid="slideContainertesting">
        
        <Slider {...settings} className={styles.slideMain}>
            {sliderContent.map((input)=>{
                return (
                    <div key={input.id} >
                    <Link to="/event" className={styles.linkstyle} state={{input:{input}}}>
                        <div className={styles.tileContainer}>
                            <div className={styles.tile}>
                                <div>
                                    <img className={styles.imgContainer} src={input.image} /> 
                                </div>
                                <p className={styles.title}>{input.title}</p>
                                <p className={styles.countryTitle}>
                                    {input.location}
                                </p>

                                <div className={styles.ratingNDateContainer}>
                                    <RatingStar rate={input.star_rating}/>
                                    <p className={styles.tileDate}>{input.date}</p>
                                </div>

                                <div className={styles.paragraphContainer}>
                                    <p className={styles.paragraphDesc}>
                                       {input.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Link >
                    </div>
                )
            })}
        
           
        </Slider>
        </div>
    </>
    )
}
    

export default SliderContent;