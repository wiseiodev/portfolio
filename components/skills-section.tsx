import { skillCategories } from '@/lib/skills-data';

export const SkillsSection = () => {
  return (
    <section>
      <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
        Skills
      </h2>
      <div className='grid gap-6 md:grid-cols-4'>
        {skillCategories.map((category, index) => (
          <div key={category.name} className=''>
            <h3 className='text-md mb-2 font-semibold'>{category.name}</h3>
            <ul className='list-inside list-disc pl-4'>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
