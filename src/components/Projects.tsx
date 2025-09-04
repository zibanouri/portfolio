import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';
import { translations, type Language } from './lib/translate';
interface ProjectsProps {
    theme: string;
    lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ theme ,lang }) => {
    return (
        <section
            id='project'
            className={`py-20 px-4 relative min-h-screen bg-gradient-to-br from-${theme}-100 via-${theme}-50  text-4xl text-left dark:bg-gradient-to-br dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800 `}
            aria-labelledby="projects-title"
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    text={translations[lang].navbar.title[3]}
                    theme={theme}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {translations[lang].projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            theme={theme}
                            lang={lang}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
