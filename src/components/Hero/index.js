import React from "react";
import "./styles.css";

function Hero() {
  return (
    <div>
      <h1>Hero</h1>
      <div class="container">
        <img
          src="https://hrp.imgix.net/https%3A%2F%2Fhistoricroyalpalaces.picturepark.com%2FGo%2FEEDbWAbG%2FV%2F38381%2F29?auto=format&s=9bbdff3311275f37ba43585d94490f19"
          alt=""
        ></img>
        <div class="centered">
          <p>
            <span class="line">Creating travel solutions</span>
            <span class="line"> to make</span>
            <span class="line"> new connections</span>
            <span class="line-2"> with New People</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
