export const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Apollo Client',
      'Tanstack Query',
      'Data Grids'
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      'Node.js',
      'GraphQL',
      'REST APIs',
      'Ruby on Rails',
      'PostgreSQL',
      'SQL',
      'MongoDB',
      'Redis'
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS',
      'AWS CDK',
      'AWS CodePipeline',
      'SST',
      'Git & GitHub',
      'Vercel',
      'Azure'
    ]
  },
  {
    name: 'AI/ML Integration',
    skills: [
      'Vercel AI SDK',
      'OpenAI API',
      'AWS Bedrock',
      'Claude API',
      'AWS OpenSearch',
      'pgvector'
    ]
  }
];

export type SkillsCategories = typeof skillCategories;
export type SkillCategory = (typeof skillCategories)[number];
export type Skill = SkillCategory['skills'][number];
