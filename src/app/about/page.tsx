import React from 'react';
import Image from 'next/image';
import { HiUsers, HiShieldCheck, HiGlobeAlt } from 'react-icons/hi';

const managementTeam = [
  {
    name: 'Management Team Member 1',
    position: 'Chief Executive Officer',
    bio: 'Extensive experience in mining operations and business development.',
    image: '/images/team-member-1.jpg',
  },
  {
    name: 'Management Team Member 2',
    position: 'Chief Operating Officer',
    bio: 'Expert in mining engineering and operational excellence.',
    image: '/images/team-member-2.jpg',
  },
  {
    name: 'Management Team Member 3',
    position: 'Chief Financial Officer',
    bio: 'Financial management and strategic planning expertise.',
    image: '/images/team-member-3.jpg',
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-primary text-white flex items-center">
        <div className="container-custom px-4">
          <h1 className="text-4xl font-bold">About Stella Mining</h1>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Company Profile</h2>
              <p className="text-gray-700 mb-4">
                Stella Trade and Industry PLC is an Ethiopian mining company, granted gold and 
                base metals exploration licenses by the Ministry of Mines. We are actively 
                exploring for gold and base metals and have recently been awarded a mining 
                license for placer gold mining.
              </p>
              <p className="text-gray-700 mb-4">
                Our operations span multiple regions in Ethiopia, with a focus on responsible 
                and sustainable mining practices. We work closely with local communities, 
                government authorities, and stakeholders to ensure our activities contribute 
                positively to economic development while protecting the environment.
              </p>
              <p className="text-gray-700">
                With a commitment to excellence, safety, and environmental stewardship, 
                Stella Mining is positioned as a leader in Ethiopia's mining sector.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/company-profile.jpg"
                alt="Stella Mining operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Management Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.position}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Policy */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Environmental Policy</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <HiShieldCheck className="text-accent text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Environmental Protection</h3>
              <p className="text-gray-700">
                We implement comprehensive environmental management systems to minimize 
                our impact on the natural environment.
              </p>
            </div>
            <div className="text-center">
              <HiGlobeAlt className="text-accent text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Sustainable Practices</h3>
              <p className="text-gray-700">
                Our operations follow sustainable mining practices that ensure long-term 
                environmental health and resource conservation.
              </p>
            </div>
            <div className="text-center">
              <HiUsers className="text-accent text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Community Engagement</h3>
              <p className="text-gray-700">
                We engage with local communities to understand their concerns and ensure 
                our operations benefit all stakeholders.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Environmental Commitment</h3>
            <p className="text-gray-700 mb-4">
              Stella Mining is committed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Conducting comprehensive environmental impact assessments before operations</li>
              <li>Implementing best practices for waste management and water conservation</li>
              <li>Rehabilitating mining sites and restoring land to its natural state</li>
              <li>Monitoring and reporting on environmental performance</li>
              <li>Complying with all environmental regulations and standards</li>
              <li>Investing in technologies that reduce environmental impact</li>
              <li>Training staff on environmental awareness and best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg">
                To be a leading mining company in Ethiopia, committed to sustainable and 
                responsible mining practices that create value for our stakeholders while 
                protecting the environment and supporting local communities.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg">
                To be recognized as Ethiopia's premier mining company, known for excellence 
                in operations, environmental stewardship, and positive community impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






