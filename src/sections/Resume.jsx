import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1mCD1j-tuRgCobOParSnDqR09l2CkjJZF/view?usp=drivesdk";

    return (
        <section id="resume" className="py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.03] border border-white/[0.08] p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px]" />

                    <div className="relative z-10 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
                        >
                            <FileText size={16} />
                            <span>Resume</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-white"
                        >
                            Grab my <span className="text-accent">Resume</span>
                            
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-300 text-lg mb-8"
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
                                className="px-8 py-4 bg-accent text-primary font-bold rounded-xl flex items-center gap-2 hover:bg-accent-dark transition-all transform hover:scale-[1.02] shadow-lg shadow-accent/20"
                            >
                                Preview Resume
                                <ExternalLink size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Visual Representation (Abstract Document) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden md:block"
                    >
                        <div className="w-[300px] h-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 rotate-[-6deg] absolute top-4 -left-4 z-0"></div>
                        <div className="w-[300px] h-[400px] bg-primary-light border border-white/[0.08] rounded-xl p-8 shadow-2xl relative z-10 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 transition-transform duration-500">
                            <div>
                                <div className="flex gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-accent/20"></div>
                                    <div className="space-y-2">
                                        <div className="w-32 h-3 bg-white/10 rounded"></div>
                                        <div className="w-20 h-2 bg-white/5 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full h-2 bg-white/5 rounded"></div>
                                    <div className="w-full h-2 bg-white/5 rounded"></div>
                                    <div className="w-3/4 h-2 bg-white/5 rounded"></div>
                                </div>
                                <div className="mt-8 space-y-3">
                                    <div className="w-full h-2 bg-white/5 rounded"></div>
                                    <div className="w-5/6 h-2 bg-white/5 rounded"></div>
                                </div>
                            </div>

                            <a href={resumeUrl} target='_blank' className="w-full py-3 rounded-lg border border-dashed border-white/20 flex items-center justify-center text-secondary text-sm group-hover:bg-white/5 transition-colors">
                                View PDF
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
