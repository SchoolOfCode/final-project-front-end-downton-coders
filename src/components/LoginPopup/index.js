import React from "react";
import "./styles.css";

import InputsLogin from "../InputsLogin";

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
        </div>
      </div>
    );
  }

  return null;
}

export default LoginPopup;
