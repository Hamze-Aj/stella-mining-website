import React from 'react';
import Link from 'next/link';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stella Mining</h3>
            <p className="text-gray-300 mb-4">
              Committed to sustainable and responsible mining practices in Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-accent transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <HiLocationMarker className="text-accent" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiPhone className="text-accent" />
                <span>+251 (0) 11 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiMail className="text-accent" />
                <span>info@stellamining.com.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Stella Mining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


