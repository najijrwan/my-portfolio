const ShowContactsButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="
        absolute -top-[15px] -right-[15px] rounded-tr-[15px] rounded-bl-[15px] text-[13px] text-highlight p-[10px] z-10 
        bg-gradient-onyx shadow-2 custom-transtion-1 cursor-pointer 
        before:content-[''] before:absolute before:inset-px before:rounded-[inherit] before:bg-gradient-jet 
        before:custom-transition-1 before:-z-10
        hover:bg-gradient-yellow focus:bg-gradient-yellow focus:outline-amber-200 hover:before:bg-gradient-yellow-2 
        focus:before:bg-gradient-yellow-2
        sm:top-[-30px] sm:right-[-30px] sm:py-[10px] sm:px-[15px] 
        xl:hidden"
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
            className={`lucide lucide-chevron-down block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} 
                        sm:hidden`}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </button>
)

export default ShowContactsButton;