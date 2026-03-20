const TechTooltip = ({ tech }) => (
    <span
        className='
            absolute left-1/2 -translate-x-1/2 -top-11 z-20
            min-w-max px-2 py-1
            opacity-0
            bg-jet text-yellow-crayola rounded-lg shadow-1
            group-hover:opacity-100 custom-transition-1 cursor-default pointer-events-none

            before:content-[""]
            before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:translate-y-full
            before:border-l-[7px] before:border-l-transparent
            before:border-b-[6px] before:border-b-transparent
            before:border-r-[7px] before:border-r-transparent
            before:border-t-[6px] before:border-t-jet
        '
    >
        {tech}
    </span>
)

export default TechTooltip;