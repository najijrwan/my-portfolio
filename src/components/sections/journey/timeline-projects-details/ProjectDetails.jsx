import { useExtend } from '@hooks'

const ProjectDetails = ({ project }) => {
    const { isExtended, handleClick } = useExtend();

    return (
        <section
            className={`
                relative
                h-fit
                flex flex-col gap-4
                bg-[#2b2b2c] border border-jet rounded-xl
                transition-opacity duration-500 ease-out
            `}
        >
            <ProjectDetailsHeader label={project.label ?? project.ref} />

            <ProjectFields project={project} isExtended={isExtended} />

            <ExtendFieldsBtn onClick={handleClick} />
        </section>
    );
};

export default ProjectDetails;


const ProjectDetailsHeader = ({ label }) => (
    <header
        className='
            absolute top-0 left-1/2 -translate-1/2
            min-w-max px-2 py-1.5
            text-[10px] sm:text-[12px] text-white text-center tracking-wider uppercase
            bg-jet rounded-lg
        '
    >
        {label}
    </header>
)

const ProjectFields = ({ project, isExtended }) => {
    const FIELDS = [
        { label: "Stack", content: project.stack },
        { label: "Duration", content: project.duration },
        { label: "Info", content: project.info },
        { label: "Challenges", content: project.chall },
    ];

    return (
        <div className='w-full px-2 pt-8 flex flex-col gap-2 text-sm lg:text-md text-start'>
            {FIELDS.map(({ label, content }, i) => (
                <div
                    key={i}
                    className={`
                        p-2
                        flex flex-col gap-2
                        text-light-gray-70
                        bg-jet rounded-lg
                        ${!isExtended && (label === "Info" || label === "Challenges") ? 'hidden' : ''}
                        `}
                >
                    <header className="flex items-center gap-2 text-white">
                        <span>{label}</span>
                    </header>
                    <p
                        className="
                            relative
                            pl-2
                            before:content-['']
                            before:absolute before:left-0 before:bottom-0
                            before:w-0.75 before:h-full
                            before:bg-light-gray-70
                        "
                    >
                        {content}
                    </p>
                </div>
            ))}
        </div>
    )
}

const ExtendFieldsBtn = ({ onClick }) => (
    <button
        onClick={onClick}
        className="
            w-full py-3
            flex-center bg-jet
            text-yellow-crayola rounded-b-[inherit]
            hover:opacity-50
            transition-opacity duration-150 ease-in-out"
    >
        <ion-icon src="icons/chevrons-down.svg" className="size-4" />
    </button>
)