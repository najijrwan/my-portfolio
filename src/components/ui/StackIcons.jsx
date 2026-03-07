import { iconMap } from '@utils'

const StackIcons = ({ stack, className = '' }) => {
    return (
        <ul className={`inline-flex items-center gap-4 ${className}`}>
            {stack.map((tech) => {
                const Icon = iconMap[tech];
                return Icon ? (
                    <li key={tech} className="flex items-center gap-1 bg-jet/30 rounded-md">
                        <Icon size={20} />
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