import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core';
import { categories, projectTechnologies } from '@/db/schema';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { relations } from 'drizzle-orm';
import { skills } from '../skills';
import { z } from 'zod';

export const technologies = pgTable(
  'technologies',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull().unique(),
    categoryId: integer('category_id')
      .references(() => categories.id)
      .notNull(),
    description: text('description'),
    iconUrl: varchar('icon_url', { length: 255 }),
    color: varchar('color', { length: 20 }),
    isActive: boolean('is_active').default(true).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date())
  },
  (table) => ({
    idxCatId: index('idx_tech_cat_id').on(table.categoryId),
    idxActive: index('idx_tech_is_active').on(table.isActive)
  })
);

export const technologiesRelations = relations(
  technologies,
  ({ many, one }) => ({
    category: one(categories, {
      fields: [technologies.categoryId],
      references: [categories.id]
    }),
    projects: many(projectTechnologies),
    skills: many(skills)
  })
);

export const TechnologySchema = createSelectSchema(technologies);
export const NewTechnologySchema = createInsertSchema(technologies);
export type Technology = z.infer<typeof TechnologySchema>;
export type NewTechnology = z.input<typeof NewTechnologySchema>;
