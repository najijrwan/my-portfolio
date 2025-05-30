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
        relative w-full max-w-[1250px] my-0 mx-auto flex-center-col gap-[50px]
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-0.5 before:bg-highlight before:animate-height">
          <section className="relative w-full">
            <div className="
              absolute ml-10 size-50 border-highlight 
              before:content-[''] before:absolute before:bg-highlight before:h-0.5 
              before:top-1/2 before:-left-10 before:animate-width">

              {/* Top Left Label */}
              <span className="absolute -top-2.5 left-15 w-20 opacity-0 animate-fade2">20-02-22</span>

              {/* Top Horizontal Line Left */}
              <span className="absolute top-0 w-15 h-0.5 bg-highlight opacity-0 animate-width2"></span>

              {/* Left Vertical Line */}
              <span className="absolute left-0 top-0 h-full w-0.5 bg-highlight opacity-0 animate-scaleHeight"></span>

              {/* Top Horizontal Line Right */}
              <span className="absolute top-0 left-35 w-15 h-0.5 bg-highlight origin-left opacity-0 animate-width3"></span>

              {/* Bottom Left Label */}
              <span className="absolute -bottom-2.5 left-15 w-20 opacity-0 animate-fade2">01-06-22</span>

              {/* Bottom Horizontal Line Right */}
              <span className="absolute bottom-0 left-35 w-15 h-0.5 bg-highlight opacity-0 animate-width3"></span>

              {/* Right Vertical Line (split top & bottom for inward animation) */}
              {/* Top Half */}
              <span className="absolute right-0 top-0 h-1/2 w-0.5 bg-highlight opacity-0 animate-growLeftHeight"></span>

              {/* Bottom Half */}
              <span className="absolute right-0 bottom-0 h-1/2 w-0.5 bg-highlight opacity-0 animate-growLeftHeight"></span>

              {/* Bottom Horizontal Line Left */}
              <span className="absolute bottom-0 w-15 h-0.5 bg-highlight opacity-0 animate-width2"></span>

            </div>
          </section>

        </div>
      </div>
    </article>
  );
};

export default Career;