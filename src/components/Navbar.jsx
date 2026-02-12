// Navbar.jsx
import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) =>
  `navbar-link ${isActive ? "active" : ""}`;

export default function BottomNav() {
  return (
    <nav className={`block w-full font-[600] p-3 z-50 mb-0 overflow-hidden custom-transition-2 bg-[#2b2b2cbf] backdrop-blur-[10px] 
        border-b border-b-jet rounded-tr-[20px] rounded-tl-[20px] shadow-2 
        xs:text-[2.8vw]
        sm:rounded-tl-[20px] sm:rounded-tr-[20px] sm:text-[18px]
        md:text-[20px]
        lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:w-max lg:rounded-none lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:py-0 lg:px-[20px] 
        lg:shadow-none lg:text-[15px]`}>
      <ul className="flex-start-col flex-wrap py-0 px-[10px] text-base gap-[5px] xs:gap-[6vw] sm:gap-[35px] md:gap-[55px] lg:p-[20px]">
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={getNavLinkClass}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={getNavLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/career" className={getNavLinkClass}>
            Career
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}



