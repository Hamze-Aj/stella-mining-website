import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiLocationMarker } from 'react-icons/hi';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  slug?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  description,
  image,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <HiLocationMarker className="mr-2 text-accent" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        {slug && (
          <Link
            href={`/projects/${slug}`}
            className="text-accent font-semibold hover:text-accent-dark transition-colors inline-flex items-center"
          >
            Read More
            <span className="ml-1">→</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;







