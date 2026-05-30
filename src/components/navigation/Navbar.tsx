import { Link } from 'react-router-dom';
import hero from '../../assets/hero-headshot.jpg';

const Navbar = () => {
  return (
    <div className="h-15 flex justify-between bg-(--color-button-bg) text-(--color-text) p-2 items-end">
      <Link to="/" className="flex items-end gap-3">
        <div className="h-12 w-10 rounded-full overflow-hidden">
          <img
            src={hero}
            alt="Man Smiling looking up at camera from creek bank"
          />
        </div>
        <h1 className="text-4xl">Wyatt Yousey</h1>
        <span className="text-sm font-light">Software Engineer</span>
      </Link>
      <div className="flex gap-7 text-lg pr-5 items-end font-bold">
        <Link className="text-(--accent-1)" to="/experience">
          Experience
        </Link>
        <Link className="text-(--accent-2)" to="/skills">
          Skills
        </Link>
        <Link className="text-(--accent-3)" to="/projects">
          Projects
        </Link>
        <Link className="text-(--accent-4)" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
