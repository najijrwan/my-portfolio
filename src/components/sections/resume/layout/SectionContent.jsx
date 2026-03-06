const SectionContent = ({ items }) => (
    <ul className="ml-[45px] sm:ml-[65px] text-[14px] sm:text-[15px]">
        {items.map((item, i) => (
            <li
                key={i}
                className="
                    relative
                    mb-4.5 sm:mb-5
                    text-light-gray text-[15px] font-[300]
                    before:content-[''] before:absolute before:left-[-30px] sm:before:left-[-41px]
                    before:top-[-20px] sm:before:-top-[30px]
                    before:w-px before:h-[calc(100%+20px)] sm:before:h-[calc(100%+24px)]
                    before:bg-jet
                    after:content-[''] after:absolute after:top-[5px] after:left-[-33px] sm:after:left-[-45px]
                    after:size-[6px] sm:after:size-2
                    after:bg-gradient-yellow-3 after:rounded-full after:shadow-[0_0_0_4px_var(--color-jet)]
                "
            >
                {item}
            </li>
        ))}
    </ul>
)

export default SectionContent;