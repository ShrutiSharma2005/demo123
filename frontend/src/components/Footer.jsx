import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="https://customer-assets.emergentagent.com/job_c7b18a6e-5dbd-4a9a-a02e-46cd6ab4363b/artifacts/jgmdbhj8_VENUS%20FABCARE%20%281%29.png"
              alt="Venus Fabcare Logo"
              className="h-40 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Gentle on fabrics. Tough on stains. Your trusted laundry partner for institutions across India.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/residential-school" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Residential School
                </Link>
              </li>
              <li>
                <Link to="/services/college-laundry" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  College Laundry
                </Link>
              </li>
              <li>
                <Link to="/services/industrial-laundry" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Industrial Laundry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Bangalore and Moodbidre, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-300">+91 90357 00656</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-gray-300">info@venusfabcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Venus Fabcare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
