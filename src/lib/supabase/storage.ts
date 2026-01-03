import { createSupabaseClient } from './browser';

/**
 * Upload a file to Supabase Storage and return the public URL
 */
export async function uploadFileToStorage(
  bucket: string,
  file: File,
  path?: string
): Promise<{ url: string; error: null } | { url: null; error: string }> {
  try {
    const supabase = createSupabaseClient();
    
    // Generate a unique filename if path not provided
    const fileName = path || `${Date.now()}-${file.name}`;
    const filePath = fileName.replace(/[^a-zA-Z0-9.-]/g, '_'); // Sanitize filename
    
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return { url: null, error: error.message };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return { url: urlData.publicUrl, error: null };
  } catch (error: any) {
    console.error('Upload exception:', error);
    return { url: null, error: error.message || 'Failed to upload file' };
  }
}

/**
 * Delete a file from Supabase Storage
 */
export async function deleteFileFromStorage(
  bucket: string,
  filePath: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const supabase = createSupabaseClient();
    
    // Extract path from URL if full URL is provided
    const path = filePath.includes(bucket) 
      ? filePath.split(`${bucket}/`)[1]?.split('?')[0]
      : filePath;

    if (!path) {
      return { success: false, error: 'Invalid file path' };
    }

    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error: any) {
    return { success: false, error: error.message || 'Failed to delete file' };
  }
}

