import { NavLink, useLocation } from 'react-router-dom';
import hero from '../../assets/hero-headshot.jpg';
import { screenBreakMap } from '../../data/screenBreaks';

const Navbar = () => {
  const screenWidth = window.innerWidth;
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
    <div
      className={`${screenWidth < screenBreakMap.largeTablet ? 'h-35 p-4 items-start' : 'h-20 p-2 items-end'} absolute z-60 w-full top-0 flex justify-between bg-(--color-button-bg) text-(--color-text)`}
    >
      <NavLink to="/" className="flex items-center gap-3">
        <div className="h-12 w-10 rounded-full overflow-hidden">
          <img
            src={hero}
            alt="Man Smiling looking up at camera from creek bank"
          />
        </div>
        {screenWidth < screenBreakMap.largeTablet ? (
          <div>
            <h1 className="text-4xl">Wyatt Yousey</h1>
            <span
              style={{ color: titleColor }}
              className="text-sm font-light transition-colors duration-450 ease-in-out"
            >
              Software Engineer
            </span>
          </div>
        ) : (
          <>
            <h1 className="text-4xl">Wyatt Yousey</h1>
            <span
              style={{ color: titleColor }}
              className="text-sm pt-5 font-light transition-colors duration-450 ease-in-out"
            >
              Software Engineer
            </span>
          </>
        )}
      </NavLink>
      <div
        className={`flex ${screenWidth < screenBreakMap.largeTablet ? 'flex-col gap-0' : 'gap-7 pr-5'} text-lg items-end font-bold`}
      >
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
