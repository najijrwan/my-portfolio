// Navbar.jsx
import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) =>
  `navbar-link ${isActive ? "active" : ""}`;

export default function BottomNav() {
  return (
    <nav className={`fixed w-full top-0 z-20 mb-4 mt-0 overflow-hidden transition-all duration-500 ease-in-out bg-background/60 backdrop-blur-md border 
        border-solid border-jet rounded-br-[20px] rounded-bl-[20px] p-4 shadow-one`}>
      <ul className="flex justify-center gap-5 text-[13px] text-base">
        <li>
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={getNavLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={getNavLinkClass}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}



