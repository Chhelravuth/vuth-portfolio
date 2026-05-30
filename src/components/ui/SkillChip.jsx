const categoryClass = {
  design: 'chip-design',
  code: 'chip-code',
  framework: 'chip-framework',
};

export default function SkillChip({ name, category }) {
  return (
    <span className={`chip hover:-translate-y-0.5 hover:shadow-md ${categoryClass[category] ?? ''}`}>
      {name}
    </span>
  );
}
