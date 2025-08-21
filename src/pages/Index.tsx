import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ThemeSidebar from '../components/ui/ThemeSidebar';

const Index = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [theme, setTheme] = useState('gray');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className="min-h-screen transition-all duration-500 bg-gradient-to-br
        from-slate-50 to-slate-200 text-slate-900"
        >
            <Navbar />
            <ThemeSidebar
                theme={theme}
                setTheme={setTheme}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
