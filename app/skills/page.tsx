import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ProgressBar } from '@/components/ui/progress-bar';

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 65 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>My Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skillCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>
                My proficiency in various {category.name.toLowerCase()} skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className='flex justify-between items-center mb-1'>
                      <span className='text-sm font-medium'>{skill.name}</span>
                      <span className='text-sm font-medium text-muted-foreground'>
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar
                      value={skill.level}
                      className='h-2'
                    />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
