import React from 'react';
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
        <Layout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Resume />
            <Contact />
        </Layout>
    );
}

export default App;
