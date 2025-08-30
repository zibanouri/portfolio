import { Github } from 'lucide-react';
import React from 'react';

interface Project {
    imageURL: string;
    title: string;
    description: string;
    topics: string[];
    liveURL: string;
    githubURL: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    theme: string;

}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
    return (
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-${theme}-400/20 hover:border-${theme}-400/80 dark:text-slate-400 dark:hover:text-slate-200 bg-gradient-to-br from-${theme}-100 via-${theme}-50 dark:bg-gradient-to-br dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800 transition-all duration-300 group flex flex-col h-full`}>
            <div className="relative overflow-hidden">
                <img
                    src={project.imageURL}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-700/20
                        opacity-60 group-hover:opacity-20  dark:bg-slate-400 dark:hover:bg-slate-600 transition-opacity duration-300"
                ></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-lg font-semibold mb-3 text-${theme}-600 group-hover:text-${theme}-800 duration-300 transition-colors dark:text-${theme}-900 dark:hover:text-${theme}-800`}>
                    {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow  dark:text-slate-300 dark:hover:text-slate-100">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.topics.map((topic) => (
                        <span
                            key={topic}
                            className="px-3 py-1 bg-slate-200 border border-slate-700 text-xs rounded-full font-medium hover:bg-slate-300 dark:bg-slate-400 dark:hover:bg-slate-200  dark:text-slate-600 dark:bg-gradient-to-br dark:hover:text-slate-900 "
                        >
                            {topic}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 mt-auto">
                    <a
                        href={project.liveURL}
                        target="_blank"
                        className={`flex-1 text-${theme}-700 bg-gradient-to-r from-${theme}-400 to-${theme}-500 hover-${theme}-600 hover:shadow-lg  dark:text-${theme}-900 dark:hover:text-${theme}-800 text-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform transform-gpu hover:scale-[1.01]`}
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.githubURL}
                        target="_blank"
                        className="text-slate-500 hover:text-gray-400 transition-all duration-300 transform transform-gpu hover:scale-[1.1] p-2 rounded-lg hover:bg-gray-500/5"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
