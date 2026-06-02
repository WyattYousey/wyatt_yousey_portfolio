import ProjectCard from '../components/cards/ProjectCard';
import PillCard from '../components/cards/PillCard';
import { projects, projectTypeData, type Project } from '../data/projects';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CompactProjectCard from '../components/cards/CompactProjectCard';

const Projects = () => {
  const [view, setView] = useState<'featured' | 'all'>('featured');
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const featuredProject: Project | undefined = projects.find(
    (project) => project.featured
  );

  const otherProjects: Project[] = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="p-6">
      <div>
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          Projects
        </h2>
        <p className="typography-large text-(--color-text) ml-14 mt-3 tracking-[1.5px]">
          A collection of applications, systems, and experiments focused on
          automation, full-stack engineering, and problem solving.
        </p>
        <div className="flex gap-10 items-center justify-center mt-20">
          {projectTypeData.map((projectType) => (
            <PillCard key={projectType.item} {...projectType} />
          ))}
        </div>
      </div>
      <div className="mt-8 ml-10">
        {view === 'all' && (
          <button
            onClick={() => setView('featured')}
            className="px-4 py-2 text-(--color-text) typography-button border border-(--color-text) rounded-md bg-(--color-button-bg) hover:text-(--color-button-bg-hover) hover:cursor-pointer hover:text-shadow-(--shadow-button-hover) transition-all duration-450 ease-in-out"
          >
            Featured Project{'->'}
          </button>
        )}

        {view === 'featured' && (
          <button
            onClick={() => setView('all')}
            className="px-4 py-2 text-(--color-text) typography-button border border-(--color-text) rounded-md bg-(--color-button-bg) hover:text-(--color-button-bg-hover) hover:cursor-pointer hover:text-shadow-(--shadow-button-hover) transition-all duration-450 ease-in-out"
          >
            Project Library{'->'}
          </button>
        )}
      </div>
      <AnimatePresence mode="wait">
        {view === 'featured' ? (
          <motion.div
            key="featured"
            initial={{
              x: 1800,
              opacity: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -1800,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 15,
              duration: 0.8,
            }}
          >
            <h3 className="typography-heading text-(--color-text) ml-10 mt-10">
              Featured Project
            </h3>

            <div className="mt-6">
              {featuredProject && <ProjectCard {...featuredProject} />}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="all-projects"
            initial={{
              x: 2000,
              opacity: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -2000,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 15,
              duration: 0.8,
            }}
          >
            <h3 className="typography-heading text-(--color-text) ml-10 mt-10">
              Project Library
            </h3>

            <div className="flex gap-10 justify-center mt-32">
              {otherProjects.map((project) => (
                <CompactProjectCard
                  onClick={() => setCurrentProject(project)}
                  key={project.id}
                  title={project.title}
                  stack={project.stack}
                  status={project.status}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setCurrentProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative z-10"
              initial={{
                opacity: 0,
                scale: 0.7,
                rotateX: 90,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                rotateX: 90,
                rotateY: 90,
              }}
              transition={{
                type: 'spring',
                stiffness: 110,
                damping: 20,
              }}
            >
              <ProjectCard {...currentProject} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
