import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            className={`glass-card rounded-2xl p-6 group flex flex-col hover:bg-white/[0.03] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent ${project.live !== "#" ? 'cursor-pointer' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent" aria-hidden="true">
                                    <Folder size={24} />
                                </div>
                                <div className="flex gap-4">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-secondary hover:text-white transition-colors p-1"
                                            aria-label={`View source code for ${project.title}`}
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-secondary hover:text-white transition-colors p-1"
                                            aria-label={`Open live site for ${project.title}`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-accent/80 bg-accent/5 border border-accent/10 px-2 py-1 rounded">
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
