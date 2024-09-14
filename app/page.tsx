import { ArrowRight, Code, Server, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import logo from '@/assets/wiseio-logo.png';

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: 'Dan Wise - Home',
  description:
    'Innovative solutions in hospitality technology, serverless architecture, and cloud computing.'
};

export default function Home() {
  return (
    <div className='container mx-auto flex flex-col items-center px-4 py-12'>
      <Image
        priority
        src={logo}
        alt='Wise IO Logo'
        width={300}
        height={100}
        className='mb-8'
      />
      <h1 className='mb-4 text-center text-4xl font-bold'>
        Welcome to DanWise.Dev
      </h1>
      <p className='mb-8 max-w-2xl text-center text-xl text-muted-foreground'>
        Innovative solutions in hospitality technology, serverless architecture,
        and cloud computing.
      </p>

      <div className='mb-12 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3'>
        <Card>
          <CardContent className='flex flex-col items-center p-6'>
            <Server className='mb-4 h-12 w-12 text-primary' />
            <h2 className='mb-2 text-xl font-semibold'>Cloud Expertise</h2>
            <p className='text-center text-muted-foreground'>
              Specializing in AWS and serverless architectures
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex flex-col items-center p-6'>
            <Code className='mb-4 h-12 w-12 text-primary' />
            <h2 className='mb-2 text-xl font-semibold'>
              Full-Stack Development
            </h2>
            <p className='text-center text-muted-foreground'>
              Building scalable solutions with modern technologies
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex flex-col items-center p-6'>
            <Users className='mb-4 h-12 w-12 text-primary' />
            <h2 className='mb-2 text-xl font-semibold'>Leadership</h2>
            <p className='text-center text-muted-foreground'>
              Guiding teams to deliver exceptional results
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='mb-8 flex flex-wrap justify-center gap-2'>
        <Badge variant='secondary'>AWS</Badge>
        <Badge variant='secondary'>Serverless</Badge>
        <Badge variant='secondary'>React</Badge>
        <Badge variant='secondary'>Node.js</Badge>
        <Badge variant='secondary'>GraphQL</Badge>
        <Badge variant='secondary'>PostgreSQL</Badge>
      </div>

      <Button asChild size='lg'>
        <Link href='/projects'>
          Explore My Projects <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
      </Button>
    </div>
  );
}
