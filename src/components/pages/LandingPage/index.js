import React, { useState } from "react";
import Aboutus from "./About-Us/index";
import LandingPageSlider from "./landingPageSlider/landingPageSlider";
import Footer from "../../Footer/Footer.js";
import LoginPopup from "../../LoginPopup";
import { API_URL } from "../../../config";

import Hero from "../../Hero";

function LandingPage() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  // const [userProfile, setUserProfile] = useState([]);
  const [userLogin, setUserLogin] = useState([]);

  function onSubmitLogin(email, password, setEmail, setPassword) {
    const templateLoginInfo = {
      email: email,
      password: password,
    };

    fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(templateLoginInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for for that resourse");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setUserLogin(data);
        setError(null);
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
    //console.log(userLogin);
    setEmail("");
    setPassword("");

    // setTimeout(() => {
    //   fetch(`${API_URL}/users/userProfile`)
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw Error("could not fetch userProfile for that user");
    //       }
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setIsPending(false);
    //       setUserProfile(data);
    //       setError(null);
    //     })
    //     .catch((err) => {
    //       //auto catches network / connection error
    //       setIsPending(false);
    //       setError(err.message);
    //     });
    //   console.log("User data here: ");
    //   console.log(userProfile);
    // }, 3000);
  }

  return (
    <div id="landingPageWrapper">
      <LoginPopup
        onSubmitLogin={onSubmitLogin}
        showModal={showLoginPopup}
        setShowModal={setShowLoginPopup}
      />
      <Hero
        userLogin={userLogin}
        showModal={showLoginPopup}
        setShowModal={setShowLoginPopup}
      />
      {userLogin.username}
      <LandingPageSlider />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default LandingPage;
