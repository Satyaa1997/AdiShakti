import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import logo from "../assets/AdiShakti-Logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#080101] text-white pt-10 pb-5 border-t border-[#C29D56]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Section / Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#C29D56]/20">

            {/* Column 1: Brand Info & Logo */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Ādi Shakti Logo"
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
                  className="group w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-[#C29D56] group-hover:text-[#6B1312] transition-colors duration-300"
                  >
                    <path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2Z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="group w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-[#C29D56] group-hover:text-[#6B1312] transition-colors duration-300"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26L22.827 21.75h-6.623l-5.19-6.792-5.94 6.792H1.764l7.73-8.835L1.46 2.25H8.25l4.69 6.211 5.304-6.211Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-none stroke-current text-[#C29D56] group-hover:text-[#6B1312] transition-colors duration-300"
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
                  className="group w-9 h-9 rounded-full bg-white/10 hover:bg-[#C29D56] flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-[#C29D56] group-hover:text-[#6B1312] transition-colors duration-300"
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
                    className="group flex items-center gap-1.5 text-slate-200 hover:text-[#C29D56] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C29D56] flex-shrink-0" />

                    <span>Harika Paradise</span>

                    {/* Animated Coming Soon Flag */}
                    <span className="coming-soon-flag">
                      <span className="coming-soon-text">
                        New
                      </span>
                    </span>
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

      {/* Coming Soon Flag Animation */}
      <style>{`
  .coming-soon-flag {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-left: 7px;
    padding: 4px 6px;

    width: 62px;
    min-width: 62px;

    font-size: 7px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    /* Golden Text */
    color: #C29D56;

    /* Maroon Background */
    background: linear-gradient(
      135deg,
      #4a0606 0%,
      #6b0d0d 45%,
      #4a0606 100%
    );

    /* Golden Border */
    border: 1px solid #C29D56;

    /*
      Curved / Wavy Flag Shape
    */
    clip-path: polygon(
      0% 8%,
      12% 0%,
      25% 7%,
      38% 0%,
      51% 8%,
      64% 0%,
      77% 7%,
      89% 0%,
      100% 18%,
      92% 50%,
      100% 82%,
      89% 100%,
      77% 93%,
      64% 100%,
      51% 92%,
      38% 100%,
      25% 93%,
      12% 100%,
      0% 92%
    );

    box-shadow:
      0 3px 10px rgba(0, 0, 0, 0.4),
      0 0 8px rgba(194, 157, 86, 0.25);

    white-space: nowrap;

    transform-origin: left center;

    animation:
      flagWave 1.8s ease-in-out infinite;
  }


  /*
    Text
  */
  .coming-soon-text {
    position: relative;
    z-index: 5;

    color: #C29D56;

    text-shadow:
      0 1px 3px rgba(0, 0, 0, 0.65);

    animation: textWave 1.8s ease-in-out infinite;
  }


  /*
    Small Golden Flag Pole
  */
  .coming-soon-flag::before {
    content: "";

    position: absolute;
    left: 1px;
    top: 2px;

    width: 2px;
    height: calc(100% - 4px);

    background: #C29D56;

    border-radius: 999px;
  }


  /*
    Golden Moving Highlight
  */
  .coming-soon-flag::after {
    content: "";

    position: absolute;
    inset: 0;

    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(194, 157, 86, 0.03) 25%,
      rgba(194, 157, 86, 0.35) 45%,
      rgba(194, 157, 86, 0.05) 65%,
      transparent 100%
    );

    background-size: 200% 100%;

    pointer-events: none;

    animation: flagShine 2.5s ease-in-out infinite;
  }


  /*
    Main Flag Wave
  */
  @keyframes flagWave {
    0% {
      transform:
        perspective(500px)
        rotateY(0deg)
        rotateZ(0deg)
        skewY(0deg)
        scaleX(1);
    }

    15% {
      transform:
        perspective(500px)
        rotateY(-8deg)
        rotateZ(-1deg)
        skewY(-1deg)
        scaleX(0.98);
    }

    30% {
      transform:
        perspective(500px)
        rotateY(7deg)
        rotateZ(1deg)
        skewY(1deg)
        scaleX(1.01);
    }

    45% {
      transform:
        perspective(500px)
        rotateY(-10deg)
        rotateZ(-1deg)
        skewY(-1deg)
        scaleX(0.97);
    }

    60% {
      transform:
        perspective(500px)
        rotateY(8deg)
        rotateZ(1deg)
        skewY(1deg)
        scaleX(1.01);
    }

    75% {
      transform:
        perspective(500px)
        rotateY(-6deg)
        rotateZ(-1deg)
        skewY(-1deg)
        scaleX(0.98);
    }

    100% {
      transform:
        perspective(500px)
        rotateY(0deg)
        rotateZ(0deg)
        skewY(0deg)
        scaleX(1);
    }
  }


  /*
    Text follows the movement
  */
  @keyframes textWave {
    0%,
    100% {
      transform: translateX(0);
    }

    25% {
      transform: translateX(-1px);
    }

    50% {
      transform: translateX(1px);
    }

    75% {
      transform: translateX(-1px);
    }
  }


  /*
    Moving Golden Shine
  */
  @keyframes flagShine {
    0% {
      background-position: -100% 0;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }


  /*
    Mobile
  */
  @media (max-width: 640px) {
    .coming-soon-flag {
      width: 58px;
      min-width: 58px;
      padding: 4px 5px;

      font-size: 6.5px;
      letter-spacing: 0.02em;
    }
  }
`}</style>
    </>
  );
};

export default Footer;