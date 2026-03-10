const SkillLollipop = ({ skill, reversed = false }) => {
    return (
        <div
            className={`
                relative group
                flex-center
                cursor-default
                ${reversed ? 'flex-col-reverse' : 'flex-col'}
            `}
        >
            <div
                className={`
                    absolute ${reversed ? 'bottom-0' : 'top-0'} -right-2 translate-x-full z-30
                    min-w-11 min-h-13 px-2 box-content
                    flex-center flex-col gap-1
                    text-vegas-gold text-[8px] sm:text-[10px] text-wrap text-center
                    bg-jet opacity-0 group-hover:opacity-100 rounded-2xl
                    invisible group-hover:visible
                    custom-transition-1

                    before:content-[""]
                    before:absolute before:z-30 before:left-px before:-translate-x-full before:bottom-1/2 before:translate-y-1/2
                    before:border-l-[8px] before:border-l-transparent
                    before:border-b-[6px] before:border-b-transparent
                    before:border-r-[8px] before:border-r-jet
                    before:border-t-[6px] before:border-t-transparent
                `}
            >
                <p className="min-w-max">-Lan: {skill.label || skill.name}</p>
                <p className="min-w-max">-Source: {skill.source || ''}</p>
            </div>

            <div className="forward-box p-1 rounded-2xl">
                <img src={skill.src} alt={skill.tech} className="size-11" />
            </div>

            <div className="w-px h-5 bg-jet"></div>
        </div>
    );
};

export default SkillLollipop;