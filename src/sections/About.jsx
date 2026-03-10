import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
             
           <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter uppercase">About Me</h2>
                        <div className="w-16 h-1 bg-accent mb-10" />
                        <p className="text-secondary text-lg md:text-xl leading-relaxed mb-16 font-light">
                            {PROFILE_DATA.about}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto max-w-3xl border border-white/10 bg-primary-light/40 backdrop-blur-lg shadow-xl">
                            <div className="flex flex-col items-center justify-center p-8 border-b border-r border-white/10">
                                <h4 className="text-4xl md:text-5xl font-extrabold text-accent mb-2">5+</h4>
                                <p className="text-xs font-mono text-secondary uppercase tracking-widest">Projects Completed</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 border-b md:border-r border-white/10">
                                <h4 className="text-4xl md:text-5xl font-extrabold text-accent mb-2">200+</h4>
                                <p className="text-xs font-mono text-secondary uppercase tracking-widest">LeetCode Solved</p>
                            </div>
                            <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-8 border-b md:border-b-0 border-white/10">
                                <h4 className="text-4xl md:text-5xl font-extrabold text-accent mb-2">2026</h4>
                                <p className="text-xs font-mono text-secondary uppercase tracking-widest">Graduation Year</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
