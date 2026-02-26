const ProjectDetails = ({ project }) => {

    const FIELDS = [
        { label: "Stack", content: project.stack },
        { label: "Duration", content: project.duration },
        { label: "Info", content: project.info },
        { label: "Challenges", content: project.chall },
    ];

    return (
        <section
            className={`
                relative
                w-full px-2 pt-6 pb-2
                flex flex-col gap-2 justify-start
                text-sm lg:text-md text-start
                bg-[#2b2b2c] border border-jet rounded-xl
                transition-opacity duration-500 ease-out
            `}
        >
            <header
                className='
                    absolute top-0 left-1/2 -translate-1/2
                    min-w-[70px] px-2 py-1.5
                    text-[10px] text-white text-center tracking-wider uppercase
                    bg-jet rounded-lg
                '
            >
                {project.label || project.name}
            </header>

            {FIELDS.map(({ label, content }, i) => (
                <div
                    key={i}
                    className="
                        p-2
                        flex flex-col gap-2
                        text-light-gray-70
                        bg-jet rounded-lg
                        "
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
        </section>
    );
};

export default ProjectDetails;