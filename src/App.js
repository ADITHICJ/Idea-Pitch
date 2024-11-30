import React, { useRef } from "react";
import "./App.css";  // Import the CSS file
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import IdeaSection from "./Components/IdeaSection/IdeaSection.jsx";
import MainSection from "./Components/MainSection/MainSection.jsx";
import RegisterSection from "./Components/Registration/Registration.jsx";
import sharkImage from "./assets/shark.png";


function App() {
  const registerSectionRef = useRef(null); // Reference for the Register Section

  // Scroll to Register Section
  const handleRegisterClick = () => {
    if (registerSectionRef.current) {
      registerSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="container">
        {/* Background */}
        <div className="background"></div>

        {/* Shark Image */}
        <img src={sharkImage} alt="Shark" className="shark-image" />

        {/* Other Content */}
        <div className="content">
          {/* Pass handleRegisterClick to Header */}
          <Header onRegisterClick={handleRegisterClick} />
          <MainSection />
          
          {/* Sections Container */}
          <div className="sections-container">
            <div ref={registerSectionRef} className="register-section">
              <RegisterSection />
            </div>
            <div className="idea-section">
              <IdeaSection />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
