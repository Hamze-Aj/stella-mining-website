import Link from 'next/link';
import { HiPlus, HiPencil, HiTrash } from 'react-icons/hi';
import { getProjects } from '@/lib/supabase/queries';

export default async function AdminProjects() {
  const projects = await getProjects();

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Manage Projects</h1>
            <p className="text-gray-600">Add, edit, or remove projects</p>
          </div>
          <Link href="/admin/projects/new" className="btn-primary inline-flex items-center">
            <HiPlus className="mr-2" />
            Add Project
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    No projects found. Add your first project to get started.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{project.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{project.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{project.display_order}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        className="text-accent hover:text-accent-dark mr-4 inline-flex items-center"
                      >
                        <HiPencil className="mr-1" />
                        Edit
                      </Link>
                      <form action={`/admin/api/projects/${project.id}/delete`} method="POST" className="inline">
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-900 inline-flex items-center"
                        >
                          <HiTrash className="mr-1" />
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <Link href="/admin" className="text-accent hover:text-accent-dark">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}



