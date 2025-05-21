// About.jsx
const About = () => {
  return (
    <article className="about">
      <h2 className="heading1">About Me</h2>
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
      <h3 className="heading2 relative">
        <span className="indicator-inside"></span>
        <span className="indicator-outside"></span>
        What I Do
      </h3>
      <section className="mb-9">
        <ul className="grid grid-cols-1 gap-5">
          <li className="relative flex-center-col p-5 rounded-3xl bg-[linear-gradient(to_bottom_right,hsl(0,0%,25%)_0%,hsla(0,0%,25%,0)_50%)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] z-[1]">
            <div className="mb-5">
              <img src="src/assets/icon-app.svg" alt="mobile app icon" className="size-10" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-xl text-center mb-2">Mobile Applications</h4>
              <p className="text-gray-300 text-center">Professional & modern development of applications for Android and ios.</p>
            </div>
          </li>
          <li className="relative flex-center-col p-5 rounded-3xl bg-[linear-gradient(to_bottom_right,hsl(0,0%,25%)_0%,hsla(0,0%,25%,0)_50%)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] z-[1]">
            <div className="mb-5">
              <img src="src/assets/icon-dev.svg" alt="web development icon" className="size-10" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-xl text-center mb-2">Web Development</h4>
              <p className="text-gray-300 text-center">High-quality development of sites at the professional level.</p>
            </div>
          </li>
          <li className="relative flex-center-col p-5 rounded-3xl bg-[linear-gradient(to_bottom_right,hsl(0,0%,25%)_0%,hsla(0,0%,25%,0)_50%)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] z-[1]">
            <div className="mb-5">
              <img src="src/assets/icon-backend.svg" alt="backend development icon" className="size-10" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-xl text-center mb-2">Back-End Development</h4>
              <p className="text-gray-300 text-center">High-performance backend services designed for scalability and seamless user experience.</p>
            </div>
          </li>
          <li className="relative flex-center-col p-5 rounded-3xl bg-[linear-gradient(to_bottom_right,hsl(0,0%,25%)_0%,hsla(0,0%,25%,0)_50%)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] z-[1]">
            <div className="mb-5">
              <img src="src/assets/icon-research.svg" alt="backend development icon" className="size-10" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-xl text-center mb-2">Research & Reports</h4>
              <p className="text-gray-300 text-center">Expert in conducting thorough investigations and delivering clear, structured reports on findings and methodologies.</p>
            </div>
          </li>
        </ul>
      </section>
      <h3 className="heading2">
        <span className="indicator-inside"></span>
        <span className="indicator-outside"></span>
        Skills
      </h3>
      <div className="mb-4">
        <ul className="skills has-scrollbar">
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
          <li className="min-w-[50%] snap-start"><img src="src/assets/js-img.jpg" alt="javascript image"/></li>
        </ul>
      </div>
    </article>
  );
};

export default About;