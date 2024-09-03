'use server';

import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { projects } from '@/db/schema';

export const getProjects = async () => {
  return await db.query.projects.findMany({
    where: eq(projects.isPublic, true),
    with: { technologies: { with: { technology: true } } }
  });
};
