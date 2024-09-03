import Loading from './loading';
import { Suspense } from 'react';

type SkillsLayoutProps = {
  children: React.ReactNode;
};

export default async function SkillsLayout({ children }: SkillsLayoutProps) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>My Skills</h1>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
