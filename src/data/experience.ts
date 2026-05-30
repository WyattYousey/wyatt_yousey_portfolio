export interface StatCard {
    stat: string;
    caption: string;
}

export const stats: StatCard[] = [
    {
        stat: '2+',
        caption: 'Years Coding'
    },
    {
        stat: '4+',
        caption: 'Projects Built'
    },
    {
        stat: '20+',
        caption: 'Courses Completed'
    },
    {
        stat: '77+',
        caption: 'DSA Problems'
    }
]

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Career Transition',
    description:
      'Began transition from welding and manufacturing into software engineering.',
  },

  {
    year: '2024',
    title: 'Self-Taught Development',
    description:
      'Spent roughly a year studying programming fundamentals and building projects independently.',
  },

  {
    year: '2025',
    title: 'TripleTen',
    description:
      'Enrolled in TripleTen Software Engineering program to deepen technical knowledge and industry readiness.',
  },

  {
    year: '2025',
    title: 'Frontend Masters',
    description: 'Completed Data Structures and Algorithms coursework.',
  },

  {
    year: '2026',
    title: '77+ Coding Challenges',
    description:
      'Solved over 77 LeetCode and NeetCode problems while strengthening problem-solving skills.',
  },
];
