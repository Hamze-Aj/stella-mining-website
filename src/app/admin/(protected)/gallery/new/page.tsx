import GalleryImageForm from '@/components/admin/GalleryImageForm';

export default function NewGalleryImage() {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Add New Gallery Image</h1>
          <p className="text-gray-600">Upload a new image to the gallery</p>
        </div>
        <GalleryImageForm />
      </div>
    </div>
  );
}



