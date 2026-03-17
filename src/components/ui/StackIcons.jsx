import { TechTooltip } from './';

const StackIcons = ({ stack, className = '' }) => {
    return (
        <ul className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
            {stack.map((skill) => {
                return (
                    <li
                        key={skill.name}
                        className="
                            relative group
                            px-3 py-1
                            flex items-center
                            bg-jet rounded-md shadow-1
                        "
                    >
                        <ion-icon src={skill.iconSrc} className='text-2xl' />

                        <TechTooltip tech={skill.name} />
                    </li>
                )
            })}
        </ul>
    );
};

export default StackIcons;