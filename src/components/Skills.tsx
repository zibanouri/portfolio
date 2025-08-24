import { Code } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Skills = () => {
    const SkillCategory = [
        {
            title: 'Fundamentals',
            skills: [
                { name: 'HTML', level: 40 },
                { name: 'CSS', level: 65 },
                { name: 'javascript', level: 35 },
            ],
        },

        {
            title: 'Tools for Better ',
            skills: [
                { name: 'SASS/SCSS', level: 90 },
                { name: 'TailwindCSS', level: 80 },
                { name: 'Git + GitHub', level: 55 },
                { name: ' Bootstrap', level: 75 },
            ],
        },

        {
            title: 'Frameworks',
            skills: [
                { name: 'React.js', level: 50 },
                { name: 'State Management', level: 50 },
                { name: 'Routing ', level: 75 },
                { name: 'Node.js ', level: 75 },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="py-20 px-4 bg-gradient-to-br from-slate-100 via-slate-50  dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle text="My Skills" />

                <div className="grid md:grid-cols-3 gap-8 ">
                    {SkillCategory.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-300 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md  dark:bg-slate-900 dark:hover:bg-slate-800"
                        >
                            <div className="flex items-center mb-6 ">
                                <Code className="w-6 h-6 text-gray-600 mr-3  dark:text-slate-400 dark:hover:text-slate-100" />
                                <h3 className="text-xl font-semibold text-gray-600 dark:text-slate-400 dark:hover:text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center  dark:text-slate-400 dark:hover:text-slate-300">
                                            <span className="text-gray-700 text-sm dark:text-slate-400 dark:hover:text-slate-300 ">
                                                {skill.name}
                                            </span>
                                            <span className="text-gray-600 text-sm font-medium dark:text-slate-400 dark:hover:text-slate-200 ">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2  dark:text-slate-400 dark:hover:text-slate-200  dark:bg-slate-400 dark:hover:bg-slate-200">
                                            <div
                                                className="bg-gradient-to-r from-slate-800 to-slate-700 h-2 rounded-full transition-all duration-500 ease-out  dark:text-slate-400 dark:hover:text-slate-100"
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
