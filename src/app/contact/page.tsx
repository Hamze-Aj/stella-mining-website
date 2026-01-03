import React from 'react';
import ContactForm from '@/components/ContactForm';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';

export default function Contact() {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for inquiries, partnerships, 
            or any questions about our operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <HiLocationMarker className="text-accent text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-gray-700">
                      Addis Ababa, Ethiopia<br />
                      P.O. Box [Number]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <HiPhone className="text-accent text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-700">
                      +251 (0) 11 XXX XXXX<br />
                      +251 (0) 11 XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <HiMail className="text-accent text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-700">
                      info@stellamining.com.et<br />
                      investors@stellamining.com.et
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <HiClock className="text-accent text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent bg-opacity-10 p-6 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Emergency Contact</h3>
              <p className="text-gray-700 text-sm">
                For urgent matters outside business hours, please contact our emergency line.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Find Us</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">
              Map integration placeholder - Add Google Maps or other mapping service here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}






