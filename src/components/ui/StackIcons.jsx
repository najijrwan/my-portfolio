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
                            bg-jet rounded-md shadow-1
                        "
                    >
                        <Icon size={24} />

                        <TechTooltip tech={skill.name} />
                    </li>
                ) : (
                    <li key={skill.name} className="text-xs bg-jet px-2 py-2 rounded-md shadow-1">
                        {skill.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default StackIcons;