import React, { useState } from "react";
import "./NavBar.jsx";

const Navbar = ({ onPageChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "Home" },
    { name: "About", page: "About" },
    { name: "Our Team", page: "OurTeam" },
    { name: "Services", page: "Services" },
    { name: "Contact", page: "Contact" },
  ];

  return (
    <nav className="navbar">

      {/* LEFT SIDE */}
      <div className="nav-left">
        <img className="logo" src="./logo.png" alt="Logo" />
        <span className="welcome-text">
          Welcome To Tattva Child Development Center
        </span>
      </div>

      {/* HAMBURGER MENU BUTTON */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAVIGATION LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.page} onClick={() => onPageChange(link.page)}>
            {link.name}
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
