import { Code } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { translations, type Language } from './lib/translate';

interface SkillsProps {
    theme: string;
    lang: Language;
}

const Skills: React.FC<SkillsProps> = ({ theme, lang }) => {
    const SkillCategory = [
        {
            title: 'Fundamentals',
            skills: [
                { name: 'HTML', level: 80 },
                { name: 'CSS', level: 85 },
                { name: 'javascript', level: 35 },
            ],
        },

        {
            title: 'Tools for Better ',
            skills: [
                { name: 'SASS/SCSS', level: 90 },
                { name: 'TailwindCSS', level: 80 },
                { name: 'Git + GitHub', level: 55 },
            ],
        },

        {
            title: 'Frameworks',
            skills: [
                { name: 'React.js', level: 50 },
                { name: 'State Management', level: 50 },
                { name: 'javascript ', level: 45 },
            ],
        },
    ];

    return (
        <section
            id={translations[lang].navbar.title[2]}
            className={`py-20 px-4 bg-gradient-to-br from-${theme}-100 via-${theme}-50  dark:bg-gradient-to-br dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800`}
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle text={translations[lang].skills} theme={theme} />

                <div className="grid md:grid-cols-3 gap-8 ">
                    {SkillCategory.map((category) => (
                        <div
                            key={category.title}
                            className={`bg-slate-50 backdrop-blur-sm rounded-2xl p-8 border border-${theme}-300 hover:border-${theme}-500 transition-all duration-300 shadow-sm hover:shadow-md  dark:bg-slate-700 `}
                        >
                            <div className="flex items-center mb-6 ">
                                <Code
                                    className={`w-6 h-6 text-${theme}-600 mr-3 `}
                                />
                                <h3
                                    className={`text-xl font-semibold text-${theme}-600 dark:text-${theme}-400 dark:hover:text-${theme}-200`}
                                >
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div
                                            className={`flex justify-between items-center  dark:text-${theme}-400 dark:hover:text-${theme}-200`}
                                        >
                                            <span
                                                className={`text-${theme}-600 text-sm dark:text-${theme}-400 dark:hover:text-${theme}-200 `}
                                            >
                                                {skill.name}
                                            </span>
                                            <span className="text-slate-600 text-sm font-medium dark:text-slate-400 dark:hover:textslate00">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div
                                            className={`w-full bg-${theme}-100 rounded-full h-2  dark:text-${theme}-400 dark:hover:text-${theme}-200  dark:bg-slate-200 dark:hover:bg-slate-200`}
                                        >
                                            <div
                                                className="bg-gradient-to-r from-slate-300 to-slate-600 h-2 rounded-full transition-all duration-300 ease-out  dark:text-slate-400 dark:hover:text-slate-500"
                                                style={{
                                                    width: `${skill.level}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
