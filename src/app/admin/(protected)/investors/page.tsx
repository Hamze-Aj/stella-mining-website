import Link from 'next/link';
import { HiPlus, HiPencil, HiTrash } from 'react-icons/hi';
import { getInvestorDocuments } from '@/lib/supabase/queries';
import { HiDocumentText, HiChartBar } from 'react-icons/hi';

export default async function AdminInvestors() {
  const documents = await getInvestorDocuments();

  const iconMap = {
    document: HiDocumentText,
    chart: HiChartBar,
  };

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Manage Investor Documents</h1>
            <p className="text-gray-600">Add, edit, or remove investor documents</p>
          </div>
          <Link href="/admin/investors/new" className="btn-primary inline-flex items-center">
            <HiPlus className="mr-2" />
            Add Document
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    No documents found. Add your first document to get started.
                  </td>
                </tr>
              ) : (
                documents.map((doc) => {
                  const IconComponent = iconMap[doc.icon_type] || HiDocumentText;
                  return (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <IconComponent className="text-accent mr-2" />
                          <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 max-w-md truncate">{doc.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 capitalize">{doc.icon_type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/admin/investors/${doc.id}/edit`}
                          className="text-accent hover:text-accent-dark mr-4 inline-flex items-center"
                        >
                          <HiPencil className="mr-1" />
                          Edit
                        </Link>
                        <form action={`/admin/api/investors/${doc.id}/delete`} method="POST" className="inline">
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
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <Link href="/admin" className="text-accent hover:text-accent-dark">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}



