import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import wiseioIcon from '@/assets/wiseio-icon.png';

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>About Dan Wise</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='space-y-6 md:col-span-2'>
          <Card>
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
              <CardDescription>A brief introduction</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                I&apos;m Dan Wise, a Senior Solutions Architect and Engineering
                Manager based in Portland, Oregon. With a rich background in the
                hospitality and information technology sectors, I specialize in
                developing scalable, user-centric software solutions and leading
                diverse teams to success. My expertise spans product management,
                strategic planning, and full-stack development, with a
                particular focus on AWS technologies and serverless
                architectures.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Journey</CardTitle>
              <CardDescription>Key roles and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
                <li>
                  Currently serving as Senior Engineering Manager at Best
                  Western® Hotels &amp; Resorts, leading critical technology
                  initiatives and driving significant cost savings.
                </li>
                <li>
                  Founded and led Wise Revenue Management, delivering
                  best-in-class solutions for the hospitality industry.
                </li>
                <li>
                  Co-founded Revcaster, a successful B2B SaaS venture that
                  became a market leader in hotel rate shopping tools.
                </li>
                <li>
                  Achieved recognition as one of the &quot;Top 25: Extraordinary
                  Minds in Hospitality Sales, Marketing, Revenue
                  Optimization&quot;.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Expertise</CardTitle>
              <CardDescription>Skills and technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='mb-4 flex flex-wrap gap-2'>
                <Badge variant='secondary'>AWS</Badge>
                <Badge variant='secondary'>Serverless Architecture</Badge>
                <Badge variant='secondary'>GraphQL</Badge>
                <Badge variant='secondary'>React</Badge>
                <Badge variant='secondary'>Ruby on Rails</Badge>
                <Badge variant='secondary'>PostgreSQL</Badge>
                <Badge variant='secondary'>JavaScript</Badge>
                <Badge variant='secondary'>API Development</Badge>
                <Badge variant='secondary'>UI/UX Design</Badge>
              </div>
              <p className='text-muted-foreground'>
                My technical skills are complemented by strong leadership
                abilities, allowing me to effectively manage teams and drive
                innovation in complex technical environments.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='md:col-span-1'>
          <Card>
            <CardHeader>
              <CardTitle>Dan Wise</CardTitle>
              <CardDescription>
                Senior Solutions Architect &amp; Engineering Manager
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col items-center'>
              <div className='relative mb-4 h-48 w-48 overflow-hidden rounded-full'>
                <Image src={wiseioIcon} alt='Dan Wise Logo' />
              </div>
              <div className='text-center'>
                <p className='mb-2 text-muted-foreground'>
                  Based in Portland, Oregon
                </p>
                <p className='mb-4 text-muted-foreground'>
                  Driving innovation in hospitality tech
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  <Badge>AWS Certified</Badge>
                  <Badge>MBA</Badge>
                  <Badge>B.S. in Business Management</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='mt-6'>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2 text-muted-foreground'>
                <li>
                  MBA, University of Oregon - Charles H. Lundquist College of
                  Business (2009 - 2011)
                </li>
                <li>
                  B.S. in Business Management, Arizona State University - W. P.
                  Carey School of Business (2001 - 2004)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
