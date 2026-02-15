const IconBox = ({ iconName }) => (
    <div
        className="
            relative z-10 
            size-[30px] sm:size-[48px]
            flex-center
            text-highlight text-[16px] sm:text-[18px] stroke-3
            bg-gradient-onyx rounded-[8px] sm:rounded-[12px] shadow-1 
            before:content-[''] before:absolute before:inset-px before:-z-1
            before:bg-eerie-1 before:rounded-[inherit]"
    >
        <ion-icon name={iconName}></ion-icon>
    </div>
)

export default IconBox;