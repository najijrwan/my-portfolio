import { PrimaryButton } from '@ui'

const ArrowBodyProjects = ({ projects }) => {

    const handleButtonClick = (projectId) => {
        const el = document.getElementById(projectId);
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth', block: 'center' });

        el.classList.remove('animate-highlight-pulse');
        void el.offsetWidth;
        el.classList.add('animate-highlight-pulse');
    };

    return (
        <div className="flex items-center">
            <div className="w-5 h-px bg-jet"></div>

            {projects.length === 1 ? (
                <PrimaryButton
                    onClick={() => handleButtonClick(projects[0].id)}
                    variant='v2'
                    label={projects[0].finalLabel}
                    className='min-w-max inline-flex capitalize'
                />
            ) : (
                <div
                    className="
                        relative
                        px-3
                        flex flex-col items-center gap-2
                        before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-1/2
                        before:w-full before:h-[calc(100%-18px)]
                        before:rounded-lg before:border before:border-jet
                    "
                >
                    {projects.map((project) => (
                        <PrimaryButton
                            key={project.id}
                            onClick={() => handleButtonClick(project.id)}
                            variant='v2'
                            label={project.finalLabel}
                            className='min-w-max w-full inline-flex capitalize'
                        />
                    ))}
                </div>
            )}

            <div className="w-5 h-px bg-jet"></div>
        </div>
    );
};

export default ArrowBodyProjects;