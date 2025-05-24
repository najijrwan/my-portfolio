// Hero.jsx
import { useState } from "react";

export const ele1 =
    `relative bg-[image:var(--gradient-onyx)] size-7 rounded-[8px] flex-center text-lg shadow-one z-[10] text-highlight
 before:content-[""] before:absolute before:block before:inset-px before:bg-eerie-1 before:rounded-[inherit] before:-z-10`;
export const ele2 =
    `min-w-full flex items-center gap-4`;
const ele3 =
    `text-base/50 text-[11px] tracking-widest mb-[2px]`;
const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prev => !prev);

    return (
        <aside className={`mb-4 mt-13 w-full overflow-hidden transition-all duration-500 ease-in-out bg-background border 
        border-solid border-jet rounded-[20px] p-4 shadow-one
        ${isExpanded ? 'max-h-[405px]' : 'max-h-[112px]'}`}>
            <div className="relative flex justify-start items-center gap-4">
                <figure className="bg-white/10 rounded-[20px] relative">
                    <img src="src/assets/my-avatar.png" alt="Naji Al-Jrwan" className="block size-20" />
                    <span className="size-3 rounded-full bg-[#39ff14] animate-pulse absolute bottom-0 right-0"></span>
                </figure>
                <div>
                    <h1 className="text-base text-lg font-[500] mb-2.5 ml-1 tracking-tight" title="Naji Al-Jrwan">
                        Naji Aljarawan
                    </h1>
                    <p className="text-base bg-onyx text-[11px]/5 font-[100]! w-max py-[3px] px-3 rounded-[8px]">
                        Full Stack Developer
                    </p>
                </div>
                <button
                    onClick={toggleExpanded}
                    className="absolute -top-[16px] -right-[16px] rounded-tr-[15px] rounded-bl-[15px] text-[13px] text-highlight p-[10px] z-10 
                    bg-gradient-onyx hover:bg-gradient-yellow focus:bg-gradient-yellow focus:outline-amber-200 hover:before:bg-gradient-yellow-2 
                    focus:before:bg-gradient-yellow-2
                    shadow-two transition-all duration-200 ease-linear cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>

            {/* Expandable section */}
            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0"></div>
                <ul className="grid grid-cols-1 gap-4">
                    <li className={ele2}>
                        <div className={ele1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        </div>
                        <div>
                            <p className={ele3}>EMAIL</p>
                            <a href="mailto:najijrwanyt@gmail.com" className="text-base text-[13px] font-[400] mb-10">najijrwanyt@gmail.com</a>
                        </div>
                    </li>
                    <li className={ele2}>
                        <div className={ele1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" /><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                        </div>
                        <div>
                            <p className={ele3}>PHONE</p>
                            <a href="tel:+96170504841" className="text-base text-[13px] font-[400] mb-10">+961 70504841</a>
                        </div>
                    </li>
                    <li className={ele2}>
                        <div className={ele1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div>
                            <p className={ele3}>LOCATION</p>
                            <a href="tel:+96170504841" className="text-base text-[13px] font-[400] mb-2">Lebanon - West Beqaa</a>
                        </div>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0"></div>
                <ul className="flex justify-start items-center gap-4 pb-[4px] pl-[7px]">
                    <li>
                        <a href="https://www.linkedin.com/in/aakash569" className="social-link">
                            <img src="src/assets/linkedin-brands.svg" alt="Linkedin" className="size-4 hover:invert-50"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/aakashx58" className="social-link text-light-gray">
                            <img src="src/assets/github-brands.svg" alt="gitHub" className="size-4 hover:invert-50"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://g.dev/aakash569" className="social-link text-light-gray">
                            <img src="src/assets/google-brands.svg" alt="Google" className="size-4 hover:invert-50"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/itzakax" className="social-link text-light-gray">
                            <img src="src/assets/instagram-brands.svg" alt="Instagram" className="size-4 hover:invert-50"/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Hero;
