'use client';

import generatePDF, { Margin } from 'react-to-pdf';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { EmailLink } from '@/components/email/email-link';
import { SkillsSection } from '@/components/skills-section';
import { useRef } from 'react';

export default function ResumePage() {
  const resumeRef = useRef(null);

  const downloadPDF = () => {
    if (!resumeRef.current) return;
    generatePDF(resumeRef, {
      method: 'save',
      filename: 'daniel-wise-resume.pdf',
      page: { margin: Margin.SMALL, format: 'letter', orientation: 'portrait' },
      overrides: {
        canvas: { windowWidth: 800, windowHeight: 800 }
      }
    });
  };

  return (
    <>
      <div className='mb-4 flex justify-center'>
        <Button onClick={downloadPDF} variant='outline'>
          <Download className='mr-2 h-4 w-4' /> Download PDF
        </Button>
      </div>
      <div
        ref={resumeRef}
        className='mx-auto max-w-4xl bg-white p-8 text-black shadow-lg dark:bg-white dark:text-black'
      >
        <div className='mb-8 flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Daniel Wise</h1>
        </div>

        <div className='space-y-6 text-sm'>
          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Contact Information
            </h2>
            <p>
              Portland, OR | (503) 597-8290 |{' '}
              <EmailLink subject='Your resume' /> |{' '}
              <a
                href='https://www.linkedin.com/in/danielwise'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                LinkedIn
              </a>
            </p>
          </section>

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Professional Summary
            </h2>
            <p>
              An innovative Senior Engineering Manager with a proven history of
              leading high-performing, globally distributed teams, emphasizing
              diversity and mentorship. Skilled in driving significant
              technological initiatives to enhance operational efficiency and
              cut costs through solutions like serverless architecture. Adept at
              developing scalable, cloud-native software that improves
              collaboration and user experience.
            </p>
          </section>

          <SkillsSection />

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Professional Experience
            </h2>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold'>Senior Engineering Manager</h3>
                <p className='italic'>
                  Best Western Hotels – Phoenix, AZ | May 2022 – Present
                </p>
                <ul className='mt-1 list-disc pl-5'>
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
                <p className='italic'>
                  Wise Revenue Management – Portland, OR | January 2013 – May
                  2022
                </p>
                <ul className='mt-1 list-disc pl-5'>
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
                <p className='italic'>
                  Revcaster – Portland, OR | January 2012 – February 2018
                </p>
                <ul className='mt-1 list-disc pl-5'>
                  <li>
                    Employed AWS, Ruby on Rails, and Postgres for robust backend
                    development
                  </li>
                  <li>
                    Led backend optimization efforts for rate shopping tool
                  </li>
                  <li>
                    Designed advanced web crawler system for live rate data
                    collection
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Education
            </h2>
            <ul className='list-disc pl-5'>
              <li>
                <strong>
                  Master of Business Administration (Executive MBA)
                </strong>
                , University of Oregon, Eugene, OR, 2011
              </li>
              <li>
                <strong>Bachelor of Science in Business Management</strong>,
                Arizona State University, Tempe, AZ, 2004
              </li>
            </ul>
          </section>

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Certifications & Awards
            </h2>
            <ul className='list-disc pl-5'>
              <li>
                AWS Certified Cloud Practitioner, Amazon Web Services, 2023
              </li>
              <li>AWS Cloud Technical Essentials, Amazon Web Services, 2024</li>
              <li>Foundations of User Experience (UX) Design, Google, 2024</li>
              <li>Certified Revenue Management Executive, HSMAI</li>
              <li>
                HSMAI Top 25 Extraordinary Minds in Hospitality Sales,
                Marketing, and Revenue Optimization, 2016
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
