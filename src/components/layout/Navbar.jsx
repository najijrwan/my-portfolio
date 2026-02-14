import { NavLink } from "react-router-dom";

const NAV_LINKS = [
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/journey", label: "Journey" },
];

const getNavLinkClass = ({ isActive }) =>
    `py-5 custom-transition-1 hover:text-base/50 
    ${isActive ? "text-highlight" : "text-light-gray"}`;

const Navbar = () => (
    <nav
        className={`
            lg:absolute lg:top-0 lg:right-0 lg:z-50
            w-full lg:w-max p-3 lg:px-[20px] lg:py-0 mb-0
            sm:text-[18px] md:text-[20px] xs:text-[2.8vw] lg:text-[15px] font-[600]
            block
            bg-[#2b2b2cbf] backdrop-blur-[10px] border-b border-b-jet rounded-tl-[20px]
            sm:rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tr-[20px] lg:rounded-tr-[20px] lg:rounded-bl-[20px] 
            lg:rounded-none shadow-2 lg:shadow-none overflow-hidden
            custom-transition-2`}
    >
        <ul
            className="
            px-[10px] py-0 lg:p-[20px]
            flex-start-col flex-wrap gap-[5px] xs:gap-[6vw] sm:gap-[35px] md:gap-[55px]"
        >
            {NAV_LINKS.map((link) => (
                <li key={link.path}>
                    <NavLink to={link.path} className={getNavLinkClass}>
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
)

export default Navbar;