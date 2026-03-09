import { iconMap } from '@utils'
import { TechTooltip } from './';

const StackIcons = ({ stack, className = '' }) => {
    return (
        <ul className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
            {stack.map((tech) => {
                const Icon = iconMap[tech];
                return Icon ? (
                    <li
                        key={tech}
                        className="
                            relative group
                            px-3 py-1
                            flex items-center
                            bg-jet/30 rounded-md
                        "
                    >
                        <Icon size={20} />
                        
                        <TechTooltip tech={tech} />
                    </li>
                ) : (
                    <li key={tech} className="text-xs bg-jet/30 px-2 py-1 rounded-md">
                        {tech}
                    </li>
                );
            })}
        </ul>
    );
};

export default StackIcons;