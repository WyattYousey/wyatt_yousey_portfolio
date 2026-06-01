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
      'Full-stack weather-driven wardrobe application with authentication, API integrations, and persistent data storage.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: 'Completed',
    featured: false,
    img: wtwrImg,
  },

  {
    id: 'ai-regression-inspector',
    title: 'AI Frontend Regression Inspector',
    description:
      'Experimental tool leveraging Gemini API image analysis to identify potential visual regressions in UI workflows.',
    stack: ['React', 'JavaScript', 'Gemini API'],
    status: 'Experimental',
    featured: false,
    img: afriImg,
  },

  {
    id: 'rich-text-editor',
    title: 'Rich Text Editor',
    description:
      'Experimental editor focused on advanced state management and extensibility using Slate.js.',
    stack: ['TypeScript', 'Slate', 'TailwindCSS', 'Zustand'],
    status: 'Experimental',
    featured: false,
    img: rteImg,
  },

  {
    id: 'asteroids-engine',
    title: 'Asteroids Engine',
    description:
      'Modular browser-based game engine emphasizing maintainable architecture and reusable systems.',
    stack: ['JavaScript', 'Game Architecture'],
    status: 'Prototype',
    featured: false,
    img: asteroidsImg,
  },

  {
    id: 'tetris',
    title: 'Tetris',
    description:
      'A foundational JavaScript project focused on game loops, state management, and collision detection.',
    stack: ['JavaScript', 'DOM Manipulation'],
    status: 'Completed',
    featured: false,
    img: tetrisImg,
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
