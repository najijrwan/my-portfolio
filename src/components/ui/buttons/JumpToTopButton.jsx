import { useState, useEffect } from 'react'

const JumpToTopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return show ? (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="
                fixed bottom-[36px] sm:bottom-[131px] lg:bottom-[91px] right-[33px] sm:right-[91px]
                md:right-[65px] lg:right-[68px] xl:right-[79px]
                flex-center
                text-eerie-2
                bg-vegas-gold p-3 rounded-xl shadow-lg
            "
        >
            <ion-icon name="arrow-up-outline" />
        </button>
    ) : null;
};

export default JumpToTopButton;