'use server';

import { Skill } from '@/models';

export const action = async () => {
  const skills = await Skill.getSkills();
  return skills;
};
