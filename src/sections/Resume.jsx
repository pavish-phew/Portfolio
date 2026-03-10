import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1mCD1j-tuRgCobOParSnDqR09l2CkjJZF/view?usp=drivesdk";

    return (
        <section id="resume" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 bg-primary-light/40 backdrop-blur-xl border border-white/10 shadow-2xl p-10 md:p-16 relative overflow-hidden">

                    <div className="relative z-10 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-secondary text-xs uppercase tracking-widest font-mono mb-8"
                        >
                            <FileText size={16} />
                            <span>Resume / CV</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter leading-tight uppercase"
                        >
                            Analyze my <br/><span className="text-accent">Professional Profile</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-secondary text-lg mb-10 font-light leading-relaxed max-w-lg"
                        >
                            Unlock the full details of my professional journey, technical expertise, and academic achievements.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-accent text-primary font-bold flex items-center gap-3 hover:bg-white transition-colors duration-300 uppercase tracking-wide"
                            >
                                View Full Resume
                                <ExternalLink size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Brutalist Document Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block perspective-1000 w-full max-w-xs"
                    >
                        {/* Offset background shadow box */}
                        <div className="w-[320px] h-full absolute -bottom-4 -right-4 bg-accent z-0"></div>
                        
                        <div className="w-[320px] h-[440px] bg-black/40 backdrop-blur-md border border-white/10 p-8 relative z-10 flex flex-col justify-between group cursor-pointer hover:bg-white/5 transition-colors duration-300">
                            <div>
                                <div className="flex gap-4 mb-10 items-center">
                                    <div className="w-14 h-14 bg-secondary"></div>
                                    <div className="space-y-3 flex-1">
                                        <div className="w-3/4 h-3 bg-secondary"></div>
                                        <div className="w-1/2 h-2 bg-white/10"></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-full h-2.5 bg-white/10"></div>
                                    <div className="w-full h-2.5 bg-white/10"></div>
                                    <div className="w-4/5 h-2.5 bg-white/10"></div>
                                </div>
                                <div className="mt-10 space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 bg-white/10"></div>
                                        <div className="w-full h-8 bg-white/5"></div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 bg-white/10"></div>
                                        <div className="w-full h-8 bg-white/5"></div>
                                    </div>
                                </div>
                            </div>

                            <a href={resumeUrl} target='_blank' rel="noopener noreferrer" className="w-full py-4 border border-white/10 flex items-center justify-center text-secondary text-sm font-medium uppercase tracking-widest group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                Open PDF
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
