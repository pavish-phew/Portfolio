import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
             
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter uppercase">Technical Skills</h2>
                    <div className="w-16 h-1 bg-accent lg:mx-0 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-primary-light/40 backdrop-blur-lg border border-white/10 shadow-xl p-8 hover:bg-white/5 transition-colors duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 group-hover:text-accent transition-colors tracking-wide uppercase">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 font-mono text-xs text-secondary hover:text-white hover:border-accent transition-all cursor-default uppercase tracking-wider"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
