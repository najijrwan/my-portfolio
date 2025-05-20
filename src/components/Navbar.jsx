// Navbar.jsx
import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) =>
  `navbar-link ${isActive ? "active" : ""}`;

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 z-20 left-1/2 -translate-x-1/2 w-min bg-background/50 rounded-xl p-3 shadow-2xl 
    border border-gray-400 border-dotted backdrop-blur-sm">
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



