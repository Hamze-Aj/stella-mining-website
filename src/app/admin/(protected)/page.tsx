import Link from 'next/link';
import { HiFolder, HiPhotograph, HiDocumentText, HiArrowRight, HiLogout } from 'react-icons/hi';
import { getProjects } from '@/lib/supabase/queries';
import { getGalleryImages } from '@/lib/supabase/queries';
import { getInvestorDocuments } from '@/lib/supabase/queries';

export default async function AdminDashboard() {
  const [projects, galleryImages, documents] = await Promise.all([
    getProjects(),
    getGalleryImages(),
    getInvestorDocuments(),
  ]);

  const stats = [
    {
      name: 'Projects',
      count: projects.length,
      icon: HiFolder,
      href: '/admin/projects',
      color: 'bg-blue-500',
    },
    {
      name: 'Gallery Images',
      count: galleryImages.length,
      icon: HiPhotograph,
      href: '/admin/gallery',
      color: 'bg-green-500',
    },
    {
      name: 'Investor Documents',
      count: documents.length,
      icon: HiDocumentText,
      href: '/admin/investors',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your website content</p>
          </div>
          <Link
            href="/admin/logout"
            className="text-red-600 hover:text-red-800 inline-flex items-center font-semibold"
          >
            <HiLogout className="mr-2" />
            Logout
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Link
                key={stat.name}
                href={stat.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold text-primary">{stat.count}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-accent font-semibold">
                  Manage <HiArrowRight className="ml-2" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-primary mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/admin/projects/new"
              className="btn-primary text-center inline-block"
            >
              Add New Project
            </Link>
            <Link
              href="/admin/gallery/new"
              className="btn-primary text-center inline-block"
            >
              Add Gallery Image
            </Link>
            <Link
              href="/admin/investors/new"
              className="btn-primary text-center inline-block"
            >
              Add Document
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

