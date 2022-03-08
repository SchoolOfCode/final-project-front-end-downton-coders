import React from "react";

import { Link } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import LoginButton from "../../../LoginButton";
import RegisterButton from "../../../RegisterButton";

const LoggedInLandingPage = (setShowModal, setShowModalRegister, handleLogout) => {



    return (
        <>
         <li onClick={() => window.location.replace("/#about-us-section")}>About </li>
         <li><div onClick={handleLogout}>
                  <FaSignOutAlt />
                  Logout 
                </div>
</li>
<li><Link to="/main">Main</Link></li>
<li><Link to="/dashboard"></Link></li>
        </>
    )
};

export default LoggedInLandingPage;

// className={styles.navSignout} 