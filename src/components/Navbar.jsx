// Navbar.jsx
import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) =>
  `navbar-link ${isActive ? "active" : ""}`;

export default function BottomNav() {
  return (
    <nav className={`fixed w-full bottom-0 left-0 z-50 mb-0 mt-0 overflow-hidden custom-transition-2 bg-[#2b2b2cbf] backdrop-blur-[10px] 
        border border-solid border-jet rounded-tr-[20px] rounded-tl-[20px] shadow-2 
        sm:rounded-tl-[20px] sm:rounded-tr-[20px] 
        lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:w-max lg:rounded-none lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:py-0 lg:px-[20px] 
        lg:shadow-none`}>
      <ul className="flex-center py-0 px-[10px] text-[13px] text-base sm:gap-[20px] lg:gap-[30px] lg:py-0 lg:px-[20px]">
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



