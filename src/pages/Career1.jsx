import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';

// Career.jsx

const Career = () => {
  return (
    <article className="h-screen">
      <Navbar />
      <div className="p-[20px] sm:p-[30px]">
        <h2 className={h2Ele} >Journey</h2>
        <div className="
          relative w-full max-w-[1250px] my-0 mx-auto flex-center-col gap-[50px]">
          <section className="relative w-full mt-25">
            <div className="
            w-0 h-0.5 bg-highlight animate-width relative
            after:absolute after:right-0 after:top-1/2 after:translate-y-[-45%] after:w-0 after:h-0 after:border-t-6 
            after:border-b-6 after:border-l-8 after:border-transparent after:border-l-highlight">
              <span className="absolute left-10 top-0 translate-y-[-100%] h-3 w-px bg-highlight opacity-0 animate-bounce-1">
                <div className="absolute left-0 top-0 translate-x-[-50%] translate-y-[-110%] flex-center-col w-20 opacity-0 animate-bounce-1">
                  <img src="src/assets/html.png" alt="HTML" className="w-full" />
                  <p className="m-0 mt-2 font-extrabold text-xs">HTML</p>
                </div>
                <div className="absolute left-0 top-9 translate-x-[-50%] size-20"></div>
              </span>
              <span className="absolute left-35 top-0 translate-y-[-100%] h-3 w-px bg-highlight opacity-0 animate-bounce-2">
                <div className="absolute left-0 top-0 translate-x-[-50%] translate-y-[-110%] flex-center-col w-20 opacity-0 animate-bounce-2">
                  <img src="src/assets/css.png" alt="HTML" className="size-14" />
                  <p className="m-0 font-extrabold text-xs">HTML</p>
                </div>
                <div className="absolute left-0 top-9 translate-x-[-50%] size-20"></div>
              </span>
              <span className="absolute left-60 top-0 translate-y-[-100%] h-3 w-px bg-highlight opacity-0 animate-bounce-3">
                <div className="absolute left-0 top-0 translate-x-[-50%] translate-y-[-110%] flex-center-col w-20 opacity-0 animate-bounce-3">
                  <img src="src/assets/js-img.webp" alt="HTML" className="size-16" />
                  <p className="m-0 font-extrabold text-xs">HTML</p>
                </div>
                <div className="absolute left-0 top-9 translate-x-[-50%] size-20"></div>
              </span>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Career;