import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';
import {
  timeLineData1, timeLineData2, timeLineData3,
  timeLineDataAtSM, timeLineDataAtSM2, timeLineDataAtSM3,
  timeLineDataAtMD, timeLineDataAtMD2,
  timeLineDataAtLG, timeLineDataAtLG2
} from "../components/timeLineData";
import TimelineItem from "../components/TimelineItem";

// Career.jsx
const divEle1 = `
  w-0 h-0.5 bg-highlight animate-width relative
  after:absolute after:right-[-8px] after:top-1/2 after:translate-y-[-50%] after:w-0 after:h-0
  after:border-t-6 after:border-b-6 after:border-l-8 after:border-transparent after:border-l-highlight
`;
const Career = () => {
  return (
    <article className="">
      <Navbar />
      <div className="p-[20px] sm:p-[30px]">
        <h2 className={h2Ele}>Journey</h2>
        <div className="relative w-full flex-center-col gap-[150px] mb-15 mt-30">
          {/* Timeline Section */}
          <section className="relative w-full flex justify-center sm:hidden lg:hidden">
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
          <section className="relative w-full flex justify-center sm:hidden lg:hidden">
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
          <section className="relative w-full flex justify-center sm:hidden lg:hidden">
            {/* Arrow Line */}
            <div className="w-full max-w-[350px] h-0.5 relative">
              <div className={divEle1}>
                {timeLineData3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className="relative w-full hidden sm:block md:hidden lg:hidden">
            {/* Arrow Line */}
            <div className="w-full h-0.5 relative">
              <div className={divEle1}>
                {timeLineDataAtSM.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className="relative w-full hidden sm:block md:hidden lg:hidden">
            {/* Arrow Line */}
            <div className="w-full h-0.5 relative">
              <div className={divEle1}>
                {timeLineDataAtSM2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at small*/}
          <section className="relative w-full hidden sm:block md:hidden lg:hidden">
            {/* Arrow Line */}
            <div className="w-full h-0.5 relative">
              <div className={divEle1}>
                {timeLineDataAtSM3.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at medium*/}
          <section className="relative w-full hidden md:block lg:hidden">
            {/* Arrow Line */}
            <div className="w-full h-0.5 relative">
              <div className={divEle1}>
                {timeLineDataAtMD.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at medium*/}
          <section className="relative w-full hidden md:block lg:hidden">
            {/* Arrow Line */}
            <div className="w-full h-0.5 relative">
              <div className={divEle1}>
                {timeLineDataAtMD2.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at large*/}
          <section className="relative w-full hidden lg:flex lg:justify-center">
            {/* Arrow Line */}
            <div className="w-full max-w-[350px] h-0.5 relative lg:max-w-full">
              <div className={divEle1}>
                {timeLineDataAtLG.map((item, index) => (
                  <TimelineItem key={item.name} item={item} index={index} />
                ))}
              </div>
            </div>
          </section>
          {/* Timeline Section at large*/}
          <section className="relative w-full hidden lg:flex lg:justify-center">
            {/* Arrow Line */}
            <div className="w-full max-w-[350px] h-0.5 relative lg:max-w-full">
              <div className={divEle1}>
                {timeLineDataAtLG2.map((item, index) => (
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