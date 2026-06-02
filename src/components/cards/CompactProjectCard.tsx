import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

interface CompactProjectCard {
  title: string;
  stack: string[];
  status: string;
  onClick: () => void;
}

const CompactProjectCard = ({
  title,
  stack,
  status,
  onClick,
}: CompactProjectCard) => {
  const [isHovered, setIsHovered] = useState(false);

  const accent = (() => {
    switch (status) {
      case 'Completed':
        return '(--accent-3)';

      case 'Active Development':
        return '(--accent-5)';

      case 'Experimental':
        return '(--accent-4)';

      case 'Prototype':
        return '(--accent-2)';

      default:
        return 'var(--color-text)';
    }
  })();

  const verifiedTitle = (() => {
    if (title.length > 20) {
      return title.slice(0, 20) + '...';
    }
    return title;
  })();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="flex flex-col gap-6 border bg-(--color-card-bg) text-(--color-text) hover:cursor-pointer rounded-lg p-6 transition-all duration-450 ease-in-out"
      style={{
        border: isHovered ? `1px solid var${accent}` : '1px solid black',

        boxShadow: isHovered
          ? `
        0 0 12px var${accent},
        0 0 28px var${accent}
      `
          : '',
      }}
    >
      <p className="typography-large typography-strong">{verifiedTitle}</p>
      <div className="flex gap-3 items-center justify-center typography-bodt">
        {stack.map((item, index) => (
          <Fragment key={item}>
            <p>{item}</p>

            {index < stack.length - 1 && <span>•</span>}
          </Fragment>
        ))}
      </div>
      <p className="text-center" style={{ color: `var${accent}` }}>
        {status}
      </p>
    </div>
  );
};

export default CompactProjectCard;
