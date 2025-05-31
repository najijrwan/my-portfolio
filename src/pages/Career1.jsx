import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';
import { timeLineData1, timeLineData2, timeLineData3 } from "../components/timelineData";
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
        <div className="relative w-full flex-center-col gap-[50px]">
          {/* Timeline Section */}
          <section className="relative w-full mt-25 flex justify-center">
            {/* Arrow Line */}
            <div className="w-full max-w-[350px] h-0.5 relative">
              <div className={divEle1}>
                {timeLineData1.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className="relative w-full mt-40 flex justify-center">
            {/* Arrow Line */}
            <div className="w-full max-w-[350px] h-0.5 relative">
              <div className={divEle1}>
                {timeLineData2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className="relative w-full mt-30 flex justify-center">
            {/* Arrow Line */}
            <div className="w-full max-w-[350px] h-0.5 relative">
              <div className={divEle1}>
                {timeLineData3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Career;