import React from "react";
import { FaUser } from "react-icons/fa";
import "./styles.css";

function RegisterButton({ handleFormPage }) {
  return (
    <div className="btn">
      <button className="btn" onClick={handleFormPage}>
        <FaUser /> Register
      </button>
    </div>
  );
}

export default RegisterButton