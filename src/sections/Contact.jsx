import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { PROFILE_DATA } from '../constants';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (PROFILE_DATA.web3FormsKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
            toast.error('Please configure your Web3Forms Access Key in constants/index.js');
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading('Sending your message...');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: PROFILE_DATA.web3FormsKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success('Mail sent successfully!', { id: loadingToast });
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error(result.message || 'Something went wrong. Please try again.', { id: loadingToast });
            }
        } catch (error) {
            toast.error('Failed to send message. Please check your connection.', { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter leading-tight uppercase">Let's build <br/><span className="text-accent underline decoration-card-border underline-offset-8">something together</span>.</h2>

                        

                        <div className="space-y-6">
                            <a href={`mailto:${PROFILE_DATA.social.find(s => s.name === 'Email')?.url.replace('mailto:', '') || 'pavishs127@gmail.com'}`} className="flex items-center gap-6 group p-6 border border-white/10 bg-primary-light/40 backdrop-blur-lg hover:bg-white/5 transition-all duration-300 shadow-xl">
                                <div className="text-accent">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Email Me</h3>
                                    <p className="text-secondary font-mono text-sm">pavishs127@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-6 border border-white/10 bg-primary-light/40 backdrop-blur-lg shadow-xl">
                                <div className="text-secondary">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Location</h3>
                                    <p className="text-secondary font-mono text-sm">Coimbatore, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary-light/40 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-12 relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-mono text-secondary mb-2 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full bg-primary/50 backdrop-blur-md border border-white/10 rounded-lg px-4 py-4 text-white placeholder-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-inner"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-secondary mb-2 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full bg-primary/50 backdrop-blur-md border border-white/10 rounded-lg px-4 py-4 text-white placeholder-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-inner"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-secondary mb-2 uppercase tracking-widest">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary/50 backdrop-blur-md border border-white/10 rounded-lg px-4 py-4 text-white placeholder-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed shadow-inner"
                                
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg font-bold py-5 transition-all uppercase tracking-widest hover:bg-accent hover:border-accent flex items-center justify-center gap-3 rounded-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending Message...
                                        <Loader2 size={20} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
