import { VariousActionsButton } from '@ui';

const SKILLS = [
  {
    label: 'Languages & Scripting',
    skills: ['HTML', 'CSS', 'Javascript', 'PHP', 'C#', 'Python', 'Java',],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Tailwind CSS'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Firebase', 'Git', 'Visual Studio Code', 'DevTools',],
  },
  {
    label: 'Additional Skills',
    skills: ['Responsive Design', 'Technical Documentation', 'Windows Productivity & Automation'],
  }
]

const PROJECTS = [
  {
    title: 'Fitnessoo',
    subTitle: 'simple fitness tracking website',
    stack: 'HTML - CSS - Javascript - PHP',
    // description: 'A basic fitness-focused website that tracks user metrics and personal data with clean structure and design.',
    details: [
      'Built a responsive multi-page website with a focus on clean UI and maintainable code',
      'Integrated PHP backend to support user authentication, session creation, and logout functionality',
      'Stored user data such as weight, height, age, and workout details in a structured format',
      'Emphasized maintainability and code organization to support future enhancements and scalability',
    ],
  },
  {
    title: 'Quizo',
    subTitle: 'Desktop Quiz Application',
    stack: 'C#',
    // description: 'A fun and interactive Windows Forms-based quiz game built with C# for desktop users.',
    details: [
      'Developed a single-player quiz system with category and level progression, requiring users to complete 3 categories, each containing 3 levels of 5 questions',
      'Implemented score tracking, timers, and dynamic feedback to guide users through each step of the quiz',
      'Enforced a linear question flow where users must complete each question, level, and category sequentially',
      'Designed an intuitive UI with explanations and system feedback to enhance user understanding and engagement',
    ],
  },
  {
    title: 'Ma7ali',
    subTitle: 'Full-Stack POS SPA PWA for Small Businesses',
    stack: 'HTML - CSS - Javascript - Firebase',
    // description: 'A comprehensive POS progressive web application (PWA)  for managing inventory, sales, customer debts, and business analytics.',
    details: [
      'Designed and developed a full-stack POS system tailored for small business workflows',
      'Implemented multi-currency toggling (LBP ↔ USD), advanced filtering, and PDF report generation',
      'Integrated Firebase Authentication with email, Google, and phone login options',
      'Structured Firestore database to manage products, carts, sales (with profit and revenue), customers, and user settings',
      'Built dynamic dashboards with sales trends, category analysis, top/least sold products, and inventory summaries (e.g., low/out-of-stock)',
      'Enabled export of filtered product lists, customer debts, cart details, and daily sales data with interactive charts',
      'Created responsive layouts for tablet and small devices with built-in notifications (e.g., low stock, tasks)',
      'Solely responsible for architecture, UI/UX design, and full feature implementation with scalability in mind',
      'The whole system is designed for growth and scalability with considerations of future features and enhancements',
    ],
  },
  {
    title: '3legant',
    subTitle: 'Modular E-Commerce Frontend Architecture',
    stack: 'CSS - Javascript - Tailwind CSS - React + Vite',
    // description: 'A scalable, component-driven e-commerce frontend built with a focus on clean architecture and responsive UI systems.',
    details: [
      'Architected a modular frontend structure separating pages, UI components, hooks, state, and data layers for maintainability and extensibility',
      'Implemented dynamic product grid systems (4x2, 3x3, horizontal layouts) with state-driven layout switching',
      'Built reusable UI components including product cards, layout selectors, dropdown controls, and progressive “View More” rendering',
      'Developed custom responsive breakpoint hooks to optimize layouts across desktop abd mobile devices',
      'Configured Vite with path aliases and SVG integration for scalable asset management',
      'Designed the codebase to support future backend integration and full e-commerce functionality',
    ],
  },
]

const EDUCATIONS = [
  {
    degree: 'Bachelor of Science in Computer Science',
    uni: 'Lebanese International University',
    uniLocation: 'Lebanon, West Beqaa, Alkhyara',
    gpa: '3.66',
    date: '2022 - 2025',
  },
]

