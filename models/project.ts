'use server';

import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { projects } from '@/db/schema';

export const getProjects = async () => {
  return await db.query.projects.findMany({
    where: eq(projects.isPublic, true),
    with: { technologies: { with: { technology: true } } },
    orderBy: [asc(projects.sortOrder), asc(projects.title)]
  });
};
