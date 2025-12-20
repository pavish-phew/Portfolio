import React from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        zIndex: 9999,
                    },
                }}
            />
            <Layout>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Resume />
                <Contact />
            </Layout>
        </>
    );
}

export default App;
