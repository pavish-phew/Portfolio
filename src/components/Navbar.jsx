import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-primary/90 backdrop-blur-md border-card-border' : 'bg-transparent border-transparent'} top-0 left-0`} aria-label="Main Navigation">
            <div className="container mx-auto px-6 h-16 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-white tracking-widest uppercase flex items-center gap-1 font-mono" aria-label="Back to top">
                    <span className="text-accent" aria-hidden="true">&lt;</span>
                    Pavish
                    <span className="text-accent" aria-hidden="true">/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-secondary hover:text-white transition-colors relative group py-2 uppercase tracking-wide"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" aria-hidden="true" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-accent transition-colors"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-card-border absolute top-full left-0 w-full p-4">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-secondary hover:text-white block text-left px-4 py-3 border-l-2 border-transparent hover:border-accent hover:bg-white/5 transition-all uppercase tracking-wide text-sm font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
