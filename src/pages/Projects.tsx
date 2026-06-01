import PillCard from '../components/cards/PillCard';
import { projects, projectTypeData, type Project } from '../data/projects';

const Projects = () => {
  const featuredProject: Project = projects.filter((project) => {
    return project.featured === true;
  });

  return (
    <div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">Projects</h2>
        <p className="text-(--color-text) text-xl ml-14 mt-10">
          A collection of applications, systems, and experiments focused on
          automation, full-stack engineering, and problem solving.
        </p>
        <div className="flex gap-10 items-center justify-center mt-15">
          {projectTypeData.map((projectType) => (
            <PillCard key={projectType.item} {...projectType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
