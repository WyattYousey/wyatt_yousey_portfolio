import type { Skill } from '../../data/skills';

const SkillCard = ({ icon, title }: Skill) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-(--color-card-bg) p-4 rounded-lg border w-35">
      <img src={icon} alt={`${title} icon`} className="h-18 w-18" />

      <span className="typography-large text-(--color-text)">{title}</span>
    </div>
  );
};

export default SkillCard;
