export const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Apollo Client', level: 85 },
      { name: 'Data Grids', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Tanstack Query (fka React Query)', level: 75 },
      { name: 'TypeScript', level: 80 }
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Apollo Server', level: 80 },
      { name: 'GraphQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'Node.js', level: 85 },
      { name: 'Postgres', level: 90 },
      { name: 'REST APIs', level: 90 },
      { name: 'Redis', level: 75 },
      { name: 'Ruby on Rails', level: 85 },
      { name: 'SQL', level: 70 },
      { name: 'Serverless Infrastructure', level: 90 }
    ]
  },
  {
    name: 'DevOps & Cloud Providers',
    skills: [
      { name: 'AWS CDK', level: 90 },
      { name: 'AWS Codepipelines', level: 80 },
      { name: 'AWS', level: 99 },
      { name: 'Azure', level: 60 },
      { name: 'Git', level: 90 },
      { name: 'Github Actions', level: 65 },
      { name: 'SST', level: 80 },
      { name: 'Vercel', level: 75 }
    ]
  }
];

export type SkillsCategories = typeof skillCategories;
export type SkillCategory = (typeof skillCategories)[number];
export type Skill = SkillCategory['skills'][number];
