import React from "react";
import "./styles.css";

function LoginButton({ handleFormPage }) {
  return (
    <div className="login-button-div">
      <button className="login-button" onClick={handleFormPage}>
        Login
      </button>
    </div>
  );
}

export default LoginButton;
