const ProjectCardLink = ({ link, iconName }) => (
    <a
        href={link}
        target='_blank'
        className="flex-center"
    >
        <ion-icon
            name={iconName}
            className="
                size-5
                text-yellow-crayola hover:text-yellow-crayola/50
                [--ionicon-stroke-width:50px]
                custom-transition-1
            "
        />
    </a>
)

export default ProjectCardLink;