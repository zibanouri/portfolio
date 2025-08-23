import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    toggleTheme: () => void;
    darkMode: boolean;
    theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollSection = (sectionID: string) => {
        const element = document.getElementById(sectionID);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const bgLightFromTo = () => {
        switch (theme) {
            case 'blue':
                return 'from-blue-500 to-blue-400';
            case 'rose':
                return 'from-rose-500 to-rose-400';
            case 'red':
                return 'from-red-500 to-red-400';
            case 'green':
                return 'from-emerald-500 to-yellow-600';
            case 'yellow':
                return 'from-yellow-500 to-yellow-400';
            case 'pink':
                return 'from-pink-500 to-pink-400';
            case 'purple':
                return 'from-purple-500 to-cyan-400';
            default:
                return 'from-slate-500 to-purple-400';
        }
    };
    const bgDarkFromTo = () => {
        switch (theme) {
            case 'blue':
                return 'dark:from-blue-500 dark:to-blue-400';
            case 'rose':
                return 'dark:from-rose-500 dark:to-rose-400';
            case 'red':
                return 'dark:from-red-500 dark:to-red-400';
            case 'green':
                return 'dark:from-emerald-500 dark:to-yellow-600';
            case 'yellow':
                return 'dark:from-yellow-500 dark:to-yellow-400';
            case 'pink':
                return 'dark:from-pink-500 dark:to-pink-400';
            case 'purple':
                return 'dark:from-purple-500 dark:to-cyan-400';
            default:
                return 'dark:from-slate-500 dark:to-purple-400';
        }
    };
    const navHover = () => {
        switch (theme) {
            case 'blue':
                return 'hover:text-blue-500 dark:hover:text-blue-400';
            case 'rose':
                return 'hover:text-rose-500 dark:hover:text-rose-400';
            case 'red':
                return 'hover:text-red-500 dark:hover:text-red-400';
            case 'green':
                return 'hover:text-emerald-500 dark:hover:text-emerald-400';
            case 'yellow':
                return 'hover:text-yellow-500 dark:hover:text-yellow-400';
            case 'pink':
                return 'hover:text-pink-500 dark:hover:text-pink-400';
            case 'purple':
                return 'hover:text-purple-500 dark:hover:text-purple-400';
            default:
                return 'hover:text-slate-500 dark:hover:text-slate-400';
        }
    };

    const navLink = () => {
        switch (theme) {
            case 'blue':
                return 'group-hover:bg-blue-600 dark:group-hover:bg-blue-500';
            case 'rose':
                return 'group-hover:bg-rose-600 dark:group-hover:bg-rose-500';
            case 'red':
                return 'group-hover:bg-red-600 dark:group-hover:bg-red-500';
            case 'green':
                return 'group-hover:bg-emerald-600 dark:group-hover:bg-emerald-600';
            case 'yellow':
                return 'group-hover:bg-yellow-600 dark:group-hover:bg-yellow-500';
            case 'pink':
                return 'group-hover:bg-pink-600 dark:group-hover:bg-pink-500';
            case 'purple':
                return 'group-hover:bg-purple-600 dark:group-hover:bg-purple-500';
            default:
                return 'group-hover:bg-slate-600 dark:group-hover:bg-slate-500';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 dark:bg-slate-900 dark:hover:bg-slate-700 
        ${isScrolled ? 'bg-gray-200/80 backdrop-blur-md shadow-lg dark:bg-slate-800' : 'bg-gray-200'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center py-4">
                    <div
                        className={`text-2xl font-bold bg-gradient-to-r
                    ${bgLightFromTo()} ${bgDarkFromTo()} text-transparent bg-clip-text`}
                    >
                        Ziba Nouri
                    </div>
                    <div className="hidden md:flex space-x-8 text-2xl  dark:text-slate-200 dark:hover:text-slate-300 ">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollSection(item)}
                                    className="capitalize hover:text-gray-800 transition-all duration-300 cursor-pointer font-sans relative group text-2xl"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:bg-gray-300 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            )
                        )}
                    </div>
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100/5 transition-colors dark:bg-slate-300 dark:hover:bg-slate-300 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4 bg-white/90 rounded-lg mt-2 border border-gray-400/20 backdrop-blur-md ">
                        <div className="flex flex-col space-y-4 px-4 ">
                            {[
                                'home',
                                'about',
                                'skills',
                                'projects',
                                'contact',
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollSection(item)}
                                    className={`capitalize text-left py-2 hover:text-gray-800
                                     ${navHover()}
                                    transition-colors duration-300 font-medium cursor-pointer`}
                                >
                                    {item}
                                    <span
                                        className={`absolute -bottom-1 left-0 w-0 h-0.5 
                                    ${navLink()}
                                    group-hover:w-full transition-all duration-300`}
                                    ></span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
