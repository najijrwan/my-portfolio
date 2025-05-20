// About.jsx
const About = () => {
  return (
    <article className="about">
      <h2 className="heading1">About Me</h2>
      <section>
        <p>
          I'm a detail-oriented and growth-driven software engineer with a strong focus on building intuitive, responsive, and modern web applications.
          I take pride in writing clean, maintainable code and continuously revisiting my work to improve structure, performance, and user experience.
          Whether it's frontend development, data handling, or user-centric design, I approach each problem with a mix of precision, creativity, and a deep respect for best practices.
        </p>
        <p>
          My portfolio reflects not just what I’ve built, but how I think—every interface, feature, and interaction is the result of intentional design and thoughtful engineering.
          I’m constantly expanding my skillset, exploring new technologies, and refining my workflow to produce high-quality, scalable solutions.
          I believe in building with purpose, learning with discipline, and always pushing for that extra level of polish that turns good work into great work.
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
              <h4 className="font-extrabold text-base text-xl text-center">Mobile Applications</h4>
              <p className="text-gray-300 text-center">Professional development of applications for Android and ios.</p>
            </div>
          </li>
          <li className="relative flex-center-col p-5 rounded-3xl bg-[linear-gradient(to_bottom_right,hsl(0,0%,25%)_0%,hsla(0,0%,25%,0)_50%)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] z-[1]">
            <div>
              <img src="src/assets/icon-dev.svg" alt="web development icon" className="size-10" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-xl text-center">Mobile Applications</h4>
              <p className="text-gray-300 text-center">Professional development of applications for Android and ios.</p>
            </div>
          </li>
          <li className="relative flex-center-col p-5 rounded-3xl bg-[linear-gradient(to_bottom_right,hsl(0,0%,25%)_0%,hsla(0,0%,25%,0)_50%)] shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] z-[1]">
            <div>
              <img src="src/assets/icon-backend.svg" alt="backend development icon" className="size-10" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-xl text-center">Mobile Applications</h4>
              <p className="text-gray-300 text-center">Professional development of applications for Android and ios.</p>
            </div>
          </li>
        </ul>
      </section>
      <h3 className="heading2">
        <span className="indicator-inside"></span>
        <span className="indicator-outside"></span>
        What I Do
      </h3>
      <section>
        <p>
          A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state management solutions.
          Proven track record in delivering cutting-edge solutions, including API integration, third-party libraries, and performance optimization.
          Adept at debugging to ensure high-quality, responsive apps and An agile collaborator committed to staying current with industry trends.
        </p>
        <p>
          If you're seeking a skilled Flutter developer to breathe life into your project and exceed your expectations,
          I am here to collaborate and create magic together.
          Reach out, and let's transform your vision into a reality!
        </p>
      </section>
    </article>
  );
};

export default About;