    import React, { useState } from 'react';
    import { Send, MessageCircle } from 'lucide-react';
    import emailjs from '@emailjs/browser'; 
    import './ContactForm.css';

    const ContactForm = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
        const [status, setStatus] = useState('');

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceId = 'service_8i7tlad';  
        const templateId = 'template_o3x8tbq'; 
        const publicKey = 'h0-duQ_O71huBlonA';   

        const templateParams = {
            from_name: formData.name,   
            from_email: formData.email, 
            message: formData.message,  
            to_name: 'Ahtisham Razzaq', 
        };

        // FIX: emailjs.send() ko sahi tareeqay se initialize kar ke bhej rahe hain
        emailjs.send(serviceId, templateId, templateParams, {
            publicKey: publicKey,
        })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); 
                setTimeout(() => setStatus(''), 3000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('error');
                alert("Oops! Email bhejne mein masla hua.");
                setTimeout(() => setStatus(''), 3000);
            });
    };

        const currentYear = new Date().getFullYear();

        return (
            <section className="contact-section container" id="contact">
                <h2 className="section-title gradient-text">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info glass-card">
                        <h3>Let's build something amazing together!</h3>
                        <p className="text-muted mb-4">
                            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="direct-contact">
                            <a
                                href="https://wa.me/923110506636"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn shine-hover"
                            >
                                <MessageCircle size={24} />
                                Chat on WhatsApp
                            </a>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                            <p><strong>Email:</strong> ahtishamabbasi334@gmail.com</p>
                            <p><strong>Phone:</strong> +92-311-0506-636</p>
                            <p><strong>Location:</strong> Rawalpindi, Punjab, Pakistan</p>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" // FIX: Type ko wapis email kiya browser validation ke liye
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn shine-hover ${status === 'sending' ? 'sending' : ''} ${status === 'success' ? 'success' : ''}`}
                            disabled={status === 'sending' || status === 'success'}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                <>
                                    <Send size={18} /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <footer className="footer">
                    <p className="text-muted">© {currentYear} Ahtisham Razzaq. All rights reserved.</p>
                    <p className="text-muted small">Fullstack Web Developer</p>
                </footer>
            </section>
        );
    };

    export default ContactForm;