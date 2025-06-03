//Career.jsx
import Navbar from "../components/Navbar";
import { h2Ele, h3Ele, spanEle1, spanEle2 } from './About.jsx';
import {
  timeLineData1, timeLineData2, timeLineData3, timeLineData4, timeLineData5, timeLineData6,
  timeLineDataAtSM, timeLineDataAtSM2, timeLineDataAtSM3, timeLineDataAtSM4,
  timeLineDataAtMD, timeLineDataAtMD2, timeLineDataAtMD3, timeLineDataAtMD4,
  timeLineDataAtLG, timeLineDataAtLG2,
  timeLineDataForFSD, timeLineDataForFSD2, timeLineDataForFSD3,
  timeLineDataForFSDAtSM, timeLineDataForFSDAtSM2, timeLineDataForFSDAtSM3,
  timeLineDataForFSDAtMD, timeLineDataForFSDAtMD2,
  timeLineDataForFSDAtLG, timeLineDataForFSDAtLG2,
  timeLineDataForADV, timeLineDataForADV2,
  timeLineDataForADVAtSM, timeLineDataForADVAtSM2,
  timeLineDataForADVAtMD,
  timeLineDataForADVAtLG,
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
  before:content-[''] before:absolute before:top-1.25 before:left-0 before:-translate-x-1/2 before:size-3 before:rounded-full`;

export const sections2 = `
  relative w-full ml-8 max-w-fit tracking-wide`;

const Career = () => {
  return (
    <article className="">
      <Navbar />
      <div className="p-[20px] sm:p-[30px] flex flex-col gap-20">
        <h2 className={h2Ele}>Journey</h2>
        {/* Timeline Section */}
        <div className="flex-center-col gap-[150px] w-full">
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
                {timeLineDataAtSM.map((item, index) => (
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
                {timeLineDataAtMD.map((item, index) => (
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
                {timeLineDataAtLG.map((item, index) => (
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
        </div>
        <div className="animate-fade-3 opacity-0 invisible h-0 overflow-hidden" style={{ animationDelay: "2.5s" }}>

          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Journey Explanation
          </h3>

          <ul className="mb-5">
            <li className="list-disc list- text-base ml-5 mb-2">
              <p className="text-light-gray-70">
                My learning journey—from <i>Java</i> to <i>Python</i> and beyond—began as part of my Bachelor's degree in Computer Science.
                I was first introduced to programming through <i>Java</i>, which I studied across three core courses:
                <i>Introduction to Programming</i>, <i>Intermediate Programming with Objects</i>, and <i>Data Structures</i>, all based on the textbook
                <i>Introduction to Java Programming (9th Edition) by Y. Daniel Liang</i>.
              </p>
            </li>
            <li className="list-disc list- text-base ml-5 mb-2">
              <p className="text-light-gray-70">
                I later explored web development fundamentals—<i>HTML, CSS, JavaScript</i>, and <i>PHP</i>—through two specialized courses:
                <i>Web Programming</i> and <i>Advanced Web Programming</i>. I also gained exposure to Windows-based GUI development in a course
                called <i>Visual Programming</i>, and later transitioned to learning <i>Python</i> through a <i>Machine Learning</i> course.
              </p>
            </li>
            <li className="list-disc list- text-base ml-5 mb-2">
              <p className="text-light-gray-70">
                Near the end of my degree, I began independently exploring new technologies, focusing on modern tools like <i>Tailwind CSS</i> and
                <i>React</i> by studying open-source projects and official documentation. My goal is to continually expand my skills and build practical, full-stack
                applications.
              </p>
            </li>
            <li className="list-disc list- text-base ml-5 mb-2">
              <p className="text-light-gray-70">
                Each date shown under a language or tool represents when I first started learning it. The colored circles indicate the corresponding
                projects I developed afterwards.
              </p>
            </li>
            <li className="list-disc list- text-base ml-5 mb-2">
              <p className="text-light-gray-70">
                Below is a breakdown of the major projects I completed during my learning journey.
              </p>
            </li>
          </ul>

          <section className={sections2}>
            <div className={explanationContainer + ` before:bg-red-500`} >
              <header className="flex flex-col gap-2 mb-2 md:flex-row">
                <h3 className="font-extrabold ml-5">Fitnessoo - Website</h3>
                <div className="flex items-center gap-4 ml-5">
                  <span className="bg-html rounded-[3px] h-4 w-7"></span>
                  <span className="bg-css rounded-[3px] h-4 w-7"></span>
                  <span className="bg-js rounded-[3px] h-4 w-7"></span>
                </div>
              </header>
              <p className="text-light-gray-70 ml-5 mb-2">
                In my second year of college (Mar 2024), I took my first <i>Web Programming</i> course. It introduced core web technologies such
                as <i>HTML</i>, <i>CSS</i>, <i>JavaScript</i>, and <i>PHP</i>.
              </p>
              <p className="text-light-gray-70 ml-5">
                For the mid-semester project, I developed my first
                website: <a href="/projects?category=websites" className="font-extrabold text-highlight tracking-widest">Fitnessoo</a>,
                a fitness-themed website. It marked the beginning of my practical experience with front-end development.
              </p>
              <p className="text-light-gray-70 ml-5">
                Because it was my first web project, I faced the challenge of finding a suitable desing and content for a fitness wesbite.
                At first I had no clue how to start developing it, and I spent hours trying to figure what first <i>HTML</i> file I should create and trying
                to write the first line of code. <br />
                Once I started writing, all ideas started to flow one after the other.
              </p>
            </div>
          </section>

          <section className={sections2}>
            <div className={explanationContainer + ` before:bg-green-500`}>
              <header className="flex flex-col gap-2 mb-2 md:flex-row">
                <h3 className="font-extrabold ml-5">Fitnessoo - Website</h3>
                <div className="flex items-center gap-4 ml-5">
                  <span className="bg-html rounded-[3px] h-4 w-7"></span>
                  <span className="bg-css rounded-[3px] h-4 w-7"></span>
                  <span className="bg-js rounded-[3px] h-4 w-7"></span>
                  <span className="bg-php rounded-[3px] h-4 w-7"></span>
                </div>
              </header>
              <p className="text-light-gray-70 ml-5 mb-2">
                In my third year (October 2024), I enrolled in the <i>Web Programming Advnaced</i> course, which emphasized back-end technologies.
                We explored <i>PHP</i> and <i>MySQL</i> to build database-driven applications.
              </p>
              <p className="text-light-gray-70 ml-5">
                For my project, I continued
                developing <a href="/projects?category=websites" className="font-extrabold text-highlight tracking-widest">Fitnessoo</a>,
                integrating features like user data storage, form handling, and dynamic content.
                This helped me understand the full-stack development lifecycle more deeply.
              </p>
              <p className="text-light-gray-70 ml-5">
                Integrating back-end and server-side features was challenging at first, and the first challenge was organizing the files and assets and write
                a maintable code for scalability.<br />
                The second challenge I faced is to record sessions using cookies and allow the user to stay logged-in whenever he closes the website
                or the browser to save his data, and at the same time allow him to log-out and delete the sessions.
              </p>
            </div>
          </section>

          <section className={sections2}>
            <div className={explanationContainer + ` before:bg-blue-500`}>
              <header className="flex flex-col gap-2 mb-2 md:flex-row">
                <h3 className="font-extrabold ml-5">Ma7ali - POS Web Applicaton</h3>
                <div className="flex items-center gap-4 ml-5">
                  <span className="bg-html rounded-[3px] h-4 w-7"></span>
                  <span className="bg-css rounded-[3px] h-4 w-7"></span>
                  <span className="bg-js rounded-[3px] h-4 w-7"></span>
                </div>
              </header>
              <p className="text-light-gray-70 ml-5 mb-2">
                In my third year (March 2025), I began my senior project: a complete <i>Point of Sale (POS) </i>
                web application named <a href="/projects?category=applications" className="font-extrabold text-highlight tracking-widest">Ma7ali</a>.
              </p>
              <p className="text-light-gray-70 ml-5">
                This project brought together everything I had learned. I built the UI using <i>HTML, CSS, and JavaScript</i>,
                and used <i>Firebase Firestore</i> as a real-time NoSQL database. Key features included inventory and sales tracking, dynamic dashboards,
                PDF exports, authentication, and a fully responsive interface. This project strengthened my ability to design and implement
                scalable web applications.
              </p>
              <p className="text-light-gray-70 ml-5">
                The biggest challenge I faced developing this applicaton was allowing the user to take full control of the integrated features,
                give him real-time updates accross all interfaces, and make the dynamic content displayed fast and effecient with clean desgin and navigations, all
                while keeping the code maintable, scalable and not repeated.
              </p>
            </div>
          </section>


          <section className={sections2}>
            <div className={explanationContainer + ` before:bg-amber-500`}>
              <header className="flex flex-col gap-2 mb-2 md:flex-row">
                <h3 className="font-extrabold ml-5">My Portfolio - Website</h3>
                <div className="flex items-center gap-4 ml-5">
                  <span className="bg-html rounded-[3px] h-4 w-7"></span>
                  <span className="bg-css rounded-[3px] h-4 w-7"></span>
                  <span className="bg-js rounded-[3px] h-4 w-7"></span>
                  <span className="bg-tailwind rounded-[3px] h-4 w-7"></span>
                  <span className="bg-react rounded-[3px] h-4 w-7"></span>
                </div>
              </header>
              <p className="text-light-gray-70 ml-5 mb-2">
                After completing the <i>POS Application</i>, I wanted to explore modern frameworks and tools.
                I studied <i>React</i> and <i>Tailwind CSS</i> through self-learning and tutorials, and used them to build this very website—my portfolio.
              </p>
              <p className="text-light-gray-70 ml-5">
                This site showcases my projects, skills, and growth as a developer. It also serves as a milestone to reflect on how far I’ve come—and how
                much more I aspire to learn.
              </p>
              <p className="text-light-gray-70 ml-5">
                When I decided to create my portfolio I did not had a clue of what portfolios contain or look like, and I did not know how to desgin it or what
                to include in it. So I started exploring various online portfolios from sources like <i>Git Hub</i> and others, extracting idea after idea until I
                got a start up and began to implement it.
              </p>
              <p className="text-light-gray-70 ml-5">'
                After learning <i>Tailwind</i>, it was super challenging to set it up and use it to its full potentials from writing the styles using <i>Tailwind</i>'s
                syntax, to be able to fully customize it, and to using the directories, all with best practices and maintenance.
              </p>
            </div>
          </section>

          <section className={sections2}>
            <div className={explanationContainer + ` before:bg-base`}>
              <header className="flex flex-col gap-2 mb-2 md:flex-row">
                <h3 className="font-extrabold ml-5">Quizo - Windows Form Application</h3>
                <div className="flex items-center gap-4 ml-5">
                  <span className="bg-csharp rounded-[3px] h-4 w-7"></span>
                </div>
              </header>
              <p className="text-light-gray-70 ml-5">
                In addition to my main projects, I have also worked on various other projects.
                These projects have allowed me to experiment different technologies, such as windows form application using <i>C#</i>, where
                I created a simple quiz application and other more tasks, and <i>Python</i> for data analysis and machine learning tasks.
              </p>
              <p className="text-light-gray-70 ml-5">
                Because it was a different project using a different technology, I had a hard time finding 
              </p>
            </div>
          </section>

          <p className="text-light-gray-70 ml-5 mb-6">
            Each of these projects has contributed to my growth as a developer, helping me to refine my skills and expand my knowledge.
            I am always eager to learn new technologies and take on new challenges, and I look forward to continuing my journey in web development.
          </p>

          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Full Stack Developer Roadmap
          </h3>

          <div className="flex-center-col gap-[150px] w-full mt-30 mb-20">

            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForFSD.map((item, index) => (
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
                  {timeLineDataForFSDAtSM.map((item, index) => (
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
                  {timeLineDataForFSDAtMD.map((item, index) => (
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
                  {timeLineDataForFSDAtLG.map((item, index) => (
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

          <div className="flex-center-col gap-[150px] w-full mt-30 mb-30">
            <section className={section}>
              {/* Arrow Line */}
              <div className={arrowLineContainer}>
                <div className={arrowLine}>
                  {timeLineDataForADV.map((item, index) => (
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
                  {timeLineDataForADVAtSM.map((item, index) => (
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
                  {timeLineDataForADVAtMD.map((item, index) => (
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
                  {timeLineDataForADVAtLG.map((item, index) => (
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