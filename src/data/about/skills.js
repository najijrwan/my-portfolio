export const SKILLS = [
    {
        category: 'technologies',
        type: 'proficiency',
        proficient: [
            {
                tech: 'html',
                name: 'HTML5',
                src: 'images/skills-image/html.png',
            },
            {
                tech: 'css',
                name: 'CSS3',
                src: 'images/skills-image/css.png',
            },
            {
                tech: 'javascript',
                name: 'JavaScript (ES6+)',
                devIcon: 'JavaScript',
                src: 'images/skills-image/javascript.png',
            },
            {
                tech: 'tailwindcss',
                name: 'Tailwind CSS',
                devIcon: 'TailwindCSS',
                src: 'images/skills-image/tailwind-css.png',
            },
            {
                tech: 'react',
                name: 'React',
                src: 'images/skills-image/react.png',
            },
        ],
        experienced: [
            {
                tech: 'java',
                name: 'Java',
                src: 'images/skills-image/java.png',
            },
            {
                tech: 'php',
                name: 'PHP',
                src: 'images/skills-image/php.png',
            },
            {
                tech: 'mysql',
                name: 'MySQL',
                devIcon: 'MySQL',
                src: 'images/skills-image/mysql.png'
            },
        ],
        familiar: [
            {
                tech: 'csharp',
                name: 'C#',
                devIcon: 'CSharp',
                src: 'images/skills-image/csharp.png',
            },
            {
                tech: 'python',
                name: 'Python',
                src: 'images/skills-image/python.png',
            },
        ]
    },
    {
        category: 'tools',
        type: 'list',
        tools: [
            {
                tool: 'git',
                name: 'Git',
                devIcon: 'Github',
                src: 'images/skills-image/github.png'
            },
            {
                tool: 'firebase',
                name: 'Firebase',
                src: 'images/skills-image/firebase.png'
            },
            {
                tool: 'vercel',
                name: 'Vercel',
                devIcon: 'VercelLight',
                src: 'images/skills-image/vercel.png'
            },

            {
                tool: 'infinityfree',
                name: 'InfinityFree',
                src: 'images/skills-image/infinityfree.png'
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