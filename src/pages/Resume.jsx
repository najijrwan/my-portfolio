// Resume.jsx
import { h2Ele } from './About.jsx';
export const divEle1 =
  `flex items-center gap-[15px] mb-[25px]`;
export const liEle1 =
  `relative not-last:mb-[20px] 
  not-last:before:content-[""] not-last:before:absolute not-last:before:top-[-25px] 
  not-last:before:left-[-30px] not-last:before:w-px not-last:before:ch not-last:before:bg-jet 
  sm:not-last:before:left-[-40px] 
  after:content-[""] after:absolute after:top-[5px] after:left-[33px] after:size-[6px] after:bg-gradient-yellow-3 after:rounded-full after:shadow-[0_0_0_4px_var(--color-jet)] 
  sm:after:size-2 sm:after:left-[-43px]`;
export const h4Ele1 =
  `text-[15px]/5 mb-[7px]`;
export const pEle1 =
  `text-light-gray text-[15px]/6 font-[300] xl:max-w-[700px] `;
const spanEle1 =
  `text-vegas-gold font-[400] text-[15px]/6`;
const Resume = () => {
  return (
    <article className=" sm:mb-[20px] " >
      <h2 className={h2Ele} >Resume</h2>
      <section className=' mb-[30px] ' >
        <div className={divEle1} >
          <div className='
          relative bg-gradient-onyx size-[30px] rounded-[8px] flex-center text-[16px] text-highlight shadow-1 z-10 
          before:content-[""] before:absolute before:inset-px before:bg-eerie-1 before:rounded-[inherit] before:z-[-1]
          sm:size-[48px] sm:rounded-[12px] sm:text-[18px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
          </div>
          <h3 className=' text-[24px] font-bold '>Education</h3>
        </div>
        <ol className=' text-[15px] ml-[45px] sm:ml-[65px] '>
          <li className={liEle1} >
            <h4 className={h4Ele1} >Nihareeka College of Management and Information Technology</h4>
            <p class={pEle1} >Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)</p>
            <span className={spanEle1}>2017 — 2021</span>
          </li>
          <li className={liEle1}>
            <h4 className={h4Ele1} >Nihareeka College of Management and Information Technology</h4>
            <p class={pEle1} >Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)</p>
            <span className={spanEle1}>2017 — 2021</span>
          </li>
          <li className={liEle1}>
            <h4 className={h4Ele1} >Nihareeka College of Management and Information Technology</h4>
            <p class={pEle1} >Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)</p>
            <span className={spanEle1}>2017 — 2021</span>
          </li>
          <li className={liEle1}>
            <h4 className={h4Ele1} >Nihareeka College of Management and Information Technology</h4>
            <p class={pEle1} >Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)</p>
            <span className={spanEle1}>2017 — 2021</span>
          </li>
          <li className={liEle1}>
            <h4 className={h4Ele1} >Nihareeka College of Management and Information Technology</h4>
            <p class={pEle1} >Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)</p>
            <span className={spanEle1}>2017 — 2021</span>
          </li>
        </ol>
      </section>
      <section></section>
      <button></button>
    </article>
  );
};

export default Resume;
