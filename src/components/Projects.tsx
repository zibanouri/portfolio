import SectionTitle from './ui/SectionTitle';

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 px-4 relative min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 text-4xl text-left "
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle text="project" />
            </div>
        </section>
    );
};
export default Projects;
