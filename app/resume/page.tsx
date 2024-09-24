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
      resolution: 2,
      page: { margin: Margin.SMALL, format: 'letter', orientation: 'portrait' },
      overrides: {
        canvas: { windowWidth: 900, windowHeight: 800 }
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
                https://www.linkedin.com/in/danielwise
              </a>{' '}
              <br />
              <a
                href='https://www.danwise.dev'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                https://www.danwise.dev
              </a>{' '}
              |{' '}
              <a
                href='https://github.com/dubscode'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                https://github.com/dubscode
              </a>
            </p>
          </section>

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Professional Summary
            </h2>
            <p>
              An accomplished Senior Full-Stack Engineer with extensive
              experience in architecting and developing scalable, cloud-native
              applications. Proficient in modern frontend and backend
              technologies, including React, Next.js, Node.js, and AWS services.
              Proven track record of implementing serverless architectures that
              enhance performance and reduce costs by up to 70%. Passionate
              about solving complex technical challenges and delivering
              high-quality software solutions.
            </p>
          </section>

          <SkillsSection />

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Professional Experience
            </h2>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold'>
                  Senior Solutions Architect/Engineer
                </h3>
                <p className='italic'>
                  Best Western Hotels – Phoenix, AZ | May 2022 – Present
                </p>
                <ul className='mt-1 list-disc pl-5'>
                  <li>
                    <b>Architected</b> the migration of legacy applications to a
                    serverless architecture using AWS Lambda, resulting in a 70%
                    cost reduction.
                  </li>
                  <li>
                    <b>Implemented</b> a shared RDS Serverless PostgreSQL
                    cluster across multiple AWS accounts, enhancing data
                    consistency and scalability.
                  </li>
                  <li>
                    <b>Optimized</b> backend development processes using GraphQL
                    and Apollo Server, reducing the feedback-to-deployment cycle
                    by 30%.
                  </li>
                  <li>
                    <b>Developed</b> frontend applications using React and
                    Next.js to improve user experience and performance.
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
                    <b>Developed</b> a robust backend system using Ruby on Rails
                    and Sidekiq for web crawling and data processing.
                  </li>
                  <li>
                    <b>Transformed</b> Excel-based dashboards into centralized,
                    cloud-native applications hosted on AWS.
                  </li>
                  <li>
                    <b>Integrated</b> APIs for seamless data exchange between
                    internal tools and client applications.
                  </li>
                  <li>
                    <b>Implemented</b> modern frontend technologies like React
                    to enhance user interaction and data visualization.
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
                    <b>Engineered</b> a scalable backend using AWS, Ruby on
                    Rails, and PostgreSQL for a market-leading rate shopping
                    tool.
                  </li>
                  <li>
                    <b>Designed</b> advanced web crawlers for real-time data
                    collection of hotel rates.
                  </li>
                  <li>
                    <b>Optimized</b> database queries and backend processes,
                    improving data retrieval speed by 50%.
                  </li>
                  <li>
                    <b>Led</b> the full-stack development efforts, enabling us
                    to capture <b>5%</b> of the market in the first month.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className='mb-2 border-b border-gray-300 pb-1 text-xl font-semibold'>
              Projects
            </h2>
            <div className='space-y-4'>
              <div>
                <h3 className='font-semibold'>AI-Powered Support Chatbot</h3>
                <ul className='mt-1 list-disc pl-5'>
                  <li>
                    Architected an AI chatbot using AWS Bedrock and Claude API
                    to enhance customer support efficiency.
                  </li>
                  <li>
                    Implemented a serverless architecture and integrated a
                    vector database with AWS OpenSearch.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-semibold'>
                  Monster Research Incorporated |{' '}
                  <a
                    href='https://www.monster-research.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    https://www.monster-research.com
                  </a>
                </h3>
                <ul className='mt-1 list-disc pl-5'>
                  <li>
                    Developed a Next.js application that generates unique
                    monsters using OpenAI&apos;s GPT and DALL-E.
                  </li>
                  <li>
                    Implemented real-time features like leaderboards and user
                    authentication with Clerk.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='font-semibold'>
                  PhotoMuse: AI-Powered Image Search |{' '}
                  <a
                    href='https://rag.photomuse.ai'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    https://rag.photomuse.ai
                  </a>
                </h3>
                <ul className='mt-1 list-disc pl-5'>
                  <li>
                    Created an image search application using Next.js, Azure
                    services, and PostgreSQL with pgvector.
                  </li>
                  <li>
                    Integrated AI technologies for image analysis and natural
                    language querying.
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
