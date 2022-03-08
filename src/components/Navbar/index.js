import React from "react";

import { Link } from "react-router-dom";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import styles from "../Navbar/navbar.module.css";
import { useAuthDispatch, logout, useAuthState } from "../Context/index.js";
import LoginButton from "../LoginButton";
import RegisterButton from "../RegisterButton";
import NotLoggedInLandingPage from "./NavLinks/isLoggedInFalse/NotLoggedInLandingPage.js";
import NotLoggedInMainPage from "./NavLinks/isLoggedInFalse/NotLoggedInMainPage.js";
import NotLoggedInEventPage from "./NavLinks/isLoggedInFalse/NotLoggedInEventPage.js";
import LoggedInLandingPage from "./NavLinks/isLoggedInTrue/LoggedInLandingPage.js";
import LoggedInMainPage from "./NavLinks/isLoggedInTrue/LoggedInMainPage.js";
import LoggedInEventPage from "./NavLinks/isLoggedInTrue/LoggedInEventPage.js";

/*
PLAN

- Navbar has to render different NavLinks based on what page we are currently in and whether the user is logged in or not 
    variables - pageName; isLoggedIn

    - Create the two states: currentPageName, isLoggedIn - DONE
    - Pass the two states down through to each page, and then further into the Navbar component rendered into each page
    - Inside the navbar, render the links based on the two states
        - Create groups of links in separate files within the Navbar folder and import them into the component
        
*/



function Navbar({ setShowModal, setShowModalRegister, currentPageName, isLoggedIn }) {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context

  console.log(userDetails);
  console.log("This is the current page: ", currentPageName, "This is being fired from the NavBar")
  
  const handleLogout = () => {
    logout(dispatch); //call the logout action
    // props.history.push("/"); //navigate to landing page on logout
  };

if (!isLoggedIn) {
  if (currentPageName === "Landing Page") {
    return (
      <div className={styles.navContainer}>
        <img
        src="./logo2.png"
        className={styles.navLogo}
        width="200px"
        height="70px"
        alt="experience logo"
      />
      <nav className={styles.navlink}>
      <ul>
       <NotLoggedInLandingPage styles={styles} />
      </ul>
      </nav>
      </div>
    )
  } else if (currentPageName === "Main Page") {

    return (
      <div className={styles.navContainer}>
        <img
        src="./logo2.png"
        className={styles.navLogo}
        width="200px"
        height="70px"
        alt="experience logo"
      />
      <nav className={styles.navlink}>
      <ul>
       <NotLoggedInMainPage styles={styles} />
      </ul>
      </nav>
      </div>
    )
  } else if (currentPageName === "Event Page") {
    return (
      <div className={styles.navContainer}>
      <img
      src="./logo2.png"
      className={styles.navLogo}
      width="200px"
      height="70px"
      alt="experience logo"
    />
    <nav className={styles.navlink}>
    <ul>
     <NotLoggedInEventPage styles={styles} />
    </ul>
    </nav>
    </div>
    )
  }
} else if (isLoggedIn) {
  if (currentPageName === "Landing Page") {
    return (
      <div className={styles.navContainer}>
        <img
        src="./logo2.png"
        className={styles.navLogo}
        width="200px"
        height="70px"
        alt="experience logo"
      />
      <nav className={styles.navlink}>
      <ul>
       <LoggedInLandingPage styles={styles} onClick={handleLogout} />
      </ul>
      </nav>
      </div>
    )
  } else if (currentPageName === "Main Page") {
    return (
      <div className={styles.navContainer}>
      <img
      src="./logo2.png"
      className={styles.navLogo}
      width="200px"
      height="70px"
      alt="experience logo"
    />
    <nav className={styles.navlink}>
    <ul>
     <LoggedInMainPage styles={styles} onClick={handleLogout} />
    </ul>
    </nav>
    </div>
    )
  } else if (currentPageName === "Event Page") {
    return (
      <div className={styles.navContainer}>
      <img
      src="./logo2.png"
      className={styles.navLogo}
      width="200px"
      height="70px"
      alt="experience logo"
    />
    <nav className={styles.navlink}>
    <ul>
     <LoggedInEventPage styles={styles} onClick={handleLogout} />
    </ul>
    </nav>
    </div>
    )
  }
}







//   return (
//     <div className={styles.navContainer}>
//       <img
//         src="./logo2.png"
//         className={styles.navLogo}
//         width="200px"
//         height="70px"
//         alt="experience logo"
//       />
//       <nav className={styles.navlink}>
//         <ul>
//           <li>
//             <div
//               className={styles.navAbout}
//               onClick={() => window.location.replace("/#about-us-section")}
//             >
//               About
//             </div>
//           </li>
//           {userDetails.username ? (
//             <>
//               <li>
//                 <div className={styles.navSignout} onClick={handleLogout}>
//                   <FaSignOutAlt />
//                   Signout
//                 </div>
//               </li>
//               <li>
//                 <div>
//                   {"Username: "}
//                   {userDetails ? userDetails.username : ""}
//                 </div>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <LoginButton handleFormPage={() => setShowModal(true)} />
//               </li>
//               <li>
//                 <RegisterButton
//                   handleFormPage={() => setShowModalRegister(true)}
//                 />
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// }
}

export default Navbar;
