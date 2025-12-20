import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

const About = () => {
    return (
        <section id="about" className="py-24 bg-primary-light/30 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-8" />
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
                            {PROFILE_DATA.about}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-12">
                            <div>
                                <h4 className="text-4xl font-bold text-accent mb-2">5+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-accent mb-2">200+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">LeetCode Solved</p>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h4 className="text-4xl font-bold text-accent mb-2">2026</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Graduation Year</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
