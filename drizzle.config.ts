import '@/db/env-config';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.POSTGRES_URL || 'no-db-url-found'
  }
});
