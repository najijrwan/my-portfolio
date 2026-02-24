import { useRef } from "react";
import { useSmartTooltipPosition } from "@hooks";
import { VariousActionsButton } from '@ui'

const ArrowBodyProjects = ({ projects }) => {
    console.log(projects);
    return (
        <div className="flex items-center">
            <div className="w-5 h-px bg-jet"></div>

            {projects.length === 1 ? (
                <ArrowBodyProject project={projects[0]} />
            ) : (
                <div
                    className="
                        relative
                        px-3
                        flex flex-col items-center gap-2
                        before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-1/2
                        before:w-full before:h-[calc(100%-18px)]
                        before:rounded-lg before:border before:border-jet
                    "
                >
                    {projects.map((project) => (
                        <ArrowBodyProject key={project.ref} project={project} />
                    ))}
                </div>
            )}

            <div className="w-5 h-px bg-jet"></div>
        </div>
    );
};

export default ArrowBodyProjects;

export const ArrowBodyProject = ({ project }) => (
    <div className="relative group inline-flex">
        <VariousActionsButton
            variant='v2'
            label={project.title}
            className='uppercase'
        />
        <ProjectTooltip project={project} />
    </div>
);

export const ProjectTooltip = ({ project }) => {
    const tooltipRef = useRef(null);
    const position = useSmartTooltipPosition(tooltipRef);

    const FIELDS = [
        { label: "Info", content: project.info },
        { label: "Challenges", content: project.chall },
        { label: "Stack", content: project.stack },
        { label: "Duration", content: project.duration },
    ];

    return (
        <div
            ref={tooltipRef}
            className={`
                absolute top-0 z-30
                px-2 pt-6 pb-2
                hidden group-hover:flex flex-col gap-2 justify-start
                text-sm lg:text-md text-start
                bg-[#2b2b2c] border border-jet shadow-4 rounded-xl
                transition-opacity duration-500 ease-out
                ${position === "left" ? "right-full" : "left-full"}
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
                {project.label || project.title}
            </header>

            {FIELDS.map(({ label, content }, i) => (
                <div
                    key={i}
                    className="
                        min-w-[500px] p-2
                        flex flex-col gap-2
                        text-light-gray-70
                        bg-jet rounded-lg
                        "
                >
                    <header className="flex items-center gap-2 text-white">
                        {/* <span className="size-1.25 bg-white rounded-full" /> */}
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
    );
};