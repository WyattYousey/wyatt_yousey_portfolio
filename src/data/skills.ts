import javascriptIcon from '../assets/javascript-logo.svg';
import reactIcon from '../assets/react-logo.svg';
import nodeIcon from '../assets/node-js-logo.svg';
import javaIcon from '../assets/java-logo.svg';
import pythonIcon from '../assets/python-logo.svg';
import mongoIcon from '../assets/mongodb-logo.svg';
import gitIcon from '../assets/git-logo.svg';

export interface Skill {
  icon: string;
  title: string;
}

export const skills: Skill[] = [
  {
    icon: javascriptIcon,
    title: 'JavaScript',
  },
  {
    icon: reactIcon,
    title: 'React',
  },
  {
    icon: nodeIcon,
    title: 'Node.js',
  },
  {
    icon: javaIcon,
    title: 'Java',
  },
  {
    icon: pythonIcon,
    title: 'Python',
  },
  {
    icon: mongoIcon,
    title: 'MongoDB',
  },
  {
    icon: gitIcon,
    title: 'Git',
  },
];

export interface CurrentWorkflow {
    item: string;
    accent: string;
}

export const currentWorkflow: CurrentWorkflow[] = [
    {
        item: 'Research',
        accent: '(--accent-1)'
    },
    {
        item: 'Plan',
        accent: '(--accent-2)'
    },
    {
        item: 'Build',
        accent: '(--accent-3)'
    },
    {
        item: 'Refine',
        accent: '(--accent-4)'
    },
    {
        item: 'Optimize',
        accent: '(--accent-5)'
    }
]