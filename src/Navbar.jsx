import React from "react";
import "./navbar.css"; // Import the CSS file for Navbar styling
import image from "./images/image.png";  // Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={image} alt="Navbar Logo" className="navbar-logo" />
        {/* You can adjust the styling of the logo as needed */}
      </div>
      <div className="title-container">
        <h1 className="hg1">Tuyere Monitoring System</h1>
      </div>
      {/* Add any other navbar links or components as needed */}
    </nav>
  );
}

export default Navbar;
