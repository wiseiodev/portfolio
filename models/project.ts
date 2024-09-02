'use server';

import { db } from '@/db';

export const getProjects = async () => {
  return await db.query.projects.findMany({
    with: { technologies: { with: { technology: true } } }
  });
};
