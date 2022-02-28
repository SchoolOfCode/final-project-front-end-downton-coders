import React, { useState } from "react";
import "./styles.css";

function InputsLogin({ onSubmitLogin, setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    const email = event.target.value;
    setEmail(email);
  }

  function handlePassword(event) {
    const password = event.target.value;
    setPassword(password);
  }

  const handleForm = () => {
    if (email && password) {
      onSubmitLogin(email, password, setEmail, setPassword);
      setShowModal(false);
    }
  };

  return (
    <div className="form">
      <label className="requiredLabel"> * Required</label>
      <textarea
        className="form-textarea form-input"
        type="text"
        onChange={handleEmail}
        placeholder="Enter your email"
        value={email}
        maxLength="50"
      />

      <label className="requiredLabel"> * Required</label>
      <textarea
        className="form-textarea form-input"
        type="text"
        onChange={handlePassword}
        placeholder="Enter your password"
        value={password}
        maxLength="80"
      />

      <br />
      <button className="form-submit-button" onClick={() => handleForm()}>
        SUBMIT
      </button>
    </div>
  );
}

export default InputsLogin;
