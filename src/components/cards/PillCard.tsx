import type { CurrentlyExploringItems } from '../../data/experience';

const PillCard = ({ item, accent }: CurrentlyExploringItems) => {
  return (
      <div
          style={{ border: `1px solid var${accent}`}}
      className='flex items-center justify-center rounded-4xl bg-(--color-card-bg) py-4 w-65'
    >
      <p className='text-(--color-text) text-lg font-bold'>{item}</p>
    </div>
  );
};

export default PillCard;
