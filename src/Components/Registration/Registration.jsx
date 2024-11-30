import React from "react";
import "./registration.css";
// import qrCode from "../../assets/qrCode.png";

function RegisterSection() {
  const handleQrClick = () => {
    window.open("https://forms.gle/766v6AGwkj2ogCKM7", "_blank");
  };

  const handleRegisterClick = () => {
    window.open("https://forms.gle/766v6AGwkj2ogCKM7", "_blank");
  };

  return (
    <section className="register-section">
      <img 
        src="/assets/images/qrCode.png"
        alt="QR Code" 
        className="qr-code" 
        onClick={handleQrClick} 
        style={{ cursor: "pointer" }}
      />
      <button className="register-btn" onClick={handleRegisterClick}>
        Submit Now
      </button>
    </section>
  );
}

export default RegisterSection;
