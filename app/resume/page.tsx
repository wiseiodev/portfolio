'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';

export default function ResumePage() {
  const resumeRef = useRef(null);

  const downloadPDF = () => {
    if (!resumeRef.current) return;

    generatePDF(resumeRef, {
      filename: 'daniel-wise-resume.pdf'
    });
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Daniel Wise - Resume</h1>
        <Button onClick={downloadPDF}>
          <Download className='mr-2 h-4 w-4' /> Download PDF
        </Button>
      </div>

      <div ref={resumeRef} id='resume-content' className='space-y-6'>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Portland, OR | (503) 597-8290 | hi@danwise.dev |{' '}
              <a
                href='https://www.linkedin.com/in/danielwise'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                LinkedIn
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              An innovative Senior Engineering Manager with a proven history of
              leading high-performing, globally distributed teams, emphasizing
              diversity and mentorship. Skilled in driving significant
              technological initiatives to enhance operational efficiency and
              cut costs through solutions like serverless architecture. Adept at
              developing scalable, cloud-native software that improves
              collaboration and user experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-wrap gap-2'>
              <Badge>Product Management</Badge>
              <Badge>Remote Team Leadership</Badge>
              <Badge>Software Development Lifecycle (SDLC)</Badge>
              <Badge>Cross-Functional Collaboration</Badge>
              <Badge>Strategic Planning & Execution</Badge>
              <Badge>Cloud-Native Software Development</Badge>
              <Badge>Agile Practices</Badge>
              <Badge>API Architecture</Badge>
              <Badge>Full-Stack Development</Badge>
              <Badge>UI/UX Design</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Proficiencies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='list-disc space-y-2 pl-5'>
              <li>
                <strong>Core Backend Technologies:</strong> Ruby on Rails,
                NodeJS, AWS Lambda, Postgres, GraphQL, RESTful APIs, RDS
                Serverless
              </li>
              <li>
                <strong>Infrastructure & DevOps:</strong> AWS CloudFormation,
                Docker, CI/CD pipelines, CDK
              </li>
              <li>
                <strong>Database Management:</strong> SQL, DynamoDB, Redshift
              </li>
              <li>
                <strong>Programming Languages:</strong> Ruby, TypeScript
                (Node.js)
              </li>
              <li>
                <strong>Cloud Platforms:</strong> AWS services including Lambda,
                S3, CloudFront, RDS, DynamoDB
              </li>
              <li>
                <strong>Other Skills:</strong> Microservices architecture,
                serverless application development, backend performance
                optimization
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <h3 className='font-semibold'>Senior Engineering Manager</h3>
              <p className='text-sm text-muted-foreground'>
                Best Western Hotels – Phoenix, AZ | May 2022 – Present
              </p>
              <ul className='mt-2 list-disc pl-5'>
                <li>
                  Led diverse and globally distributed teams to enhance
                  operational efficiency
                </li>
                <li>
                  Spearheaded migration of legacy application to serverless
                  architecture, resulting in 70% cost reduction
                </li>
                <li>
                  Implemented shared RDS Serverless Postgres cluster across
                  multiple AWS accounts
                </li>
                <li>
                  Enhanced backend development processes, shortening
                  feedback-to-deployment cycle
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>
                Principal Solutions Engineer/Founder
              </h3>
              <p className='text-sm text-muted-foreground'>
                Wise Revenue Management – Portland, OR | January 2013 – May 2022
              </p>
              <ul className='mt-2 list-disc pl-5'>
                <li>
                  Developed Ruby on Rails-based backend for web-crawling and
                  Sidekiq queue system
                </li>
                <li>
                  Transformed Excel-based dashboards into centralized,
                  cloud-native application on AWS
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Chief Product Architect/CEO</h3>
              <p className='text-sm text-muted-foreground'>
                Revcaster – Portland, OR | January 2012 – February 2018
              </p>
              <ul className='mt-2 list-disc pl-5'>
                <li>
                  Employed AWS, Ruby on Rails, and Postgres for robust backend
                  development
                </li>
                <li>Led backend optimization efforts for rate shopping tool</li>
                <li>
                  Designed advanced web crawler system for live rate data
                  collection
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            <p>
              <strong>Master of Business Administration (Executive MBA)</strong>
              , University of Oregon, Eugene, OR, 2011
            </p>
            <p>
              <strong>Bachelor of Science in Business Management</strong>,
              Arizona State University, Tempe, AZ, 2004
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications & Awards</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            <p>AWS Certified Cloud Practitioner, Amazon Web Services, 2023</p>
            <p>AWS Cloud Technical Essentials, Amazon Web Services, 2024</p>
            <p>Foundations of User Experience (UX) Design, Google, 2024</p>
            <p>Certified Revenue Management Executive, HSMAI</p>
            <p>
              HSMAI Top 25 Extraordinary Minds in Hospitality Sales, Marketing,
              and Revenue Optimization, 2016
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
