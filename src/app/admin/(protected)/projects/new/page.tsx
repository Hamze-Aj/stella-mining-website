import ProjectForm from '@/components/admin/ProjectForm';

export default function NewProject() {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Add New Project</h1>
          <p className="text-gray-600">Create a new project entry</p>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}



