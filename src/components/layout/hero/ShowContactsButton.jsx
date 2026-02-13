const ShowContactsButton = ({ onClick, isExpanded }) => (
    <button
        onClick={onClick}
        className="
        absolute -right-[15px] sm:right-[-30px] -top-[15px] sm:top-[-30px] z-10
        p-[10px] sm:px-[15px] sm:py-[10px]
        xl:hidden
        text-[13px] text-highlight
        bg-gradient-onyx shadow-2 rounded-tr-[15px] rounded-bl-[15px]
        custom-transtion-1 cursor-pointer 
        before:content-[''] before:absolute before:inset-px before:bg-gradient-jet before:rounded-[inherit]
        before:custom-transition-1 before:-z-10
        hover:bg-gradient-yellow hover:before:bg-gradient-yellow-2 
        focus:bg-gradient-yellow focus:outline-amber-200 focus:before:bg-gradient-yellow-2"
    >
        <span className="hidden sm:block sm:text-[12px] tracking-wider">Show Contacts</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`
                lucide lucide-chevron-down
                block sm:hidden 
                transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} `}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </button>
)

export default ShowContactsButton;