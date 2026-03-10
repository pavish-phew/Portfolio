import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
             
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter uppercase">Featured Projects</h2>
                    <div className="w-16 h-1 bg-accent lg:mx-0 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            tabIndex={project.live !== "#" ? 0 : -1}
                            role={project.live !== "#" ? "button" : "article"}
                            aria-label={project.live !== "#" ? `View live site for ${project.title}` : project.title}
                            onClick={() => project.live !== "#" && window.open(project.live, "_blank", "noopener,noreferrer")}
                            onKeyDown={(e) => {
                                if (project.live !== "#" && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    window.open(project.live, "_blank", "noopener,noreferrer");
                                }
                            }}
                            className={`p-8 group flex flex-col border border-white/10 bg-primary-light/40 backdrop-blur-lg hover:bg-white/5 transition-all duration-300 shadow-xl relative ${project.live !== "#" ? 'cursor-pointer' : ''}`}
                        >
                            
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="text-accent" aria-hidden="true">
                                    <Folder size={32} />
                                </div>
                                <div className="flex gap-4">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-secondary hover:text-white transition-all"
                                            aria-label={`View source code for ${project.title}`}
                                        >
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-secondary hover:text-white transition-all"
                                            aria-label={`Open live site for ${project.title}`}
                                        >
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-all duration-300 relative z-10 uppercase tracking-wide">
                                {project.title}
                            </h3>

                            <p className="text-secondary text-base leading-relaxed mb-8 flex-grow font-light relative z-10">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-secondary bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 uppercase tracking-wider">
                                        {t}
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

export default Projects;
