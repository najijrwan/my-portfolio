import { SkillLollipop } from "@ui"

export const ArrowBodySkills = ({ skills, }) => {
    // Split skills into even and odd groups
    const evenSkills = skills.filter((_, i) => i % 2 === 0);
    const oddSkills = skills.filter((_, i) => i % 2 !== 0);

    return (
        <div className="min-h-[153px] box-content">
            {/* Top row: even skills */}
            <div className="px-2.5 flex gap-2.5">
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
            <div className="w-fit pl-[36px] pr-2.5 flex gap-2.5">
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
        min-w-[70px] px-2 py-0.5
        text-[10px] text-white text-center tracking-wider italic uppercase
        border border-jet bg-eerie-2 rounded-lg
        forward-box`;
    return (
        <div className="flex items-center">
            <div className="w-5 h-px bg-jet"></div>

            <div className="relative min-w-[90px] min-h-[45px] px-2 py-[14.5px] border border-jet rounded-lg">
                {projects.length === 1 ? (
                    // Single project → simple inline block
                    <div
                        className={baseStyle}
                    >
                        {projects[0]}
                    </div>
                ) : (
                    <>
                        {/* First project → top absolute */}
                        <div className={baseStyle + ' absolute top-0 left-1/2 -translate-1/2'}>
                            {projects[0]}
                        </div>

                        {/* Middle projects → inline flow */}
                        <div className="flex flex-col gap-1.5">
                            {projects.slice(1, -1).map((project, i) => (
                                <div key={i} className={baseStyle}>
                                    {project}
                                </div>
                            ))}
                        </div>

                        {/* Last project → bottom absolute */}
                        <div className={baseStyle + ' absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'}>
                            {projects[projects.length - 1]}
                        </div>
                    </>
                )}
            </div>

            <div className="w-5 h-px bg-jet"></div>
        </div>
    );
};
