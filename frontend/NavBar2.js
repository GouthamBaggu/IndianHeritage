import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarStyle = {
      backgroundColor: "rgba(128, 128, 128, 0.5)", // Transparent grey
      padding: "0.8rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "right",
       // Optional: Adds a blur effect behind the navbar
      position: "fixed", // Makes the navbar fixed to the top
      width: "100%",
      zIndex: 1000, // Ensures the navbar stays on top
    };
  
    const navLinksStyle = {
      listStyle: "none",
      display: "flex",
      gap: "2rem",
    };
  
    const linkStyle = {
      color: "#ffff",
      textDecoration: "none",
      fontSize: "1rem",
      transition: "color 0.3s ease", // Smooth transition for hover effect
    };
  
    const hoverStyle = {
      color: "#f0a500",
    };
  

  return (
    <nav style={navbarStyle}>
      
      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/login"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            About the Website
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
