// About.jsx
export const ele1 =
  `relative p-5 rounded-3xl shadow-2 z-[1] bg-gradient-onyx
  before:content-[""] before:block before:absolute before:rounded-[inherit] before:inset-[1px] before:-z-[1] before:bg-gradient-jet`;
export const ele2 =
  `font-bold text-base text-[16px] mb-2`;
export const ele3 =
  `text-gray-300 text-[14px]/5 m-0`;
export const h2Ele =
  `relative mb-4 pb-2 text-[24px] font-[600] text-base 
after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-7.5 after:h-0.75 after:bg-gradient-yellow-3 after:rounded-[3px]`;
export const h3Ele =
  `relative text-highlight font-[600] text-lg my-4 ml-6 
before:absolute before:w-9 before:h-0.5 before:left-[-42px] before:bottom-1/2 before:bg-gradient-yellow-3 before:content-[""]`;
const spanEle1 =
  `absolute left-[-45px] top-1/2 -translate-y-1/2 size-1.75 bg-amber-100 rounded-full`;
const spanEle2 =
  `absolute left-[-48px] top-1/2 -translate-y-1/2 size-[13px] bg-amber-100/50 rounded-full`;
const About = () => {
  return (
    <article className="about">
      <h2 className={h2Ele}>About Me</h2>
      <section>
        <p>
          I'm a detail-oriented and growth-focused software engineer who takes pride in writing clean, maintainable code and building thoughtful, user-centered applications.
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
        <ul className="grid grid-cols-1 gap-5">
          <li className={ele1}>
            <div className="mb-2.5">
              <img src="src/assets/icon-app.svg" alt="mobile app icon" className="size-10 m-auto" />
            </div>
            <div className="text-center">
              <h4 className={ele2}>Mobile Apps</h4>
              <p className={ele3}>Professional & modern development of applications for Android and ios.</p>
            </div>
          </li>
          <li className={ele1}>
            <div className="mb-2.5">
              <img src="src/assets/icon-dev.svg" alt="web development icon" className="size-10 m-auto" />
            </div>
            <div className="text-center">
              <h4 className={ele2}>Web Development</h4>
              <p className={ele3}>High-quality development of sites at the professional level.</p>
            </div>
          </li>
          <li className={ele1}>
            <div className="mb-2.5">
              <img src="src/assets/icon-backend.svg" alt="backend development icon" className="size-10 m-auto" />
            </div>
            <div className="text-center">
              <h4 className={ele2}>Back-End Development</h4>
              <p className={ele3}>High-performance backend services designed for scalability and seamless user experience.</p>
            </div>
          </li>
          <li className={ele1}>
            <div className="mb-2.5">
              <img src="src/assets/icon-research.svg" alt="backend development icon" className="size-10 m-auto" />
            </div>
            <div className="text-center">
              <h4 className={ele2}>Research & Reports</h4>
              <p className={ele3}>Expert in conducting thorough investigations and delivering clear, structured reports on findings and methodologies.</p>
            </div>
          </li>
        </ul>
      </section>
      <h3 className={h3Ele}>
        <span className={spanEle1}></span>
        <span className={spanEle2}></span>
        Skills
      </h3>
      <div className="mb-4">
        <ul className="has-scrollbar flex-start-start gap-[15px] my-0 mx-[-15px] p-[25px] pb-[25px] overflow-x-auto scroll-smooth 
        overscroll-x-contain snap-both scroll-px-6 ">
          <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl "><img src="src/assets/react.png" alt="react image" /></li>
          <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl "><img src="src/assets/java.png" alt="java image" /></li>
          <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl "><img src="src/assets/js-img.webp" alt="javascript image" /></li>
          <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl "><img src="src/assets/tailwind-css.png" alt="tailwind image" /></li>
          <li className="min-w-[50%] snap-start bg-[rgb(38,70,124)] rounded-4xl "><img src="src/assets/php.png" alt="php image" /></li>
          <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl "><img src="src/assets/python.png" alt="python image" /></li>
          <li className="min-w-[50%] snap-start bg-white/10 rounded-4xl "><img src="src/assets/csharp.png" alt="c sharp image" /></li>
        </ul>
      </div>
    </article>
  );
};

export default About;