import { getProjects } from '@/lib/supabase/queries';
import { notFound } from 'next/navigation';
import ProjectForm from '@/components/admin/ProjectForm';

export default async function EditProject({ params }: { params: { id: string } }) {
  const projects = await getProjects();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Edit Project</h1>
          <p className="text-gray-600">Update project information</p>
        </div>
        <ProjectForm project={project} />
      </div>
    </div>
  );
}



