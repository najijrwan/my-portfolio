const TechTooltip = ({ tech }) => (
    <span
        className='
            absolute left-1/2 -translate-x-1/2 -top-10 z-20
            min-w-max px-2 py-1
            opacity-0
            bg-jet text-yellow-crayola rounded-lg
            group-hover:opacity-100 custom-transition-1 cursor-default
        '
    >
        {tech}
    </span>
)

export default TechTooltip;