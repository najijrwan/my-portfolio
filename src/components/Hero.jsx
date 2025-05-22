// Hero.jsx
import { useState } from "react";

const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prev => !prev);

    return (
        <aside className={`mb-4 overflow-hidden transition-all duration-500 ease-in-out bg-background border 
        border-solid border-[#383838] rounded-[20px] p-4 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.25)] 
        ${isExpanded ? 'max-h-[500px]' : 'max-h-[115px]'}`}>
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
                    shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] transition-all duration-200 ease-linear border-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>

            {/* Expandable section */}
            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0"></div>
                <ul className="grid grid-cols-1 gap-4">
                    <li className="min-w-full flex items-center gap-4">
                        <div className="relative size-7 rounded-[8px] flex-center text-lg before:content-[''] before:absolute before: inset-[1px] before:rounded-[inherit] -z-[1px]"></div>
                        <div className="contact-info">
                            <p className="text-base/50 text-[11px] mb-[2px]">Email</p>
                            <a href="mailto:najijrwanyt@gmail.com" className="text-base text-[13px]">najijrwanyt@gmail.com</a>
                        </div>
                    </li>
                    <li className="min-w-full flex items-center gap-4">
                        <div className="relative size-7 rounded-[8px] flex-center text-lg before:content-[''] before:absolute before: inset-[1px] before:rounded-[inherit] -z-[1px]"></div>
                        <div className="contact-info">
                            <p className="text-base/50 text-[11px] mb-[2px]">Phone</p>
                            <a href="tel:+96170504841" className="text-base text-[13px]">+961 70504841</a>
                        </div>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0"></div>
                <ul>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                </ul>
            </div>
        </aside>
    );
};

export default Hero;
