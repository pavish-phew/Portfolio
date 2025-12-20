import React from 'react';
import { PROFILE_DATA } from '../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <a href="#" className="text-2xl font-bold text-white tracking-tight inline-block mb-8">
                    <span className="text-accent">&lt;</span>
                    Pavish
                    <span className="text-accent">/&gt;</span>
                </a>

                <div className="flex justify-center space-x-8 mb-12">
                    {PROFILE_DATA.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
                            aria-label={`Visit my ${item.name}`}
                        >
                            <item.icon size={24} />
                        </a>
                    ))}
                </div>

                <div className="text-sm text-gray-500 font-medium">
                    <p>© {currentYear} Designed, built, and shipped by Pavish S.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
