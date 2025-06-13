// Resume.jsx
import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';
export const divEle1 =
  `flex items-center gap-[15px] mb-[25px]`;
export const divEle2 =
  `relative bg-gradient-onyx size-[30px] rounded-[8px] flex-center text-[16px] text-highlight shadow-1 z-10 
  before:content-[""] before:absolute before:inset-px before:bg-eerie-1 before:rounded-[inherit] before:z-[-1]
  sm:size-[48px] sm:rounded-[12px] sm:text-[18px]`;
export const liEle1 =
  `relative mb-[20px] 
  before:content-[""] before:absolute before:top-[-25px] 
  before:left-[-30px] before:w-px before:ch before:bg-jet
  sm:before:left-[-40px] 
  after:content-[""] after:absolute after:top-[5px] after:left-[-33px] after:size-[6px] after:bg-gradient-yellow-3 after:rounded-full after:shadow-[0_0_0_4px_var(--color-jet)] 
  sm:after:size-2 sm:after:left-[-43px]`;
export const liEle2 =
  `relative pl-[1em] before:content-[''] before:absolute before:left-0 before:top-[9px] before:size-[5px] before:bg-[#ffd700] before:rounded-full `;
export const h4Ele1 =
  `text-[15px]/5 sm:-text-[14px] mb-[7px] font-bold`;
export const pEle1 =
  `text-light-gray text-[15px]/6 font-[300] xl:max-w-[700px] mb-2`;
const spanEle1 =
  `text-vegas-gold font-[400] text-[14px]/6`;
