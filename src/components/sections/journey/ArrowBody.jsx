import { useState, useRef, useEffect } from "react";
import { SkillLollipop } from "@ui"

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
    const baseStyle = `
        min-w-[70px] px-2 py-1
        text-[10px] text-white text-center tracking-wider
        border border-jet bg-eerie-2 rounded-lg
        cursor-pointer
        forward-box
        `;
    return (
        <div className="flex items-center">
            <div className="w-5 h-px bg-jet"></div>


            {projects.length === 1 ? (
                // Single project → simple inline block
                <div className="flex-center flex-col gap-2">
                    <div key={projects[0].name} className="relative group inline-flex">
                        <button className={baseStyle}>
                            {projects[0].name}
                        </button>
                        <ProjectTooltip project={projects[0]} />
                    </div>
                </div>
            ) : (

                <div
                    className="
                        relative
                        px-3

                        before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-1/2
                        before:w-full before:h-[calc(100%-18px)]
                        before:rounded-lg before:border before:border-jet"
                >
                    <div className="flex flex-col items-center gap-2">
                        {projects.map((project) => (
                            <div key={project.name} className="relative group inline-flex">
                                <button className={baseStyle}>
                                    {project.name}
                                </button>
                                <ProjectTooltip project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            )}


            <div className="w-5 h-px bg-jet"></div>
        </div>
    );
};

export const ProjectTooltip = ({ project }) => {
    const [position, setPosition] = useState("right"); // 'left' | 'right'
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current?.parentElement;
        if (!el) return;

        const handleHover = () => {
            const rect = el.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            setPosition(rect.left > viewportWidth / 2 ? "left" : "right");
        };

        el.addEventListener("mouseenter", handleHover);
        window.addEventListener("resize", handleHover);
        window.addEventListener("scroll", handleHover);

        return () => {
            el.removeEventListener("mouseenter", handleHover);
            window.removeEventListener("resize", handleHover);
            window.removeEventListener("scroll", handleHover);
        };
    }, []);

    return (
        <div
            ref={ref}
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
