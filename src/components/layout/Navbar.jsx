import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav
        className={`
        w-full p-3 font-[600] z-50 mb-0 overflow-hidden custom-transition-2 bg-[#2b2b2cbf] backdrop-blur-[10px]
        block
        border-b border-b-jet rounded-tr-[20px] rounded-tl-[20px] shadow-2 
        xs:text-[2.8vw]
        sm:rounded-tl-[20px] sm:rounded-tr-[20px] sm:text-[18px]
        md:text-[20px]
        lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:w-max lg:rounded-none lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:py-0 lg:px-[20px] 
        lg:shadow-none lg:text-[15px]`}
    >
    </nav>
)