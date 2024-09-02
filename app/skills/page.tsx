import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ProgressBar } from '@/components/ui/progress-bar';
import { skillCategories } from '@/lib/skills-data';

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
