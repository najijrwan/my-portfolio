const Skills = ({ category }) => (
    <>
        <header className="mb-2 text-white">
            {category.category}
        </header>

        {category.type === 'proficiency' && (
            <>
                {category.proficient?.length > 0 && (
                    <>
                        <span className="text-vegas-gold text-sm block mb-1 ml-5">
                            Proficient in:
                        </span>
                        <ul className="mb-3">
                            {category.proficient.map((skill) => (
                                <li
                                    key={skill}
                                    className="
                        relative
                        pl-[1em] ml-10
                        before:content-[''] before:absolute before:left-0 before:top-[9px]
                        before:size-[5px]
                        before:bg-[#ffd700] before:rounded-full
                      "
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {category.experienced?.length > 0 && (
                    <>
                        <span className="text-vegas-gold text-sm block mb-1 ml-5">
                            Experienced with:
                        </span>
                        <ul className="mb-3">
                            {category.experienced.map((skill) => (
                                <li
                                    key={skill}
                                    className="
                      relative
                      pl-[1em] ml-10
                      before:content-[''] before:absolute before:left-0 before:top-[9px]
                      before:size-[5px]
                      before:bg-[#ffd700] before:rounded-full
                    "
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {category.familiar?.length > 0 && (
                    <>
                        <span className="text-vegas-gold text-sm block mb-1 ml-5">
                            Familiar with:
                        </span>
                        <ul className="mb-3">
                            {category.familiar.map((skill) => (
                                <li
                                    key={skill}
                                    className="
                      relative
                      pl-[1em] ml-10
                      before:content-[''] before:absolute before:left-0 before:top-[9px]
                      before:size-[5px]
                      before:bg-[#ffd700] before:rounded-full
                    "
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </>
        )}

        {category.type === 'list' && (
            <ul>
                {category.items.map((item) => (
                    <li
                        key={item}
                        className="
                relative
                pl-[1em] ml-5
                before:content-[''] before:absolute before:left-0 before:top-[9px]
                before:size-[5px]
                before:bg-[#ffd700] before:rounded-full
              "
                    >
                        {item}
                    </li>
                ))}
            </ul>
        )}
    </>
);

export default Skills;