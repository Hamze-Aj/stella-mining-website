import React from 'react';
import Link from 'next/link';
import { HiDownload, HiDocumentText, HiChartBar } from 'react-icons/hi';

const documents = [
  {
    name: 'Corporate Documents',
    description: 'Company registration, licenses, and corporate structure documents',
    link: '/documents/corporate-documents.pdf',
    icon: HiDocumentText,
  },
  {
    name: 'Corporate Governance',
    description: 'Governance policies, board structure, and management information',
    link: '/documents/corporate-governance.pdf',
    icon: HiDocumentText,
  },
  {
    name: 'Shareholder Analysis',
    description: 'Current shareholder structure and ownership information',
    link: '/documents/shareholder-analysis.pdf',
    icon: HiChartBar,
  },
  {
    name: 'Annual Report 2023',
    description: 'Comprehensive annual report including financial and operational highlights',
    link: '/documents/annual-report-2023.pdf',
    icon: HiDocumentText,
  },
  {
    name: 'Environmental Impact Assessment',
    description: 'Environmental assessments and sustainability reports',
    link: '/documents/environmental-assessment.pdf',
    icon: HiDocumentText,
  },
  {
    name: 'Mining Licenses',
    description: 'Current mining and exploration licenses documentation',
    link: '/documents/mining-licenses.pdf',
    icon: HiDocumentText,
  },
];

export default function Investors() {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Investor Relations</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Welcome to Stella Mining's investor relations page. Here you can access 
            corporate documents, reports, and information about our operations and governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, index) => {
            const IconComponent = doc.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="text-accent text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{doc.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                    <a
                      href={doc.link}
                      download
                      className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors"
                    >
                      <HiDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Investment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Company Overview</h3>
              <p className="text-gray-700 mb-4">
                Stella Trade and Industry PLC is a registered Ethiopian mining company 
                with exploration and mining licenses for gold and base metals. We operate 
                multiple projects across Ethiopia and are committed to sustainable mining practices.
              </p>
              <p className="text-gray-700">
                Our company structure and governance framework ensure transparency, 
                accountability, and responsible business practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Contact Investor Relations</h3>
              <p className="text-gray-700 mb-4">
                For investor inquiries, please contact our investor relations team:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> investors@stellamining.com.et
                </li>
                <li>
                  <strong>Phone:</strong> +251 (0) 11 XXX XXXX
                </li>
                <li>
                  <strong>Address:</strong> Addis Ababa, Ethiopia
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-accent bg-opacity-10 p-6 rounded-lg">
          <p className="text-gray-700 text-center">
            <strong>Note:</strong> Some documents are placeholders. Please contact us for 
            the most current information and official documents.
          </p>
        </div>
      </div>
    </div>
  );
}


