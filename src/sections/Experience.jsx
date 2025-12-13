import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Professional Journey
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l border-white/10 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-secondary group-hover:bg-accent transition-colors duration-300 ring-4 ring-primary" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                                <span className="text-sm font-mono text-accent/80 bg-accent/10 px-2 py-0.5 rounded w-fit">{exp.duration}</span>
                            </div>

                            <h4 className="text-lg text-gray-400 mb-4 font-medium">{exp.company}</h4>

                            <p className="text-slate-300 text-base leading-relaxed">
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
