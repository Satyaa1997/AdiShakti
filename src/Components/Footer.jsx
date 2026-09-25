import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-[#080101] text-white pt-10 pb-5 border-t border-[#C29D56]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section / Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#C29D56]/20">

          {/* Column 1: Brand Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/src/assets/AdiShakti-Logo.png"
                alt="Harika Paradise Logo"
                className="h-20 sm:h-24 w-auto object-contain bg-white p-1.5 rounded-lg shadow-md"
              />
            </div>

            <p className="text-slate-200 text-sm leading-relaxed">
              Harika Paradise is dedicated to creating thoughtfully planned
              spaces that inspire better living, offering modern infrastructure
              and natural surroundings.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] hover:text-[#6B1312] flex items-center justify-center transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-[#C29D56]"
                >
                  <path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] hover:text-[#6B1312] flex items-center justify-center transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-[#C29D56]"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.49 22H3.38l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.7h1.73L8.48 4.18H6.62L17.8 19.7Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] hover:text-[#6B1312] flex items-center justify-center transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-current text-[#C29D56]"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] hover:text-[#6B1312] flex items-center justify-center transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-[#C29D56]"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.77-2-5.52-4.68-5.52-2.16 0-3.13 1.19-3.67 2.03V8.5H9.15V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.31V21H21v-7.2Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#C29D56] tracking-wide border-b border-[#C29D56]/30 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-200 hover:text-[#C29D56] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C29D56]" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-200 hover:text-[#C29D56] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C29D56]" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/why-choose"
                  className="text-slate-200 hover:text-[#C29D56] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C29D56]" />
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-slate-200 hover:text-[#C29D56] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C29D56]" />
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-200 hover:text-[#C29D56] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C29D56]" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Projects */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#C29D56] tracking-wide border-b border-[#C29D56]/30 pb-2">
              Our Projects
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/Component/HarikaParadise"
                  className="text-slate-200 hover:text-[#C29D56] flex items-center gap-1.5 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C29D56]" />
                  Hari Upvan
                </Link>
              </li>

             
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#C29D56] tracking-wide border-b border-[#C29D56]/30 pb-2">
              Corporate Office
            </h3>

            <div className="space-y-3 text-sm text-slate-200">

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#C29D56] flex-shrink-0 mt-0.5" />
                <span>
                  D2/540, Vikalp Khand Gomti Nagar, Nearby Kathauta Jheel,
                  Lucknow. Pin 226010
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C29D56] flex-shrink-0" />
                <span>0522 4205350</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C29D56] flex-shrink-0" />
                <span>adishak0234@gmail.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Ādi Shakti Coloniser & Homebuilders
            Pvt. Ltd. All Rights Reserved.
          </p>

          <p className="text-slate-400 text-center sm:text-right">
            Developed by:- Auctech.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;