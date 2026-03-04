const ProjectCardLink = ({ link, iconName }) => (
    <a
        href={link}
        target='_blank'
        className="flex-center"
    >
        <ion-icon
            name={iconName}
            className="size-5 text-yellow-crayola [--ionicon-stroke-width:50px]"
        />
    </a>
)

export default ProjectCardLink;