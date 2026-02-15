import { Navbar } from "@layout";
import { h2Ele } from './indexTemp.jsx';
// Contact.jsx
export const inputEle1 =
  `text-base text-[14px] font-[400] py-[13px] px-[20px] border border-jet rounded-[14px] outline-0 sm:py-[15px] sm:px-[20px] sm:text-[15px]`;
const Contact = () => {
  return (
    <article>
      <Navbar />
      <div className="p-[20px] sm:p-[30px] ">
        <h2 className={h2Ele} >Contact</h2>
        <section className="
        mb-[30px] relative h-[250px] w-full rounded-[16px] border border-jet overflow-hidden 
        sm:h-[380px] sm:rounded-[18px]">
          <figure className="h-full">
            <iframe className="w-full h-full border-hidden grayscale-100 invert-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6641.003183453779!2d35.831684!3d33.67007400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1748365053044!5m2!1sen!2slb" width="600" height="450" loading="lazy"></iframe>
          </figure>
        </section>
        <section className="mb-[10px]">
          <h3 className="text-base text-[18px] sm:text-[24px] mb-[20px] font-bold">Contact Form</h3>
          <form action="">
            <div className="
            grid grid-cols-1 gap-[25px] mb-[25px] 
            sm:grid-cols-2 sm:gap-[30px] sm:mb-7.5 md:grid-cols-2" >
              <input type="text" name="fullname"
                className={inputEle1}
                placeholder="Full name" required="" data-form-input=""></input>
              <input type="email" name="email"
                className={inputEle1}
                placeholder="Email address" required="" data-form-input=""></input>
            </div>
            <input type="text" name="subject"
              className={inputEle1 + " mb-[30px]"}
              placeholder="Subject" required="" data-form-input=""></input>
            <textarea name="message"
              className={inputEle1 + "min-h-[100px] h-[120px] max-[200px] resize-y mb-[25px] sm:mb-7.5"}
              placeholder="Your Message" required="" data-form-input=""></textarea>
            <button
              className="relative w-full bg-gradient-onyx text-yellow-crayola font-[500] flex-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-[14px] 
            shadow-3 z-10 cusomt-transition-1 sm:text-[16px] sm:py-4 sm:px-5 md:w-max md:ml-auto disabled:opacity-70 disabled:cursor-not-allowed
            before:content-[''] before:absolute before:inset-px before:bg-gradient-jet before:rounded-[inherit] before:z-[-1] before:custom-transition-1"
              type="submit" disabled data-form-btn="">
              <ion-icon name="paper-plane" role="img" className="md hydrated text-[16px] sm:text-[18px]" aria-label="paper plane">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Paper Plane</title><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"></path></svg>

              </ion-icon>
              <span className="block">Send Message</span>
            </button>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Contact;
