import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/supabase/queries';

export default async function Projects() {
  // Fetch projects from Supabase, fallback to empty array if error
  const projectsData = await getProjects();
  
  // Transform Supabase data to match component interface
  const projects = projectsData.map((project) => ({
    title: project.title,
    location: project.location,
    description: project.description,
    image: project.image_url,
    slug: project.slug,
  }));

  // Fallback to hardcoded data if Supabase is not configured or returns empty
  const fallbackProjects = [
    {
      title: 'Dembela Project',
      location: 'Bench-Maji Zone, Bore Woreda',
      description: 'The Dembela Project is a gold mining operation located in the Bench-Maji Zone, Bore Woreda. This project focuses on placer gold mining in the Sali and Gabisa Kebeles. We have been granted a mining license for this area and are actively working to extract gold while maintaining the highest environmental and safety standards.',
      image: '/images/project-dembela.jpg',
      slug: 'dembela',
    },
    {
      title: 'Sali Project',
      location: 'Agnuwak Zone, Dima Woreda',
      description: 'The Sali Project is located in the Agnuwak Zone, Dima Woreda. This gold mining project operates in the Dembella and Awaya Kebeles. Our team is committed to responsible mining practices that benefit both the local community and the environment.',
      image: '/images/project-sali.jpg',
      slug: 'sali',
    },
    {
      title: 'Namamota Project',
      location: 'Exploration Area',
      description: 'The Namamota Project represents our ongoing exploration efforts for gold and base metals. This project is in the exploration phase, where we conduct geological surveys and assessments to identify viable mining opportunities.',
      image: '/images/project-namamota.jpg',
      slug: 'namamota',
    },
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Stella Mining operates multiple exploration and mining projects across Ethiopia, 
            focusing on gold and base metals. Each project is developed with a commitment 
            to sustainability, safety, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Project Development</h2>
          <p className="text-gray-700 mb-4">
            All our projects follow a comprehensive development process that includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Geological surveys and exploration</li>
            <li>Environmental impact assessments</li>
            <li>Community consultation and engagement</li>
            <li>Regulatory compliance and licensing</li>
            <li>Sustainable mining operations</li>
            <li>Reclamation and rehabilitation planning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}




