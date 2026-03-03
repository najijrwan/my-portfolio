const ProjectCardLink = ({ link, iconName }) => (
    <a
        href={link}
        target='_blank'
        className="
            p-[14px]
            flex-center
            bg-jet rounded-[12px] opacity-0
            custom-transition-1 scale-[0.8] group-hover:scale-[1.3] group-hover:opacity-100"
    >
        <ion-icon
            name={iconName}
            className="size-4 text-yellow-crayola [--ionicon-stroke-width:50px]"
        />
    </a>
)

export default ProjectCardLink;