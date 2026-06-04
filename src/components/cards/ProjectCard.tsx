import { Fragment } from 'react/jsx-runtime';
import type { Project } from '../../data/projects';
import Button from '../ui/Button';
import { screenBreakMap } from '../../data/screenBreaks';

const ProjectCard = ({
  title,
  description,
  img,
  stack,
  status,
  demo,
  github,
}: Project) => {
  const accent = (() => {
    switch (status) {
      case 'Completed':
        return 'var(--accent-3)';

      case 'Active Development':
        return 'var(--accent-5)';

      case 'Experimental':
        return 'var(--accent-4)';

      case 'Prototype':
        return 'var(--accent-2)';

      default:
        return 'var(--color-text)';
    }
  })();

  const screenWidth = window.innerWidth;
  return (
    <div className={`flex ${screenWidth < screenBreakMap.largeTablet ? 'flex-col w-fit' : ''} gap-8 bg-(--color-card-bg) p-4 rounded-xl border-black w-200 text-(--color-text) m-auto mt-5`}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-2 items-center">
          <span
            style={{
              backgroundColor: `${accent}`,
            }}
            className={'inline-block rounded-full h-6 w-6'}
          ></span>
          <p className="typography-large typography-strong">{title}</p>
        </div>
        <div className="flex gap-3 items-center">
          {stack.map((item, index) => (
            <Fragment key={item}>
              <p>{item}</p>

              {index < stack.length - 1 && <span>•</span>}
            </Fragment>
          ))}
        </div>
        <p
          style={{
            color: accent,
          }}
        >
          {status}
        </p>
        <img className="w-125" src={img} alt="Preview image for projects" />
      </div>
      <div className="flex flex-col justify-evenly">
        <p className="max-w-120">{description}</p>
        <div className="flex gap-15 justify-center">
          {github && <Button text={'GitHub'} link={github} />}
          {demo && <Button text={'Live Demo'} link={demo} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
