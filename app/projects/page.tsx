import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Best Western® Serverless Migration',
    description:
      'Led the migration of a legacy application from Elastic Beanstalk to a complete serverless architecture on AWS.',
    achievements: [
      'Migrated Ruby on Rails API to GraphQL Apollo Server API on AWS Lambda',
      'Moved React client application to S3/CloudFront',
      'Transitioned from standalone RDS Postgres to RDS Serverless cluster',
      'Improved application performance and reduced monthly costs by 50%',
    ],
    technologies: [
      'AWS Lambda',
      'GraphQL',
      'Apollo Server',
      'React',
      'S3',
      'CloudFront',
      'RDS Serverless',
    ],
  },
  {
    title: 'Revcaster - Hotel Rate Shopping Tool',
    description:
      'Co-founded and developed a B2B SaaS solution that became a market leader in hotel rate shopping tools.',
    achievements: [
      'Acquired over 3,000 customers within 30 days post-launch',
      'Developed a powerful rate shopping tool using AWS, Ruby on Rails, and PostgreSQL',
      'Established Revcaster as the go-to solution for real-time, actionable market data for hoteliers',
      'Positioned the company for a successful acquisition',
    ],
    technologies: ['AWS', 'Ruby on Rails', 'PostgreSQL', 'SaaS'],
  },
  {
    title: 'Best Western Dashboard Application',
    description:
      'Designed and implemented a comprehensive dashboard application for Best Western to centralize data and improve decision-making.',
    achievements: [
      'Developed a web-crawler using Ruby on Rails and Sidekiq for efficient data collection',
      'Implemented REST APIs to import clean data into internal tools and Excel',
      'Converted Excel-based dashboards to a cloud-native application hosted on AWS',
      'Enabled centralization of data and improved consistency in delivery',
    ],
    technologies: [
      'Ruby on Rails',
      'Sidekiq',
      'REST APIs',
      'AWS',
      'Excel Integration',
    ],
  },
  {
    title: 'Multi-Account RDS Serverless Cluster',
    description:
      'Designed and implemented a shared RDS Serverless Postgres cluster accessible by multiple applications across different AWS accounts.',
    achievements: [
      'Set up the cluster for both production and non-production environments',
      'Enabled removal of multiple costly clusters',
      'Facilitated migration of high-traffic queries',
      'Improved overall database performance and reduced costs',
    ],
    technologies: [
      'AWS RDS Serverless',
      'PostgreSQL',
      'Multi-Account Architecture',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='flex flex-col'>
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                {project.title}
                <ExternalLink className='h-4 w-4 text-muted-foreground' />
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
              <h3 className='font-semibold mb-2'>Key Achievements:</h3>
              <ul className='list-disc list-inside space-y-1 text-muted-foreground mb-4'>
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div>
                <h3 className='font-semibold mb-2'>Technologies Used:</h3>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant='secondary'>
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
