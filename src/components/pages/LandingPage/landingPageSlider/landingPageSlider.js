import SliderHeader from "./SliderHeader/SliderHeader";
import SliderContent from "./SliderContent/sliderContent"
import styles from "./style.module.css"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function LandingPageSlider(){
    return (<>
        <section className={styles.backgroundColor} data-testid="landingPageSliderTesting">
            <div className={styles.aboutSliderHeader}>
                <SliderHeader/>
            </div>
            <div>
                <SliderContent/>
            </div>
        </section>
    </>
    )
}

export default LandingPageSlider;