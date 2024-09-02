'use server';

import { Project } from '@/models';
import { revalidatePath } from 'next/cache';

export const action = async () => {
  const projects = await Project.getProjects();

  revalidatePath('/projects');

  return projects;
};
