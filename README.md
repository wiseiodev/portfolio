# Dan Wise's Portfolio

Welcome to my personal portfolio repository! This project showcases my skills, projects, and professional experience as an Architect, Senior Engineering Manager, and Full-Stack Developer.

## 🚀 Live Demo

[View the live portfolio](https://danwise.dev)

## 🛠 Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [AWS](https://aws.amazon.com/) - Cloud hosting and serverless functions

## 🏗 Project Structure

- `app/` - Next.js app directory containing page components and routing
- `components/` - Reusable React components
- `db/` - Database schema and connection
- `lib/` - Utility functions and custom hooks
- `public/` - Static assets
- `styles/` - Global styles and Tailwind CSS configuration

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone git@github.com:wiseiodev/portfolio.git
   ```

2. Navigate to the project directory

   ```
   cd portfolio
   ```

3. Install dependencies

   ```
   npm install
   # or
   yarn install
   ```

4. Start the development server

   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio

## 📄 Pages

- Home: Landing page with an overview of skills and projects
- About: Detailed information about professional background and expertise
- Projects: Showcase of key projects and achievements
- Skills: Comprehensive list of technical skills and proficiencies
- Resume: Downloadable resume and detailed professional history
- Contact: Form to get in touch

## 🔌 Backend Connection

This portfolio uses AWS services for backend functionality. There are two ways to set up the backend connection:

### 1. Vercel OIDC Connection (Beta)

If you're deploying on Vercel, you can use the Vercel OIDC connection to securely connect to AWS services without exposing your AWS credentials.

1. Set up OIDC between Vercel and AWS by following the [Vercel documentation](https://vercel.com/docs/integrations/aws).
2. Once set up, add the following environment variables in your Vercel project settings:
   - `AWS_REGION`: Your AWS region (e.g., `us-west-2`)
   - `AWS_ROLE_ARN`: The ARN of the IAM role you want to assume

### 2. Manual AWS Credentials

If you're not using Vercel or prefer to use AWS credentials directly, you'll need to set the following environment variables:

- `AWS_REGION`: Your AWS region (e.g., `us-west-2`)
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key

To set these locally for development:

1. Create a `.env.local` file in the root of your project
2. Add the following lines:
   ```
   AWS_REGION=your-aws-region
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   ```
3. Replace the placeholder values with your actual AWS credentials

**Note:** Never commit your `.env.local` file or expose your AWS credentials publicly.

For production deployment, set these environment variables in your hosting platform's settings.

## 🗄️ Database Integration

This portfolio uses [Drizzle ORM](https://orm.drizzle.team/) and [Vercel DB](https://vercel.com/docs/storage/vercel-postgres) for database management.

### Setting Up the Database

1. Ensure you have the necessary environment variables set up in your `.env.local` file:

```
POSTGRES_URL=your-postgres-url
```

2. The database schema is defined using Drizzle ORM in the [`db/schema`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fwise%2Fdev%2Fwiseio%2Fdb%2Fschema%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '/Users/wise/dev/wiseio/db/schema') directory. For example, the [technologies schema](db/schema/technologies/index.ts) and [projects schema](db/schema/projects/index.ts).

3. To generate and run migrations, use the following commands:

```bash
npm run db:generate
npm run db:migrate
```

4. To seed the database with initial data, use:

```bash
npm run db:seed
```

This will add technology and categories, as well as my initial projects, which you can erase or use as a sample to guide you.

### Database Configuration

The database configuration is defined in [`drizzle.config.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fwise%2Fdev%2Fwiseio%2Fdrizzle.config.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '/Users/wise/dev/wiseio/drizzle.config.ts'):

```ts
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
```

### Database Connection

The database connection is established db/index.ts:

```ts
import * as schema from '@/db/schema';

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

export const db = drizzle(sql, { schema });
```

## 🎨 Customization

To customize the portfolio for your own use:

1. Update the content in each page component (`app/*/page.tsx`)
2. Modify the `components/responsive-header.tsx` to update the navigation menu
3. Replace images in the `public/` and `assets/` directory with your own
4. Update colors and styles in `tailwind.config.ts` and `styles/globals.css`

## 📦 Deployment

This portfolio is set up for easy deployment on Vercel:

1. Push your changes to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site and provide a URL

For other hosting platforms, build the project using:

```
npm run build
# or
yarn build
```

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Dan Wise - [hi@danwise.dev](mailto:hi@danwise.dev)

LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/danielwise)

Project Link: [https://github.com/wiseiodev/portfolio](https://github.com/wiseiodev/portfolio)
