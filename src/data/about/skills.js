export const SKILLS = [
    {
        category: 'technologies',
        type: 'proficiency',
        proficient: [
            {
                tech: 'html',
                name: 'HTML5',
                iconSrc: 'external-icons/html.svg',
                imgSrc: 'images/skills-image/html.png',
            },
            {
                tech: 'css',
                name: 'CSS3',
                iconSrc: 'external-icons/css.svg',
                imgSrc: 'images/skills-image/css.png',
            },
            {
                tech: 'javascript',
                name: 'JavaScript (ES6+)',
                iconSrc: 'external-icons/javascript.svg',
                imgSrc: 'images/skills-image/javascript.png',
            },
            {
                tech: 'tailwindcss',
                name: 'Tailwind CSS',
                iconSrc: 'external-icons/tailwindcss.svg',
                imgSrc: 'images/skills-image/tailwind-css.png',
            },
            {
                tech: 'react',
                name: 'React',
                iconSrc: 'external-icons/react.svg',
                imgSrc: 'images/skills-image/react.png',
            },
        ],
        experienced: [
            {
                tech: 'php',
                name: 'PHP',
                iconSrc: 'external-icons/php.svg',
                imgSrc: 'images/skills-image/php.png',
            },
            {
                tech: 'mysql',
                name: 'MySQL',
                iconSrc: 'external-icons/mysql.svg',
                imgSrc: 'images/skills-image/mysql.png'
            },
            {
                tech: 'java',
                name: 'Java',
                iconSrc: 'external-icons/java.svg',
                imgSrc: 'images/skills-image/java.png',
            },
            {
                tech: 'csharp',
                name: 'CSharp',
                iconSrc: 'external-icons/csharp.svg',
                imgSrc: 'images/skills-image/csharp.png',
            },
        ],
        familiar: [
            {
                tech: 'python',
                name: 'Python',
                iconSrc: 'external-icons/python.svg',
                imgSrc: 'images/skills-image/python.png',
            },
            {
                tech: 'mss',
                name: 'Microsoft SQL Server',
                iconSrc: 'external-icons/microsoftsqlserver.svg',
                imgSrc: 'images/skills-image/microsoftsqlserver.png',
            },
            {
                tech: 'nodejs',
                name: 'Node JS',
                iconSrc: 'external-icons/nodejs.svg',
                imgSrc: 'images/skills-image/nodejs.png',
            },
        ]
    },
    {
        category: 'tools',
        type: 'list',
        tools: [
            {
                tool: 'vscode',
                name: 'VS Code',
                iconSrc: 'external-icons/vscode.svg',
                imgSrc: 'images/skills-image/vscode.png',
            },
            {
                tool: 'visualstudio',
                name: 'Visual Studio',
                iconSrc: 'external-icons/visualstudio.svg',
                imgSrc: 'images/skills-image/visualstudio.png',
            },
            {
                tool: 'git',
                name: 'Git',
                iconSrc: 'external-icons/git.svg',
                imgSrc: 'images/skills-image/git.png',
            },
            {
                tool: 'vite',
                name: 'Vite',
                iconSrc: 'external-icons/vite.svg',
                imgSrc: 'images/skills-image/vite.png',
            },
            {
                tool: 'figma',
                name: 'Figma',
                iconSrc: 'external-icons/figma.svg',
                imgSrc: 'images/skills-image/figma.png',
            },
            {
                tool: 'infinityfree',
                name: 'InfinityFree',
                iconSrc: 'external-icons/infinityfree.svg',
                imgSrc: 'images/skills-image/infinityfree.png'
            },
            {
                tool: 'firebase',
                name: 'Firebase',
                iconSrc: 'external-icons/firebase.svg',
                imgSrc: 'images/skills-image/firebase.png'
            },
            {
                tool: 'vercel',
                name: 'Vercel',
                iconSrc: 'external-icons/vercel.svg',
                imgSrc: 'images/skills-image/vercel.png'
            },
        ],
    },
    {
        category: 'key strengths',
        type: 'list',
        items: [
            'PDF Report Generation',
            'Multi-Currency Systems',
            'Technical Documentation',
            'Solo Project Ownership',
            'Efficiency-Driven',
        ],
    },
]

export const TECHS_BY_TECH = Object.fromEntries(
    SKILLS.flatMap(category => [
        ...(category.proficient || []),
        ...(category.experienced || []),
        ...(category.familiar || []),
        ...(category.tools || [])
    ]).map(tech => [tech.tech ?? tech.tool, tech])  // Returns { html: { tech: 'html', name: 'HTML5', ... } }
);