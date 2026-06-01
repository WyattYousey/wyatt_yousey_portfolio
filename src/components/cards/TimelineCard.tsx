import type { TimelineItem } from '../../data/experience';

const TimelineCard = ({ year, title, description, accent }: TimelineItem) => {
  return (
    <div className="flex-col items-center justify-center rounded-xl bg-(--color-card-bg) p-4 border border-black border-solid font-(--font-primary) text-(--color-text)">
      <div className="flex items-center justify-start ml-2 mt-2 gap-2">
        <span
          style={{
            backgroundColor: `var${accent}`,
          }}
          className={`inline-block rounded-full h-4 w-4`}
        ></span>
        <p>{year}</p>
      </div>
      <p className='mt-4 text-center'>{title}</p>
      <p className='mt-6 ml-2'>{description}</p>
    </div>
  );
};

export default TimelineCard;
