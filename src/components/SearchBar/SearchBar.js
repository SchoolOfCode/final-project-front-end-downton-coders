import React from "react";
import styles from "./SearchBar.module.css";


function SearchBar () {

    return (
    <div className={styles.SearchContainer}>

        <div className={styles.SearchBarTitle}>
        <h4 className={styles.SearchBarTitle}>Search Location</h4>
      
        <div className={styles.SearchBarBox}> 
        <input className={styles.SearchBarBox} type="text" placeholder=" London..."/>
         </div>
</div>
</div>
        )

}

export default SearchBar;
