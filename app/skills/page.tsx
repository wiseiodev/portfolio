import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { ProgressBar } from '@/components/ui/progress-bar';

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Apollo Client', level: 85 },
      { name: 'Data Grids', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Tanstack Query (fka React Query)', level: 75 },
      { name: 'TypeScript', level: 80 }
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Apollo Server', level: 80 },
      { name: 'GraphQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'Node.js', level: 85 },
      { name: 'Postgres', level: 90 },
      { name: 'REST APIs', level: 90 },
      { name: 'Redis', level: 75 },
      { name: 'Ruby on Rails', level: 85 },
      { name: 'SQL', level: 70 },
      { name: 'Serverless Infrastructure', level: 90 }
    ]
  },
  {
    name: 'DevOps & Cloud Providers',
    skills: [
      { name: 'AWS CDK', level: 90 },
      { name: 'AWS Codepipelines', level: 80 },
      { name: 'AWS', level: 99 },
      { name: 'Azure', level: 60 },
      { name: 'Git', level: 90 },
      { name: 'Github Actions', level: 65 },
      { name: 'SST', level: 80 },
      { name: 'Vercel', level: 75 }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>My Skills</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {skillCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className='mb-1 flex items-center justify-between'>
                      <span className='text-sm font-medium'>{skill.name}</span>
                      <span className='text-sm font-medium text-muted-foreground'>
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar value={skill.level} className='h-2' />
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
