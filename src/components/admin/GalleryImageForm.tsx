'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabase/browser';
import type { GalleryImage } from '@/lib/supabase/types';
import Link from 'next/link';

interface GalleryImageFormProps {
  image?: GalleryImage;
}

export default function GalleryImageForm({ image }: GalleryImageFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    src: image?.src || '',
    alt: image?.alt || '',
    title: image?.title || '',
    display_order: image?.display_order || 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createSupabaseClient();
    
    try {
      if (image) {
        const { error: updateError } = await supabase
          .from('gallery_images')
          .update(formData)
          .eq('id', image.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('gallery_images')
          .insert([formData]);

        if (insertError) throw insertError;
      }

      router.push('/admin/gallery');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="src" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL *
          </label>
          <input
            type="url"
            id="src"
            required
            value={formData.src}
            onChange={(e) => setFormData({ ...formData, src: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
            placeholder="https://..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload image to Supabase Storage and paste the public URL here
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



