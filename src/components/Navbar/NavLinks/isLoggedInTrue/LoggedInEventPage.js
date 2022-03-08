import React from "react";

import { Link } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import LoginButton from "../../../LoginButton";
import RegisterButton from "../../../RegisterButton";

const LoggedInEventPage = (setShowModal, setShowModalRegister, handleLogout) => {



    return (
        <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/main">Main</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
         <li><div onClick={handleLogout}>
                  <FaSignOutAlt />
                  Logout 
                </div>
</li>
        </>
    )
};

export default LoggedInEventPage;

// className={styles.navSignout} 