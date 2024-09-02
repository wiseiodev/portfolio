import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { action } from './actions/get-projects-action';

export default async function ProjectsPage() {
  const projects = await action();

  return (
    <>
      {projects.map((project, index) => (
        <Card key={index} className='flex flex-col'>
          <CardHeader>
            <CardTitle className='flex items-center justify-between'>
              {project.title}
              <div className='flex flex-row space-x-2'>
                {project.siteUrl ? (
                  <Link href={project.siteUrl} target='_blank' rel='noreferrer'>
                    <ExternalLink className='h-4 w-4 text-muted-foreground' />
                  </Link>
                ) : null}
                {project.repoUrl ? (
                  <Link href={project.repoUrl} target='_blank' rel='noreferrer'>
                    <Github className='h-4 w-4 text-muted-foreground' />
                  </Link>
                ) : null}
              </div>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className='flex-grow'>
            <h3 className='mb-2 font-semibold'>Key Achievements:</h3>
            <ul className='mb-4 list-inside list-disc space-y-1 text-muted-foreground'>
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            <div>
              <h3 className='mb-2 font-semibold'>Technologies Used:</h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <Badge key={tech.technologyId}>{tech.technology?.name}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
