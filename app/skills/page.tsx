import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ProgressBar } from '@/components/ui/progress-bar';
import _ from 'lodash';
import { action } from './actions/get-skills-action';

export default async function SkillsPage() {
  const skills = await action();

  const groupedSkills = _.groupBy(
    skills,
    (skill) => skill.technology.category.name
  );

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {Object.keys(groupedSkills).map((categoryName) => {
        const skills = groupedSkills[categoryName];

        return (
          <Card key={categoryName}>
            <CardHeader>
              <CardTitle>{categoryName}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {_.orderBy(skills, 'technology.name').map((skill) => (
                  <li key={skill.id}>
                    <div className='mb-1 flex items-center justify-between'>
                      <span className='text-sm font-medium'>
                        {skill.technology.name}
                      </span>
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
        );
      })}
    </div>
  );
}
