import React from 'react';
import ImageGrid from '@/components/ImageGrid';
import { getGalleryImages } from '@/lib/supabase/queries';

export default async function Gallery() {
  // Fetch gallery images from Supabase, fallback to empty array if error
  const galleryData = await getGalleryImages();
  
  // Transform Supabase data to match component interface
  const galleryImages = galleryData.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title || undefined,
  }));

  // Fallback to hardcoded data if Supabase is not configured or returns empty
  const fallbackImages = [
    {
      src: '/images/gallery/mining-operation-1.jpg',
      alt: 'Mining operation',
      title: 'Active Mining Operation',
    },
    {
      src: '/images/gallery/mining-operation-2.jpg',
      alt: 'Mining equipment',
      title: 'Mining Equipment',
    },
    {
      src: '/images/gallery/mining-operation-3.jpg',
      alt: 'Site exploration',
      title: 'Site Exploration',
    },
    {
      src: '/images/gallery/team-work-1.jpg',
      alt: 'Team at work',
      title: 'Team Collaboration',
    },
    {
      src: '/images/gallery/team-work-2.jpg',
      alt: 'Field work',
      title: 'Field Operations',
    },
    {
      src: '/images/gallery/environment-1.jpg',
      alt: 'Environmental protection',
      title: 'Environmental Protection',
    },
    {
      src: '/images/gallery/environment-2.jpg',
      alt: 'Rehabilitation',
      title: 'Site Rehabilitation',
    },
    {
      src: '/images/gallery/community-1.jpg',
      alt: 'Community engagement',
      title: 'Community Engagement',
    },
    {
      src: '/images/gallery/community-2.jpg',
      alt: 'Local community',
      title: 'Local Community Partnership',
    },
  ];

  const displayImages = galleryImages.length > 0 ? galleryImages : fallbackImages;
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Gallery</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our mining operations, team activities, environmental initiatives, 
            and community engagement efforts through our photo gallery.
          </p>
        </div>

        <ImageGrid images={displayImages} />

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Visual Storytelling</h2>
          <p className="text-gray-700">
            Our gallery showcases the various aspects of our operations, from active mining 
            sites to community engagement activities. Each image tells a story of our commitment 
            to responsible mining, environmental protection, and positive community impact.
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Note:</strong> Gallery images are placeholders. Please replace with actual 
            photos from your operations.
          </p>
        </div>
      </div>
    </div>
  );
}




