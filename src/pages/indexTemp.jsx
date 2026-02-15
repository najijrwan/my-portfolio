// About.jsx

export const ele1 =
  `relative h-full p-[20px] rounded-[14px] shadow-2 z-10 bg-gradient-onyx
  before:content-[""] before:block before:absolute before:rounded-[inherit] before:inset-[1px] before:-z-[1] before:bg-gradient-jet 
  sm:flex-start-start sm:gap-[25px] sm:p-[30px]`;

export const ele2 =
  `font-bold text-base text-[18px] mb-2`;

export const ele3 =
  `text-gray-300 text-[15px]/5 m-0`;

export const h2Ele =
  `relative mb-[30px] pb-[7px] text-[24px] font-[600] text-base 
after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-7.5 after:h-0.75 after:bg-gradient-yellow-3 after:rounded-[3px] 
sm:mb-[30px] sm:pb-[15px] sm:text-[32px] md:pb-[20px] sm:after:w-[40px] sm:after:h-[5px]`;

export const h3Ele =
  `relative text-base font-[600] text-[24px] mb-[20px] ml-8 flex-start-row
before:absolute before:w-[15px] before:h-px before:left-[-23px] before:bottom-[49.5%] before:bg-highlight/30 before:content-[""]`;

export const spanEle1 =
  `absolute left-[-33px] top-1/2 -translate-y-1/2 size-1.75 bg-highlight rounded-full`;

export const spanEle2 =
  `absolute left-[-36px] top-1/2 -translate-y-1/2 size-[13px] bg-highlight/30 rounded-full`;

const About = () => {
  return (
    <article>
      <div className="p-[20px] sm:p-[30px]">
        <h2 className={h2Ele}>About</h2>
        <section className="sm:mb-[40px]">
          <p>
            I'm a detail-oriented and growth-focused <span className="font-bold">software developer (Fron-End Focus)</span> who takes pride in writing clean, maintainable code and building thoughtful, user-centered applications.
            I’m constantly refining my work to improve structure, performance, and experience, with a strong belief in best practices and continuous learning.
          </p>
          <p>
            My portfolio reflects how I think—intentional, precise, and always evolving.
            I approach development with a balance of discipline and creativity, aiming to create solutions that are not only functional, but polished and purposeful.
          </p>
        </section>
        <h3 className={h3Ele}>
          <span className={spanEle1}></span>
          <span className={spanEle2}></span>
          What I'm Doing
        </h3>
        <section className="mb-9">
          <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-y-[20px] lg:gap-x-[25px]">
            {/* <a href="/projects?category=applications">
              <li className={ele1}>
                <div className="mb-[10px] sm:mb-0 sm:mt-[5px]">
                  <img src="/images/icon-app.svg" alt="mobile app icon" className="block size-10 m-auto" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className={ele2}>Mobile Apps</h4>
                  <p className={ele3}>Professional & modern development of applications for Android and ios.</p>
                </div>
              </li>
            </a> */}
            <a href="/projects?category=websites">
              <li className={ele1}>
                <div className="mb-2.5">
                  <img src="/images/icon-dev.svg" alt="web development icon" className="block size-10 m-auto" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className={ele2}>Web Development</h4>
                  <p className={ele3}>High-quality websites at the professional level</p>
                </div>
              </li>
            </a>
            {/* <li className={ele1}>
              <div className="mb-2.5">
                <img src="/images/icon-backend.svg" alt="backend development icon" className="block size-10 m-auto" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className={ele2}>Back-End Development</h4>
                <p className={ele3}>High-performance backend services designed for scalability and seamless user experience</p>
              </div>
            </li> */}
            {/* <li className={ele1}>
              <div className="mb-2.5">
                <img src="/images/icon-research.svg" alt="backend development icon" className="block size-10 m-auto" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className={ele2}>Research & Reports</h4>
                <p className={ele3}>Expert in conducting thorough investigations and delivering clear, structured reports on findings and methodologies.</p>
              </div>
            </li> */}
          </ul>
        </section>
        <h3 className={h3Ele}>
          <span className={spanEle1}></span>
          <span className={spanEle2}></span>
          Skills
        </h3>
        <div className="mb-4">
          <ul className="has-scrollbar flex-start-start gap-[15px] my-0 mx-[-15px] p-[25px] pb-[25px] overflow-x-auto scroll-smooth 
        overscroll-x-contain snap-both scroll-px-6 
        sm:gap-[50px] sm:my-0 sm:mx-[-30px] sm:p-[45px] sm:scroll-px-[45px]">
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/java.png" alt="java image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/html.png" alt="react image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/css.png" alt="react image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/javascript.png" alt="javascript image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/php.png" alt="php image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/csharp.png" alt="c sharp image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/python.png" alt="python image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/tailwind-css.png" alt="tailwind image" className="block" /></li>
            <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl clients-item">
              <img src="/images/react.png" alt="react image" className="block" /></li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default About;