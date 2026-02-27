import { useExtend } from '@hooks'

const ProjectDetails = ({ project }) => {
    const { isExtended, handleClick } = useExtend();

    return (
        <section
            className={`
                relative
                flex flex-col gap-4
                bg-[#2b2b2c] border border-jet rounded-xl
                animate-height
            `}
        >
            <ProjectDetailsHeader label={project.label ?? project.ref} />

            <ProjectFields project={project} isExtended={isExtended} />

            <ExtendFieldsBtn onClick={handleClick} isExtended={isExtended} />
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
        {
            label: "Stack",
            content: (
                <p>{project.stack.join(" - ")}</p>
            )
        },
        {
            label: "Duration",
            content: (
                <p>{project.duration}</p>
            )
        },
        {
            label: "Info",
            content: project.info.map((para, i) => (<p key={i}>{para}</p>))
        },
        {
            label: "Challenges",
            content: project.chall.map((para, i) => (<p key={i}>{para}</p>))
        },
    ];

    console.log("FIELDS: ", FIELDS);

    return (
        <div
            className={`
                w-full px-2 pt-8
                flex flex-col gap-2
                text-sm lg:text-md text-start
                custom-transition-2 overflow-hidden
                ${isExtended ? 'max-h-[2000px]' : 'max-h-[168px]'}
            `}
        >
            {FIELDS.map(({ label, content }, i) => (
                <div
                    key={i}
                    className={`
                        p-2
                        flex flex-col gap-2
                        text-light-gray-70
                        bg-jet rounded-lg
                        custom-transition-2
                        ${!isExtended && (label === "Info" || label === "Challenges") ? 'opacity-0' : 'opacity-100'}
                        `}
                >
                    <header className="flex items-center gap-2 text-white">
                        <span>{label}</span>
                    </header>
                    <div
                        className="
                            relative
                            pl-2
                            flex flex-col gap-2
                            before:content-['']
                            before:absolute before:left-0 before:bottom-0
                            before:w-0.75 before:h-full
                            before:bg-light-gray-70
                        "
                    >
                        {content}
                    </div>
                </div>
            ))}
        </div>
    )
}

const ExtendFieldsBtn = ({ onClick, isExtended }) => (
    <button
        onClick={onClick}
        className="
            w-full py-3
            flex-center bg-jet
            text-yellow-crayola rounded-b-[inherit]
            hover:opacity-50
            transition-opacity duration-150 ease-in-out"
    >
        <ion-icon
            src="icons/chevrons-down.svg"
            className={`
                size-4 visible! transform transition-transform duration-150 ease-in-out
                ${isExtended ? 'rotate-180' : 'rotate-0'}
            `}
        />
    </button>
)