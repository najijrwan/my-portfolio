const SectionContainer = ({ title, children, className = '' }) => (
    <section
        className={`
        mb-15 sm:mb-20
        flex flex-col gap-7.5 sm:gap-10
        ${className}`}
    >
        <SectionTitle title={title} />
        {children}
    </section>
)

export default SectionContainer;

export const SectionTitle = ({ title }) => (
    <header
        className='
            relative
            ml-8
            text-main text-[24px] font-[600]
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
    </header>
)