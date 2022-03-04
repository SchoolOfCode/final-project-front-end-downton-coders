import React from "react";
import Slider from "react-slick";
import styles from "./PopularSlider.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState} from"react";
// import travelData from "../../../../../travelData"
import {Link} from "react-router-dom";


function PopularSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };

return (
        <div>
          <h2 className={styles.PopularSliderHeader}> Popular Catergories </h2>
           <div className={styles.PopularSliderContainer}> 
          <Slider className={styles.PopularSliderContent} {...settings}>
            <div>
            
              <h3 className={styles.PopularSliderImageTitle}>Exhibition</h3>
              <img className={styles.PopularSliderContent} src ={"https://www.tate.org.uk/sites/default/files/styles/width-340/public/kusa714_infinity_mirrored_room_-_filled_with_the_brilliance_of_life_2011_a.jpg"} opacity =".8" width ="300px" height ="200px" alt =""/>
        
            </div>
            <div>
              <h3 className={styles.PopularSliderImageTitle}>Daytrip</h3>
              <img className={styles.PopularSliderContent} src ={"https://wp-media-fatsoma.imgix.net/W1siZiIsInB1YmxpYy8yMDIyLzIvMjMvMTUvMjAvNi84OTgvMjc0NjQzMDM5XzEzMTc0MzUwODg3MzQ3ODRfNTM1NDY4Nzc2MjYwNDY0NTExN19uLmpwZyJdXQ?auto=format,compress,enhance&fit=crop&ar=16:9&ixlib=imgixjs-3.4.0&w=926"} opacity =".8" width ="300px" height ="200px" alt =""/>
            </div>
            <div>
              <h3 className={styles.PopularSliderImageTitle}> Food & Drink</h3>
              <img className={styles.PopularSliderContent} src ={"https://assets.londonist.com/uploads/2019/05/i875/egertongardens_27.jpg"} opacity =".8" width ="300px" height ="200px" alt =""/>
            </div>
            <div>
              <h3 className={styles.PopularSliderImageTitle}>Short break</h3>
              <img className={styles.PopularSliderContent} src ={"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/5f/64.jpg"} opacity =".8"  width ="300px" height ="200px" alt =""/>
            </div>
            <div>
              <h3 className={styles.PopularSliderImageTitle}>Museum</h3>
              <img className={styles.PopularSliderContent} src ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4DMgWkTWPbC8r6M5qDyKKc488OdGQ8COoA&usqp=CAU"} opacity =".8" width ="300px" height ="200px" alt =""/>
            </div>
            
            </Slider>
        </div>
        //  </div>
)
      
    }
  

//     return (
//        <div className={styles.PopularSliderHeader}>

    

//        <div className={styles.PopularSliderContent}> 
       
//        </div>

//        <div className={styles.PopularSliderImageTitl}> 
       
//        </div>

// </div>

//     )
// 
       



        

export default PopularSlider;