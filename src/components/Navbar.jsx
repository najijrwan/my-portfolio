// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-3xs bg-background/70 rounded p-3 shadow-2xl border border-gray-700 backdrop-blur-xs">
      <ul className="flex justify-center gap-3 text-[13px] text-base">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;


