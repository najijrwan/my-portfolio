//Career.jsx
import Navbar from "../components/Navbar";
import { useState } from "react";
import { h2Ele, h3Ele, spanEle1, spanEle2 } from './About.jsx';
import {
  timeLineData1, timeLineData2, timeLineData3, timeLineData4, timeLineData5, timeLineData6,
  timeLineDataAtSM1, timeLineDataAtSM2, timeLineDataAtSM3, timeLineDataAtSM4,
  timeLineDataAtMD1, timeLineDataAtMD2, timeLineDataAtMD3, timeLineDataAtMD4,
  timeLineDataAtLG1, timeLineDataAtLG2, timeLineDataAtLG3,
  timeLineDataForFSD1, timeLineDataForFSD2, timeLineDataForFSD3,
  timeLineDataForFSDAtSM1, timeLineDataForFSDAtSM2, timeLineDataForFSDAtSM3,
  timeLineDataForFSDAtMD1, timeLineDataForFSDAtMD2,
  timeLineDataForFSDAtLG1, timeLineDataForFSDAtLG2,
  timeLineDataForADV1, timeLineDataForADV2,
  timeLineDataForADVAtSM1, timeLineDataForADVAtSM2,
  timeLineDataForADVAtMD1,
  timeLineDataForADVAtLG1,
} from "../components/timeLineData";
import TimelineItem from "../components/TimeLineItem";


export const section = `
  relative w-full flex justify-center sm:hidden lg:hidden`;

export const sectionAtSM = `
  relative w-full hidden sm:block md:hidden lg:hidden`;

export const sectionAtMD = `
  relative w-full hidden md:block lg:hidden`;

export const sectionAtLG = `
  relative w-full hidden lg:flex lg:justify-center`;

export const arrowLineContainer = `
  w-full max-w-[350px] h-0.5 relative`;

export const arrowLineContainerAtSMandMD = `
  w-full h-0.5 relative`;

export const arrowLineContainerAtLG = `
  w-full max-w-[350px] h-0.5 relative lg:max-w-full`;

export const arrowLine = `
  w-0 h-0.5 bg-highlight animate-width relative
  after:absolute after:right-[-8px] after:top-1/2 after:translate-y-[-50%] after:w-0 after:h-0
  after:border-t-6 after:border-b-6 after:border-l-8 after:border-transparent after:border-l-highlight
`;

export const explanationContainer = `
  w-full relative
  before:content-[''] before:absolute before:top-3.5 before:-left-[5px] before:size-3 before:rounded-full`;

export const explanationPara = `
  text-light-gray-70 relative 
  before:absolute before:content-[''] before:-left-[19px] before:top-[6px] before:bg-transparent before:size-[13px] before:rounded-full before:border before:border-highlight 
  after:shadow-[0px_0px_5px] after:shadow-highlight before:shadow-[0px_0px_5px] before:shadow-highlight
  after:absolute after:content-[''] after:bg-highlight after:left-[-16px] after:top-[9px] after:size-[7px] after:rounded-full`;

export const sections2 = `
  relative w-full m-2 mb-3.5 max-w-fit tracking-wide`;

const projectSections = [
  {
    id: 'Fitnessoo',
    point: ' before:bg-red-500',
    title: 'Fitnessoo - Website',
    techColors: ['bg-html', 'bg-css', 'bg-js'],
    content: (
      <>
        <p className="text-light-gray-70 m-0 ml-5">
          In my second year of college (Mar 2024), I took my first <i>Web Programming</i> course. It introduced core web technologies such
          as <i>HTML</i>, <i>CSS</i>, <i>JavaScript</i>, and <i>PHP</i>.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
          For the mid-semester project, I developed my first
          website: <a href="/projects?category=websites" className="font-extrabold text-highlight tracking-widest">Fitnessoo</a>,
          a fitness-themed website. It marked the beginning of my practical experience with front-end development.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
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
        <p className="text-light-gray-70 m-0 ml-5 mb-2">
          In my third year (October 2024), I enrolled in the <i>Web Programming Advnaced</i> course, which emphasized back-end technologies.
          We explored <i>PHP</i> and <i>MySQL</i> to build database-driven applications.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
          For my project, I continued
          developing <a href="/projects?category=websites" className="font-extrabold text-highlight tracking-widest">Fitnessoo</a>,
          integrating features like user data storage, form handling, and dynamic content.
          This helped me understand the full-stack development lifecycle more deeply.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
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
        <p className="text-light-gray-70 m-0 ml-5">
          In addition to my main projects, I have also worked on various other projects.
          These projects have allowed me to experiment different technologies, such as windows form application using <i>C#</i>, where
          I created a simple quiz application and other more tasks, and <i>Python</i> for data analysis and machine learning tasks.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
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
        <p className="text-light-gray-70 m-0 ml-5">
          In my third year (March 2025), I began my senior project: a complete <i>Point of Sale (POS) </i>
          web application named <a href="/projects?category=applications" className="font-extrabold text-highlight tracking-widest">Ma7ali</a>.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
          This project brought together everything I had learned. I built the UI using <i>HTML, CSS, and JavaScript</i>,
          and used <i>Firebase Firestore</i> as a real-time NoSQL database. Key features included inventory and sales tracking, dynamic dashboards,
          PDF exports, authentication, and a fully responsive interface. This project strengthened my ability to design and implement
          scalable web applications.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
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
        <p className="text-light-gray-70 m-0 ml-5">
          After completing the <i>POS Application</i>, I wanted to explore modern frameworks and tools.
          I studied <i>React</i> and <i>Tailwind CSS</i> through self-learning and tutorials, and used them to build this very website—my portfolio.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
          This site showcases my projects, skills, and growth as a developer. It also serves as a milestone to reflect on how far I’ve come—and how
          much more I aspire to learn.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
          When I decided to create my portfolio I did not had a clue of what portfolios contain or look like, and I did not know how to desgin it or what
          to include in it. So I started exploring various online portfolios from sources like <i>Git Hub</i> and others, extracting idea after idea until I
          got a start up and began to implement it.
        </p>
        <p className="text-light-gray-70 m-0 ml-5">
          After learning <i>Tailwind</i>, it was super challenging to set it up and use it to its full potentials from writing the styles using <i>Tailwind </i>'s
          syntax, to be able to fully customize it, and to using the directories, all with best practices and maintenance.
        </p>
      </>
    )
  },
];

