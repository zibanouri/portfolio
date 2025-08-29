import { SunMoon, Moon, Sun, Palette, Languages, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { translations, type Language } from '../lib/translate';

interface ThemeSidebarProps {
    lang: Language;
    setLang: (lang: Language) => void;
    theme: string;
    setTheme: (theme: string) => void;
    darkMode: boolean;
    toggleTheme: () => void;
}
const ThemeSidebar: React.FC<ThemeSidebarProps> = ({
    lang,
    theme,
    setTheme,
    darkMode,
    toggleTheme,
    setLang,

}) => {
    const [isOpen, setIsOpen] = useState(false);
    const themes = [
        { id: 'slate', name: 'Gray', color: 'bg-slate-500' },
        { id: 'purple', name: 'Purple', color: 'bg-purple-500' },
        { id: 'red', name: 'Red', color: 'bg-red-500' },
        { id: 'green', name: 'Green', color: 'bg-emerald-500' },
        { id: 'blue', name: 'Blue', color: 'bg-blue-500' },
        { id: 'pink', name: 'Pink', color: 'bg-pink-500' },
        { id: 'yellow', name: 'Yellow', color: 'bg-yellow-500' },
        { id: 'rose', name: 'Rose', color: 'bg-rose-500' },
    ];

    const languages = [
        { id: 'en', name: 'English' },
        { id: 'de', name: 'Deutsch' },
        { id: 'ja', name: '日本語' },
    ];

    return (
        <>
            {/* Backdrop overlay when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar Panel */}
            <div
                className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300
                    ${isOpen ? 'right-0' : '-right-80'}`}
            >
                <div
                    className={` bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-l-2xl shadow-2xl 
                        transition-all duration-300 border p-4 md:p-6 w-80 max-h-[90vh] overflow-y-auto
                ${theme === "blue" ? " border-blue-500 hover:border-blue-400 dark:border-blue-600 dark:hover:border-blue-500" :
                            theme === "gray" ? " border-slate-500 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500" :
                                theme === "red" ? " border-red-500 hover:border-red-400 dark:border-red-600 dark:hover:border-red-500" :
                                    theme === "green" ? " border-emerald-500 hover:border-emerald-400 dark:border-emerald-600 dark:hover:border-emerald-500" :
                                        theme === "yellow" ? " border-yellow-500 hover:border-yellow-400 dark:border-yellow-600 dark:hover:border-yellow-500" :
                                            theme === "pink" ? " border-pink-500 hover:border-pink-400 dark:border-pink-600 dark:hover:border-pink-500" :
                                                theme === "purple" ? " border-purple-500 hover:border-purple-400 dark:border-purple-600 dark:hover:border-purple-500" :
                                                    theme === "rose" ? " border-rose-500 hover:border-rose-400 dark:border-rose-600 dark:hover:border-rose-500" :
                                                        " border-slate-500 hover:border-slate-400 dark:border-slate-600 dark:hover:border-slate-500"
                        }     
                        `}
                    data-sidebar
                    aria-label="Theme and Language Settings"
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium flex items-center text-slate-700 dark:text-slate-200">
                            <SunMoon className="w-4 h-4 mr-2" />
                            {translations[lang].sidebar.mode}
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
                            {translations[lang].sidebar.theme}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTheme(t.id)}
                                    className={`p-2 md:p-3 rounded-lg border-2 transition-all duration-300 
                                        transform transform-gpu text-slate-700 dark:text-slate-200 
                                         cursor-pointer
                                        ${t.id === theme
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
                            {translations[lang].sidebar.theme}
                        </h3>
                        <div className="space-y-2">
                           
                            {languages.map((langItem, index) => (
                                <button
                                    key={index}
                                    onClick={() => setLang(langItem.id as Language)}
                                    className={`w-full p-2 rounded-lg text-left transition-all duration-300 transform transform-gpu hover:scale-[1.1] text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer
                                         ${langItem.id === lang
                                            ? 'border-current shadow-md'
                                            : 'border-transparent hover:border-slate-300'
                                        }`}
                                    aria-label={`Switch to ${langItem.name}`}
                                >
                                    <span className="text-sm">{langItem.name}</span>
                                </button>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
            <button
                data-sidebar-toggle
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-1/2 -translate-y-1/2 z-40 p-2 md:pd-3 transition-all duration-300 shadow-lg hover:shadow-xl text-white rounded-l-xl border-0 outline-none cursor-pointer
                      ${isOpen ? 'right-80' : 'right-0'}
                    ${theme === "blue" ? " bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500" :
                        theme === "gray" ? " bg-slate-500 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500" :
                            theme === "red" ? " bg-red-500 hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-500" :
                                theme === "green" ? " bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-600 dark:hover:bg-emerald-500" :
                                    theme === "yellow" ? " bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500" :
                                        theme === "pink" ? " bg-pink-500 hover:bg-pink-400 dark:bg-pink-600 dark:hover:bg-pink-500" :
                                            theme === "purple" ? " bg-purple-500 hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-500" :
                                                theme === "rose" ? " bg-rose-500 hover:bg-rose-400 dark:bg-rose-600 dark:hover:bg-rose-500" :
                                                    " bg-slate-500 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
                    }

                  `}

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










