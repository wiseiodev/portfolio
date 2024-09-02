import '@/db/env-config';

import {
  NewProject,
  NewTechnology,
  categories,
  projectTechnologies,
  projects,
  technologies
} from '@/db/schema';
import { eq, sql } from 'drizzle-orm';

import { db } from '@/db';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

type TechnologyWithCategory = NewTechnology & { category_name: string };

async function seed() {
  console.log('Seeding database...');

  // Clear existing data
  await db.delete(projectTechnologies);
  await db.delete(projects);
  await db.delete(technologies);
  await db.delete(categories);

  // Reset sequences
  await db.execute(sql`ALTER SEQUENCE projects_id_seq RESTART WITH 1`);
  await db.execute(sql`ALTER SEQUENCE categories_id_seq RESTART WITH 1`);
  await db.execute(sql`ALTER SEQUENCE technologies_id_seq RESTART WITH 1`);

  const categoriesData = readCsvFile('categories.csv');
  const technologiesData: TechnologyWithCategory[] = readCsvFile('tech.csv');

  // Get all unique category names from technologies
  const uniqueCategories = new Set(
    technologiesData.map((tech) => tech.category_name)
  );

  // Insert categories
  const newCategories = Array.from(uniqueCategories).map((name) => ({ name }));

  const categoryInsert = await db
    .insert(categories)
    .values(newCategories)
    .returning();

  console.log('Inserted categories:', categoryInsert);

  // Insert technologies with category id
  const newTech = technologiesData.map((tech) => {
    const { category_name, ...rest } = tech;
    const categoryId = categoryInsert.find(
      (category) => category.name === category_name
    )?.id;

    if (!categoryId) {
      throw new Error(
        `Category not found for technology: ${tech.category_name}`
      );
    }

    return {
      ...rest,
      categoryId
    };
  });

  // Insert technologies
  const techInsert = await db.insert(technologies).values(newTech).returning();

  console.log('Inserted technologies:', techInsert);

  // Seed projects
  const projectsData: NewProject[] = [
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
      repoUrl: 'https://github.com/wiseiodev/portfolio',
      siteUrl: 'https://danwise.dev',
      isPublic: true
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
      repoUrl: 'https://github.com/mwpso/calendar',
      siteUrl: 'https://marywoodwardpso.com/pso-event-calendar',
      isPublic: true
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
      isPublic: true
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
      isPublic: true
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
      isPublic: true
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
      isPublic: true
    }
  ];

  const projectInsert = await db
    .insert(projects)
    .values(projectsData)
    .returning();

  console.log('Inserted projects:', projectInsert);

  // Associate projects with technologies
  for (const project of projectInsert) {
    const projectTechs = [
      ...(project.title === 'Personal Portfolio Website'
        ? [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Vercel',
            'AWS Lambda'
          ]
        : []),
      ...(project.title === 'Mary Woodward PSO Dynamic Calendar Application'
        ? [
            'SST (Serverless Stack)',
            'AWS Lambda',
            'AWS CDK',
            'TypeScript',
            'React',
            'Node.js'
          ]
        : []),
      ...(project.title === 'Enterprise Application Serverless Migration'
        ? [
            'AWS Lambda',
            'GraphQL',
            'Apollo Server',
            'React',
            'S3',
            'CloudFront',
            'RDS Serverless'
          ]
        : []),
      ...(project.title === 'B2B SaaS Platform for Hospitality Industry'
        ? ['AWS', 'Ruby on Rails', 'PostgreSQL']
        : []),
      ...(project.title === 'Data Centralization and Analytics Dashboard'
        ? ['Ruby on Rails', 'Sidekiq', 'REST APIs', 'AWS', 'Excel Integration']
        : []),
      ...(project.title === 'Multi-Tenant Serverless Database Architecture'
        ? ['AWS RDS Serverless', 'PostgreSQL']
        : [])
    ];

    for (const techName of projectTechs) {
      let categoryName;
      if (
        [
          'Next.js',
          'React',
          'Vue.js',
          'Angular',
          'Svelte',
          'Tailwind CSS'
        ].includes(techName)
      ) {
        categoryName = 'Frontend';
      } else if (
        [
          'Node.js',
          'Express.js',
          'Django',
          'Ruby on Rails',
          'ASP.NET Core',
          'Spring Boot'
        ].includes(techName)
      ) {
        categoryName = 'Backend';
      } else if (
        ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Go', 'Rust'].includes(
          techName
        )
      ) {
        categoryName = 'Language';
      } else if (
        [
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'Redis',
          'Elasticsearch',
          'RDS Serverless'
        ].includes(techName)
      ) {
        categoryName = 'Database';
      } else if (
        ['AWS', 'Vercel', 'S3', 'CloudFront', 'AWS Lambda', 'AWS CDK'].includes(
          techName
        )
      ) {
        categoryName = 'Cloud & Hosting';
      } else if (['GraphQL', 'Apollo Server', 'REST APIs'].includes(techName)) {
        categoryName = 'API & Integration';
      } else if (['SST (Serverless Stack)', 'Sidekiq'].includes(techName)) {
        categoryName = 'DevOps & Infrastructure';
      } else {
        categoryName = 'Other';
      }

      const techId = await getOrCreateTechnology(techName, categoryName);
      await db
        .insert(projectTechnologies)
        .values({ projectId: project.id, technologyId: techId });
    }
  }

  console.log('Seeding completed.');
}

function readCsvFile(filename: string) {
  const filePath = path.join(__dirname, filename);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return parse(fileContent, { columns: true, skip_empty_lines: true });
}

// Function to get or create a category
async function getOrCreateCategory(name: string): Promise<number> {
  const existingCategory = await db
    .select()
    .from(categories)
    .where(eq(categories.name, name))
    .limit(1);
  if (existingCategory.length > 0) {
    return existingCategory[0].id;
  }
  const newCategory = await db.insert(categories).values({ name }).returning();
  return newCategory[0].id;
}

// Function to get or create a technology
async function getOrCreateTechnology(
  name: string,
  categoryName: string
): Promise<number> {
  const existingTech = await db
    .select()
    .from(technologies)
    .where(eq(technologies.name, name))
    .limit(1);
  if (existingTech.length > 0) {
    return existingTech[0].id;
  }
  const categoryId = await getOrCreateCategory(categoryName);
  const newTech = await db
    .insert(technologies)
    .values({ name, categoryId })
    .returning();
  return newTech[0].id;
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
