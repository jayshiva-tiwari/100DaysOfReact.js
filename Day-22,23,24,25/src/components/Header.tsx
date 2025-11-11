import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ padding: "20px", backgroundColor: "#007bff", color: "white", borderRadius: "10px" }}>
      <nav style={{ display: "flex", justifyContent: "center", gap: "1vw", }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ffeb3b" : "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid #ffeb3b" : "none",
            transition: "all 0.2s",
            cursor: "pointer",
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
            borderBottom: isActive ? "2px solid #ffeb3b" : "none",
            transition: "all 0.2s",
            cursor: "pointer",
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
            borderBottom: isActive ? "2px solid #ffeb3b" : "none",
            transition: "all 0.2s",
            cursor: "pointer",
          })}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
