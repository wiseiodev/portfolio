'use server';

import { Project } from '@/models';

export const action = async () => {
  const projects = await Project.getProjects();
  return projects;
};
