import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';
import timelineData from "../components/timelineData";
import TimelineItem from "../components/TimelineItem";

// Career.jsx
const divEle1 = `
  w-0 h-0.5 bg-highlight animate-width relative
  after:absolute after:right-[-8px] after:top-1/2 after:translate-y-[-50%] after:w-0 after:h-0
  after:border-t-6 after:border-b-6 after:border-l-8 after:border-transparent after:border-l-highlight
`;
const Career = () => {
  return (
    <article className="h-screen">
      <Navbar />
      <div className="p-[20px] sm:p-[30px]">
        <h2 className={h2Ele}>Journey</h2>
        <div className="relative w-full max-w-[1250px] flex-center-col gap-[50px]">
          {/* Timeline Section */}
          <section className="relative w-full mt-25">
            {/* Arrow Line */}
            <div className={divEle1}>
              {timelineData.map((item, index) => (
                <TimelineItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Career;