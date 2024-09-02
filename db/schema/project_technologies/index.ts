import { index, integer, pgTable } from 'drizzle-orm/pg-core';
import { projects, technologies } from '@/db/schema';

import { relations } from 'drizzle-orm';

export const projectTechnologies = pgTable(
  'project_technologies',
  {
    projectId: integer('project_id').references(() => projects.id),
    technologyId: integer('technology_id').references(() => technologies.id)
  },
  (table) => ({
    idxProjectId: index('idx_pt_project_id').on(table.projectId),
    idxTechId: index('idx_pt_tech_id').on(table.technologyId)
  })
);

export const projectsTechnologiesRelations = relations(
  projectTechnologies,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectTechnologies.projectId],
      references: [projects.id]
    }),
    technology: one(technologies, {
      fields: [projectTechnologies.technologyId],
      references: [technologies.id]
    })
  })
);
