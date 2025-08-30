import { User, Code, Download } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { translations, type Language } from './lib/translate';

interface AboutProps {
    theme: string;
    lang: Language;
}

const About: React.FC<AboutProps> = ({ theme, lang }) => {
    return (
        <section
            id="about"
            className={`py-20 px-4 relative min-h-screen bg-gradient-to-br from-${theme}-100 via-${theme}-50 dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    text={translations[lang].about.storyTitle}
                    theme={theme}
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* My Story */}
                    <div
                        className={`bg-${theme}-200/60 backdrop-blur-sm rounded-2xl p-8 border border-${theme}-500/60 hover:border-${theme}-700/60 dark:hover:border-${theme}-300 transition-all duration-300 text-slate-800 dark:text-slate-200`}
                    >
                        <div className="flex items-center mb-6 space-x-3">
                            <User
                                className={`w-6 h-7 text-${theme}-600 dark:text-${theme}-400`}
                            />
                            <h3 className="font-semibold text-2xl">
                                {translations[lang].about.storyTitle}
                            </h3>
                        </div>
                        <p className="leading-relaxed">
                            {translations[lang].about.story}
                        </p>
                    </div>

                    <div
                        className={`bg-${theme}-200/60 backdrop-blur-sm rounded-2xl p-8 border border-${theme}-500/60 hover:border-${theme}-700/60 dark:hover:border-${theme}-300 transition-all duration-300 text-slate-800 dark:text-slate-200`}
                    >
                        <div className="flex items-center mb-6 space-x-3">
                            <Code
                                className={`w-6 h-7 text-${theme}-600 dark:text-${theme}-400`}
                            />
                            <h3 className="font-semibold text-2xl">
                                {translations[lang].about.iDoTitle}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {translations[lang].about.iDo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center text-slate-700 dark:text-slate-200"
                                >
                                    <div
                                        className={`w-3 h-3 rounded-full mr-3 bg-${theme}-600 dark:bg-${theme}-400`}
                                    ></div>
                                    <span>{item.trim()}</span>
                                </div>
                            ))}
                        </div>

                        {/* Download Resume */}
                        <div className="mt-8">
                            <a href="/portfolio/Resume.pdf" download>
                                <div className="inline-flex items-center text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors">
                                    <Download className="h-5 w-5 mr-3" />
                                    Download Resume
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
