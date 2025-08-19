import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            imageURL: '/portfolio/project-image/project1.webp',
            title: 'portfolio',
            description:
                'This repository is a practice portfolio for learning React and is very important.',
            topics: ['React', 'Tailwind', 'Javascript'],
            liveURL: '#',
            githubURL: ' https://github.com/zibanouri/portfolio',
        },
        {
            imageURL: '/portfolio/project-image/project2.webp',
            title: 'SolsticeTheme',

            description:
                'This repository is a practice portfolio for learning React and is very important.',
            topics: ['React', 'Tailwind', 'Javascript'],
            liveURL: '#',
            githubURL: ' https://github.com/zibanouri/portfolio',
        },
        {
            imageURL: '/portfolio/project-image/project3.webp',
            title: 'Arika',
            description:
                'This repository is a practice portfolio for learning React and is very important.',
            topics: ['React', 'Tailwind', 'Javascript'],
            liveURL: '#',
            githubURL: ' https://github.com/zibanouri/portfolio',
        },
        {
            imageURL: '/portfolio/project-image/project4.webp',
            title: 'zibanouri',
            description:
                'This repository is a practice portfolio for learning React and is very important.',
            topics: ['React', 'Tailwind', 'Javascript'],
            liveURL: '#',
            githubURL: ' https://github.com/zibanouri/portfolio',
        },
        {
            imageURL: '/portfolio/project-image/project5.webp',
            title: 'nubar',
            description:
                'This repository is a practice portfolio for learning React and is very important.',
            topics: ['React', 'Tailwind', 'Javascript'],
            liveURL: '#',
            githubURL: ' https://github.com/zibanouri/portfolio',
        },
        {
            imageURL: '/portfolio/project-image/project6.webp',
            title: 'portfolio',
            description:
                'This repository is a practice portfolio for learning React and is very important.',
            topics: ['React', 'Tailwind', 'Javascript'],
            liveURL: '#',
            githubURL: ' https://github.com/zibanouri/portfolio',
        },
    ];
    return (
        <section
            id="projects"
            className="py-20 px-4 relative min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 text-4xl text-left bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 "
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle text="Projects" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
