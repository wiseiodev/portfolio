import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import {
  index,
  integer,
  pgTable,
  serial,
  timestamp
} from 'drizzle-orm/pg-core';

import { relations } from 'drizzle-orm';
import { technologies } from '@/db/schema';
import { z } from 'zod';

export const skills = pgTable(
  'skills',
  {
    id: serial('id').primaryKey(),
    technologyId: integer('technology_id')
      .references(() => technologies.id)
      .notNull(),
    level: integer('level').notNull().default(0),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date())
  },
  (table) => ({
    idxTechId: index('idx_skills_tech_id').on(table.technologyId)
  })
);

export const skillsRelations = relations(skills, ({ one }) => ({
  technology: one(technologies, {
    fields: [skills.technologyId],
    references: [technologies.id]
  })
}));

export const SkillSchema = createSelectSchema(skills);
export const NewSkillSchema = createInsertSchema(skills);
export type Skill = z.infer<typeof SkillSchema>;
export type NewSkill = z.input<typeof NewSkillSchema>;
