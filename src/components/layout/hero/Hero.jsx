import { useState } from 'react';
import HeroHeader from './HeroHeader';
import Contacts from './Contacts';
import SocialLinks from './SocialLinks';

const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prev => !prev);

    return (
        <aside
            className={`
                xl:sticky xl:top-[60px] z-10
                sm:w-[520px] md:w-[700px] lg:w-[950px] xl:w-max! sm:max-h-[180px] xl:h-full 
                xl:max-h-max sm:mx-auto mb-[15px] sm:mb-[30px] xl:mb-0 p-[15px] sm:p-[30px] 
                xl:pt-[60px] overflow-hidden 
                bg-eerie-2 border border-solid border-jet shadow-1 lg:shadow-5
                rounded-[20px]
                custom-transition-2
                ${isExpanded ? 'max-h-[405px] sm:max-h-[584px]' : 'max-h-[112px]'}`}
        >
            <div className="relative flex-start-row gap-[15px] sm:gap-[25px] xl:flex-col">
                <HeroHeader onClick={toggleExpanded} isExpanded={isExpanded} />
            </div>

            <div
                className={`
                    custom-transition-2 xl:opacity-100 xl:visible
                    ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <div className="w-full h-px mx-0 sm:mx-0 my-4 sm:my-[32px] bg-jet"></div>

                <Contacts />

                <div className="w-full h-[1px] mx-0 my-4 xl:my-[15px] xl:opacity-0 bg-[#383838] "></div>

                <SocialLinks />
            </div>
        </aside>
    )
}

export default Hero;