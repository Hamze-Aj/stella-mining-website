'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabase/browser';
import { uploadFileToStorage } from '@/lib/supabase/storage';
import type { InvestorDocument } from '@/lib/supabase/types';
import Link from 'next/link';
import { HiDocumentText } from 'react-icons/hi';

interface InvestorDocumentFormProps {
  document?: InvestorDocument;
}

export default function InvestorDocumentForm({ document }: InvestorDocumentFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState<string | null>(document?.file_url ? document.name : null);
  const [formData, setFormData] = useState({
    name: document?.name || '',
    description: document?.description || '',
    file_url: document?.file_url || '',
    icon_type: document?.icon_type || 'document' as 'document' | 'chart',
    display_order: document?.display_order || 0,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // Auto-fill name if empty
      if (!formData.name) {
        setFormData({ ...formData, name: file.name.replace(/\.[^/.]+$/, '') });
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
      let fileUrl = formData.file_url;

      if (fileInput?.files?.[0]) {
        setUploading(true);
        const uploadResult = await uploadFileToStorage(
          'investor-documents',
          fileInput.files[0]
        );

        if (uploadResult.error || !uploadResult.url) {
          setError(`Upload failed: ${uploadResult.error || 'Unknown error'}`);
          setLoading(false);
          setUploading(false);
          return;
        }

        fileUrl = uploadResult.url;
        setUploading(false);
      }

      const dataToSave = {
        ...formData,
        file_url: fileUrl,
      };

      if (document) {
        const { error: updateError } = await supabase
          .from('investor_documents')
          .update(dataToSave)
          .eq('id', document.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('investor_documents')
          .insert([dataToSave]);

        if (insertError) throw insertError;
      }

      router.push('/admin/investors');
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Document Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            required
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
          />
        </div>

        <div>
          <label htmlFor="file_url" className="block text-sm font-medium text-gray-700 mb-2">
            File URL *
          </label>
          <input
            type="url"
            id="file_url"
            required
            value={formData.file_url}
            onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
            placeholder="https://..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload PDF to Supabase Storage and paste the public URL here
          </p>
        </div>

        <div>
          <label htmlFor="icon_type" className="block text-sm font-medium text-gray-700 mb-2">
            Icon Type *
          </label>
          <select
            id="icon_type"
            required
            value={formData.icon_type}
            onChange={(e) => setFormData({ ...formData, icon_type: e.target.value as 'document' | 'chart' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
          >
            <option value="document">Document</option>
            <option value="chart">Chart</option>
          </select>
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
            Uploading file...
          </div>
        )}

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading || uploading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : loading ? 'Saving...' : document ? 'Update Document' : 'Add Document'}
          </button>
          <Link href="/admin/investors" className="btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}



