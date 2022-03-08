import React from "react";

import { Link } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import LoginButton from "../../../LoginButton";
import RegisterButton from "../../../RegisterButton";

const NotLoggedInLandingPage = (setShowModal, setShowModalRegister) => {



    return (
        <>
         <li onClick={() => window.location.replace("/#about-us-section")}>About </li>
         <li><Link to="/main">Main</Link> </li>
        <li><LoginButton handleFormPage={() => setShowModal(true)} /></li>
        <li><RegisterButton handleFormPage={() => setShowModalRegister(true)}/></li>
        </>
    )
};

export default NotLoggedInLandingPage;