import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">

            {/* Dynamic Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
                        >
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">future</span> one line at a time.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
                        >
                            I'm <span className="text-white font-semibold">{PROFILE_DATA.name}</span>, a Full Stack Developer. {PROFILE_DATA.tagline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-all transform hover:scale-105">
                                View My Work
                                <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-accent rounded-full rotate-6 opacity-20 blur-xl"></div>
                            <img
                                src={profileImage}
                                alt={PROFILE_DATA.name}
                                className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl z-10"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
