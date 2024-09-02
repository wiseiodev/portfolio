import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';

export const ProjectSkeleton = () => (
  <Card className='flex flex-col'>
    <CardHeader>
      <CardTitle className='flex items-center justify-between'>
        <Skeleton className='h-6 w-3/4 animate-shimmer' />
        <div className='flex flex-row space-x-2'>
          <Skeleton className='h-4 w-4 animate-shimmer rounded-full' />
          <Skeleton className='h-4 w-4 animate-shimmer rounded-full' />
        </div>
      </CardTitle>
      <CardDescription>
        <Skeleton className='h-4 w-full animate-shimmer' />
      </CardDescription>
    </CardHeader>
    <CardContent className='flex-grow'>
      <h3 className='mb-2 font-semibold'>Key Achievements:</h3>
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
      <div>
        <h3 className='mb-2 font-semibold'>Technologies Used:</h3>
        <div className='flex flex-wrap gap-2'>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className='h-6 w-16 animate-shimmer' />
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);
