import { VariousActionsButton } from '@ui'

const ContactForm = () => (
    <section className="mb-[10px]">
        <h3 className="text-base text-[18px] sm:text-[24px] mb-[20px] font-bold">Contact Form</h3>

        <form action="">
            <div className="
                grid grid-cols-1 gap-[25px] mb-[25px] 
                sm:grid-cols-2 sm:gap-[30px] sm:mb-7.5 md:grid-cols-2" >
                <input type="text" name="fullname"
                    className="contact-input"
                    placeholder="Full name" required="" data-form-input=""></input>
                <input type="email" name="email"
                    className="contact-input"
                    placeholder="Email address" required="" data-form-input=""></input>
            </div>

            <input type="text" name="subject"
                className="contact-input mb-[30px]"
                placeholder="Subject" required="" data-form-input=""></input>

            <textarea name="message"
                className="contact-input min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] sm:mb-7.5"
                placeholder="Your Message" required="" data-form-input=""></textarea>

            <VariousActionsButton
                disabled
                type="submit"
                variant='v1'
                className='disabled:opacity-70 disabled:cursor-not-allowed'
                iconName='paper-plane'
                label='Send Message'
            />
        </form>
    </section>
)

export default ContactForm;