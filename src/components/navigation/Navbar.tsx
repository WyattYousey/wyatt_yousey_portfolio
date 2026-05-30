import { NavLink, useLocation } from 'react-router-dom';
import hero from '../../assets/hero-headshot.jpg';

const Navbar = () => {
  const location = useLocation();

  const titleColorMap: Record<string, string> = {
    '/': 'var(--color-text)',
    '/experience': 'var(--accent-1)',
    '/skills': 'var(--accent-2)',
    '/projects': 'var(--accent-3)',
    '/contact': 'var(--accent-4)',
  };

  const titleColor = titleColorMap[location.pathname] ?? 'var(--color-text)';

  return (
    <div className="h-15 flex justify-between bg-(--color-button-bg) text-(--color-text) p-2 items-end">
      <NavLink to="/" className="flex items-end gap-3">
        <div className="h-12 w-10 rounded-full overflow-hidden">
          <img
            src={hero}
            alt="Man Smiling looking up at camera from creek bank"
          />
        </div>
        <h1 className="text-4xl">Wyatt Yousey</h1>
        <span
          style={{ color: titleColor }}
          className="text-sm font-light transition-colors duration-450 ease-in-out"
        >
          Software Engineer
        </span>
      </NavLink>
      <div className="flex gap-7 text-lg pr-5 items-end font-bold">
        <NavLink
          className={({ isActive }) =>
            `
                text-(--accent-1)
                ${isActive ? 'text-2xl text-shadow-(--accent-1-shadow)' : 'text-xl hover:text-2xl hover:text-shadow-(--accent-1-shadow)'}
                transition-all duration-450 ease-in-out
            `
          }
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `
                text-(--accent-2)
                ${isActive ? 'text-2xl text-shadow-(--accent-2-shadow)' : 'text-xl hover:text-2xl hover:text-shadow-(--accent-2-shadow)'}
                transition-all duration-450 ease-in-out
            `
          }
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `
                text-(--accent-3)
                ${isActive ? 'text-2xl text-shadow-(--accent-3-shadow)' : 'text-xl hover:text-2xl hover:text-shadow-(--accent-3-shadow)'}
                transition-all duration-450 ease-in-out
            `
          }
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `
                text-(--accent-4)
                ${isActive ? 'text-2xl text-shadow-(--accent-4-shadow)' : 'text-xl hover:text-2xl hover:text-shadow-(--accent-4-shadow)'}
                transition-all duration-450 ease-in-out
            `
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
