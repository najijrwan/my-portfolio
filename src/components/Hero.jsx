// Hero.jsx
const Hero = () => {
    return (
        <aside className="mb-4 max-h-[115px] overflow-hidden transition duration-500 ease-in-out">
            <div className="relative flex justify-start items-center gap-4">
                <figure className="bg-white/10 rounded-[20px] relative">
                    <img src="src/assets/my-avatar.png" alt="Naji Al-Jrwan" className="block size-20" />
                    <span className="size-3 rounded-[50%] bg-[#39ff14] animate-pulse absolute bottom-0 right-0"></span>
                </figure>
                <div>
                    <h1 className="text-base text-lg font-bold mb-2.5" title="Naji Al-Jrwan">
                        Naji Al-Jrwan
                    </h1>
                    <p className="text-base/80 bg-white/10  text-[10px] w-fit py-[3px] px-3 rounded-[8px]">
                        Full Stack Developer
                    </p>
                </div>
            </div>
            <div className="opacity-0 invisible transition duration-500 ease-in-out">
                <div className="w-full h-[1px] bg-[#383838] my-4 mx-0"></div>
                <ul className="grid grid-cols-1 gap-4">
                    <li className="min-w-full flex items-center gap-4">
                        <div className="relative size-7 rounded-[8px] flex-center text-lg before:content-[''] before:absolute before: inset-[1px] before:rounded-[inherit] -z-[1px]"></div>
                        <div className="contact-info">
                            <p className="text-base/50 text-[11px] mb-[2px]">Email</p>
                            <a href="tel:+961 70504841" className="text-base text-[13px]">najijrwanyt@gmail.com</a>
                        </div>
                    </li>
                    <li className="min-w-full flex items-center gap-4">
                        <div className="relative size-7 rounded-[8px] flex-center text-lg before:content-[''] before:absolute before: inset-[1px] before:rounded-[inherit] -z-[1px]"></div>
                        <div className="contact-info">
                            <p className="text-base/50 text-[11px] mb-[2px]">Phone</p>
                            <a href="tel:+961 70504841" className="text-base text-[13px]">+961 70504841</a>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Hero;