const Resume = () => {
  return (
    <article>
      <Navbar />
      <div className="p-[20px] sm:p-[30px] ">
        <h2 className={h2Ele} >Resume</h2>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>PROFESSIONAL SUMMARY </h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <p className={pEle1} >
                Front-End Developer and aspiring Full-Stack Engineer, passionate about building responsive web
                and mobile applications. Experienced in designing and developing solo projects from scratch using
                modern technologies like React, Tailwind, and Firebase. Committed to writing clean, maintainable
                code and following best practices to ensure scalability and long-term growth. Strong
                problem-solving mindset, self-motivated and fast learner actively transitioning into full-stack and
                application development roles.
              </p>
            </li>
          </ol>
        </section>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>TECHNICAL SKILLS </h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <ul className={pEle1} >
                <li className={liEle2}><strong className="font-[1000] text-base">Languages & Scripting: </strong><i>HTML, CSS, JavaScript, PHP, C#, Python, Java </i></li>
                <li className={liEle2}><strong className="font-[1000] text-base">Frameworks & Libraries: </strong><i>React, Tailwind CSS </i></li>
                <li className={liEle2}><strong className="font-[1000] text-base">Tools & Platforms: </strong><i>Firebase, Git, Visual Studio Code, DevTools, Microsoft Edge </i></li>
                <li className={liEle2}><strong className="font-[1000] text-base">Additional Skills: </strong>Responsive Design, Technical Documentation, Problem Solving, Windows Productivity & Automation </li>
              </ul>
            </li>
          </ol>
        </section>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>PROJECTS</h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <h4 className={h4Ele1} ><i className="font-serif tracking-wider">Fitnessoo</i> &nbsp; • &nbsp; Simple fitness tracking website</h4>
              <p className={pEle1} >A basic fitness-focused website that tracks user metrics and personal data with clean structure and design. </p>
              <p className={pEle1} >
                <strong className="text-base font-bold ">Stack : </strong>
                <i className="font-serif text-yellow-crayola">HTML &nbsp; - &nbsp; CSS &nbsp; - &nbsp; JavaScript &nbsp; - &nbsp; PHP</i>
              </p>
              <ul className={pEle1} >
                <li className={liEle2}>Built a responsive multi-page website with a focus on clean UI and maintainable code.</li>
                <li className={liEle2}>Integrated PHP backend to support user authentication, session creation, and logout functionality. </li>
                <li className={liEle2}>Stored user data such as weight, height, age, and workout details in a structured format.</li>
                <li className={liEle2}>Emphasized maintainability and code organization to support future enhancements and scalability. </li>
              </ul>
            </li>
            <li className={liEle1} >
              <h4 className={h4Ele1} ><i className="font-serif tracking-wider">Quizo</i> &nbsp; • &nbsp; Desktop Quiz Application</h4>
              <p className={pEle1} >A fun and interactive Windows Forms-based quiz game built with C# for desktop users. </p>
              <p className={pEle1} >
                <strong className="text-base font-bold ">Stack : </strong>
                <i className="font-serif text-yellow-crayola">C#</i> - Windows Forms (Visual Studio 2022)</p>
              <ul className={pEle1} >
                <li className={liEle2}>Developed a single-player quiz system with category and level progression, requiring users to complete 3 categories, each containing 3 levels of 5 questions. </li>
                <li className={liEle2}>Implemented score tracking, timers, and dynamic feedback to guide users through each step of the quiz. </li>
                <li className={liEle2}>Enforced a linear question flow where users must complete each question, level, and category sequentially. </li>
                <li className={liEle2}>Designed an intuitive UI with explanations and system feedback to enhance user understanding and engagement. </li>
              </ul>
            </li>
            <li className={liEle1} >
              <h4 className={h4Ele1} ><i className="font-serif tracking-wider">Ma7ali</i> &nbsp; • &nbsp; Full-Stack POS System for Small Businesses </h4>
              <p className={pEle1} >A comprehensive POS progressive web application (PWA)  for managing inventory, sales, customer debts, and business analytics. </p>
              <p className={pEle1} >
                <strong className="text-base font-bold ">Stack : </strong>
                <i className="font-serif text-yellow-crayola">HTML &nbsp; - &nbsp; CSS &nbsp; - &nbsp; JavaScript &nbsp; - &nbsp; Firebase</i>
              </p>
              <ul className={pEle1} >
                <li className={liEle2}>Designed and developed a full-stack POS system tailored for small business workflows. </li>
                <li className={liEle2}>Implemented multi-currency toggling (LBP ↔ USD), advanced filtering, and PDF report generation. </li>
                <li className={liEle2}>Integrated Firebase Authentication with email, Google, and phone login options. </li>
                <li className={liEle2}>Structured Firestore database to manage products, carts, sales (with profit and revenue), customers, and user settings.</li>
                <li className={liEle2}>Built dynamic dashboards with sales trends, category analysis, top/least sold products, and inventory summaries (e.g., low/out-of-stock). </li>
                <li className={liEle2}>Enabled export of filtered product lists, customer debts, cart details, and daily sales data with interactive charts.</li>
                <li className={liEle2}>Created responsive layouts for tablet and small devices with built-in notifications (e.g., low stock, tasks).</li>
                <li className={liEle2}>Solely responsible for architecture, UI/UX design, and full feature implementation with scalability in mind. </li>
                <li className={liEle2}>The whole system is designed for growth and scalability with considerations of future features and enhancements.</li>
              </ul>
            </li>
            <li className={liEle1} >
              <h4 className={h4Ele1} ><i className="font-serif tracking-wider">My Portfolio</i> &nbsp; • &nbsp; Interactive Developer Showcase Website </h4>
              <p className={pEle1} >A personal website built to present skills, projects, and career roadmap for full-stack and application development roles. </p>
              <p className={pEle1} >
                <strong className="text-base font-bold">Stack : </strong>
                <i className="font-serif text-yellow-crayola">HTML &nbsp; - &nbsp; CSS &nbsp; - &nbsp; JavaScript &nbsp; - &nbsp; Tailwind CSS &nbsp; - &nbsp; React</i>
              </p>
              <ul className={pEle1} >
                <li className={liEle2}>Designed and developed a fully responsive interface with dedicated sections for About, Projects, Resume, Contact, and Learning Journey. </li>
                <li className={liEle2}>Integrated downloadable resume, project categorization (Applications, Websites, Others), and visual career roadmaps with timelines. </li>
                <li className={liEle2}>Crafted an informative journey page detailing tech stacks learned, when and how they were used in real projects. </li>
                <li className={liEle2}>Built independently as a personal branding tool to support job hunting and showcase growth mindset and self-learning path. </li>
                <li className={liEle2}>Independently designed and implemented both the front-end and back-end.</li>
              </ul>
            </li>
          </ol>
        </section>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>Education</h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <h4 className={h4Ele1} >Bachelor of Science in Computer Science</h4>
              <p className={pEle1} ><i className="font-serif tracking-wider">Lebanese International University &nbsp; • &nbsp; ALKhyara - West Beqaa - Lebanon</i></p>
              <p className={pEle1} >GPA: 3.7</p>
              <span className={spanEle1}>2022 — 2025</span>
            </li>
            <li className={liEle1}>
              <h4 className={h4Ele1} >Honors</h4>
              <ul className={pEle1} >
                <li className={liEle2}><i className="font-serif tracking-wider">Dean’s List</i> • <span className={spanEle1}>Spring 2023</span></li>
                <li className={liEle2}><i className="font-serif tracking-wider">President’s Honor List</i> • <span className={spanEle1}>Spring 2024</span></li>
                <li className={liEle2}><i className="font-serif tracking-wider">7th SAS Students Research Day</i> • <span className={spanEle1}>Spring 2025</span></li>
              </ul>
            </li>
          </ol>
        </section>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>Certificates</h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <ul className={pEle1} >
                <li className={liEle2}><i className="font-serif tracking-wider">Dean's Honor List Certificate</i> • <span className={spanEle1}>Spring 2023</span></li>
                <li className={liEle2}><i className="font-serif tracking-wider">President’s Honor List Certificate</i> • <span className={spanEle1}>Spring 2024</span></li>
                <li className={liEle2}><i className="font-serif tracking-wider">SAS Participation Certificate</i> • <span className={spanEle1}>Spring 2025</span></li>
                <li className={liEle2}><i className="font-serif tracking-wider">Cisco Certifications</i> • <span className={spanEle1}>Spring 2024</span></li>
                <li className={liEle2}><i className="font-serif tracking-wider">BSc in Computer Science Certificate</i> • <span className={spanEle1}>Spring 2025</span></li>
              </ul>
            </li>
          </ol>
        </section>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>Languages</h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <ul className={pEle1} >
                <li className={liEle2}>Arabic (Native)</li>
                <li className={liEle2}>English (Fluent) </li>
                <li className={liEle2}>Spanish (Basic Proficiency) </li>
              </ul>
            </li>
          </ol>
        </section>
        <section className=' mb-[30px] ' >
          <div className={divEle1} >
            <div className={divEle2} >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-book-open-icon lucide-book-open">
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3 className=' text-[18px] sm:text-[24px] font-bold text-vegas-gold'>INTERESTS</h3>
          </div>
          <ol className=' text-[14px] sm:text-[15px] ml-[45px] sm:ml-[65px] '>
            <li className={liEle1} >
              <ul className={pEle1} >
                <li className={liEle2}>Strength Training (Gym) </li>
                <li className={liEle2}>Football (Soccer) </li>
                <li className={liEle2}>Competitive & Casual Gaming</li>
                <li className={liEle2}>Learning New Technologies </li>
                <li className={liEle2}>Building and Refining Personal Projects</li>
              </ul>
            </li>
          </ol>
        </section>
        <button
          onClick={() => window.open('/cv.pdf', '_blank')}
          className="
          relative w-full bg-gradient-onyx text-yellow-crayola flex-center gap-2.5 py-[13px] px-5 rounded-[14px] text-[16px] shadow-3 z-20 custom-transition-1
          sm:text-[16px] sm:py-4 sm:px-5 md:w-max md:ml-auto 
          before:content-[''] before:absolute before:inset-0.25 before:bg-gradient-jet before:rounded-[inherit] before:-z-10 before:custom-transition-1 
          hover:bg-gradient-yellow focus:bg-gradient-yellow focus:outline-amber-200 hover:before:bg-gradient-yellow-2 
          focus:before:bg-gradient-yellow-2">
          <ion-icon
            name="document-text-outline"
            className="text-[16px] sm:text-[18px] block" />

          <span className="block ">Download CV</span>
        </button>
      </div>
    </article>
  );
};

export default Resume;
