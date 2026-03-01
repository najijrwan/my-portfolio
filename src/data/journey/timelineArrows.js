export const timelineArrows = [
    {
        startDateMonth: 'Feb',
        startDateYear: '2023',
        skills: [
            {
                lan: 'Java',
                label: 'Java 1',
                course: 'Introduction to Programming',
                src: 'images/java.png',
            },
        ],
        endDateMonth: 'Jun',
        endDateYear: '2023',
    },
    {
        startDateMonth: 'Oct',
        startDateYear: '2023',
        skills: [
            {
                src: 'images/java.png',
                lan: 'Java',
                label: 'Java 2',
                course: 'Intermediate Programming with Objects',
            },
        ],
        endDateMonth: 'Jan',
        endDateYear: '2024',
    },
    {
        startDateMonth: 'Feb',
        startDateYear: '2024',
        skills: [
            {
                lan: 'Java',
                src: 'images/java.png',
                label: 'Java 1',
                course: 'Data Structures and Algorithms'
            },
            {
                lan: 'HTML',
                src: 'images/html.png',
                course: 'Web Programming',
            },
            {
                lan: 'CSS',
                src: 'images/css.png',
                label: 'CSS Basics',
                course: 'Web Programming',
            },
            {
                lan: 'JavaScript',
                src: 'images/javascript.png',
                label: 'JavaScript Basics',
                course: 'Web Programming',
            },
            {
                src: 'images/php.png',
                lan: 'PHP',
                label: "PHP Basics",
                course: 'Web Programming',
            },
        ],
        projects: [
            {
                id: 'fitnesso-front',
                ref: 'fitnesso',
                label: 'fitnesso (front-end)',
                duration: 'Spring 2024',
                info: `
                    During my second year (Spring 2024), I took my first Web Programming course, 
                    learning HTML, CSS, JavaScript, and PHP. For the mid-semester project, I built 
                    Fitnesso, a simple fitness tracking website with a clean interface — my first 
                    real experience with front-end development.
                `,
                chall: `
                    Starting was the hardest part. I had no idea how to begin or structure the 
                    project, and I spent hours staring at a blank page before writing my first line 
                    of HTML. Finding a fitting design and consistent layout also took time and trial.
                `,
                outcome: `
                    Once I started coding, everything clicked. I built a responsive multi-page site
                    that taught me the basics of structure, design, and maintainable code — and 
                    sparked my lasting interest in front-end development.
                `,
            },
        ],
        endDateMonth: 'Jun',
        endDateYear: '2024',
    },
    {
        startDateMonth: 'Oct',
        startDateYear: '2024',
        skills: [
            {
                src: 'images/javascript.png',
                lan: 'JavaScript',
                label: 'JavaScript Advanced',
                course: 'Web Programming Advanced',
            },
            {
                src: 'images/php.png',
                lan: 'PHP',
                label: 'PHP Advanced',
                course: 'Web Programming Advanced',
            },
            {
                src: 'images/csharp.png',
                lan: 'C#',
                course: 'Visual Programming',
            },
        ],
        projects: [
            {
                id: 'fitnesso-back',
                ref: 'fitnesso',
                label: 'fitnesso (back-end)',
                duration: 'Fall 2024',
                info: `
                    In my third year (Fall 2024), I enrolled in the Advanced Web Programming course, where 
                    we explored PHP, MySQL, and AJAX to build database-driven applications. I 
                    decided to expand Fitnesso into a full-stack project with user data storage 
                    and dynamic features.
                `,
                chall: `
                    Integrating a back-end into an existing front-end was complex. The original code was not
                    scalable, so I had to refactor it to support authentication, sessions, and database 
                    interactions. Designing a clean schema and handling deployment issues took longer than 
                    expected.
                `,
                outcome: `
                    I successfully turned Fitnesso into a functioning full-stack web app. The process taught 
                    me how to plan architecture, structure code for growth, and approach debugging methodically 
                    — my first taste of real engineering thinking.
                `,
            },
            {
                id: 'quizo',
                ref: 'quizo',
                info: `
                    Third year (Fall 2024), I took a Visual Programming course using C# and Microsoft Visual Studio. 
                    For the final project, I built Quizo, a Windows quiz game featuring multiple categories and levels.
                `,
                chall: `
                    Learning C# from scratch while developing a functional application was difficult. I struggled with 
                    class design, logic flow, and tracking user state (score, progress, timer). Structuring questions and 
                    enforcing game progression required careful debugging.
                `,
                outcome: `
                    I finished Quizo with a clear grasp of event-driven programming and object-oriented design. It 
                    strengthened my logic and helped me appreciate how desktop software differs from web development.
                `,
            },
        ],
        endDateMonth: 'Jan',
        endDateYear: '2025',
    },
    {
        startDateMonth: 'Feb',
        startDateYear: '2025',
        skills: [
            {
                src: 'images/python.png',
                lan: 'Python',
                course: 'Machine Learning',
            },
            {
                src: 'images/react.png',
                lan: 'React',
            },
            {
                src: 'images/tailwind-css.png',
                lan: 'Tailwind',
            },
        ],
        projects: [
            {
                id: 'ma7ali',
                ref: 'ma7ali',
                info: `
                    In my final year (Spring 2025 - Graduation Semester), I built Ma7ali, a full-stack 
                    PWA designed to help small shopkeepers manage sales, inventory, and customer debts. 
                    It was my senior capstone project — the first time I engineered both the system and 
                    its full documentation, from ERDs to deployment.
                `,
                chall: `
                    Designing a system that balanced scalability and simplicity was tough. I had to make 
                    it intuitive for non-technical users while keeping it robust. Creating all design 
                    deliverables — diagrams, reports, and documentation — alongside coding pushed my time 
                    management to the limit.
                `,
                outcome: `
                    Ma7ali became my most complete project. It taught me how to design with purpose, write 
                    scalable code, and integrate documentation as part of development. More importantly, 
                    it turned abstract coursework into a real, useful solution for a common problem.
                `,
            },
            {
                id: 'portfolio',
                ref: 'portfolio',
                info: `
                    After completing Ma7ali, I wanted to push my skills further. I learned React and 
                    Tailwind CSS and decided to build my personal portfolio — not just as a website, but 
                    as a reflection of my journey and design sensibility.
                `,
                chall: `
                    With no prior UI/UX background, designing something that looked clean and professional 
                    was tough. Learning Tailwind’s utility-first syntax, organizing components, and 
                    managing consistent design took countless iterations.
                `,
                outcome: `
                    The portfolio became my creative milestone — a polished, responsive website that 
                    showcased both my technical and design growth. It marked my transition from student 
                    projects to building real, personal products.    
                `,
            },
        ],
        endDateMonth: 'Jun',
        endDateYear: '2025',
    },
    {
        startDateMonth: 'Dec',
        startDateYear: '2025',
        projects: [
            {
                id: 'hekto',
                ref: 'hekto',
                info: `
                    After graduation, I returned to building projects for practice and growth. 
                    I started with Hekto, a front-end e-commerce landing page built from a Figma 
                    template using React and Tailwind.
                `,
                chall: `
                    Using Figma professionally for the first time was tricky — understanding layers, 
                    spacing, and responsive grids took adjustment. Translating static design into clean, 
                    maintainable code while keeping layouts pixel-perfect required patience.
                `,
                outcome: `
                    Hekto taught me the importance of planning architecture before coding and following 
                    design conventions closely. It strengthened my workflow and made me more confident 
                    in building production-ready UIs.
                `,
            },
            {
                id: '3legant',
                ref: '3legant',
                info: `
                    Continuing my practice with Figma and modular React design, I began 3legant, a scalable 
                    e-commerce frontend with reusable UI components and multiple layout systems.
                `,
                chall: `
                    The design was more complex than expected, requiring careful handling of layout grids 
                    and component composition. Ensuring responsiveness and code modularity became key 
                    learning points.
                `,
                outcome: `
                    Although unfinished, 3legant represents a step toward full production-grade architecture — 
                    clean, scalable, and ready for back-end integration.
                `,
            },
            {
                id: 'portfolio-refactor',
                ref: 'portfolio',
                label: 'portfolio (refactor)',
                duration: `Feb 11 - Present`,
                info: `
                    After completing Hekto and 3legant, I revisited my portfolio to refactor and restructure it 
                    with everything I had learned — better architecture, cleaner organization, and improved 
                    performance.
                `,
                chall: `
                    Breaking apart old components, cleaning state management, and optimizing file structures took 
                    time and planning.
                `,
                outcome: `
                    The refactored portfolio became a true reflection of my progress — still the same personal 
                    project, but rebuilt with professional discipline and refined technical insight.
                `,
            },
        ],
        endDateMonth: 'Feb',
        endDateYear: '2026',
    },
]