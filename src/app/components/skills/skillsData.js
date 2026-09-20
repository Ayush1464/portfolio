import {
  Code2,
  FileCode2,
  Cpu,
  Palette,
  Globe,
  Layers,
  GitBranch,
  Wrench,
  Database,
  Lock,
  Server,
  Terminal,
  Layout,
  CheckCircle2,
} from 'lucide-react';

export const skillsCategories = [
  {
    id: 'frontend',
    tag: '01 / FRONTEND',
    title: 'User Interface & Client Architecture',
    skills: [
      {
        name: 'React',
        icon: Code2,
        level: 'core',
        description: 'Component-driven UI development, custom hooks, and modular architecture.',
      },
      {
        name: 'JavaScript / ES6+',
        icon: FileCode2,
        level: 'core',
        description: 'Modern asynchronous JS, closure patterns, DOM optimization, and ESNext primitives.',
      },
      {
        name: 'TypeScript',
        icon: Cpu,
        level: 'core',
        description: 'Strict static typing, interfaces, generic abstractions, and type-safe UI workflows.',
      },
      {
        name: 'Tailwind CSS',
        icon: Palette,
        level: 'core',
        description: 'Utility-first responsive design, custom design tokens, and glassmorphic styling.',
      },
      {
        name: 'HTML5 / CSS3',
        icon: Globe,
        level: 'supporting',
        description: 'Semantic document structure, flexbox/grid layouts, animations, and web standards.',
      },
      {
        name: 'Next.js',
        icon: Layers,
        level: 'supporting',
        description: 'Server-side rendering, routing, static generation, and React ecosystem tools.',
      },
    ],
  },
  {
    id: 'tools',
    tag: '02 / TOOLS & FRAMEWORKS',
    title: 'State, Tooling & Quality',
    skills: [
      {
        name: 'Git / GitHub',
        icon: GitBranch,
        level: 'core',
        description: 'Version control workflows, branching strategies, code reviews, and PR management.',
      },
      {
        name: 'Webpack / Vite',
        icon: Wrench,
        level: 'supporting',
        description: 'Fast modern dev servers, bundle optimization, HMR, and asset pipelines.',
      },
      {
        name: 'Redux / Zustand',
        icon: Layers,
        level: 'supporting',
        description: 'Predictable centralized state management and reactive data stores.',
      },
      {
        name: 'React Query',
        icon: Globe,
        level: 'supporting',
        description: 'Server state synchronization, caching, and optimistic query mutations.',
      },
      {
        name: 'Figma',
        icon: Layout,
        level: 'supporting',
        description: 'Design file inspection, component translation, and pixel-perfect UI execution.',
      },
      {
        name: 'Jest / Testing Library',
        icon: CheckCircle2,
        level: 'supporting',
        description: 'Component unit testing, user interaction assertions, and quality assurance.',
      },
    ],
  },
  {
    id: 'backend',
    tag: '03 / BACKEND & DATA',
    title: 'API Integration & Systems',
    skills: [
      {
        name: 'REST APIs',
        icon: Server,
        level: 'core',
        description: 'RESTful endpoint integration, payload serialization, and robust error handling.',
      },
      {
        name: 'JWT Authentication',
        icon: Lock,
        level: 'supporting',
        description: 'Token-based auth flows, session state preservation, and secure request headers.',
      },
      {
        name: 'Java',
        icon: Terminal,
        level: 'supporting',
        description: 'Object-oriented programming fundamentals and backend logic principles.',
      },
      {
        name: 'Spring Boot',
        icon: Server,
        level: 'supporting',
        description: 'Backend microservice basics, REST controllers, and application configuration.',
      },
      {
        name: 'Database Basics',
        icon: Database,
        level: 'supporting',
        description: 'Relational data models, SQL queries, and backend schema fundamentals.',
      },
    ],
  },
];
