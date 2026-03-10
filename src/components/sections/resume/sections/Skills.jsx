const ProficiencySection = ({ title, skills }) => (
    skills?.length > 0 && (
        <>
            <span className="text-vegas-gold text-sm block mb-1 ml-5">
                {title}:
            </span>
            <ul className="mb-3">
                {skills.map((skill) => (
                    <li
                        key={skill.name}
                        className="
                            relative
                            pl-[1em] ml-10
                            before:content-[''] before:absolute before:left-0 before:top-[9px]
                            before:size-[5px] before:bg-[#ffd700] before:rounded-full
                        "
                    >
                        {skill.name}
                    </li>
                ))}
            </ul>
        </>
    )
);

const ListSection = ({ items }) => (
    <ul>
        {items.map((item) => (
            <li
                key={item}
                className="
                    relative
                    pl-[1em] ml-5
                    before:content-[''] before:absolute before:left-0 before:top-[9px]
                    before:size-[5px] before:bg-[#ffd700] before:rounded-full
                "
            >
                {item}
            </li>
        ))}
    </ul>
);

const Skills = ({ category }) => {
    const proficiencyMap = {
        proficient: 'Proficient in',
        experienced: 'Experienced with',
        familiar: 'Familiar with'
    };

    return (
        <>
            <header className="mb-2 text-white">
                {category.category}
            </header>

            {category.type === 'proficiency' ? (
                // Render proficiency categories
                Object.entries(proficiencyMap).map(([key, title]) => (
                    <ProficiencySection
                        key={key}
                        title={title}
                        skills={category[key]}
                    />
                ))
            ) : (
                // Render list type (tools or key strengths)
                <ListSection items={category.items || category.tools?.map(t => t.name)} />
            )}
        </>
    );
};

export default Skills;