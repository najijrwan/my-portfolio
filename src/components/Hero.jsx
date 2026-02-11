// Hero.jsx
import { useState } from "react";

export const ele1 =
    `relative bg-[image:var(--gradient-onyx)] size-[30px] rounded-[8px] flex-center text-[16px] shadow-1 z-[10] text-highlight
 before:content-[""] before:absolute before:block before:inset-px before:bg-eerie-1 before:rounded-[inherit] before:-z-10 
 sm:size-[48px] sm:rounded-[12px] sm:text-[18px]`;
export const ele2 =
    `min-w-full flex items-center gap-4`;
const ele3 =
    `text-light-gray-70 text-[11px] lg:text-[12px] mb-0.5 tracking-widest `;
const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prev => !prev);

    return (
        <aside className={`
        mb-[15px] overflow-hidden custom-transition-2 bg-eerie-2 border 
        border-solid border-jet rounded-[20px] p-[15px] shadow-1 z-10
        sm:max-h-[180px] sm:mb-[30px] sm:w-[520px] sm:mx-auto sm:p-[30px] 
        md:w-[700px] 
        lg:w-[950px] lg:shadow-5 
        xl:sticky xl:top-[60px] xl:max-h-max xl:h-full xl:mb-0 xl:pt-[60px] xl:z-10 xl:w-max!
        ${isExpanded ? 'max-h-[405px] sm:max-h-[584px]' : 'max-h-[112px]'}`}>
            <div className="relative flex-start-row gap-[15px] sm:gap-[25px] xl:flex-col">
                <figure className="bg-gradient-onyx-2 rounded-[20px] relative sm:rounded-[30px]">
                    <a href="http://localhost:5173//images/Yo.JPG" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Yo.JPG" alt="Yo" className="block size-20 sm:size-[120px] xl:size-[150px] rounded-[20px] border border-jet object-cover object-top" />
                    </a>
                    <span className="size-3 rounded-full bg-[#39ff14] animate-pulse absolute bottom-0 right-0"></span>
                </figure>
                <div>
                    <h1 className="text-base text-[17px] sm:text-[26px] font-[600] mb-[10px] tracking-tight 
                    sm:mb-[15px] 
                    xl:whitespace-nowrap xl:text-center xl:tracking-wider xl:text-2xl" title="Naji Al-Jrwan">
                        <i className="tracking-wider">Naji Al - Jarwan</i>
                    </h1>
                    <p className="text-base bg-onyx text-[12px] font-[300]! w-max py-[3px] px-[12px] rounded-[8px] 
                    sm:py-[5px] sm:px-[18px] 
                    xl:m-auto">
                        Front-End Developer
                    </p>
                </div>
                <button
                    onClick={toggleExpanded}
                    className="
                    absolute -top-[15px] -right-[15px] rounded-tr-[15px] rounded-bl-[15px] text-[13px] text-highlight p-[10px] z-10 
                    bg-gradient-onyx shadow-2 custom-transtion-1 cursor-pointer 
                    before:content-[''] before:absolute before:inset-px before:rounded-[inherit] before:bg-gradient-jet 
                    before:custom-transition-1 before:-z-10
                    hover:bg-gradient-yellow focus:bg-gradient-yellow focus:outline-amber-200 hover:before:bg-gradient-yellow-2 
                    focus:before:bg-gradient-yellow-2
                    sm:top-[-30px] sm:right-[-30px] sm:py-[10px] sm:px-[15px] 
                    xl:hidden"
                >
                    <span className="hidden sm:block sm:text-[12px] tracking-wider">Show Contacts</span>
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
                        className={`lucide lucide-chevron-down block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} 
                        sm:hidden`}
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>

            {/* Expandable section */}
            <div className={`custom-transition-2 xl:opacity-100 xl:visible ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-full h-[1px] bg-jet my-4 mx-0 sm:my-[32px] sm:mx-0"></div>
                <ul className="grid grid-cols-1 gap-4 sm:gap-[20px] md:grid-cols-2 md:gap-y-[30px] md:gap-x-[15px] xl:grid-cols-1!">
                    <li className={ele2}>
                        <div className={ele1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        </div>
                        <div className="contact-info xl:max-w-fit">
                            <p className={ele3}>EMAIL</p>
                            <a href="mailto:najijrwanyt@gmail.com" className="block truncate text-base text-[13px] font-[300]  xl:text-[14px] xl:font-[300]">
                                najijrwanyt@gmail.com
                            </a>
                        </div>
                    </li>
                    <li className={ele2}>
                        <div className={ele1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" /><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                        </div>
                        <div className="contact-info xl:max-w-fit">
                            <p className={ele3}>PHONE</p>
                            <a href="tel:+96170504841" className="block truncate text-base text-[13px] font-[300]  xl:text-[14px] xl:font-[300]">
                                +961 70504841
                            </a>
                        </div>
                    </li>
                    <li className={ele2}>
                        <div className={ele1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div className="contact-info xl:max-w-fit">
                            <p className={ele3}>LOCATION</p>
                            <p className="block truncate text-base text-[13px] font-[300]  xl:text-[14px] xl:font-[300]">Lebanon - Ghazzah</p>
                        </div>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0 xl:my-[15px] xl:opacity-0"></div>
                <ul className="flex justify-start items-center gap-4 pb-[4px] pl-[7px] xl:justify-center">
                    <li>
                        <a href="https://www.linkedin.com/in/naji-jarwan/" target="_blank" className="social-link">
                            <img src="/images/linkedin-brands.svg" alt="Linkedin" className="size-4 hover:invert-50" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/najijrwan" target="_blank" className="social-link text-light-gray">
                            <img src="/images/github-brands.svg" alt="gitHub" className="size-4 hover:invert-50" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/najijrwan" target="_blank" className="social-link text-light-gray">
                            <img src="/images/instagram-brands.svg" alt="Instagram" className="size-4 hover:invert-50" />
                        </a>
                    </li>
                </ul>
            </div>

        </aside>
    );
};

export default Hero;
