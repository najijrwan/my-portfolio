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
        />
        <ProjectTooltip project={project} />
    </div>
);

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
                ${position === "left" ? "right-full mr-1" : "left-full ml-1"}
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
                {project.ref}
            </header>

            <p className="min-w-[400px] text-light-gray">{project.info}</p>

            <div className="flex gap-2 p-2 bg-jet rounded-lg">
                <h1 className="text-white">Stack:</h1>
                <p className="text-light-gray italic">{project.stack}</p>
            </div>

            <p className="p-2 bg-jet rounded-lg">
                <span className="text-white">Duration: </span>
                <span className="text-light-gray">{project.duration}</span>
            </p>
        </div>
    );
};