import React from "react";

import { Link } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import LoginButton from "../../../LoginButton";
import RegisterButton from "../../../RegisterButton";

const NotLoggedInMainPage = (setShowModal, setShowModalRegister) => {



    return (
        <>
        <li><Link to="/">Home</Link></li>
        <li><LoginButton handleFormPage={() => setShowModal(true)} /></li>
        <li><RegisterButton handleFormPage={() => setShowModalRegister(true)}/></li>
        </>
    )
};

export default NotLoggedInMainPage;