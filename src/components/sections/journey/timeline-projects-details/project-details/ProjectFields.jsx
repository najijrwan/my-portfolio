import { StackIcons } from "@ui";

const ProjectFields = ({ project, isExtended }) => {

    const FIELDS = [
        { label: "Stack", content: <StackIcons stack={project.stack} /> },
        { label: "Duration", content: project.duration, },
        { label: "Type", content: project.type, },
        { label: "Info", content: project.info, },
        { label: "Challenges", content: project.chall, },
        { label: "Outcome", content: project.outcome, }
    ];

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

export default ProjectFields;