import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';

const titles = [
  'Frontend Development',
  'Language',
  'Backend Development',
  'Database',
  'DevOps & Cloud Providers',
  'AI/ML/Data Engineer'
];

export const SkillSkeleton = () => (
  <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
    {titles.map((categoryName) => (
      <Card key={categoryName} className='flex flex-col'>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            {categoryName}
          </CardTitle>
        </CardHeader>
        <CardContent className='flex-grow'>
          <ul className='mb-4 list-inside list-disc space-y-1'>
            <li>
              <Skeleton className='h-4 w-full animate-shimmer' />
            </li>
            <li>
              <Skeleton className='h-4 w-11/12 animate-shimmer' />
            </li>
            <li>
              <Skeleton className='h-4 w-10/12 animate-shimmer' />
            </li>
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
);
