import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const institutesLinks = [
    { name: 'Residential School', path: '/services/residential-school' },
    { name: 'College Laundry Service', path: '/services/college-laundry' },
    { name: 'Industrial Laundry Service', path: '/services/industrial-laundry' },
  ];

  const navLinkClass = (active) =>
    `no-underline text-base font-medium transition-colors ${active ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center no-underline">
            <img
              src="https://i.ibb.co/RTqb9hJ9/VENUS-FABCARE-1.png"
              alt="Venus Fabcare Logo"
              className="h-28 md:h-32 lg:h-36 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass(isActive('/'))}>Home</Link>
            <Link to="/about" className={navLinkClass(isActive('/about'))}>About Us</Link>
            <Link to="/process" className={navLinkClass(isActive('/process'))}>Our School</Link>

            {/* Institutes Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center no-underline text-base font-medium transition-colors ${location.pathname.startsWith('/services')
                  ? 'text-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
                  }`}
              >
                Institutes We Serve
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 bg-white px-4 py-3 space-y-2">
                  {institutesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block text-sm font-medium text-gray-900 no-underline hover:text-blue-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className={navLinkClass(isActive('/contact'))}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="no-underline">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={navLinkClass(isActive('/'))}>Home</Link>
              <Link to="/about" className={navLinkClass(isActive('/about'))}>About Us</Link>
              <Link to="/process" className={navLinkClass(isActive('/process'))}>Our School</Link>

              <div className="space-y-2">
                <div className="text-base font-semibold text-gray-900">
                  Institutes We Serve
                </div>
                {institutesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block pl-4 text-sm text-gray-900 no-underline hover:text-blue-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link to="/contact" className={navLinkClass(isActive('/contact'))}>
                Contact
              </Link>

              <Link to="/contact">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
