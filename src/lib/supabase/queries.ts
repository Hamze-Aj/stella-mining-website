import { createServerSupabaseClient, isSupabaseConfigured } from './server';
import type { Project, GalleryImage, InvestorDocument } from './types';

// Fetch all projects (public)
export async function getProjects(): Promise<Project[]> {
  // Return empty array if Supabase is not configured
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return [];
  }
}

// Fetch all gallery images (public)
export async function getGalleryImages(): Promise<GalleryImage[]> {
  // Return empty array if Supabase is not configured
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching gallery images:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return [];
  }
}

// Fetch all investor documents (public)
export async function getInvestorDocuments(): Promise<InvestorDocument[]> {
  // Return empty array if Supabase is not configured
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from('investor_documents')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching investor documents:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return [];
  }
}


