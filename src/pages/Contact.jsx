import Navbar from "../components/Navbar";
import { h2Ele } from './About.jsx';
// Contact.jsx
const Contact = () => {
  return (
    <article>
      <Navbar />
      <div className="p-[20px] sm:p-[30px] ">
        <h2 className={h2Ele} >Contact</h2>
        <section className="mb-[30px] relative h-[250px] w-full rounded-[16px] border border-jet overflow-hidden">
          <figure>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kathmandu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="400" height="300" loading="lazy"></iframe>
          </figure>
        </section>
        <section className="mb-[30px]">
          <h3 className="text-base text-[18px] mb-[20px] font-bold">Contact Form</h3>
          <form action="">
            <div className="grid grid-cols-1 gap-[25px] mb-[25px]" >
              <input type="text" name="fullname"
                className="text-base text-[14px] font-[400] py-[13px] px-[20px] border border-jet rounded-[14px] outline-0"
                placeholder="Full name" required="" data-form-input=""></input>
              <input type="email" name="email"
                className="text-base text-[14px] font-[400] py-[13px] px-[20px] border border-jet rounded-[14px] outline-0"
                placeholder="Email address" required="" data-form-input=""></input>
            </div>
            <input type="text" name="subject"
              className="text-base text-[14px] font-[400] py-[13px] px-[20px] border border-jet rounded-[14px] outline-0 mb-[30px]"
              placeholder="Subject" required="" data-form-input=""></input>
            <textarea name="message"
              className="text-base text-[14px] font-[400] py-[13px] px-[20px] border border-jet rounded-[14px] outline-0 min-h-[100px] 
            h-[120px] max-[200px] resize-y mb-[25px]"
              placeholder="Your Message" required="" data-form-input=""></textarea>
            <button 
            className="relative w-full bg-gradient-onyx text-highlight flex-center gap-[10px] py-[13px] px-[20px] rounded-[14px] text-[14px] 
            shadow-3 z-10 cusomt-transition-1 
            before:content-[''] before:absolute before:inset-px before:bg-gradient-jet before:rounded-[inherit] before:z-[-1] before:custom-transition-1" 
            type="submit" disabled data-form-btn="">
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Contact;
