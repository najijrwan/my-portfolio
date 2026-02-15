const IconBox = ({ iconName }) => (
    <div
        className="
            relative z-10
            size-[30px] sm:size-[48px]
            flex-center
            bg-gradient-onyx rounded-[8px] sm:rounded-[12px] shadow-1 
            before:content-[''] before:absolute before:inset-px before:-z-10
            before:bg-eerie-1 before:rounded-[inherit]"
    >
        <ion-icon
            name={iconName}
            className='text-highlight size-4 sm:size-4.5 [--ionicon-stroke-width:40px]'
        >
        </ion-icon>
    </div>
)

export default IconBox;