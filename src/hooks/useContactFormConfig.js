import { useState } from 'react';

export const useContactFormConfig = () => {
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
                setLoading(false);
            }
        } catch (err) {
            setStatus({
                show: true,
                message: 'Network error.\nPlease try again.',
                isError: true
            });
            setLoading(false);
        }
    };

    return {
        formData,
        loading,
        status,
        handleChange,
        handleSubmit
    };
};