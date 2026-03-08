import { useExtend } from '@hooks'
import ProjectFields from './ProjectFields'

const ProjectDetails = ({ project }) => {
    const { isExtended, handleClick } = useExtend();

    return (
        <section
            id={project.id}
            className={`
                relative
                flex flex-col gap-4
                bg-[#2b2b2c] border border-jet rounded-xl
                animate-height
            `}
        >
            <ProjectDetailsHeader link={project.liveLink ?? project.gitLink} label={project.finalLabel} />

            <ProjectFields project={project} isExtended={isExtended} />

            <ExtendFieldsBtn onClick={handleClick} isExtended={isExtended} />
        </section>
    );
};

export default ProjectDetails;


const ProjectDetailsHeader = ({ link, label }) => (
    <header
        className='
            absolute top-0 left-1/2 -translate-1/2
            min-w-max px-2 py-1.5
            text-[10px] sm:text-[12px] text-yellow-crayola text-center tracking-wider uppercase
            bg-jet rounded-lg
        '
    >
        {link ? (
            <a href={link} target='_blank' rel="noopener noreferrer">{label}</a>
        ) : (
            <button
                onClick={() => console.log('link: undefined - subtle Easter egg')}
                className='uppercase'
            >
                {label}
            </button>
        )}
    </header>
)

const ExtendFieldsBtn = ({ onClick, isExtended }) => (
    <button
        onClick={onClick}
        className="
            w-full py-3
            flex-center bg-jet
            text-yellow-crayola rounded-b-[inherit]
            hover:opacity-50
            transition-opacity duration-150 ease-in-out"
    >
        <ion-icon
            src="external-icons/chevrons-down.svg"
            className={`
                size-4 visible! transform transition-transform duration-150 ease-in-out
                ${isExtended ? 'rotate-180' : 'rotate-0'}
            `}
        />
    </button>
)