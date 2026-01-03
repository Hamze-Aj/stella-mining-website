import Link from 'next/link';
import { HiPlus, HiPencil, HiTrash } from 'react-icons/hi';
import { getGalleryImages } from '@/lib/supabase/queries';
import Image from 'next/image';

export default async function AdminGallery() {
  const images = await getGalleryImages();

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Manage Gallery</h1>
            <p className="text-gray-600">Add, edit, or remove gallery images</p>
          </div>
          <Link href="/admin/gallery/new" className="btn-primary inline-flex items-center">
            <HiPlus className="mr-2" />
            Add Image
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No gallery images found. Add your first image to get started.
            </div>
          ) : (
            images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-1">{image.title || image.alt}</h3>
                  <p className="text-sm text-gray-600 mb-4">{image.alt}</p>
                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/gallery/${image.id}/edit`}
                      className="flex-1 text-center text-sm text-accent hover:text-accent-dark font-semibold"
                    >
                      <HiPencil className="inline mr-1" />
                      Edit
                    </Link>
                    <form action={`/admin/api/gallery/${image.id}/delete`} method="POST" className="flex-1">
                      <button
                        type="submit"
                        className="w-full text-center text-sm text-red-600 hover:text-red-900 font-semibold"
                      >
                        <HiTrash className="inline mr-1" />
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))
          )}
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