const ProjectSection = ({ point, title, techColors, children, isExpanded, onToggle }) => {
  return (
    <section className={sections2}>
      <div className={explanationContainer + point}>
        <header className="flex flex-col justify-start items-start gap-1.5 mb-1 ml-5 md:flex-row">
          <ProjectButton onClick={onToggle} isExpanded={isExpanded} label={title} />
          <div className="
          relative flex items-center gap-1 bg-gradient-onyx shadow-2 rounded-[10px] p-3 w-full z-20 
          before:content-[''] before:absolute before:inset-px before:rounded-[inherit] before:bg-gradient-jet before:custom-transition-1 before:-z-10">
            {techColors.map((cls, i) => (
              <span key={i} className={`${cls} rounded-[3px] flex flex-grow h-4 w-7`}></span>
            ))}
          </div>
        </header>
        <div className={`flex flex-col gap-2 overflow-hidden before:absolute before:content[''] before:h-full before:bg-jet before:w-px before:top-0 before:-z-10 ${isExpanded ? 'h-auto' : 'h-0'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};


const ProjectButton = ({ onClick, isExpanded, label }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${isExpanded ? 'opacity-100' : 'opacity-80'}
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

const Career = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpanded = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandedList = () => setIsExpanded(prev => !prev);

  return (
    <article className="">
      <Navbar />
      <div className="p-[20px] sm:p-[30px] flex flex-col gap-20">
        <h2 className={h2Ele}>Journey</h2>
        {/* Timeline Section */}
        <div className="flex-center-col gap-[170px] w-full mt-5">
          <section className={section}>
            {/* Arrow Line */}
            <div className={arrowLineContainer}>
              <div className={arrowLine}>
                {timeLineData1.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className={section}>
            {/* Arrow Line */}
            <div className={arrowLineContainer}>
              <div className={arrowLine}>
                {timeLineData2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className={section}>
            {/* Arrow Line */}
            <div className={arrowLineContainer}>
              <div className={arrowLine}>
                {timeLineData3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className={section}>
            {/* Arrow Line */}
            <div className={arrowLineContainer}>
              <div className={arrowLine}>
                {timeLineData4.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className={section}>
            {/* Arrow Line */}
            <div className={arrowLineContainer}>
              <div className={arrowLine}>
                {timeLineData5.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className={section}>
            {/* Arrow Line */}
            <div className={arrowLineContainer}>
              <div className={arrowLine}>
                {timeLineData6.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className={sectionAtSM}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtSM1.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className={sectionAtSM}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtSM2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className={sectionAtSM}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtSM3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className={sectionAtSM}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtSM4.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at medium*/}
          <section className={sectionAtMD}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtMD1.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at medium*/}
          <section className={sectionAtMD}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtMD2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at medium*/}
          <section className={sectionAtMD}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtMD3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at medium*/}
          <section className={sectionAtMD}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtSMandMD}>
              <div className={arrowLine}>
                {timeLineDataAtMD4.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at large*/}
          <section className={sectionAtLG}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtLG}>
              <div className={arrowLine}>
                {timeLineDataAtLG1.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at large*/}
          <section className={sectionAtLG}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtLG}>
              <div className={arrowLine}>
                {timeLineDataAtLG2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at large*/}
          <section className={sectionAtLG}>
            {/* Arrow Line */}
            <div className={arrowLineContainerAtLG}>
              <div className={arrowLine}>
                {timeLineDataAtLG3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="animate-fade-3 opacity-0 invisible h-0 overflow-hidden" style={{ animationDelay: "2.5s" }}>

          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Journey Explanation
          </h3>
          <div className="mb-5">
            <ProjectButton onClick={toggleExpandedList} isExpanded={isExpanded} label={isExpanded ? 'Read Less' : 'Read More'} />
          </div>
          <ul className={`
            ${isExpanded ? 'block' : 'hidden'}
            relative my-5 custom-transition-2 before:absolute before:content-[''] before:h-full before:w-px before:-z-10 before:bg-jet before:top-1.5 before:left-[7px] 
            `}>
            <li className="text-highlight ml-5 mb-2">
              <p className={explanationPara}>
                My learning journey—from <i>Java</i> to <i>Python</i> and beyond—began as part of my Bachelor's degree in Computer Science.
                I was first introduced to programming through <i>Java</i>, which I studied across three core
                courses: <i>Introduction to Programming</i>, <i>Intermediate Programming with Objects</i>,
                and <i>Data Structures</i>, all based on the textbook <i>Introduction to Java Programming (9th Edition) by Y. Daniel Liang</i>.
              </p>
            </li>
            <li className="text-highlight ml-5 mb-2">
              <p className={explanationPara}>
                I later explored web development fundamentals—<i>HTML, CSS, JavaScript</i>, and <i>PHP</i>—through two specialized courses:
                <i>Web Programming</i> and <i>Web Programming Advanced</i>. I also gained exposure to Windows-based GUI development in a course
                called <i>Visual Programming</i>, and later transitioned to learning <i>Python</i> through a <i>Machine Learning</i> course.
              </p>
            </li>
            <li className="text-highlight ml-5 mb-2">
              <p className={explanationPara}>
                Near the end of my degree, I began independently exploring new technologies, focusing on modern tools
                like <i>Tailwind CSS</i> and <i>React</i> by studying open-source projects and official documentation.
                My goal is to continually expand my skills and build practical, full-stack websites and applications.
              </p>
            </li>
            <li className="text-highlight ml-5 mb-2">
              <p className={explanationPara}>
                Each date shown under a language or tool represents when I first started learning it. The colored circles indicate the corresponding
                projects I developed afterwards.
              </p>
            </li>
            <li className="text-highlight ml-5 mb-2">
              <p className={explanationPara}>
                Below is a breakdown of the major projects I completed during my learning journey. <br />
                Each of these projects has contributed to my growth as a developer, helping me to refine my skills and expand my knowledge.
                I am always eager to learn new technologies and take on new challenges, and I look forward to continuing my journey in
                web and application development.
              </p>
            </li>
          </ul>

          {projectSections.map((section) => (
            <ProjectSection
              key={section.id}
              point={section.point}
              title={section.title}
              techColors={section.techColors}
              isExpanded={!!expandedSections[section.id]} // ✅ scoped to this section
              onToggle={() => toggleExpanded(section.id)} // ✅ toggles only this one
            >
              {section.content}
            </ProjectSection>
          ))}

          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Full Stack Developer Roadmap
          </h3>

          <div className="flex-center-col gap-[170px] w-full mt-30 mb-20">

            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForFSD1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForFSD2.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForFSD3.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className={sectionAtSM}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtSM1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className={sectionAtSM}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtSM2.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section className={sectionAtSM}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtSM3.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Timeline Section at medium*/}
            <section className={sectionAtMD}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtMD1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Timeline Section at medium*/}
            <section className={sectionAtMD}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtMD2.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Timeline Section at large*/}
            <section className={sectionAtLG}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtLG}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtLG1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
            {/* Timeline Section at large*/}
            <section className={sectionAtLG}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtLG}>
                <div className={arrowLine}>
                  {timeLineDataForFSDAtLG2.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Apps Development Roadmap
          </h3>

          <div className="flex-center-col gap-[170px] w-full mt-30 mb-30">
            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForADV1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForADV2.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
            <section className={sectionAtSM}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForADVAtSM1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
            <section className={sectionAtSM}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForADVAtSM2.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Timeline Section at medium*/}
            <section className={sectionAtMD}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtSMandMD}>
                <div className={arrowLine}>
                  {timeLineDataForADVAtMD1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
            {/* Timeline Section at large*/}
            <section className={sectionAtLG}>
              {/* Arrow Line */}
              <div className={arrowLineContainerAtLG}>
                <div className={arrowLine}>
                  {timeLineDataForADVAtLG1.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Career;