import React from "react";
import "./header.css";

function Header({ onRegisterClick }) {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/assets/images/JSS_STU.png" alt="JSS Logo" className="logo" id="jss-stu" />
        <img src="/assets/images/lo.jpeg" alt="Logo" className="logo" />
        <img src="/assets/images/venture.png" alt="Venture Logo" className="logo" id="venture" />
        <img src="/assets/images/IIC.jpg" alt="IIC Logo" className="logo" />
        <img src="/assets/images/iqac.jpeg" alt="IQAC Logo" className="logo" />
        <img src="/assets/images/SJCE-STEP.png" alt="SJCE-STEP Logo" className="logo" />
      </div>
      <div className="header-text">
        <h3>JSS SCIENCE AND TECHNOLOGY UNIVERSITY</h3>
        <h3>JSS TECHNICAL INSTITUTIONS CAMPUS, MYSURU - 06</h3>
        <h1>IDEA FORGE</h1>
      </div>
      <div className="button-section">
        <button className="register-btn" onClick={onRegisterClick}>
          Submit Now
        </button>
      </div>
    </header>
  );
}

export default Header;
