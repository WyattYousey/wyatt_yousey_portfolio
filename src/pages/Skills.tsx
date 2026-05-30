import { Fragment } from 'react/jsx-runtime';
import PillCard from '../components/cards/PillCard';
import SkillCard from '../components/cards/SkillCard';
import { currentWorkflow, skills } from '../data/skills';
import { ArrowRight } from 'lucide-react';

const Skills = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">
          Core Technologies
        </h2>
        <div className="flex gap-15 items-center justify-center mt-5">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">
          What I Enjoy Building?
        </h2>
        <p className="text-(--color-text) ml-12 mt-10">
          I enjoy building software that feels both practical and thoughtful,
          from{' '}
          <span className="text-(--accent-1)">full-stack applications</span> and{' '}
          <span className="text-(--accent-2)">automation tools</span> to{' '}
          <span className="text-(--accent-3)">
            interactive user experiences
          </span>{' '}
          and <span className="text-(--accent-4)">workflow systems</span>. What
          interests me most is solving real problems, improving efficiency, and
          continuously pushing myself to build{' '}
          <span className="text-(--accent-2)">cleaner</span>,{' '}
          <span className="text-(--accent-4)">smarter</span>, and{' '}
          <span className="text-(--accent-3)">more scalable solutions</span>.
        </p>
      </div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">
          Current Workflow
        </h2>
        <div className="flex gap-10 items-center justify-center mt-15">
          {currentWorkflow.map((workflow, index) => (
            <Fragment key={workflow.item}>
              <PillCard {...workflow} />

              {index < currentWorkflow.length - 1 && (
                <ArrowRight
                  size={40}
                  className="shrink-0 text-(--color-button-bg)"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">
          Outside the IDE
        </h2>
        <p className="text-(--color-text) ml-12 mt-10">
          Outside of software, I enjoy long walks, time with my four dogs, and
          finding opportunities to slow down and recharge. Stepping away from
          the screen often gives me the clarity and perspective I need to tackle
          the next challenge.
        </p>
      </div>
    </div>
  );
};

export default Skills;
