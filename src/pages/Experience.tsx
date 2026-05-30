import { Fragment } from 'react/jsx-runtime';
import { ArrowRight } from 'lucide-react';
import { currentlyExploringItems, stats } from '../data/experience';
import { timeline } from '../data/experience';
import StatCard from '../components/cards/StatCard';
import TimelineCard from '../components/cards/TimelineCard';
import PillCard from '../components/cards/PillCard';

const Experience = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-(--color-text) ml-10 mt-10">
          Experience Stats
        </h2>
        <div className="flex gap-15 items-center justify-center mt-5">
          {stats.map((stat) => (
            <StatCard key={stat.caption} {...stat} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-(--color-text) ml-10 mt-10">
          Experience Timeline
        </h3>
        <div className="flex gap-10 items-center justify-center mt-5">
          {timeline.map((card, index) => (
            <Fragment key={card.title}>
              <TimelineCard {...card} />

              {index < stats.length - 1 && (
                <ArrowRight size={40} className="shrink-0 text-(--color-button-bg)" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-3xl text-(--color-text) ml-10 mt-10">
          Currently Exploring
        </h4>
        <div className="grid grid-cols-4 place-items-center mt-10 gap-8">
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
