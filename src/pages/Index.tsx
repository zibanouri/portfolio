import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ThemeSidebar from '../components/ui/ThemeSidebar';
import { type Language } from '../components/lib/translate';
const Index = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [theme, setTheme] = useState('slate');
    const [lang, setLang] = useState<Language>('en');

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
            <Navbar theme={theme} lang={lang} />
            <ThemeSidebar
                lang={lang}
                setLang={setLang}
                theme={theme}
                setTheme={setTheme}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />
            <Hero theme={theme} lang={lang} />
            <About theme={theme} lang={lang} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <Contact theme={theme} />
            <Footer theme={theme} />

            <>
                {() => {
                    return `
 from-blue-400 from-red-400 from-rose-400 from-pink-400 from-yellow-400 from-green-400 from-purple-400 from-slate-400 
 to-blue-500 to-red-500 to-rose-500 to-pink-500 to-green-500 to-yellow-500 to-purple-500 to-slate-500
from-red-100 from-rose-100 from-pink-100 from-yellow-100 from-green-100 from-purple-100 from-blue-100 from-slate-100
via-red-50 via-rose-50 via-pink-50 via-yellow-50 via-green-50 via-purple-50 via-blue-50 via-slate-50 
 dark:from-red-800 dark:from-rose-800 dark:from-pink-800 dark:from-yellow-800 dark:from-green-800 dark:from-purple-800 dark:from-slate-800 dark:from-blue-800
 dark:via-red-900 dark:via-rose-900 dark:via-pink-900 dark:via-yellow-900 dark:via-green-900 dark:via-purple-900 dark:via-slate-900 dark:via-blue-900   
 dark:to-red-800 dark:to-rose-800 dark:to-pink-800 dark:to-yellow-800 dark:to-green-800 dark:to-purple-800 dark:to-slate-800 dark:to-blue-800  
border-red-300 border-rose-300 border-pink-300 border-yellow-300 border-green-300 border-blue-300 border-purple-300 border-slate-300
 hover:border-red-500 hover:border-rose-500 hover:border-pink-500 hover:border-yellow-500 hover:border-blue-500 hover:border-green-500 hover:border-purple-500  hover:border-slate-500
text-red-600 text-rose-600 text-pink-600 text-yellow-600 text-green-600 text-purple-600 text-blue-600 text-slate-600
dark:text-red-400 dark:text-rose-400 dark:text-pink-400 dark:text-yellow-400 dark:text-green-400 dark:text-purple-400 dark:text-blue-400  dark:text-slate-400 
dark:hover:text-red-200 dark:hover:text-rose-200 dark:hover:text-pink-200 dark:hover:text-yellow-200 dark:hover:text-green-200 dark:hover:text-purple-200 dark:hover:text-blue-200 dark:hover:text-slate-200
from-red-700 from-rose-700 from-pink-700 from-yellow-700 from-green-700 from-purple-700 from-blue-700 from-slate-700
to-red-600 to-rose-600 to-pink-600 to-yellow-600 to-green-600 to-red-600 to-purple-600 to-blue-600 from-slate-700
text-red-700 text-rose-700 text-pink-700 text-yellow-700 text-green-700 text-purple-700 text-blue-700 text-slate-700 
bg-red-100 bg-rose-100 bg-pink-100 bg-yellow-100 bg-green-100 bg-purple-100 bg-blue-100 bg-slate-100 
dark:text-red-700 dark:text-rose-700 dark:text-pink-700 dark:text-yellow-700 dark:text-green-700 dark:text-purple-700 dark:text-blue-700  dark:text-slate-700 
dark:hover:text-red-200 dark:hover:text-rose-200 dark:hover:text-pink-200 dark:hover:text-yellow-200 dark:hover:text-green-200 dark:hover:text-purple-200 dark:hover:text-blue-200 dark:hover:text-slate-200 
dark:bg-red-800 dark:bg-rose-800 dark:bg-pink-800 dark:bg-yellow-800 dark:bg-green-800 dark:bg-purple-800 dark:bg-blue-800 dark:bg-slate-800
dark:hover:bg-red-700 dark:hover:bg-rose-700 dark:hover:bg-pink-700 dark:hover:bg-yellow-700 dark:hover:bg-green-700 dark:hover:bg-purple-700 dark:hover:bg-blue-700 dark:hover:bg-slate-700
dark:border-red-700 dark:border-rose-700 dark:border-pink-700 dark:border-yellow-700 dark:border-green-700 dark:border-purple-700 dark:border-blue-700 dark:border-slate-700 
dark:hover:border-red-200 dark:hover:border-rose-200 dark:hover:border-pink-200 dark:hover:border-yellow-200 dark:hover:border-green-200 dark:hover:border-purple-200 dark:hover:border-blue-200 dark:hover:border-slate-200 
text-red-500 text-rose-500 text-pink-500 text-yellow-500 text-purple-500 text-blue-500 text-green-500 text-slate-500 
dark:text-red-500 dark:text-rose-500 dark:text-pink-500 dark:text-yellow-500 dark:text-green-500 dark:text-purple-500 dark:text-blue-500  dark:text-slate-500 
dark:hover:text-red-200 dark:hover:text-rose-200 dark:hover:text-pink-200 dark:hover:text-yellow-200 dark:hover:text-green-200 dark:hover:text-purple-200 dark:hover:text-blue-200 dark:hover:text-slate-200 
 border-red-400/20 border-rose-400/20 border-pink-400/20  border-yellow-400/20 border-green-400/20 border-purple-400/20 border-blue-400/20  border-slate-400/20
hover:border-red-400/80 hover:border-rose-400/80 hover:border-pink-400/80 hover:border-yellow-400/80 hover:border-green-400/80 hover:border-purple-400/80 hover:border-blue-400/80 hover:border-slate-400/80 
bg-red-700 bg-rose-700 bg-pink-700 bg-yellow-700 bg-green-700 bg-purple-700 bg-blue-700 bg-slate-700
dark:bg-red-600 dark:bg-rose-600 dark:bg-pink-600 dark:bg-yellow-600 dark:bg-green-600  dark:bg-purple-600  dark:bg-blue-600  dark:bg-slate-600  
dark:hover:bg-red-200 dark:hover:bg-rose-200 dark:hover:bg-pink-200 dark:hover:bg-yellow-200 dark:hover:bg-green-200 dark:hover:bg-purple-200 dark:hover:bg-blue-200 dark:hover:bg-slate-200
 border-red-500/60 border-rose-500/60 border-pink-500/60 border-yellow-500/60 border-green-500/60 border-purple-500/60 border-blue-500/60 border-slate-500/60  
 hover:border-red-700/60 hover:border-rose-700/60 hover:border-pink-700/60 hover:border-yellow-700/60 hover:border-green-700/60 hover:border-purple-700/60 hover:border-blue-700/60 hover:border-slate-700/60  
 dark:hover:border-red-300 dark:hover:border-rose-300 dark:hover:border-pink-300 dark:hover:border-yellow-300 dark:hover:border-green-300 dark:hover:border-purple-300 dark:hover:border-blue-300 dark:hover:border-slate-300
dark:from-red-950 dark:from-red-950 dark:from-red-950 dark:from-red-950 dark:from-red-950 dark:from-red-950 dark:from-red-950 dark:from-red-950
 dark:via-red-900 dark:via-rose-900 dark:via-pink-900 dark:via-yellow-900 dark:via-green-900 dark:via-purple-900 dark:via-blue-900 dark:via-slate-900 
 dark:to-red-950 dark:to-rose-950 dark:to-pink-950 dark:to-yellow-950 dark:to-green-950 dark:to-purple-950 dark:to-blue-950 dark:to-slate-950
`;
                }}
            </>
        </div>
    );
};

export default Index;
