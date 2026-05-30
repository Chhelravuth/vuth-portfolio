export const profile = {
  name: 'Chhel Ravuth',
  age: 21,
  role: 'Web Designer & Full-Stack Developer',
  tagline:
    'I craft pixel-perfect interfaces and robust full-stack applications — blending design tools with modern web technologies.',
  email: 'chhel.ravuth@email.com',
  location: 'Cambodia',
  availability: 'Open to freelance & full-time opportunities',
};

/** Rotating words in the hero (animated typewriter effect) */
export const animatedRoles = [
  'React Developer',
  'UI/UX Designer',
  'Full-Stack Engineer',
  'Motion & Brand Designer',
];

export const skillChips = [
  { name: 'Photoshop', category: 'design' },
  { name: 'After Effects', category: 'design' },
  { name: 'Illustrator', category: 'design' },
  { name: 'HTML', category: 'code' },
  { name: 'CSS', category: 'code' },
  { name: 'JavaScript', category: 'code' },
  { name: 'PHP', category: 'code' },
  { name: 'Tailwind CSS', category: 'code' },
  { name: 'C#', category: 'code' },
  { name: 'C++', category: 'code' },
  { name: 'Vue.js', category: 'framework' },
  { name: 'React.js', category: 'framework' },
  { name: 'FastAPI', category: 'framework' },
];

export const stats = [
  { label: 'Age', value: '21' },
  { label: 'Design Tools', value: '3+' },
  { label: 'Languages', value: '7+' },
  { label: 'Frameworks', value: '3' },
];

/** Static seed data — replace with GET /api/projects later */
export const seedProjects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'web',
    description: 'React + Tailwind admin with dynamic product management.',
    tags: ['React', 'Tailwind', 'API'],
    image: null,
  },
  {
    id: 2,
    title: 'Brand Identity — Café Noir',
    category: 'design',
    description: 'Logo system, menu design, and social templates in Illustrator.',
    tags: ['Illustrator', 'Photoshop'],
    image: null,
  },
  {
    id: 3,
    title: 'Motion Reel Intro',
    category: 'design',
    description: '15s cinematic opener built in After Effects.',
    tags: ['After Effects'],
    image: null,
  },
  {
    id: 4,
    title: 'Portfolio API',
    category: 'web',
    description: 'FastAPI backend for projects, bio, and contact submissions.',
    tags: ['FastAPI', 'PostgreSQL'],
    image: null,
  },
];
