import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { relations } from 'drizzle-orm';
import { technologies } from '@/db/schema';
import { z } from 'zod';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  achievements: text('achievements').array().notNull(),
  repoUrl: varchar('repo_url', { length: 255 }),
  imageUrl: varchar('image_url', { length: 255 }),
  siteUrl: varchar('site_url', { length: 255 }),
  startDate: timestamp('start_date'),
  endDate: timestamp('end_date'),
  isPublic: boolean('is_public').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export const projectsRelations = relations(projects, ({ one, many }) => ({
  technologies: many(technologies)
}));

export const ProjectSchema = createSelectSchema(projects);
export const NewProjectSchema = createInsertSchema(projects, {
  achievements: z.array(z.string())
});
export type Project = z.infer<typeof ProjectSchema>;
export type NewProject = z.input<typeof NewProjectSchema>;
