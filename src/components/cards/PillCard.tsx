import type { ProjectTypeData } from '../../data/projects';

const PillCard = ({ item, accent, type }: ProjectTypeData) => {
  interface PillStyle {
    border?: string;
    color?: string;
  }

  const pillStyle: PillStyle =
    type === 'word-accent'
      ? { color: `var${accent}`, border: '1px solid black' }
      : { color: 'var(--color-text)', border: `1px solid var${accent}` };

  return (
    <div
      style={pillStyle}
      className="flex items-center justify-center rounded-4xl bg-(--color-card-bg) py-4 w-65"
    >
      <p className="typography-body typography-strong">{item}</p>
    </div>
  );
};

export default PillCard;
