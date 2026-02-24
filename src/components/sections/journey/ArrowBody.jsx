import { useRef } from "react";
import { useSmartTooltipPosition } from "@hooks";
import { SkillLollipop, VariousActionsButton } from "@ui"

export const ArrowBodySkills = ({ skills, }) => {
    // Split skills into even and odd groups
    const evenSkills = skills.filter((_, i) => i % 2 === 0);
    const oddSkills = skills.filter((_, i) => i % 2 !== 0);

    return (
        <div className="min-h-[145px] box-content">
            {/* Top row: even skills */}
            <div className="flex gap-2.5">
                {evenSkills.map((skill, i) => (
                    <SkillLollipop
                        key={i}
                        src={skill.src}
                        lan={skill.lan}
                    />
                ))}
            </div>

            {/* Divider line */}
            <div className="h-px bg-jet"></div>

            {/* Bottom row: odd skills */}
            <div className="w-fit pl-[36px] flex gap-2.5">
                {oddSkills.map((skill, i) => (
                    <SkillLollipop
                        key={i}
                        src={skill.src}
                        lan={skill.lan}
                        reversed
                    />
                ))}
            </div>
        </div>
    );
};

export const ArrowBodyProjects = ({ projects }) => {
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
                        <ArrowBodyProject key={project.name} project={project} />
                    ))}
                </div>
            )}

            <div className="w-5 h-px bg-jet"></div>
        </div>
    );
};

export const ArrowBodyProject = ({ project }) => (
    <div className="relative group inline-flex">
        <ProjectButton projectName={project.name} />
        <ProjectTooltip project={project} />
    </div>
);

export const ProjectButton = ({ projectName }) => (
    <button
        className="
            min-w-[70px] px-2 py-1
            text-[10px] text-white text-center tracking-wider
            border border-jet bg-eerie-2 rounded-lg
            cursor-pointer
            forward-box"
    >
        {projectName}
    </button>
)

export const ProjectTooltip = ({ project }) => {
    const tooltipRef = useRef(null);
    const position = useSmartTooltipPosition(tooltipRef);

    return (
        <div
            ref={tooltipRef}
            className={`
                invisible group-hover:visible
                absolute top-0 z-30
                max-w-[500px] px-2 pt-4 pb-2
                flex flex-col gap-2 justify-start
                text-sm lg:text-md text-start
                bg-[#2b2b2c] border border-light-gray-70 shadow-4 rounded-xl
                transition-opacity duration-500 ease-out
                ${position === "left" ? "right-full" : "left-full"}
            `}
        >
            <header
                className='
                    absolute top-0 left-1/2 -translate-1/2
                    min-w-[70px] px-2 py-0.5
                    text-[10px] text-black text-center tracking-wider uppercase
                    bg-white border border-light-gray rounded-lg
                '
            >
                {project.name}
            </header>
            <p className="min-w-[400px] text-light-gray">{project.info}</p>
            <div className="flex gap-2 p-2 bg-jet rounded-lg">
                <h1 className="text-white">Stack:</h1>
                <ul className="flex gap-1">
                    {project.stack.map((tech) => (
                        <li key={tech} className="text-light-gray italic">{tech}</li>
                    ))}
                </ul>
            </div>
            <p className="p-2 bg-jet rounded-lg">
                <span className="text-white">Duration: </span>
                <span className="text-light-gray">{project.duration}</span>
            </p>
        </div>
    );
};
