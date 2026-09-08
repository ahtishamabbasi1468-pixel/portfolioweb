import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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

        emailjs.send(serviceId, templateId, templateParams, { publicKey })
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    const inputClasses = "w-full bg-[#FAF6EE] border-b-2 border-warm-gold/40 px-4 py-3 text-obsidian font-sans text-sm focus:outline-none focus:border-warm-gold transition-colors rounded-t-lg";
    const labelClasses = "font-mono text-[11px] text-muted uppercase tracking-wider block mb-2";

    return (
        <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-cream text-obsidian relative border-b border-warm-gold/30" id="contact">
            <div className="max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <motion.div
                        className="lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-xs text-warm-gold tracking-eyebrow uppercase font-semibold">
                            07 // Contact
                        </span>
                        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-obsidian tracking-tight leading-[0.98] font-normal">
                            LET'S BUILD <br />SOMETHING <br />
                            <span className="italic text-warm-gold font-normal">GREAT.</span>
                        </h2>
                        <p className="font-sans text-lg text-obsidian/80 leading-relaxed font-normal">
                            Have a project in mind, a question, or just want to say hi?
                            I'll get back to you.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cream-tint border border-warm-gold/40 flex items-center justify-center text-warm-gold">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Location</span>
                                    <span className="font-mono text-sm text-obsidian font-medium">Rawalpindi, Punjab, Pakistan</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cream-tint border border-warm-gold/40 flex items-center justify-center text-warm-gold">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Email</span>
                                    <span className="font-mono text-sm text-obsidian font-medium">ahtishamabbasi334@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-3">
                            <a href="https://github.com/ahtishamabbasi1468-pixel" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-white border border-warm-gold/40 font-mono text-xs text-obsidian uppercase tracking-wider hover:bg-obsidian hover:text-bright-gold transition-all duration-300 inline-flex items-center gap-2">
                                <Github size={15} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/ahtisham-razzaq-528402361" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-white border border-warm-gold/40 font-mono text-xs text-obsidian uppercase tracking-wider hover:bg-obsidian hover:text-bright-gold transition-all duration-300 inline-flex items-center gap-2">
                                <Linkedin size={15} /> LinkedIn
                            </a>
                            <a href="https://wa.me/923110506636" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-white border border-warm-gold/40 font-mono text-xs text-obsidian uppercase tracking-wider hover:bg-obsidian hover:text-bright-gold transition-all duration-300 inline-flex items-center gap-2">
                                <MessageCircle size={15} /> WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-warm-gold/40 shadow-xl"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                                    <input
                                        id="name" name="name" type="text" required
                                        value={formData.name} onChange={handleChange}
                                        placeholder="Your Name" className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelClasses}>Email</label>
                                    <input
                                        id="email" name="email" type="email" required
                                        value={formData.email} onChange={handleChange}
                                        placeholder="your.email@example.com" className={inputClasses}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className={labelClasses}>Message</label>
                                <textarea
                                    id="message" name="message" rows="5" required
                                    value={formData.message} onChange={handleChange}
                                    placeholder="Tell me about your project..." className={inputClasses}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-warm-gold to-bright-gold text-obsidian font-mono text-xs uppercase tracking-widest font-bold hover:shadow-[0_10px_30px_rgba(200,169,107,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                    <>
                                        <Send size={16} /> Send Message
                                    </>
                                )}
                            </button>
                            {status === 'error' && (
                                <p className="text-center font-mono text-xs text-red-600">
                                    Something went wrong — please try again or email me directly.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
