import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

import { relations } from 'drizzle-orm';
import { technologies } from '@/db/schema';
import { z } from 'zod';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  technologies: many(technologies)
}));

export const CategorySchema = createSelectSchema(categories);
export const NewCategorySchema = createInsertSchema(categories);
export type Category = z.infer<typeof CategorySchema>;
export type NewCategory = z.input<typeof NewCategorySchema>;
