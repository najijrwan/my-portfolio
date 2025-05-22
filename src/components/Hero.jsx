// Hero.jsx
import { useState } from "react";

export const iconBox =
    `relative bg-[image:var(--gradient-onyx)] size-8 rounded-[8px] flex-center text-lg shadow-one z-[10] text-highlight
 before:content-[""] before:absolute before:block before:inset-px before:bg-eerie-1 before:rounded-[inherit] before:-z-10`;
export const contactItem =
    `min-w-full flex items-center gap-4`;
const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prev => !prev);

    return (
        <aside className={`mb-4 w-full overflow-hidden transition-all duration-500 ease-in-out bg-background border 
        border-solid border-[#383838] rounded-[20px] p-4 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.25)] 
        ${isExpanded ? 'max-h-[405px]' : 'max-h-[112px]'}`}>
            <div className="relative flex justify-start items-center gap-4">
                <figure className="bg-white/10 rounded-[20px] relative">
                    <img src="src/assets/my-avatar.png" alt="Naji Al-Jrwan" className="block size-20" />
                    <span className="size-3 rounded-[50%] bg-[#39ff14] animate-pulse absolute bottom-0 right-0"></span>
                </figure>
                <div>
                    <h1 className="text-base text-lg font-[500] mb-2.5" title="Naji Al-Jrwan">
                        Naji Al-Jrwan
                    </h1>
                    <p className="text-base/80 bg-white/10 text-[10px] w-fit py-[3px] px-3 rounded-[8px]">
                        Full Stack Developer
                    </p>
                </div>
                <button
                    onClick={toggleExpanded}
                    className="absolute -top-[17px] -right-[17px] rounded-tr-[15px] rounded-bl-[15px] text-[13px] text-highlight p-[10px] z-[1]
                    bg-[var(--border-gradient-onyx)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] transition-all duration-200 ease-linear"
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
                    <li className={contactItem}>
                        <div className={iconBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        </div>
                        <div>
                            <p className="text-base/50 text-[11px]/1.5 tracking-widest mb-[2px]">EMAIL</p>
                            <a href="mailto:najijrwanyt@gmail.com" className="text-base text-[13px] font-[400] tracking-widest">najijrwanyt@gmail.com</a>
                        </div>
                    </li>
                    <li className={contactItem}>
                        <div className={iconBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" /><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                        </div>
                        <div>
                            <p className="text-base/50 text-[11px]/1.5 tracking-widest mb-[2px]">PHONE</p>
                            <a href="tel:+96170504841" className="text-base text-[13px] font-[400] tracking-[3px]">+961 70504841</a>
                        </div>
                    </li>
                    <li className={contactItem}>
                        <div className={iconBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <p className="text-base/50 text-[11px]/1.5 tracking-widest mb-[2px]">LOCATION</p>
                            <a href="tel:+96170504841" className="text-base text-[13px] font-[400] tracking-widest">Lebanon - West Beqaa</a>
                        </div>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0"></div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </aside>
    );
};

export default Hero;
