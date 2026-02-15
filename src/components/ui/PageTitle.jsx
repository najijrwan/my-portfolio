const PageTitle = ({ title }) => (
    <h2
        className='
            relative
            pb-[7px] sm:pb-[15px] md:pb-[20px] mb-[30px] md:mb-[30px] 
            text-base text-[24px] sm:text-[32px] font-[600]  
            after:content-[""] after:absolute after:bottom-0 after:left-0
            after:w-7.5 sm:after:w-[40px] after:h-0.75 sm:after:h-[5px]
            after:bg-gradient-yellow-3 after:rounded-[3px]'
    >
        {title}
    </h2>
)

export default PageTitle;