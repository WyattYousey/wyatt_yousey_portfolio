export interface StatCardProps {
  stat: string;
  caption: string;
  accent: string;
}

export const stats: StatCardProps[] = [
  {
    stat: '2+',
    caption: 'Years Coding',
    accent: '(--accent-1)',
  },
  {
    stat: '4+',
    caption: 'Projects Built',
    accent: '(--accent-2)',
  },
  {
    stat: '20+',
    caption: 'Courses Completed',
    accent: '(--accent-3)',
  },
  {
    stat: '77+',
    caption: 'DSA Problems',
    accent: '(--accent-4)',
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  accent: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2023',
    title: 'Manufacturing • Welding • Quality Control',
    description:
      'Developed strong attention to detail, accountability, and process-oriented problem solving while working in manufacturing environments focused on precision and consistency.',
    accent: '(--accent-1)',
  },

  {
    year: '2024',
    title: 'Self-Taught Software Engineering',
    description:
      'Began independently studying programming fundamentals, software development, and application architecture through hands-on projects and consistent self-driven learning.',
    accent: '(--accent-2)',
  },

  {
    year: '2025-2026',
    title: 'TripleTen Software Engineering Program',
    description:
      'Completed an intensive software engineering curriculum focused on full-stack application development, collaborative workflows, APIs, databases, and scalable modern web technologies.',
    accent: '(--accent-3)',
  },

  {
    year: 'Ongoing',
    title: 'Continuing Technical Development',
    description:
      'Continued expanding my technical foundation through advanced coursework, algorithm practice, and project-based learning across frontend, backend, and systems-focused development.',
    accent: '(--accent-4)',
  },
];

export interface CurrentlyExploringItems {
  item: string;
  accent: string;
}

export const currentlyExploringItems: CurrentlyExploringItems[] = [
  {
    item: 'System Design',
    accent: '(--accent-1)',
  },
  {
    item: 'Java Backend Development',
    accent: '(--accent-2)',
  },
  {
    item: 'Advanced React Patterns',
    accent: '(--accent-3)',
  },
  {
    item: 'AI Automation Workflows',
    accent: '(--accent-4)',
  },
  {
    item: 'Performance Optimization',
    accent: '(--accent-1)',
  },
  {
    item: 'Database Optimization',
    accent: '(--accent-2)',
  },
  {
    item: 'Golang Backend Development',
    accent: '(--accent-3)',
  },
  {
    item: 'API Design & Integration',
    accent: '(--accent-4)',
  },
];
