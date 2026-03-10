import { iconMap } from '@utils'
import { TechTooltip } from './';

const StackIcons = ({ stack, className = '' }) => {
    return (
        <ul className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
            {console.log(stack)}
            {stack.map((skill) => {
                const Icon = iconMap[skill.name];

                return Icon ? (
                    <li
                        key={skill.name}
                        className="
                            relative group
                            px-3 py-1
                            flex items-center
                            bg-jet/30 rounded-md
                        "
                    >
                        <Icon size={20} />

                        <TechTooltip tech={skill.name} />
                    </li>
                ) : (
                    <li key={skill.name} className="text-xs bg-jet/30 px-2 py-1.5 rounded-md">
                        {skill.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default StackIcons;