export const ArrowBodySkills = ({ skills, }) => {
    // Split skills into even and odd groups
    const evenSkills = skills.filter((_, i) => i % 2 === 0);
    const oddSkills = skills.filter((_, i) => i % 2 !== 0);

    return (
        <div className="min-h-[125px] py-5 box-content">
            {/* Top row: even skills */}
            <div className="px-2.5 flex gap-2.5">
                {evenSkills.map((skill, i) => (
                    <div key={i} className="flex-center flex-col">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src={skill.src} alt={skill.lan} className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                ))}
            </div>

            {/* Divider line */}
            <div className="h-px bg-jet"></div>

            {/* Bottom row: odd skills */}
            <div className="w-fit pl-[36px] pr-2.5 flex gap-2.5">
                {oddSkills.map((skill, i) => (
                    <div key={i} className="flex-center flex-col-reverse">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src={skill.src} alt={skill.lan} className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ArrowBodyProjects = ({ projects }) => {

    return (
        <div className="flex items-center">
            <div className="w-5 h-px bg-jet"></div>

            <div className="relative min-w-[70px] min-h-[45px] px-2 py-[14.5px] border border-jet rounded-lg">
                {projects.length === 1 ? (
                    // Single project → simple inline block
                    <div
                        className="
                        px-1
                        text-[10px] text-yellow-crayola
                        border border-jet bg-eerie-2 rounded-lg"
                    >
                        {projects[0]}
                    </div>
                ) : (
                    <>
                        {/* First project → top absolute */}
                        <div
                            className="
                            absolute top-0 left-1/2 -translate-1/2
                            px-1
                            text-[10px] text-yellow-crayola
                            border border-jet bg-eerie-2 rounded-lg"
                        >
                            {projects[0]}
                        </div>

                        {/* Middle projects → inline flow */}
                        <div className="flex flex-col gap-1.5">
                            {projects.slice(1, -1).map((project, i) => (
                                <div
                                    key={i}
                                    className="
                                px-1
                                text-[10px] text-yellow-crayola
                                border border-jet bg-eerie-2 rounded-lg"
                                >
                                    {project}
                                </div>
                            ))}
                        </div>

                        {/* Last project → bottom absolute */}
                        <div
                            className="
                            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                            px-1
                            text-[10px] text-yellow-crayola
                            border border-jet bg-eerie-2 rounded-lg"
                        >
                            {projects[projects.length - 1]}
                        </div>
                    </>
                )}
            </div>
            
            <div className="w-5 h-px bg-jet"></div>
        </div>
    );
};
