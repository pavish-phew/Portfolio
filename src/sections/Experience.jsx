import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
             
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter uppercase">Professional Journey</h2>
                    <div className="w-16 h-1 bg-accent lg:mx-0 mx-auto" />
                </motion.div>

                <div className="max-w-3xl mx-auto lg:mx-0">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10 pb-16 last:pb-0 border-l border-white/10 group hover:border-accent transition-colors duration-500"
                        >
                            {/* Timeline Square */}
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 mt-[-6px]">
                                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-all duration-300 uppercase tracking-wide">{exp.role}</h3>
                                <span className="text-xs font-mono text-secondary bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 uppercase tracking-wider">{exp.duration}</span>
                            </div>

                            <h4 className="text-lg text-secondary mb-6 font-medium uppercase tracking-widest">{exp.company}</h4>

                            <p className="text-secondary text-base leading-relaxed font-light">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
