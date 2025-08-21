import { SunMoon, Moon, Sun, Palette, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import React,{ useState } from 'react';

interface ThemeSidebarProps {
    theme: string;
    setTheme: (theme: string) => void;
    darkMode: boolean;
    toggleTheme: () => void;
}
const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
    theme,
    setTheme,
    darkMode,
    toggleTheme,

}) => {
    const [isOpen, setIsOpen] = useState(false);
    const themes = [
        { id: 'gray', name: 'Gray', color: 'bg-slate-500' },
        { id: 'purple', name: 'Purple', color: 'bg-purple-500' },
        { id: 'red', name: 'Red', color: 'bg-red-500' },
        { id: 'green', name: 'Green', color: 'bg-emerald-500' },
        { id: 'blue', name: 'Blue', color: 'bg-blue-500' },
        { id: 'pink', name: 'Pink', color: 'bg-pink-500' },
        { id: 'yellow', name: 'Yellow', color: 'bg-yellow-500' },
        { id: 'rose', name: 'Rose', color: 'bg-rose-500' },
    ];

    const languages = [
        { id: 'en', country: 'US', name: 'English' },
        { id: 'ja', country: 'JP', name: '日本語' },
        { id: 'fr', country: 'FR', name: 'Français' },
        { id: 'de', country: 'DE', name: 'Deutsch' },

    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`fixed top-1/2 -translate-y-1/2 z-40 transition-all duration-300
                ${isOpen ? 'right-0' : '-right-80'}`}>
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-400/30 p-4 md:p-6 w-80 max-h-[90vh] overflow-y-auto" data-sidebare>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium flex items-center text-slate-700 dark:text-slate-200">
                            <SunMoon className="w-4 h-4 mr-2" />
                            Theme Mode
                        </span>
                        <button
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 
                                dark:bg-slate-900/80 dark:hover:bg-slate-900 
                                transition-colors duration-300 transform transform-gpu hover:scale-[1.1] cursor-pointer"
                            onClick={toggleTheme}
                        >
                            {darkMode ? (
                                <Sun className="w-4 h-4 text-slate-300" />
                            ) : (
                                <Moon className="w-4 h-4 text-slate-600" />
                            )}
                        </button>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700 dark:text-slate-200">
                            <Palette className="w-4 h-4 mr-2" />
                            Color Themes
                        </h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`p-2 md:p-3 rounded-lg border-2 transition-all duration-300 
                                        transform transform-gpu text-slate-700 dark:text-slate-200 
                                         cursor-pointer
                                        ${
                                            t.id === theme
                                                ? 'border-current shadow-md scale-[1.1]'
                                                : 'border-transparent hover:border-slate-300 hover:scale-[1.1]'
                                        }
                                        `}
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full md:w-6 md:h-6 ${t.color} mx-auto mb-1`}
                                    ></div>
                                    <div className="text-xs">{t.name}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700 mt-3 dark:text-slate-200">
                            <Languages className="w-4 h-4 mr-2" />
                            Languages
                        </h3>
                        <div className="space-y-2">
                            {languages.map((lang, index) => (
                                <button
                                    key={index}
                                    className="w-full p-2 rounded-lg text-left transition-all duration-300 transform transform-gpu hover:scale-[1.1] text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
                                >

                                    <span className="text-sm">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <button
                data-sidebar-toggle
                 onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-1/2 -translate-y-1/2 z-40 p-2 md:pd-3 transition-all duration-300 shadow-lg hover:shadow-xl
                    bg-slate-400 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white rounded-l-xl border-0 outline-none cursor-pointer
                    ${isOpen ? 'right-80' : 'right-0'}`}
            >
                {isOpen ? (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                )}
            </button>
        </>
    )

}


export default ThemeSidebar;