'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabase/browser';
import { uploadFileToStorage } from '@/lib/supabase/storage';
import type { Project } from '@/lib/supabase/types';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectFormProps {
  project?: Project;
}

export default function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(project?.image_url || null);
  const [formData, setFormData] = useState({
    title: project?.title || '',
    location: project?.location || '',
    description: project?.description || '',
    slug: project?.slug || '',
    image_url: project?.image_url || '',
    display_order: project?.display_order || 0,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview for image files
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
      let imageUrl = formData.image_url;

      if (fileInput?.files?.[0]) {
        setUploading(true);
        const uploadResult = await uploadFileToStorage(
          'project-images',
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
        image_url: imageUrl,
      };

      if (project) {
        // Update existing project
        const { error: updateError } = await supabase
          .from('projects')
          .update(dataToSave)
          .eq('id', project.id);

        if (updateError) throw updateError;
      } else {
        // Create new project
        const { error: insertError } = await supabase
          .from('projects')
          .insert([dataToSave]);

        if (insertError) throw insertError;
      }

      router.push('/admin/projects');
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
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            id="title"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            id="location"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
            Slug *
          </label>
          <input
            type="text"
            id="slug"
            required
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
            placeholder="e.g., dembela-project"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            required
            rows={6}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
          />
        </div>

        <div>
          <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL *
          </label>
          <input
            type="url"
            id="image_url"
            required
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
            placeholder="https://..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload image to Supabase Storage and paste the public URL here
          </p>
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

        {uploading && (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm">
            Uploading image...
          </div>
        )}

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading || uploading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : loading ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
          </button>
          <Link href="/admin/projects" className="btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}



