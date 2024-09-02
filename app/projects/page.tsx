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

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'Designed and developed a modern, responsive portfolio website to showcase professional experience and projects.',
    achievements: [
      'Implemented a sleek, user-friendly design using Next.js and Tailwind CSS',
      'Integrated dynamic content management for easy updates and maintenance',
      'Optimized performance and accessibility to ensure a great user experience across devices',
      'Implemented serverless functions for backend operations like contact form submission'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'AWS Lambda'
    ],
    repoUrl: 'https://github.com/wiseiodev/portfolio',
    siteUrl: 'https://danwise.dev'
  },
  {
    title: 'Mary Woodward PSO Dynamic Calendar Application',
    description:
      "Developed a modern, serverless calendar application for Mary Woodward Parent Support Organization (PSO) that transforms the school's public Google Calendar into an interactive, user-friendly interface for parents and staff.",
    achievements: [
      "Architected and implemented a serverless application using SST (Serverless Stack) and AWS services to fetch and process iCal data from the PSO's public Google Calendar",
      'Created a responsive, dynamic web interface that displays up-to-date school events in an easily digestible format',
      'Implemented a feature allowing users to download a PDF version of the calendar for offline access',
      'Designed the application to be embeddable within the existing PSO website, ensuring seamless integration'
    ],
    technologies: [
      'SST (Serverless Stack)',
      'AWS Lambda',
      'AWS CDK',
      'TypeScript',
      'React',
      'Node.js',
      'date-fns-tz',
      'iCal processing',
      'PDF generation'
    ],
    repoUrl: 'https://github.com/mwpso/calendar',
    siteUrl: 'https://marywoodwardpso.com/pso-event-calendar'
  },
  {
    title: 'Enterprise Application Serverless Migration',
    description:
      'Led the migration of a legacy application to a complete serverless architecture on AWS, significantly improving performance and reducing costs.',
    achievements: [
      'Migrated monolithic API to a GraphQL-based microservices architecture on AWS Lambda',
      'Implemented a modern React-based frontend hosted on AWS S3 and CloudFront',
      'Transitioned from traditional RDS to a serverless database solution',
      'Achieved 50% reduction in monthly infrastructure costs while improving application performance'
    ],
    technologies: [
      'AWS Lambda',
      'GraphQL',
      'Apollo Server',
      'React',
      'S3',
      'CloudFront',
      'RDS Serverless'
    ],
    repoUrl: null,
    siteUrl: null
  },
  {
    title: 'B2B SaaS Platform for Hospitality Industry',
    description:
      'Co-founded and developed a B2B SaaS solution that became a market leader in providing real-time market data for the hospitality sector.',
    achievements: [
      'Rapidly grew customer base to over 3,000 within the first month of launch',
      'Architected a scalable backend using AWS, Ruby on Rails, and PostgreSQL',
      'Developed innovative algorithms for real-time data analysis and reporting',
      'Successfully positioned the company for acquisition through consistent growth and market leadership'
    ],
    technologies: ['AWS', 'Ruby on Rails', 'PostgreSQL', 'SaaS'],
    repoUrl: null,
    siteUrl: null
  },
  {
    title: 'Data Centralization and Analytics Dashboard',
    description:
      'Designed and implemented a comprehensive dashboard application to centralize data from multiple sources and improve decision-making processes.',
    achievements: [
      'Developed an efficient web-crawler for automated data collection from various sources',
      'Implemented RESTful APIs to integrate data with internal tools and Excel',
      'Migrated from static Excel-based reporting to a dynamic, cloud-native application',
      'Significantly improved data consistency and accessibility across the organization'
    ],
    technologies: [
      'Ruby on Rails',
      'Sidekiq',
      'REST APIs',
      'AWS',
      'Excel Integration'
    ],
    repoUrl: null,
    siteUrl: null
  },
  {
    title: 'Multi-Tenant Serverless Database Architecture',
    description:
      'Architected and implemented a shared serverless database cluster to support multiple applications across different cloud accounts, optimizing resource utilization and cost efficiency.',
    achievements: [
      'Designed a scalable multi-tenant architecture supporting both production and non-production environments',
      'Consolidated multiple database instances into a single, efficient cluster',
      'Optimized high-traffic queries for improved performance across all tenants',
      'Achieved significant cost savings and performance improvements through resource sharing and optimization'
    ],
    technologies: [
      'AWS RDS Serverless',
      'PostgreSQL',
      'Multi-Account Architecture'
    ],
    repoUrl: null,
    siteUrl: null
  }
];

export default function ProjectsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>My Projects</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projects.map((project, index) => (
          <Card key={index} className='flex flex-col'>
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                {project.title}
                <div className='flex flex-row space-x-2'>
                  {project.siteUrl ? (
                    <Link
                      href={project.siteUrl}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <ExternalLink className='h-4 w-4 text-muted-foreground' />
                    </Link>
                  ) : null}
                  {project.repoUrl ? (
                    <Link
                      href={project.repoUrl}
                      target='_blank'
                      rel='noreferrer'
                    >
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
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant='secondary'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
