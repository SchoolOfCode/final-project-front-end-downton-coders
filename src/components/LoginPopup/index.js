import React from "react";
import "./styles.css";

import InputsLogin from "../InputsLogin";
import { Link } from "react-router-dom";

function LoginPopup({ onSubmitLogin, showModal, setShowModal }) {
  if (showModal) {
    return (
      <div className="window-modal">
        <div className="window">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <h2 className="window-title">Login Here</h2>
          <InputsLogin
            onSubmitLogin={onSubmitLogin}
            setShowModal={setShowModal}
          />
          <p> Don't have account, signup here</p>
          <Link to ='/register'>Register</Link>
        </div>
      </div>
    );
  }

  return null;
}

export default LoginPopup;
