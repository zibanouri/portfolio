import { Code } from 'lucide-react';

const Skills = () => {
    const SkillCategory = [
        {
            title: 'Front-End',
            skills: [
                { name: 'React', level: 40 },
                { name: 'TypeScript', level: 65 },
                { name: 'Next.js', level: 35 },
                { name: 'SCSS', level: 30 },
                { name: 'Tailwind', level: 75 },
            ],
        },
         {
            title: 'Front-End',
            skills: [
                { name: 'Html', level: 90 },
                { name: 'Css', level: 60 },
                { name: 'Github', level: 45 },
                { name: 'Sass', level: 30 },
                { name: 'Bootstrap', level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-left md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                        Skills
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {SkillCategory.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-300 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center mb-6">
                                <Code className="w-6 h-6 text-gray-600 mr-3" />
                                <h3 className="text-xl font-semibold text-gray-600">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700 text-sm">
                                                {skill.name}
                                            </span>
                                            <span className="text-gray-600 text-sm font-medium">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-slate-800 to-slate-700 h-2 rounded-full transition-all duration-500 ease-out"
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
