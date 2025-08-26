import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ThemeSidebar from '../components/ui/ThemeSidebar';

const Index = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [theme, setTheme] = useState('purple');

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
        <div className="min-h-screen transition-all duration-500">
            <Navbar theme={theme} />
            <ThemeSidebar
                theme={theme}
                setTheme={setTheme}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />
            <Hero theme={theme} />
            <About theme={theme} />
            <Skills theme={theme} />
            <Projects />
            <Contact />
            <Footer />
            <>
                {() => {
                    return `
 from-blue-400 from-red-400 from-rose-400 from-pink-400 from-yellow-400 from-green-400 from-purple-400 from-gray-400 
 to-blue-500 to-red-500 to-rose-500 to-pink-500 to-green-500 to-yellow-500 to-purple-500 to-gray-500
from-red-100 from-rose-100 from-pink-100 from-yellow-100 from-green-100 from-purple-100 from-blue-100 from-gray-100
via-red-50 via-rose-50 via-pink-50 via-yellow-50 via-green-50 via-purple-50 via-blue-50 via-gray-50 
 dark:from-red-800 dark:from-rose-800 dark:from-pink-800 dark:from-yellow-800 dark:from-green-800 dark:from-purple-800 dark:from-gray-800 dark:from-blue-800
 dark:via-red-900 dark:via-rose-900 dark:via-pink-900 dark:via-yellow-900 dark:via-green-900 dark:via-purple-900 dark:via-gray-900 dark:via-blue-900   
 dark:to-red-800 dark:to-rose-800 dark:to-pink-800 dark:to-yellow-800 dark:to-green-800 dark:to-purple-800 dark:to-gray-800 dark:to-blue-800  
border-red-300 border-rose-300 border-pink-300 border-yellow-300 border-green-300 border-blue-300 border-purple-300 border-gray-300
 hover:border-red-500 hover:border-rose-500 hover:border-pink-500 hover:border-yellow-500 hover:border-blue-500 hover:border-green-500 hover:border-purple-500  hover:border-gray-500
 dark:bg-red-900 dark:bg-rose-900 dark:bg-blue-900 dark:bg-pink-900 dark:bg-yellow-900 dark:bg-green-900 dark:bg-purple-900 dark:bg-blue-90osedark:bg-gray-900    
 dark:hover:bg-red-800 dark:hover:bg-rose-800 dark:hover:bg-pink-800 dark:hover:bg-yellow-800 dark:hover:bg-green-800 dark:hover:bg-purple-800 dark:hover:bg-blue-800 dark:hover:bg-gray-800
 bg-red-600 bg-rose-600 bg-pink-600 bg-yellow-600 bg-green-600 bg-purple-600 bg-blue-600 bg-gray-600
 bg-red-200 bg-rose-200 bg-pink-200 bg-yellow-200 bg-green-200 bg-purple-200 bg-blue-200 bg-gray-200  
 dark:bg-red-800 dark:bg-rose-800 dark:bg-pink-800 dark:bg-yellow-800 dark:bg-green-800 dark:bg-purple-800 dark:bg-blue-800  dark:bg-gray-800



                      `;
                }}
            </>
        </div>
    );
};

export default Index;
