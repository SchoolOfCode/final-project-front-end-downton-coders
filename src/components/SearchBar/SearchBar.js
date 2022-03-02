import React from "react";
import "./SearchBar.css";


function SearchBar () {

    return (
    <div className="SearchContainer">

        <div className="SearchBarTitle">
        <h4 className="SearchBarTitle">Search Location</h4>
      
        <div className="SearchBarBox"> 
        <input className="SearchBarBox" type="text" placeholder=" London..."/>
         </div>
</div>
</div>
        )

}

export default SearchBar;
