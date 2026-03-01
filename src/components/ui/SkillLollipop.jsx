const SkillLollipop = ({ skill, reversed = false, }) => (
    <div
        className={`
            relative group
            flex-center
            cursor-pointer
            ${reversed ? 'flex-col-reverse' : 'flex-col'}
        `}
    >
        <div
            className={`
                absolute left-1/2 -translate-x-1/2 ${reversed ? 'bottom-0' : 'top-0'} z-30
                min-w-11 min-h-11 p-1 box-content
                flex-center flex-col gap-1
                text-white text-[8px] sm:text-[10px]
                bg-jet opacity-0 group-hover:opacity-100 rounded-2xl
                custom-transition-1
            `}
        >
            <p className="min-w-max">{skill.label || skill.lan}</p>
            <p className="min-w-max">{skill.course || ''}</p>
        </div>
        <div className="forward-box p-1 rounded-2xl">
            <img src={skill.src} alt={skill.lan} className="size-11" />
        </div>
        <div className="w-px h-5 bg-jet"></div>
    </div>
)

export default SkillLollipop;