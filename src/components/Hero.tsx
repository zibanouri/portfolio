import { ArrowDown } from 'lucide-react';
import { translations, type Language } from './lib/translate';

interface HeroProps {
    theme: string;
     lang: Language;
}

const Hero: React.FC<HeroProps> = ({ theme ,lang}) => {
    const scrollSection = (sectionID: string) => {
        const element = document.getElementById(sectionID);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className={`relative min-h-screen bg-gradient-to-br from-${theme}-100 via-slate-50`}
        >
            <div
                className={`flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 p-8 relative z-10 bg-gradient-to-br from-${theme}-100 via-${theme}-50 dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800`}
            >
                <div className="flex-shrink-0">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20 mt-8">
                        <img
                            className="w-full h-full object-cover"
                            src="/portfolio/ziba.png"
                            alt="image-ziba"
                        />
                    </div>
                </div>
                <div className="text-center md:text-left max-w-2xl">
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-7xl font-bold color-slate-900: oklch(0.208 0.042 265.755) dark:text-slate-400 dark:hover:text-slate-200">
                             {translations[lang].hero.name}
                        </h1>
                    </div>
                    <div className="mb-8">
                        <p className="text-xl md:text-2xl text-gray-800  dark:text-slate-400 dark:hover:text-slate-200">
                            ●  {translations[lang].hero.front}
                        </p>
                    </div>
                    <div className="mb-8">
                        <div className="text-lg text-slate-300 leading-relaxed space-y-2">
                            <p className="mt-4">
                                <span className="text-gray-700 font-semibold dark:text-slate-400 dark:hover:text-slate-200">
                                     {translations[lang].hero.hello}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => scrollSection('projects')}
                            className={`px-8 py-4 bg-gradient-to-r from-${theme}-400 to-${theme}-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-300  dark:text-slate-800 dark:hover:text-slate-800`}
                        >
                             {translations[lang].hero.work}
                        </button>
                        <button
                            onClick={() => scrollSection('contact')}
                            className="px-8 py-4 text-blue-400 font-semibold rounded-lg border border-sky-300 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-200  dark:text-slate-400 dark:hover:text-slate-500"
                        >
                            {translations[lang].hero.touch}
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
};

export default Hero;
