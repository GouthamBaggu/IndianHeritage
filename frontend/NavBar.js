import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#333",
    padding: "0.8rem",
    display: "flex",
    height: 50,
    justifyContent: "space-between",
    alignItems: "right",
  };

  

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
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
