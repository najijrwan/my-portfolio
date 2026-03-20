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
                absolute bottom-5 sm:bottom-7.5 right-5 sm:right-7.5
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