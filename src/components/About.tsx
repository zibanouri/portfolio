import { User, Code, Download } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface HeroProps {
    theme: string;
}

const About: React.FC<HeroProps> = ({ theme }) => {
    const iDo = [
        'Front-End Development',
        'React & React Ecosystem',
        'Responsive & Accessible UI/UX',
        'Modern JavaScript (ES6+)',
        'TypeScript',
        'Tailwind CSS & Utility-First Design',
        'Building User-Centered Web Apps',
        'Code as a Tool for Independence',
        'Cross-Browser & Device Compatibility',
        'Learning in Public & Tech Growth',
    ];
    return (
        <section
            id="about"
            className={`py-20 px-4 relative min-h-screen bg-gradient-to-br from-${theme}-100 via-${theme}-50  dark:bg-gradient-to-br dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800 `}
        >
            <div
                className={`max-w-6xl mx-auto text-slate-800 dark:from-${theme}-900 dark:via-${theme}-800 dark:to-${theme}-900 `}
            >
                 <SectionTitle text="About Me" theme={theme} />

                <div className={`grid md:grid-cols-2 gap-12 items-center text-${theme}-700 hover:text-${theme}-600 dark:text-slate-400 dark:hover:text-slate-200`}>
                    <div className={`bg-${theme}-200/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-500/60 hover:border-${theme}-700/60 dark:hover:border-${theme}-300 transition-all duration-300`}>
                        <div className="flex items-center mb-6 space-x-3">
                            <User className={`w-6 h-7 text-${theme}-700 hover:text-${theme}-600 font-black  dark:text-${theme}-400 dark:hover:text-${theme}-200`} />
                            <h3 className={`font-semibold text-2xl dark:text-${theme}-400 dark:hover:text-${theme}-200`}>
                                My Story
                            </h3>
                        </div>
                        <p className={`text-${theme}-700 hover:text-${theme}-600 leading-relaxed mb-8  dark:text-${theme}-400 dark:hover:text-${theme}-200`}>
                            My heart is happy, I am here, and I am moving
                            forward. Despite all the hardships, I am rebuilding
                            my life: one line of code, one word of German, one
                            day at a time. I wasn’t always a programmer. My
                            degree was in another field. But the moment I
                            discovered coding, I fell in love with it. With
                            every lesson, every bug, and every improvement — I
                            feel more alive. Programming is hard, yes. But it’s
                            beautiful. It gives me purpose. It empowers me. I am
                            a single mother with two teenage children. I have
                            been through betrayal, heartbreak, and a storm that
                            could have broken me. But I chose to fight — not
                            with anger, but with action. I am learning
                            JavaScript and React. My German is B1 and improving.
                            Every challenge is my fuel. I don’t just want to
                            survive — I want to grow, stand on my own two feet,
                            and build a future beyond borders. This is Iran,
                            where life tests you every day. But no challenge can
                            dampen my resolve. This repository is more than a
                            collection of code. It is my courage. It is my hope.
                            My promise to my children: I will not give up, I
                            will emigrate, I will save us.
                        </p>
                    </div>
                    <div className={`bg-${theme}-200/60 backdrop-blur-sm rounded-2xl p-8 border border-${theme}-500/60 hover:border-${theme}-700/60 transition-all duration-300 dark:hover:border-${theme}-300`}>
                        <div className="flex items-center mb-6 space-x-3">
                            <Code className={`w-6 h-7  text-${theme}-700 hover:text-${theme}-600 font-black dark:text-${theme}-400 dark:hover:text-${theme}-200`}/>
                            <h2 className={`font-semibold text-2xl hover:text-${theme}-700 dark:text-${theme}-600 dark:hover:text-${theme}-200 `}>
                                What I Do
                            </h2>
                        </div>
                        <div className={`space-y-4 dark:hover:text-${theme}-200 dark:text-${theme}-100 `}>
                            {iDo.map((item) => (
                                <div className={`flex items-center hover:text-${theme}-700 dark:text-${theme}-600 dark:hover:text-${theme}-200 transition-colors duration-200`}>
                                    <div className={`w-3 h-3 rounded-full mr-3 bg-${theme}-700 dark:bg-${theme}-600 dark:hover:bg-${theme}-200 transition-colors duration-200`}></div>
                                    {item}
                                    <span className={`text-${theme}-700 hover:text-${theme}-600 dark:text-${theme}-400 dark:hover:text-${theme}-200`}></span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <a href="/portfolio/Resume.pdf" download>
                                <div className="inline-flex items-center text-slate-400 hover:text-slate-700  dark:text-slate-400 dark:hover:text-slate-200">
                                    <Download className="h-5 w-5 mr-3" />{' '}
                                    Downloud Resume
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