const HONORS = [
  {
    title: "Dean's List",
    issuer: "LIU",
    date: "June 2023",
    src: "/cv.pdf",
  },
  {
    title: "Presedints List",
    issuer: "LIU",
    date: "June 2024",
    src: "/cv.pdf",
  },
  {
    title: "7th SAS Students Research Day",
    issuer: "LIU",
    date: "May 2025",
    src: "/cv.pdf",
  }
]

const LANGUAGES = [
  {
    lan: "Arabic",
    prof: "Native",
  },
  {
    lan: "English",
    prof: "Fluent",
  },
  {
    lan: "Spanish",
    prof: "Basic",
  },
]

export const resumeSections = [
  {
    heading: "professional summary",
    content: [
      <p>
        Front-End Developer and aspiring Full-Stack Engineer, passionate about building responsive web
        and mobile applications. Experienced in designing and developing solo projects from scratch using
        modern technologies like React, Tailwind, and Firebase.
      </p>,
      <p>
        Committed to writing clean, maintainable
        code and following best practices to ensure scalability and long-term growth. Strong
        problem-solving mindset, self-motivated and fast learner actively transitioning into full-stack and
        application development roles.
      </p>
    ],
  },
  {
    heading: "technical skills",
    content: SKILLS.map((item) => (
      <>
        <header className="mb-2 text-white">{item.label}</header>
        <ul key={item.label}>
          {item.skills.map((skill) => (
            <li
              key={skill}
              className="
              relative
              pl-[1em] ml-5
              before:content-[''] before:absolute before:left-0 before:top-[9px]
              before:size-[5px]
              before:bg-[#ffd700] before:rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </>
    )),
  },
  {
    heading: "PROJECTS",
    content: PROJECTS.map((item) => (
      <>
        <header className="mb-2 text-white">
          <h1><i>{item.title}</i> &nbsp; • &nbsp; {item.subTitle}</h1>
          <h2>stack: <i>{item.stack}</i></h2>
        </header>
        <ul key={item.title}>
          {item.details.map((skill) => (
            <li
              key={skill}
              className="
              relative
              pl-[1em] ml-5
              before:content-[''] before:absolute before:left-0 before:top-[9px]
              before:size-[5px]
              before:bg-[#ffd700] before:rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </>
    )),
  },
  {
    heading: "Education",
    content: EDUCATIONS.map((edu) => (
      <>
        <header className="mb-2 text-white">
          {edu.degree}
        </header>
        <p className="text-light-gray italic">
          <span className="text-vegas-gold"> - </span>{edu.uni} &nbsp; • &nbsp; {edu.uniLocation}
        </p>
        <p><span className="text-vegas-gold"> - </span>GPA: {edu.gpa}</p>
        <p><span className="text-vegas-gold"> - </span>{edu.date}</p>
      </>
    )),
  },
  {
    heading: "Honors & Certificates",
    content: HONORS.map((honor) => (
      <>
        <header className="text-white">
          {honor.title}
        </header>

        <div className='flex gap-1 items-center'>
          <button className='flex items-start'>
            <ion-icon
              name='document-text-outline'
              className='size-4.5 text-yellow-crayola hover:text-yellow-crayola/50'
            />
          </button>
          <p className='text-light-gray'>{honor.issuer} &nbsp; • &nbsp; {honor.date}</p>
        </div></>
    )),
  },
  {
    heading: "Languages",
    content: (LANGUAGES.map((lan) => (
      <>
        <p>{lan.lan}<span> ({lan.prof})</span></p>
      </>
    ))
    )
  },
  {
    heading: "INTERESTS",
    content: [
      <p>Front-End Developer and aspiring Full-Stack Engineer...</p>,
      <p>Committed to writing clean, maintainable code...</p>,
    ],
  },
];