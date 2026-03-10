import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen text-secondary font-sans selection:bg-accent selection:text-white">
            <Navbar />
            <main className="flex-grow pt-16 relative">
                <div className="fixed inset-0 bg-grid-white bg-[length:50px_50px] pointer-events-none opacity-20" />
                <div className="relative z-10">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
