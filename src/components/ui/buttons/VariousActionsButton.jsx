const VariousActionsButton = ({ variant, label, iconName, children, ...props }) => {
    const VARIANTS = {
        sm: 'px-3 py-1.5',
        md: 'px-5 sm:px-5 py-[13px] sm:py-4 md:ml-auto'
    }
    return (
        <button
            {...props}
            className={`
                relative z-20
                w-max
                flex-center gap-2.5
                bg-gradient-onyx
                text-yellow-crayola text-[15px] sm:text-[17px] rounded-[14px] shadow-3
                hover:bg-gradient-yellow focus:bg-gradient-yellow focus:outline-amber-200 custom-transition-1
                before:content-[''] before:absolute before:inset-px before:-z-10
                before:bg-gradient-jet before:rounded-[inherit]
                before:custom-transition-1
                hover:before:bg-gradient-yellow-2  focus:before:bg-gradient-yellow-2
                ${VARIANTS[variant]}`}
        >
            {iconName && <ion-icon name={iconName} />}
            
            {label && <span>{label}</span>}

            {children}
        </button>
    )
}

export default VariousActionsButton;