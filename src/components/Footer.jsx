import React from 'react';
import { PROFILE_DATA } from '../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-10 border-t border-card-border relative z-20">
            <div className="container mx-auto px-6 text-center">
                <a href="#" className="text-3xl font-extrabold text-white tracking-widest inline-block mb-10 transition-colors hover:text-accent uppercase">
                    <span className="text-accent">&lt;</span>
                    Pavish
                    <span className="text-accent">/&gt;</span>
                </a>

                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {PROFILE_DATA.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-primary-light border border-card-border text-secondary hover:text-primary hover:bg-accent hover:border-accent transition-colors duration-300"
                            aria-label={`Visit my ${item.name}`}
                        >
                            <item.icon size={24} />
                        </a>
                    ))}
                </div>

                <div className="text-xs text-secondary font-mono tracking-widest uppercase">
                    <p>© {currentYear} Designed, built, and shipped by Pavish S.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
