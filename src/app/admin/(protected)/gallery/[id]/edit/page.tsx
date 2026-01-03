import { getGalleryImages } from '@/lib/supabase/queries';
import { notFound } from 'next/navigation';
import GalleryImageForm from '@/components/admin/GalleryImageForm';

export default async function EditGalleryImage({ params }: { params: { id: string } }) {
  const images = await getGalleryImages();
  const image = images.find((img) => img.id === params.id);

  if (!image) {
    notFound();
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Edit Gallery Image</h1>
          <p className="text-gray-600">Update image information</p>
        </div>
        <GalleryImageForm image={image} />
      </div>
    </div>
  );
}



