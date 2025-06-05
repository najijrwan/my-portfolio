//Career.jsx
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { h2Ele, h3Ele, spanEle1, spanEle2 } from './About.jsx';
import { projectSections, ProjectButton, ProjectSection } from "../components/projectExplanation";
import { renderTimelineGroup } from "../components/timelineGroups";

export const explanationPara = `
  text-light-gray-70 relative 
  before:absolute before:content-[''] before:-left-[19px] before:top-[6px] before:bg-transparent before:size-[13px] before:rounded-full before:border before:border-highlight 
  after:shadow-[0px_0px_5px] after:shadow-highlight before:shadow-[0px_0px_5px] before:shadow-highlight
  after:absolute after:content-[''] after:bg-highlight after:left-[-16px] after:top-[9px] after:size-[7px] after:rounded-full`;

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

  // Set to true if screen width is lg (1024px) or larger
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = () => {
      setIsExpanded(mediaQuery.matches);
    };

    handleResize(); // Set initially
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <article className="">
      <Navbar />
      <div className="p-[20px] sm:p-[30px]">
        <h2 className={h2Ele}>Journey</h2>
        <div className="flex-center-col gap-[170px] w-full mt-35 mb-25">
          {renderTimelineGroup("Main")}
        </div>

        <div className="animate-fade-3 opacity-0 h-0 overflow-hidden mb-15">
          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Journey Explanation
          </h3>
          <div className="flex flex-col gap-3 mb-7">
            <div className="md:w-[70%]">
              <ProjectButton onClick={toggleExpandedList} isExpanded={isExpanded} label={isExpanded ? 'Read Less' : 'Read More'} />
            </div>

            <ul className={`
            ${isExpanded ? 'block' : 'hidden'}
            relative mt-1! custom-transition-2 before:absolute before:content-[''] before:h-full before:w-px before:-z-10 before:bg-jet before:top-1.5 before:left-[7px] 
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
          </div>

          <div className="lg:grid lg:grid-cols-2 ">
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
          </div>
        </div>
        <div className="animate-fade-3 opacity-0 h-0  overflow-hidden mb-25">
          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Full Stack Developer Roadmap
          </h3>

          <div className="flex-center-col gap-[170px] w-full mt-35">
            {renderTimelineGroup("Full Stack Developer")}
          </div>
        </div>
        <div className="animate-fade-3 opacity-0 h-0 overflow-hidden mb-25">
          <h3 className={h3Ele}>
            <span className={spanEle1}></span>
            <span className={spanEle2}></span>
            Apps Development Roadmap
          </h3>

          <div className="flex-center-col gap-[170px] w-full mt-35">
            {renderTimelineGroup("Application Development")}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Career;