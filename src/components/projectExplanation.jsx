export const sections2 = `
  relative w-full m-2 mb-3.5 max-w-fit tracking-wide`;

export const explanationContainer = `
  w-full relative
  before:content-[''] before:absolute before:top-0 before:-left-[5px] before:size-3 before:rounded-full`;

export const projectSections = [
    {
        id: 'Fitnessoo',
        point: ' before:bg-red-500',
        title: 'Fitnessoo - Website',
        techColors: ['bg-html', 'bg-css', 'bg-js'],
        content: (
            <>
                <p className="text-light-gray-70 m-0 ml-6">
                    In my second year of college (Mar 2024), I took my first <i>Web Programming</i> course. It introduced core web technologies such
                    as <i>HTML</i>, <i>CSS</i>, and <i>JavaScript</i>.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    For the mid-semester project, I developed my first
                    website: <a href="/projects?category=websites" className="font-extrabold text-highlight tracking-widest">Fitnessoo</a>,
                    a fitness-themed website. It marked the beginning of my practical experience with front-end development.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    Because it was my first web project, I faced the challenge of finding a suitable desing and content for a fitness wesbite.
                    At first I had no clue how to start developing it, and I spent hours trying to figure what first <i>HTML</i> file I should create and trying
                    to write the first line of code. <br />
                    Once I started writing, all ideas started to flow one after the other.
                </p>
            </>
        )
    },
    {
        id: 'Fitnessoo-Continued',
        point: ' before:bg-green-500',
        title: 'Fitnessoo - Website',
        techColors: ['bg-html', 'bg-css', 'bg-js', 'bg-php'],
        content: (
            <>
                <p className="text-light-gray-70 m-0 ml-6 mb-2">
                    In my third year (October 2024), I enrolled in the <i>Web Programming Advnaced</i> course, which emphasized back-end technologies.
                    We explored <i>PHP</i> and <i>MySQL</i> to build database-driven applications.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    For my project, I continued
                    developing <a href="/projects?category=websites" className="font-extrabold text-highlight tracking-widest">Fitnessoo</a>,
                    integrating features like user data storage, form handling, and dynamic content.
                    This helped me understand the full-stack development lifecycle more deeply.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    Integrating back-end and server-side features was challenging at first, and the first challenge was organizing the files and assets and write
                    a maintable code for scalability.<br />
                    The second challenge I faced is to record sessions using cookies and allow the user to stay logged-in whenever he closes the website
                    or the browser to save his data, and at the same time allow him to log-out and delete the sessions.
                </p>
            </>
        )
    },
    {
        id: 'Quizo',
        point: ' before:bg-white',
        title: 'Quizo - Windows Application',
        techColors: ['bg-csharp'],
        content: (
            <>
                <p className="text-light-gray-70 m-0 ml-6">
                    In addition to my main projects, I have also worked on various other projects.
                    These projects have allowed me to experiment different technologies, such as windows form application using <i>C#</i>, where
                    I created a simple quiz application and other more tasks, and <i>Python</i> for data analysis and machine learning tasks.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    It was challenging to control how questions are integrated in different levels and categories, and only allow the user
                    to go to the next question, level, and category when he has finished the previous ones, all while keeping the user informed
                    with the flow and time and score tracking.
                </p>
            </>
        )
    },
    {
        id: 'Ma7ali',
        point: ' before:bg-blue-500',
        title: 'Ma7ali - Web Application',
        techColors: ['bg-html', 'bg-css', 'bg-js'],
        content: (
            <>
                <p className="text-light-gray-70 m-0 ml-6">
                    In my third year (March 2025), I began my senior project: a complete <i>Point of Sale (POS) </i>
                    web application named <a href="/projects?category=applications" className="font-extrabold text-highlight tracking-widest">Ma7ali</a>.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    This project brought together everything I had learned. I built the UI using <i>HTML, CSS, and JavaScript</i>,
                    and used <i>Firebase Firestore</i> as a real-time NoSQL database. Key features included inventory and sales tracking, dynamic dashboards,
                    PDF exports, authentication, and a fully responsive interface. This project strengthened my ability to design and implement
                    scalable web applications.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    The biggest challenge I faced developing this applicaton was allowing the user to take full control of the integrated features,
                    give him real-time updates accross all interfaces, and make the dynamic content displayed fast and effecient with clean design and navigations, all
                    while keeping the code maintainable, scalable and not repeated.
                </p>
            </>
        )
    },
    {
        id: 'Portfolio',
        point: ' before:bg-amber-500',
        title: 'My Portfolio - Website',
        techColors: ['bg-html', 'bg-css', 'bg-js', 'bg-tailwind', 'bg-react'],
        content: (
            <>
                <p className="text-light-gray-70 m-0 ml-6">
                    After completing the <i>POS Application</i>, I wanted to explore modern frameworks and tools.
                    I studied <i>React</i> and <i>Tailwind CSS</i> through self-learning and tutorials, and used them to build this very website—my portfolio.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    This site showcases my projects, skills, and growth as a developer. It also serves as a milestone to reflect on how far I’ve come—and how
                    much more I aspire to learn.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    When I decided to create my portfolio I did not had a clue of what portfolios contain or look like, and I did not know how to desgin it or what
                    to include in it. So I started exploring various online portfolios from sources like <i>Git Hub</i> and others, extracting idea after idea until I
                    got a start up and began to implement it.
                </p>
                <p className="text-light-gray-70 m-0 ml-6">
                    After learning <i>Tailwind</i>, it was super challenging to set it up and use it to its full potentials from writing the styles using <i>Tailwind </i>'s
                    syntax, to be able to fully customize it, and to using the directories, all with best practices and maintenance.
                </p>
            </>
        )
    },
];

export const ProjectButton = ({ onClick, isExpanded, label }) => {
    return (
        <button
            onClick={onClick}
            className={`
        ${isExpanded ? 'opacity-100' : 'opacity-70'}
        relative flex flex-row justify-start items-center gap-2 w-full bg-gradient-onyx text-yellow-crayola font-[500] p-2 rounded-[10px] z-20 
        shadow-3 custom-transition-1
        before:content-[''] before:absolute before:inset-px before:bg-gradient-jet before:rounded-[inherit] before:z-[-1] before:custom-transition-1
        `}>
            <span>{label}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down block ml-auto justify-self-end transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>
    );
};

export const ProjectSection = ({ point, title, techColors, children, isExpanded, onToggle }) => {
    return (
        <section className={sections2}>
            <div className={explanationContainer + point}>
                <header className="mb-1.5 ml-5 md:w-[60%]">
                    <ProjectButton onClick={onToggle} isExpanded={isExpanded} label={title} />
                </header>
                <div className={`flex flex-col gap-2 overflow-hidden before:absolute before:content[''] before:h-full before:bg-jet before:w-px before:top-0 before:-z-10 ${isExpanded ? 'h-auto' : 'h-0'}`}>
                    <div className="
                        relative flex items-center gap-1 bg-gradient-onyx shadow-2 rounded-[10px] p-3 w-full md:w-[60%] z-20 ml-5
                        before:content-[''] before:absolute before:inset-px before:rounded-[inherit] before:bg-gradient-jet before:custom-transition-1 before:-z-10">
                        {techColors.map((cls, i) => (
                            <span key={i} className={`${cls} rounded-[3px] h-4 w-7`}></span>
                        ))}
                    </div>
                    {children}
                </div>
            </div>
        </section>
    );
};