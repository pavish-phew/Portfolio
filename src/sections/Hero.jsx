import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 bg-grid-white">

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tighter leading-tight"
                        >
                            Building the <br className="hidden md:block"/> <span className="text-accent underline decoration-accent/30 underline-offset-8">future</span> one line at a time.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-secondary text-lg md:text-xl mb-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            I'm <span className="text-white font-medium">{PROFILE_DATA.name}</span>, a Full Stack Developer. {PROFILE_DATA.tagline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a href="#projects" className="px-8 py-4 bg-white text-primary font-bold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-colors duration-300">
                                View My Work
                                <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors duration-300">
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, filter: 'grayscale(0%)' }}
                        animate={{ opacity: 1, filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                            {/* Structural Accent Element */}
                            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 z-0"></div>
                            <img
                                src={profileImage}
                                alt={PROFILE_DATA.name}
                                className="relative w-full h-full object-cover border-2 border-white/10 z-10 transition-all duration-500"                                           />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
