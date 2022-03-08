import React from "react";
import styles from "./SearchBar.module.css";
import {useState} from "react"


function SearchBar () {
    const[InputValue,setInputValue]=useState("")

    return (
    <div className={styles.SearchContainer}>

        <div className={styles.SearchBarTitle}>
            <h4 className={styles.SearchBarTitle}>Search Location</h4>
        </div>
      
        <div className={styles.SearchBarBoxContainer}> 
            <input className={styles.SearchBarBox} type="text" placeholder=" London..." value={InputValue} onChange={(e)=>setInputValue(e.target.value)}/>
         </div>

    </div>
        )

}

export default SearchBar;
