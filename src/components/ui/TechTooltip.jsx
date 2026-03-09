const TechTooltip = ({ tech }) => (
    <span
        className='
            absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 z-20
            px-2 py-1
            align-text-top
            opacity-0
            bg-jet text-yellow-crayola rounded-lg
            group-hover:opacity-100 custom-transition-1
        '
    >
        {tech}
    </span>
)

export default TechTooltip;