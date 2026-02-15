const SectionTitle = ({ title }) => (
    <h3
        className='
            relative
            mb-[20px] ml-8
            text-base text-[24px] font-[600]
            flex-start-row
            before:content-[""] before:absolute before:left-[-23px] before:bottom-[49.5%]
            before:w-[15px] before:h-px
            before:bg-highlight/30'
    >
        <span
            className='
                absolute left-[-33px] top-1/2 -translate-y-1/2
                size-1.75
                bg-highlight rounded-full'
        >
        </span>

        <span
            className='
                absolute left-[-36px] top-1/2 -translate-y-1/2
                size-[13px]
                bg-highlight/30 rounded-full'
        >
        </span>

        {title}
    </h3>
)

export default SectionTitle;