import { useState } from 'react';

const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded(prev => !prev);

    <aside
        className={`
        xl:sticky xl:top-[60px]
        sm:w-[520px] md:w-[700px] lg:w-[950px] xl:w-max! sm:max-h-[180px] xl:h-full xl:max-h-max sm:mx-auto
        mb-[15px] sm:mb-[30px] xl:mb-0 p-[15px] sm:p-[30px] xl:pt-[60px] overflow-hidden 
        bg-eerie-2 border border-solid border-jet shadow-1 lg:shadow-5 rounded-[20px] z-10 xl:z-10
        custom-transition-2
        ${isExpanded ? 'max-h-[405px] sm:max-h-[584px]' : 'max-h-[112px]'}`}
    >

    </aside>
}