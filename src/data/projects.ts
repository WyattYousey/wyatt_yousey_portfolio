import featuredImg from '../assets/wyatt-os-media.png';
import wtwrImg from '../assets/wtwr-media.png';
import afriImg from '../assets/afri-media.png';
import tetrisImg from '../assets/tetris-media.png';
import asteroidsImg from '../assets/asteroids-media.png';
import rteImg from '../assets/rich-text-editor-media.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  featured: boolean;
  img: string;
  status: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'wyattos',
    title: 'WyattOS',
    description:
      'Local automation orchestration system designed to execute modular workflows, manage automated tasks, and streamline custom software operations through a centralized desktop environment. Built with Java and designed around scalability, modularity, and extensibility, WyattOS represents my interest in systems- focused development and workflow automation.The project emphasizes clean architecture, command execution, configurable modules, and a foundation that can continuously evolve into more advanced automation tooling.',
    stack: ['Java', 'Automation', 'System Design'],
    status: 'Active Development',
    featured: true,
    img: featuredImg,
    github: 'https://github.com/WyattYousey/wyattOS',
  },

  {
    id: 'wtwr',
    title: 'WTWR',
    description:
      'Built a full-stack weather-driven wardrobe recommendation platform that dynamically suggests outfits based on real-time weather conditions. Implemented secure authentication, RESTful API integration, and persistent user data storage using MongoDB. Focused on creating a seamless end-to-end user experience with responsive UI and reliable backend architecture.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: 'Completed',
    featured: false,
    img: wtwrImg,
    github: 'https://github.com/WyattYousey/se_project_react_WTWR',
    demo: 'https://whatstheweather.flowtemp.ro/',
  },

  {
    id: 'ai-regression-inspector',
    title: 'AI Frontend Regression Inspector',
    description:
      'Experimental tool that leverages the Gemini API to analyze UI screenshots and detect potential visual regressions across frontend workflows. Designed to explore AI-assisted quality assurance by automating visual comparison tasks typically done manually. Built as a proof-of-concept to test the intersection of computer vision and frontend development.',
    stack: ['React', 'JavaScript', 'Gemini API'],
    status: 'Experimental',
    featured: false,
    img: afriImg,
    github: 'https://github.com/WyattYousey/se_project_AFRI',
  },

  {
    id: 'rich-text-editor',
    title: 'Rich Text Editor',
    description:
      'Advanced rich text editor built to explore complex state management and extensible editor architecture using Slate.js. Focused on building a highly customizable editing experience with fine-grained control over formatting and document structure. Leveraged Zustand and TypeScript to manage scalable client-side state without a backend dependency.',
    stack: ['TypeScript', 'Slate', 'TailwindCSS', 'Zustand'],
    status: 'Experimental',
    featured: false,
    img: rteImg,
    github: 'https://github.com/WyattYousey/se_project_Glyph',
  },

  {
    id: 'asteroids-engine',
    title: 'Asteroids Engine',
    description:
      'Modular browser-based game engine designed with a strong emphasis on reusable systems and scalable architecture. Built core gameplay loops, entity management, and rendering systems with maintainability as the primary focus. Serves as an exploration into how game engine architecture translates into vanilla JavaScript environments.',
    stack: ['JavaScript', 'Game Architecture'],
    status: 'Prototype',
    featured: false,
    img: asteroidsImg,
    github: 'https://github.com/WyattYousey/asteroids_in_js',
  },

  {
    id: 'tetris',
    title: 'Tetris',
    description:
      'Rebuilt the classic Tetris game in JavaScript to deepen understanding of game loops, collision detection, and state-driven UI updates. Implemented core gameplay mechanics from scratch with a focus on clean logic separation and predictable state transitions. Used DOM manipulation and vanilla JavaScript to reinforce foundational frontend engineering concepts.',
    stack: ['JavaScript', 'DOM Manipulation'],
    status: 'Completed',
    featured: false,
    img: tetrisImg,
    github: 'https://github.com/WyattYousey/se_project_tetris_game',
    demo: 'https://WyattYousey.github.io/se_project_tetris_game',
  },
];

export interface ProjectTypeData {
  item: string;
  accent: string;
  type?: string;
}

export const projectTypeData: ProjectTypeData[] = [
  {
    item: 'Full-Stack',
    accent: '(--accent-1)',
    type: 'word-accent',
  },
  {
    item: 'Automation',
    accent: '(--accent-2)',
    type: 'word-accent',
  },
  {
    item: 'Systems',
    accent: '(--accent-3)',
    type: 'word-accent',
  },
];
