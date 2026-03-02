import { useState } from 'react';
import { VariousActionsButton } from '@ui';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ show: false, message: '', isError: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ show: false, message: '', isError: false });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                const successMessage = 'Thank you for reaching out!\nI\'ll get back to you soon.';

                setStatus({
                    show: true,
                    message: successMessage,
                    isError: false
                });

                setFormData({ fullname: '', email: '', subject: '', message: '' });

                setLoading(false);

                setTimeout(() => {
                    setStatus(prev => ({ ...prev, show: false }));
                }, 5000);

            } else {
                setStatus({
                    show: true,
                    message: data.error || 'Something went wrong',
                    isError: true
                });
            }
        } catch (err) {
            setStatus({
                show: true,
                message: 'Network error.\nPlease try again.',
                isError: true
            });
        }
    };

    return (
        <section className='relative'>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        className="contact-input"
                        disabled={loading}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email address"
                        className="contact-input"
                        disabled={loading}
                    />
                </div>

                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="contact-input mb-5"
                    disabled={loading}
                />

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="5"
                    className="contact-input mb-5 resize-y"
                    disabled={loading}
                />

                <VariousActionsButton
                    type="submit"
                    disabled={loading}
                    variant="v1"
                    iconName={loading ? '' : 'paper-plane'}
                    label={loading ? 'Sending...' : 'Send Message'}
                    className={`min-w-[191px] ${loading ? 'flex-row-reverse' : ''}`}
                >
                    {loading && (
                        <span
                            className="
                                size-5
                                rounded-full
                                border-l-[4px] border-l-yellow-crayola/30
                                border-b-[4px] border-b-yellow-crayola/30
                                border-r-[4px] border-r-yellow-crayola/30
                                border-t-[4px] border-t-yellow-crayola
                                animate-rotate
                            "
                        />
                    )}
                </VariousActionsButton>
            </form>

            <div
                className={`
                    fixed left-1/2 -translate-x-1/2 z-30
                    min-w-max px-5 py-3
                    text-center text-sm sm:text-lg whitespace-break-spaces
                    border-jet rounded-xl
                    transition-all duration-1000 ease-in-out
                    forward-box
                    ${status.isError ? 'text-red-400' : 'text-[#39ff14]'}
                    ${status.show ? 'top-4' : '-top-full'}
                `}
            >
                {status.message}
            </div>
        </section>
    );
};

export default ContactForm;