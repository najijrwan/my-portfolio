import Navbar from "../components/Navbar";
import { h2Ele, h3Ele, spanEle1, spanEle2 } from './About.jsx';
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
        <div className="relative w-full mb-15 mt-30 flex flex-col items-start justify-center gap-20">
          {/* Timeline Section */}
          <div className="flex-center-col gap-[150px] w-full">
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
          <div>
            <h3 className={h3Ele + " absolute left-0"}>
              <span className={spanEle1}></span>
              <span className={spanEle2}></span>
              Learning Journey Explanation
            </h3>
            <section className="relative w-full ml-8">
              <span className="before:content-[''] before:absolute before:top-1.25 before:left-0 before:-translate-x-1/2 before:size-3.5 before:bg-red-500 before:rounded-full">
                <h3 className="font-extrabold ml-5">Fitensso - Website</h3>
                <p className="text-light-gray-70 ml-5">
                  On my second year in college, spring semester starting in Feb-19-2024, I took my first course in Web Development, which consisted of HTML, CSS, JavaScript Basics and a little of PHP.
                  And in the middle of the semester I was tasked to create a simple website as part of the course project assigned to us, and I created my first website, which was Fitnesso.
                </p>
              </span>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Career;