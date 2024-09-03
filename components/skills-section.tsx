import { skillCategories } from '@/lib/skills-data';

export const SkillsSection = () => {
  return (
    <section>
      <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
        Skills
      </h2>
      {skillCategories.map((category) => (
        <div key={category.name} className='mb-4'>
          <h3 className='mb-2 font-semibold'>{category.name}</h3>
          <div className='grid grid-cols-2 gap-2'>
            {category.skills.map((skill) => (
              <div key={skill.name} className='flex items-center'>
                <span className='mr-2'>{skill.name}</span>
                <div className='h-2 w-24 rounded-full bg-gray-200'>
                  <div
                    className='h-2 rounded-full bg-blue-600'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
