import { Fragment } from 'react/jsx-runtime';
import PillCard from '../components/cards/PillCard';
import SkillCard from '../components/cards/SkillCard';
import { currentWorkflow, skills } from '../data/skills';
import { ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div className="p-6">
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
        <p className="text-(--color-text) text-xl ml-12 mt-10 tracking-[1.5px]">
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
          {currentWorkflow.map((wf, index) => (
            <Fragment key={wf.item}>
              <motion.div
                initial={{ opacity: 0, x: index * -450 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.5,
                  duration: 1,
                  ease: [0.97, -0.03, 0, 1.03],
                }}
              >
                <PillCard {...wf} />
              </motion.div>

              {index < currentWorkflow.length - 1 && (
                <ArrowRight size={45} className="text-(--color-button-bg)" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">
          Outside the IDE
        </h2>
        <p className="text-(--color-text) text-xl ml-12 mt-10 tracking-[1.5px]">
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
