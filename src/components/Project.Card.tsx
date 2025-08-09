interface project {
    imageURL: string;
    title: string;
    description: string;
    topics: string[];
    liveURL: string;
    githubURL: string;
}

const ProjectCard = () => {
    return (
        <div className="max-w-80 mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-400/20 hover:border-gray-400/80 transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <img src="/portfolio/public/project-image/project2.webp" alt="zibaCard" className="w-full h-full object-cover" />
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20
                        opacity-60 group-hover:opacity-20 transition-opacity duration-300">
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow ">
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 group-hover:text-slate-600 duration-300 transition-colors">
                        Portfolio
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quo nisi ipsum.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-slate-200 border border-slate-400 text-xs rounded-full font-medium">
                            FrontEnd
                        </span>
                        <span className="px-3 py-1 bg-slate-200 border border-slate-400 text-xs rounded-full font-medium">
                            React
                        </span>
                        <span className="px-3 py-1 bg-slate-200 border border-slate-400 text-xs rounded-full font-medium">
                            Tailwind
                        </span>
                        <span className="px-3 py-1 bg-slate-200 border border-slate-400 text-xs rounded-full font-medium">
                            Typescript
                        </span>
                        <span className="px-3 py-1 bg-slate-200 border border-slate-400 text-xs rounded-full font-medium">
                            Package
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;




<img src="/portfolio/public/project-image/project1.webp" alt="zibaCard" className="w-full h-full object-cover" />