export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: string;
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'wyattos',
    title: 'WyattOS',
    description:
      'Local automation orchestration system designed to execute modular workflows and streamline software operations through a centralized desktop environment.',
    stack: ['Java', 'Automation', 'System Design'],
    status: 'Active Development',
    featured: true,
  },

  {
    id: 'wtwr',
    title: 'WTWR',
    description:
      'Full-stack weather-driven wardrobe application with authentication, API integrations, and persistent data storage.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: 'Completed',
    featured: false,
  },

  {
    id: 'ai-regression-inspector',
    title: 'AI Frontend Regression Inspector',
    description:
      'Experimental tool leveraging Gemini API image analysis to identify potential visual regressions in UI workflows.',
    stack: ['React', 'JavaScript', 'Gemini API'],
    status: 'Experimental',
    featured: false,
  },

  {
    id: 'rich-text-editor',
    title: 'Rich Text Editor',
    description:
      'Experimental editor focused on advanced state management and extensibility using Slate.js.',
    stack: ['TypeScript', 'Slate', 'TailwindCSS', 'Zustand'],
    status: 'Experimental',
    featured: false,
  },

  {
    id: 'asteroids-engine',
    title: 'Asteroids Engine',
    description:
      'Modular browser-based game engine emphasizing maintainable architecture and reusable systems.',
    stack: ['JavaScript', 'Game Architecture'],
    status: 'Prototype',
    featured: false,
  },

  {
    id: 'tetris',
    title: 'Tetris',
    description:
      'A foundational JavaScript project focused on game loops, state management, and collision detection.',
    stack: ['JavaScript', 'DOM Manipulation'],
    status: 'Completed',
    featured: false,
  },
];

export interface ProjectTypeData {
  title: string;
  accent: string;
}

export const projectTypeData: ProjectTypeData[] = [
  {
    title: 'Full-Stack',
    accent: '(--accent-1)',
  },
  {
    title: 'Automation',
    accent: '(--accent-2)',
  },
  {
    title: 'Systems',
    accent: '(--accent-3)',
  },
];
