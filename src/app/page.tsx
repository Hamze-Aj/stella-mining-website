import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90">
          <Image
            src="/images/hero-mining.jpg"
            alt="Mining operations"
            fill
            className="object-cover -z-10"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-custom text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stella Mining
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Committed to sustainable and responsible mining practices in Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary inline-flex items-center justify-center">
              Our Projects
              <HiArrowRight className="ml-2" />
            </Link>
            <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About Stella Mining</h2>
              <p className="text-gray-700 mb-4">
                Stella Trade and Industry PLC is an Ethiopian mining company, granted gold and base metals 
                exploration licenses by the Ministry of Mines. We are actively exploring for gold and base 
                metals and have recently been awarded a mining license for placer gold mining.
              </p>
              <p className="text-gray-700 mb-6">
                Our commitment extends beyond extraction—we prioritize environmental stewardship, 
                community engagement, and sustainable practices that benefit all stakeholders.
              </p>
              <Link href="/about" className="text-accent font-semibold hover:text-accent-dark transition-colors inline-flex items-center">
                Learn More About Us
                <HiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-company.jpg"
                alt="Stella Mining operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HiCheckCircle className="text-accent text-4xl mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to environmentally responsible mining practices that protect 
                our natural resources for future generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HiCheckCircle className="text-accent text-4xl mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-700">
                We work closely with local communities to ensure our operations bring positive 
                economic and social benefits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HiCheckCircle className="text-accent text-4xl mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-gray-700">
                We maintain the highest standards in safety, quality, and operational efficiency 
                across all our projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Our Projects</h2>
            <Link href="/projects" className="text-accent font-semibold hover:text-accent-dark transition-colors inline-flex items-center">
              View All Projects
              <HiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/project-dembela.jpg"
                  alt="Dembela Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Dembela Project</h3>
                <p className="text-gray-600 text-sm mb-3">Bench-Maji Zone, Bore Woreda</p>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Gold mining project in the Sali and Gabisa Kebeles.
                </p>
                <Link href="/projects" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/project-sali.jpg"
                  alt="Sali Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Sali Project</h3>
                <p className="text-gray-600 text-sm mb-3">Agnuwak Zone, Dima Woreda</p>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Gold mining project in the Dembella and Awaya Kebeles.
                </p>
                <Link href="/projects" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/project-namamota.jpg"
                  alt="Namamota Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Namamota Project</h3>
                <p className="text-gray-600 text-sm mb-3">Location details</p>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  Exploration and development project for gold and base metals.
                </p>
                <Link href="/projects" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}







