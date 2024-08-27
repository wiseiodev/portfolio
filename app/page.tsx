import { ArrowRight, Code, Server, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/wiseio-logo.png';

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-12 flex flex-col items-center'>
      <Image
        priority
        src={logo}
        alt='Wise IO Logo'
        width={300}
        height={100}
        className='mb-8'
      />
      <h1 className='text-4xl font-bold text-center mb-4'>
        Welcome to DanWise.Dev
      </h1>
      <p className='text-xl text-center text-muted-foreground mb-8 max-w-2xl'>
        Innovative solutions in hospitality technology, serverless architecture,
        and cloud computing.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl'>
        <Card>
          <CardContent className='flex flex-col items-center p-6'>
            <Server className='h-12 w-12 text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Cloud Expertise</h2>
            <p className='text-center text-muted-foreground'>
              Specializing in AWS and serverless architectures
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex flex-col items-center p-6'>
            <Code className='h-12 w-12 text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>
              Full-Stack Development
            </h2>
            <p className='text-center text-muted-foreground'>
              Building scalable solutions with modern technologies
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex flex-col items-center p-6'>
            <Users className='h-12 w-12 text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Leadership</h2>
            <p className='text-center text-muted-foreground'>
              Guiding teams to deliver exceptional results
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='flex flex-wrap justify-center gap-2 mb-8'>
        <Badge variant='secondary'>AWS</Badge>
        <Badge variant='secondary'>Serverless</Badge>
        <Badge variant='secondary'>React</Badge>
        <Badge variant='secondary'>Node.js</Badge>
        <Badge variant='secondary'>GraphQL</Badge>
        <Badge variant='secondary'>PostgreSQL</Badge>
      </div>

      <Button
        asChild
        size='lg'>
        <Link href='/projects'>
          Explore My Projects <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
      </Button>
    </div>
  );
}
