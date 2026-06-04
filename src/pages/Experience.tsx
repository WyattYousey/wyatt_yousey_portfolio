import { Fragment } from 'react/jsx-runtime';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { currentlyExploringItems, stats } from '../data/experience';
import { timeline } from '../data/experience';
import StatCard from '../components/cards/StatCard';
import TimelineCard from '../components/cards/TimelineCard';
import PillCard from '../components/cards/PillCard';
import { motion } from 'framer-motion';
import { screenBreakMap } from '../data/screenBreaks';

const Experience = () => {
  const screenWidth = window.innerWidth;
  return (
    <div className={`p-6 ${screenWidth < screenBreakMap.largePhone ? 'mt-20' : 'mt-5'}`}>
      <div>
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          Experience Stats
        </h2>
        <div className={`${ screenWidth < screenBreakMap.largePhone ? "grid grid-cols-2 gap-2 place-items-center" : 'flex gap-15 items-center justify-center'} mt-5`}>
          {stats.map((stat) => (
            <StatCard key={stat.caption} {...stat} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="typography-heading text-(--color-text) ml-10 mt-5">
          Experience Timeline
        </h3>
        <div className={`flex ${screenWidth < screenBreakMap.smallDesktop ? 'flex-col' : ''} gap-10 items-center justify-center mt-15`}>
          {timeline.map((card, index) => (
            <Fragment key={card.title}>
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.25,
                  duration: 0.8,
                  ease: [0.39, 1.91, 0.87, -0.09],
                }}
              >
                <TimelineCard {...card} />
              </motion.div>

              {index < timeline.length - 1 && (
                screenWidth < screenBreakMap.smallDesktop ? <ArrowDown size={50} className="text-(--color-button-bg)" /> : <ArrowRight size={150} className="text-(--color-button-bg)" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h4 className="typography-heading text-(--color-text) ml-10 mt-10">
          Currently Exploring
        </h4>
        <div
          className={`grid ${screenWidth < screenBreakMap.largePhone ? 'grid-cols-1' : screenWidth < screenBreakMap.mediumDesktop ? 'grid-cols-2' : 'grid-cols-4'} place-items-center mt-10 gap-8`}
        >
          {currentlyExploringItems.map((item) => (
            <Fragment key={item.item}>
              <PillCard {...item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
