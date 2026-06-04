import { Fragment } from 'react/jsx-runtime';
import PillCard from '../components/cards/PillCard';
import SkillCard from '../components/cards/SkillCard';
import { currentWorkflow, skills } from '../data/skills';
import { ArrowDown, ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';
import { screenBreakMap } from '../data/screenBreaks';

const Skills = () => {
  const screenWidth = window.innerWidth;
  return (
    <div
      className={`p-6 ${screenWidth < screenBreakMap.largePhone ? 'mt-25' : 'mt-5'}`}
    >
      <div>
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          Core Technologies
        </h2>
        <div
          className={`${screenWidth < screenBreakMap.mediumDesktop ? 'grid grid-cols-2 place-items-center gap-4' : 'flex gap-15 items-center justify-center'} mt-5`}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          What I Enjoy Building?
        </h2>
        <p className="typography-body text-(--color-text) ml-12 mt-10 tracking-[1.5px]">
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
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          Current Workflow
        </h2>
        <div
          className={`flex ${screenWidth < screenBreakMap.largeDesktop ? 'flex-col' : ''} gap-10 items-center justify-center mt-15`}
        >
          {currentWorkflow.map((wf, index) => (
            <Fragment key={wf.item}>
              <motion.div
                initial={{
                  opacity: 0,
                  x:
                    screenWidth < screenBreakMap.largeDesktop
                      ? -150
                      : index * -450,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  duration: 1,
                  ease: [0.97, -0.03, 0, 1.03],
                }}
              >
                <PillCard {...wf} />
              </motion.div>

              {index < currentWorkflow.length - 1 &&
                (screenWidth < screenBreakMap.largeDesktop ? (
                  <ArrowDown size={45} className="text-(--color-button-bg)" />
                ) : (
                  <ArrowRight size={45} className="text-(--color-button-bg)" />
                ))}
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          Outside the IDE
        </h2>
        <p className="typography-body text-(--color-text) ml-12 mt-10 tracking-[1.5px]">
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
