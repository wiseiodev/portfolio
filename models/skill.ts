'use server';

import { db } from '@/db';

export const getSkills = async () => {
  return await db.query.skills.findMany({
    with: { technology: { with: { category: true } } }
  });
};
