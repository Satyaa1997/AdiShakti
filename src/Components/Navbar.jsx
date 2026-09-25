import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

import logo from '../assets/AdiShakti-Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  // Projects list jo dropdown mein dikhegi
  const projectItems = [
    { name: 'Harika Paradise', path: '/harika-paradise' },
  ];

  return (
    <>
      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <div className="bg-black text-[#eeece9] border-b border-[#C29D56]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-7 flex items-center justify-between">

            {/* Social Icons - Left */}
            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#fdfbf7] hover:text-[#E1C48F] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-current"
                >
                  <path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2Z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#f3f2f0] hover:text-[#E1C48F] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-current"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.49 22H3.38l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.7h1.73L8.48 4.18H6.62L17.8 19.7Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#ebe7e2] hover:text-[#E1C48F] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#eee9e1] hover:text-[#E1C48F] transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-current"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.77-2-5.52-4.68-5.52-2.16 0-3.13 1.19-3.67 2.03V8.5H9.15V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.31V21H21v-7.2Z" />
                </svg>
              </a>

            </div>

            {/* Contact Number - Right */}
            <a
              href="tel:05224205350"
              className="flex items-center gap-1.5 text-[#eee8dc] hover:text-[#E1C48F] text-xs sm:text-sm font-semibold transition-colors duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0522 4205350</span>
            </a>

          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between h-20 items-center">

            {/* Image Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Ādi Shakti Logo"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain py-1"
                />
              </Link>
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">

              <Link
                to="/"
                className="text-slate-700 hover:text-[#C29D56] font-medium text-sm transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-slate-700 hover:text-[#C29D56] font-medium text-sm transition-colors"
              >
                About Us
              </Link>

              {/* Our Projects Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/harika-paradise"
                  className="flex items-center gap-1 text-slate-700 hover:text-[#C29D56] font-medium text-sm transition-colors focus:outline-none"
                >
                  Our Projects

                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 top-full w-48 bg-white border border-slate-100 rounded-lg shadow-lg py-2 z-50">
                    {projectItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#C29D56]/10 hover:text-[#6B1312] transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/why-choose"
                className="text-slate-700 hover:text-[#C29D56] font-medium text-sm transition-colors"
              >
                Why Choose Us
              </Link>

              <Link
                to="/gallery"
                className="text-slate-700 hover:text-[#C29D56] font-medium text-sm transition-colors"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="text-slate-700 hover:text-[#C29D56] font-medium text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Enquire Now CTA Button - Desktop */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:05224205350"
                className="bg-[#6B1312] hover:bg-[#520e0e] text-[#C29D56] border border-[#C29D56]/30 px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#C29D56]" />
                Enquire Now
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-[#6B1312] focus:outline-none p-2 transition-transform active:scale-95"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-5 space-y-3 shadow-lg">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#C29D56] font-medium text-base py-1"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#C29D56] font-medium text-base py-1"
            >
              About Us
            </Link>

            {/* Mobile Projects Dropdown */}
            <div className="py-1">
              <button
                onClick={() =>
                  setMobileProjectsOpen(!mobileProjectsOpen)
                }
                className="flex items-center justify-between w-full text-slate-700 hover:text-[#C29D56] font-medium text-base py-1 focus:outline-none"
              >
                <span>Our Projects</span>

                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProjectsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileProjectsOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#C29D56]/30">
                  {projectItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileProjectsOpen(false);
                      }}
                      className="block py-1.5 text-sm text-slate-600 hover:text-[#6B1312] font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/why-choose"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#C29D56] font-medium text-base py-1"
            >
              Why Choose Us
            </Link>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#C29D56] font-medium text-base py-1"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-[#C29D56] font-medium text-base py-1"
            >
              Contact Us
            </Link>

            {/* Enquire Now CTA - Mobile */}
            <div className="pt-2">
              <a
                href="tel:05224205350"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#6B1312] hover:bg-[#520e0e] text-[#C29D56] px-4 py-2.5 rounded-lg text-sm font-bold block shadow-sm transition-all"
              >
                Enquire Now
              </a>
            </div>

          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;