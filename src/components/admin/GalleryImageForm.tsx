'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabase/browser';
import { uploadFileToStorage } from '@/lib/supabase/storage';
import type { GalleryImage } from '@/lib/supabase/types';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryImageFormProps {
  image?: GalleryImage;
}

export default function GalleryImageForm({ image }: GalleryImageFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(image?.src || null);
  const [formData, setFormData] = useState({
    src: image?.src || '',
    alt: image?.alt || '',
    title: image?.title || '',
    display_order: image?.display_order || 0,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createSupabaseClient();
    
    try {
      // Handle file upload if a new file is selected
      const fileInput = fileInputRef.current;
      let imageUrl = formData.src;

      if (fileInput?.files?.[0]) {
        setUploading(true);
        const uploadResult = await uploadFileToStorage(
          'gallery-images',
          fileInput.files[0]
        );

        if (uploadResult.error || !uploadResult.url) {
          setError(`Upload failed: ${uploadResult.error || 'Unknown error'}`);
          setLoading(false);
          setUploading(false);
          return;
        }

        imageUrl = uploadResult.url;
        setUploading(false);
      }

      const dataToSave = {
        ...formData,
        src: imageUrl,
      };

      if (image) {
        const { error: updateError } = await supabase
          .from('gallery_images')
          .update(dataToSave)
          .eq('id', image.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('gallery_images')
          .insert([dataToSave]);

        if (insertError) throw insertError;
      }

      router.push('/admin/gallery');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Gallery Image *
          </label>
          
          {previewUrl && (
            <div className="mb-4">
              <Image
                src={previewUrl}
                alt="Preview"
                width={300}
                height={200}
                className="rounded-lg border border-gray-300 object-cover"
                unoptimized
              />
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
          <p className="mt-1 text-sm text-gray-500">
            {image?.src ? 'Select a new image to replace the current one, or leave empty to keep current image.' : 'Upload an image file (JPG, PNG, etc.)'}
          </p>
        </div>

        <div>
          <label htmlFor="alt" className="block text-sm font-medium text-gray-700 mb-2">
            Alt Text *
          </label>
          <input
            type="text"
            id="alt"
            required
            value={formData.alt}
            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title (optional)
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label htmlFor="display_order" className="block text-sm font-medium text-gray-700 mb-2">
            Display Order
          </label>
          <input
            type="number"
            id="display_order"
            value={formData.display_order}
            onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : image ? 'Update Image' : 'Add Image'}
          </button>
          <Link href="/admin/gallery" className="btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}



