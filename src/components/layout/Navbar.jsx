import { NavLink } from "react-router-dom";

const NAV_LINKS = [
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/journey", label: "Journey" },
];

const getNavLinkClass = ({ isActive }) =>
    `custom-transition-1 hover:text-base/50 
    ${isActive ? "text-highlight" : "text-light-gray"}`;

const Navbar = () => (
    <nav
        className={`
            w-full lg:w-max p-3 lg:px-10 lg:py-5 lg:ml-auto
            flex-start-col flex-wrap gap-[15px] sm:gap-[35px] md:gap-[55px]
            text-[12px] sm:text-[15px] md:text-[18px] lg:text-[15px] font-[600]
            bg-[#2b2b2cbf] backdrop-blur-[10px] border-b border-b-jet rounded-tl-[20px]
            sm:rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tr-[20px] lg:rounded-tr-[20px] lg:rounded-bl-[20px] 
            lg:rounded-none shadow-2 lg:shadow-none overflow-hidden
            custom-transition-2`}
    >
        {NAV_LINKS.map((link) => (
            <NavLink
                key={link.path}
                to={link.path}
                className={getNavLinkClass}
            >
                {link.label}
            </NavLink>
        ))}
    </nav>
)

export default Navbar;