import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ padding: "20px", background: "#007bff", color: "white" }}>
      <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            color: isActive ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          style={({ isActive }) => ({
            color: isActive ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          style={({ isActive }) => ({
            color: isActive ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
