type ProjectsLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-3xl font-bold'>My Projects</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>{children}</div>
    </div>
  );
}
