import type { StatCardProps } from '../../data/experience';

const StatCard = ({ stat, caption, accent }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-(--color-card-bg) w-26 p-2 font-(--font-primary) border border-black border-solid">
      <p className="text-4xl font-bold text-(--color-text)">{stat}</p>
      <p className={`text-lg text-center text-balance text-${accent}`}>
        {caption}
      </p>
    </div>
  );
};

export default StatCard;
