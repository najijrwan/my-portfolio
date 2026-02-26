import { splitEvenOdd } from '@utils'
import { SkillLollipop } from "@ui"

const ArrowBodySkills = ({ skills }) => {
    const [evenSkills, oddSkills] = splitEvenOdd(skills);

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

export default ArrowBodySkills;
