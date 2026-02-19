import { VariousActionsButton } from '@ui'

const ContactForm = () => (
    <section className="mb-[10px]">
        <h3 className="text-base text-[18px] sm:text-[24px] mb-[20px] font-bold">Contact Form</h3>

        <form action="">
            <div
                className="
                    mb-[25px] sm:mb-7.5
                    grid grid-cols-1 sm:grid-cols-2 gap-[25px] sm:gap-[30px]"
            >

                <input 
                    type="text"
                    name="fullname"
                    required=""
                    data-form-input=""
                    placeholder="Full name"
                    className="contact-input"
                />
                <input
                    type="email"
                    name="email"
                    required=""
                    data-form-input=""
                    placeholder="Email address"
                    className="contact-input"
                />
            </div>

            <input 
                type="text"
                name="subject"
                required=""
                data-form-input=""
                placeholder="Subject"
                className="contact-input mb-[30px]"
            />

            <textarea
                name="message"
                required=""
                data-form-input=""
                placeholder="Your Message"
                className="
                    contact-input
                    mb-[25px] sm:mb-7.5
                    min-h-[100px] h-[120px] max-h-[200px] resize-y"
            />

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