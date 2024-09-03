'use server';

import { Skill } from '@/models';
import { revalidatePath } from 'next/cache';

export const action = async () => {
  const skills = await Skill.getSkills();

  revalidatePath('/skills');

  return skills;
};
