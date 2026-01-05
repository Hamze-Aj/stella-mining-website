export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  slug: string;
  image_url: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface InvestorDocument {
  id: string;
  name: string;
  description: string;
  file_url: string;
  icon_type: 'document' | 'chart';
  display_order: number;
  created_at: string;
  updated_at: string;
}




