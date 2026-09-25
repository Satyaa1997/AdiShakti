import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, Maximize2, ShieldCheck, PhoneCall, 
  Compass, Download, X, Trees, Sparkles, LayoutGrid, Store, 
  Baby, SunMedium, Waves, Home, ArrowRight, Landmark, ZoomIn, ZoomOut, RotateCcw, CheckCircle2, Navigation 
} from 'lucide-react';

// Importing all images at the top for proper Vite bundler handling and Vercel deployment
import heroGateImg from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import projOverviewImg from '../assets/01.jpeg';
import sitePlanImg from '../assets/01.jpeg';

import roadImg from '../assets/04.jpeg';
import surroundingsImg from '../assets/01.jpeg';
import clubHouseImg from '../assets/Club House.jpg';
import landscapeImg from '../assets/Landscape.jpg';
import playAreaImg from '../assets/Playarea.jpg';
import streetlightImg from '../assets/Streetlight.jpg';
import commercialImg from '../assets/Comercial.jpg';
import entranceGateImg from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import waterSupplyImg from '../assets/Water Supply.jpg';
import drainageImg from '../assets/Dranage.jfif';
import entertainmentImg from '../assets/Entertainment.jpg';

import galleryGateImg from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import galleryRoadsImg from '../assets/04.jpeg';
import galleryLandscapingImg from '../assets/HARIKA PARADISE VIEW-5.jpeg';
import galleryAmenitiesImg from '../assets/HARIKA PARADISE VIEW-6.jpeg';
import galleryPlotViewImg from '../assets/HARIKA PARADISE PLOT VIEW-3.jpeg';
import gallerySitePlanImg from '../assets/HARIKA PARADISE VIEW-7.jpeg';

const HarikaParadise = () => {
  // Lightbox & Zoom state for site plan & gallery
  const [lightboxImg, setLightboxImg] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');

  // Plot Sizes Data
  const plotSizes = [
    { dimensions: "30 × 60", sqft: "1800 sq.ft." },
    { dimensions: "30 × 55", sqft: "1650 sq.ft." },
    { dimensions: "25 × 60", sqft: "1500 sq.ft." },
    { dimensions: "25 × 55", sqft: "1375 sq.ft." },
    { dimensions: "25 × 40", sqft: "1000 sq.ft." },
    { dimensions: "30 × 50", sqft: "1500 sq.ft." },
    { dimensions: "25 × 50", sqft: "1250 sq.ft." },
    { dimensions: "50 × 50", sqft: "2500 sq.ft." },
    { dimensions: "40 × 50", sqft: "2000 sq.ft." }
  ];

  // 11 Unique Amenities Data with Unique Icons & Matching Images
  const amenitiesList = [
    { 
      title: "Road Network", 
      desc: "Smooth wide internal pathways designed for effortless vehicle movement.", 
      icon: <Compass className="w-8 h-8 text-[#C29D56]" />,
      image: roadImg 
    },
    { 
      title: "Surroundings", 
      desc: "Serene, pollution-free natural environment for peaceful family living.", 
      icon: <Trees className="w-8 h-8 text-[#C29D56]" />,
      image: surroundingsImg 
    },
    { 
      title: "Club House", 
      desc: "Exclusive community leisure and social gathering hub for residents.", 
      icon: <Building2 className="w-8 h-8 text-[#C29D56]" />,
      image: clubHouseImg 
    },
    { 
      title: "Landscaping", 
      desc: "Bountiful green parks, open lawns, and beautifully manicured tracks.", 
      icon: <Sparkles className="w-8 h-8 text-[#C29D56]" />,
      image: landscapeImg 
    },
    { 
      title: "Play Area", 
      desc: "Safe, dedicated recreational zones equipped for children's activities.", 
      icon: <Baby className="w-8 h-8 text-[#C29D56]" />,
      image: playAreaImg 
    },
    { 
      title: "Street Lighting", 
      desc: "Advanced illuminated pathways ensuring secure night-time strolls.", 
      icon: <SunMedium className="w-8 h-8 text-[#C29D56]" />,
      image: streetlightImg 
    },
    { 
      title: "Commercial", 
      desc: "Daily need shops and commercial convenience right at your doorstep.", 
      icon: <Store className="w-8 h-8 text-[#C29D56]" />,
      image: commercialImg 
    },
    { 
      title: "Entrance Gate", 
      desc: "Secure, majestic gated entry portal with 24/7 security surveillance.", 
      icon: <ShieldCheck className="w-8 h-8 text-[#C29D56]" />,
      image: entranceGateImg 
    },
    { 
      title: "Water Supply", 
      desc: "Reliable round-the-clock water supply provision across all plots.", 
      icon: <Waves className="w-8 h-8 text-[#C29D56]" />,
      image: waterSupplyImg 
    },
    { 
      title: "Drainage System", 
      desc: "Clean and robust underground sanitation and stormwater drainage.", 
      icon: <LayoutGrid className="w-8 h-8 text-[#C29D56]" />,
      image: drainageImg 
    },
    { 
      title: "Entertainment", 
      desc: "Open-air gathering and cultural event arenas for community bonding.", 
      icon: <Home className="w-8 h-8 text-[#C29D56]" />,
      image: entertainmentImg 
    }
  ];

  // Key Highlights Data for Site Plan Section
  const siteHighlights = [
    "10.38 Acres Master Planned Plotted Community",
    "Nagar Panchayat Approved Layout & Clear Legal Titles",
    "Strategically Located on High-Growth Satrikh Road",
    "Wide Internal Concrete Roads with Avenue Plantation",
    "Gated Enclave with 24/7 Security & Boundary Wall",
    "Ready for Immediate Registry & Construction"
  ];

  // Connectivity Distances Data
  const connectivityData = [
    { destination: "Ayodhya Road", distance: "5 Km", time: "10 Mins" },
    { destination: "Kishan Path", distance: "9 Km", time: "15 Mins" },
    { destination: "Chinhut", distance: "15.6 Km", time: "25 Mins" },
    { destination: "Polytechnic", distance: "18 Km", time: "30 Mins" },
    { destination: "Ahmamau", distance: "27 Km", time: "40 Mins" }
  ];

  // Project Gallery Data with Categories
  const galleryPhotos = [
    { category: "Entrance", src: galleryGateImg, alt: "Grand Entrance Gate" },
    { category: "Roads", src: galleryRoadsImg, alt: "Planned Internal Roads" },
    { category: "Landscaping", src: galleryLandscapingImg, alt: "Green Open Spaces" },
    { category: "Amenities", src: galleryAmenitiesImg, alt: "Clubhouse & Lifestyle" },
    { category: "Site development", src: galleryPlotViewImg, alt: "Infrastructure Development" },
    { category: "Site plan", src: gallerySitePlanImg, alt: "Master Layout Plan" }
  ];

  const filteredGallery = activeGalleryTab === 'All' 
    ? galleryPhotos 
    : galleryPhotos.filter(item => item.category.toLowerCase() === activeGalleryTab.toLowerCase());

  // Handlers for zooming
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#C29D56] selection:text-white overflow-x-hidden">
      
      {/* Custom Geometrical Grid Pattern CSS for Light Sections */}
      <style>{`
        .light-geom-grid {
          background-image: radial-gradient(rgba(194, 157, 86, 0.28) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.04); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }

        /* Right to Left Marquee for Plot Cards */
        @keyframes slideRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: slideRightToLeft 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Left to Right Marquee for Amenities Cards */
        @keyframes slideLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: slideLeftToRight 45s linear infinite;
        }
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }

        /* Book Cover Flip Styles */
        .book-card {
          position: relative;
          border-radius: 16px;
          width: 220px;
          height: 310px;
          background-color: #f8fafc;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transform-style: preserve-3d;
          perspective: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
        }

        .book-cover {
          top: 0;
          left: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: left;
          transform-style: preserve-3d;
          box-shadow: 5px 5px 20px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .book-card:hover .book-cover {
          transform: rotateY(-85deg);
        }
      `}</style>

      {/* ================= PROJECT HERO SECTION ================= */}
      <section className="relative bg-slate-950 text-white h-[380px] sm:h-[420px] lg:h-[460px] overflow-hidden flex items-end pb-10 sm:pb-14 border-b border-[#C29D56]/30">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroGateImg} 
            alt="Harika Paradise Hero" 
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse-glow"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="max-w-2xl space-y-2">
            
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight uppercase">
              Harika Paradise
            </h1>
            
            <p className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-sm flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1 text-[#C29D56]"><MapPin className="w-3.5 h-3.5" /> Satrikh Road, Lucknow</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>10.38 Acres Gated Enclave</span>
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="#plot-sizes"
                className="bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-4 py-2 rounded-xl font-bold text-xs shadow-xl transition-all flex items-center gap-1.5 group"
              >
                Explore Plots <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="bg-[#6B1312] hover:bg-[#520e0e] text-white border border-[#C29D56]/40 px-4 py-2 rounded-xl font-bold text-xs shadow-xl transition-all flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C29D56]" /> Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5.1 PROJECT OVERVIEW (LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 relative overflow-hidden light-geom-grid">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#C29D56]/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#6B1312]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />
            <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-[#C29D56]/30 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3 py-0.5 rounded-full border border-[#C29D56]/30">
                    Overview
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
                    Harika Paradise — Master Planned Living
                  </h2>
                </div>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Harika Paradise is a thoughtfully curated 10.38-acre plotted residential community situated on the high-growth Satrikh Road corridor in Lucknow. Designed for modern families seeking tranquility and absolute legal safety.
                </p>

                {/* Specification Grid Cards with Icons */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#6B1312]/10 flex items-center justify-center text-[#6B1312] flex-shrink-0">
                      <Building2 className="w-4 h-4 text-[#6B1312]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Project Name</span>
                      <span className="text-xs font-bold text-slate-900">Harika Paradise</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C29D56]/15 flex items-center justify-center text-[#C29D56] flex-shrink-0">
                      <Landmark className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Presented By</span>
                      <span className="text-xs font-bold text-[#6B1312]">Ādi Shakti Coloniser</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#6B1312]/10 flex items-center justify-center text-[#6B1312] flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#6B1312]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Approved By</span>
                      <span className="text-xs font-bold text-slate-900">Nagar Panchayat</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C29D56]/15 flex items-center justify-center text-[#C29D56] flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Location</span>
                      <span className="text-xs font-bold text-slate-900">Satrikh Road</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#6B1312]/10 flex items-center justify-center text-[#6B1312] flex-shrink-0">
                      <Maximize2 className="w-4 h-4 text-[#6B1312]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Total Area</span>
                      <span className="text-xs font-bold text-slate-900">10.38 Acres</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C29D56]/15 flex items-center justify-center text-[#C29D56] flex-shrink-0">
                      <LayoutGrid className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Unit Type</span>
                      <span className="text-xs font-bold text-slate-900">Residential Plots</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C29D56]/30 h-[280px] sm:h-[350px] group animate-float-slow">
                  <img 
                    src={projOverviewImg} 
                    alt="Harika Paradise Overview" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#6B1312] text-[#C29D56] font-bold text-[11px] px-3 py-1 rounded-lg shadow-lg border border-[#C29D56]/40">
                    Nagar Panchayat Approved
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 5.2 PLOT SIZES (DARK MAROON GEOMETRICAL BG) ================= */}
      <section id="plot-sizes" className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-10 -left-10 w-28 h-28 border border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                Inventory Showcase
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Choose Your Plot
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Explore our flexible plot dimensions tailored for your dream home or high-yield investment. (Hover to pause)
              </p>
              <div className="w-14 h-1 bg-[#C29D56] mx-auto rounded-full mt-1.5" />
            </div>

            {/* Right-to-Left Infinite Sliding Marquee */}
            <div className="w-full overflow-hidden py-4">
              <div className="animate-marquee flex gap-5 px-3">
                {[...plotSizes, ...plotSizes].map((plot, idx) => (
                  <div 
                    key={idx} 
                    className="w-[220px] h-[240px] rounded-[20px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] p-4 relative shadow-[0_15px_30px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:scale-95 border border-slate-300 flex-shrink-0 flex flex-col justify-between overflow-hidden group"
                  >
                    <div className="absolute -top-2 -left-2 w-[110px] h-[110px] overflow-hidden pointer-events-none">
                      <span className="absolute top-[20px] -left-[30px] w-[130px] h-[28px] bg-gradient-to-r from-[#6B1312] via-[#C29D56] to-[#6B1312] transform -rotate-45 flex items-center justify-center text-white font-bold text-[9px] tracking-widest uppercase shadow-sm">
                        Premium
                      </span>
                    </div>

                    <div className="pt-4 space-y-1 text-right">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B1312]">
                        Plot #{idx % plotSizes.length + 1}
                      </span>
                    </div>

                    <div className="space-y-0.5 text-center">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        {plot.dimensions}
                      </h3>
                      <p className="text-xs font-bold text-[#6B1312]">
                        {plot.sqft}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-300 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-500">Clear Title</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 bg-[#6B1312] hover:bg-[#520e0e] text-[#C29D56] border border-[#C29D56]/40 px-3 py-1 rounded-lg font-bold text-[11px] shadow-sm transition-all"
                      >
                        Enquire <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5.3 AMENITIES (LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 overflow-hidden relative light-geom-grid">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                Lifestyle & Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                World-Class Amenities
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Designed to provide absolute comfort, recreation, and modern convenience within the gated community. (Hover to open book)
              </p>
              <div className="w-16 h-1 bg-[#6B1312] mx-auto rounded-full mt-2" />
            </div>

            {/* Left-to-Right Marquee for Book Cover Flip Cards */}
            <div className="w-full overflow-hidden py-4">
              <div className="animate-marquee-left flex gap-6 px-3">
                {[...amenitiesList, ...amenitiesList].map((amenity, idx) => (
                  <div 
                    key={idx} 
                    className="book-card"
                  >
                    <div className="absolute inset-0 p-4 flex flex-col justify-between text-left z-0 bg-white rounded-2xl border border-slate-200">
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-extrabold text-[#6B1312] uppercase tracking-widest block">
                          Feature Details
                        </span>
                        <h4 className="text-sm font-black text-[#6B1312] uppercase tracking-wide">
                          {amenity.title}
                        </h4>
                        <p className="text-[11px] text-slate-700 font-medium leading-relaxed">
                          {amenity.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-[#C29D56]">Harika Paradise</span>
                        <Link
                          to="/contact"
                          className="text-[10px] font-black text-[#6B1312] hover:text-[#C29D56] uppercase tracking-wider underline"
                        >
                          Enquire
                        </Link>
                      </div>
                    </div>

                    <div className="book-cover">
                      <div className="absolute inset-0">
                        <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover brightness-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      <div className="relative z-10 p-4 flex flex-col items-center justify-between h-full text-white text-center w-full">
                        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-[#C29D56] border border-[#C29D56]/40 shadow-md">
                          {amenity.icon}
                        </div>

                        <div className="space-y-1 my-auto">
                          <h3 className="text-sm font-black uppercase tracking-wide text-[#6B1312] bg-white/95 px-3 py-1 rounded-md shadow-md">
                            {amenity.title}
                          </h3>
                        </div>

                        <span className="text-[9px] font-bold text-slate-300 tracking-widest uppercase">
                          Harika Living
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5.4 SITE PLAN (DARK MAROON GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden border-t border-[#C29D56]/30">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C29D56]/15 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-10 border border-[#C29D56]/30 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-12 -left-12 w-32 h-32 border border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3 py-0.5 rounded-full">
                Master Blueprint
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                Project Site Plan
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Inspect the comprehensive layout plan, road networks, and plot demarcations.
              </p>
              <div className="w-14 h-1 bg-[#C29D56] mx-auto rounded-full mt-1.5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-[#C29D56]/40 shadow-xl">
              
              <div className="lg:col-span-6 space-y-3">
                <div className="relative rounded-xl overflow-hidden h-[240px] sm:h-[300px] border border-white/10 group cursor-pointer shadow-lg">
                  <img 
                    src={sitePlanImg} 
                    alt="Site Plan Master Blueprint" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onClick={() => {
                      setLightboxImg(sitePlanImg);
                      setZoomLevel(1);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/50 px-4 py-2 rounded-lg font-bold text-xs shadow-lg">
                      <ZoomIn className="w-4 h-4" /> Click to Zoom & View
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <button
                    onClick={() => {
                      setLightboxImg(sitePlanImg);
                      setZoomLevel(1);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-4 py-2 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <ZoomIn className="w-3.5 h-3.5" /> View Full Screen & Zoom
                  </button>
                  
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Site Plan PDF download initiated successfully!");
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#6B1312] hover:bg-[#520e0e] text-white border border-[#C29D56]/40 px-4 py-2 rounded-xl font-bold text-xs shadow-md transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C29D56]" /> Download Site Plan
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C29D56]">Key Highlights</span>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    Why Harika Paradise Master Plan Stands Out
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Every square foot of Harika Paradise is engineered to offer maximum ventilation, wide approach roads, and absolute transparency in plot demarcations.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  {siteHighlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#C29D56] flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-200">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 5.5 CONNECTIVITY & LOCATION ADVANTAGES (LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />

            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 border border-[#C29D56]/30 px-3 py-0.5 rounded-full">
                Connectivity
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Satrikh Road, Lucknow Location Advantages
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Effortless transit connectivity to major city landmarks and highways.
              </p>
              <div className="w-14 h-1 bg-[#6B1312] mx-auto rounded-full mt-1.5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-2.5">
                {connectivityData.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3.5 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#6B1312]/10 flex items-center justify-center text-[#6B1312] group-hover:bg-[#6B1312] group-hover:text-white transition-colors">
                        <Navigation className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">{item.destination}</h4>
                        <span className="text-[10px] text-slate-500 font-medium">Approx. travel time: {item.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#6B1312] bg-[#C29D56]/15 border border-[#C29D56]/30 px-3 py-1 rounded-full shadow-sm">
                        {item.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#C29D56]/30 h-[260px] sm:h-[310px] bg-slate-200 flex items-center justify-center">
                  <iframe 
                    title="Satrikh Road Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.458641477435!2d81.0478!3d26.8523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMlDCsDUxJzA4LjMiTiA4MsKwMDInNTEuMiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                    className="w-full h-full border-0 filter contrast-105" 
                    allowFullScreen="" 
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold border border-[#C29D56]/40">
                    📍 Satrikh Road Corridor, Lucknow
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 5.6 PROJECT GALLERY (DARK MAROON GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-12 -right-12 w-32 h-32 border border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                Visual Showcase
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Project Gallery
              </h2>
              <div className="w-14 h-1 bg-[#C29D56] mx-auto rounded-full mt-1.5" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
              {['All', 'Entrance', 'Roads', 'Landscaping', 'Amenities', 'Site development', 'Site plan'].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                    activeGalleryTab === tab 
                      ? 'bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/40' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGallery.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setLightboxImg(item.src);
                    setZoomLevel(1);
                  }}
                  className="relative rounded-xl overflow-hidden shadow-sm h-[220px] cursor-pointer border border-white/10 group"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                    <span className="text-white bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/40 px-3 py-1.5 rounded-lg font-bold text-xs shadow-md">
                      {item.alt} (Expand & Zoom)
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5.7 ENQUIRY CTA (LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />

            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3 py-1 rounded-full border border-[#C29D56]/30">
                Take The Next Step
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Interested in Harika Paradise?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Find the right plot for your requirements. Connect with our sales advisory team today for exclusive pricing and site visits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
              <Link
                to="/contact"
                className="bg-[#6B1312] hover:bg-[#520e0e] text-white px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 group"
              >
                Enquire Now <ArrowRight className="w-4 h-4 text-[#C29D56] group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:05224205350"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#6B1312]" /> Call: 0522 4205350
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Zoomable Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
          
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-50">
            <button
              onClick={handleZoomIn}
              className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-all shadow-md"
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5 text-[#C29D56]" />
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-all shadow-md"
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5 text-[#C29D56]" />
            </button>
            <button
              onClick={handleResetZoom}
              className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-all shadow-md"
              title="Reset Zoom"
            >
              <RotateCcw className="w-5 h-5 text-[#C29D56]" />
            </button>
            <button 
              onClick={() => {
                setLightboxImg(null);
                setZoomLevel(1);
              }}
              className="bg-[#6B1312] hover:bg-[#520e0e] text-white p-2.5 rounded-full transition-all shadow-md border border-[#C29D56]/40 ml-2"
              title="Close"
            >
              <X className="w-6 h-6 text-[#C29D56]" />
            </button>
          </div>

          <div className="w-full h-full flex items-center justify-center overflow-auto p-2 sm:p-10">
            <img 
              src={lightboxImg} 
              alt="Zoomable Master Plan" 
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.3s ease' }}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/20 cursor-grab active:cursor-grabbing" 
            />
          </div>

          <div className="absolute bottom-4 text-slate-400 text-xs bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            Use Zoom buttons (+ / - / Reset) to inspect details | Click Cross (X) to close
          </div>

        </div>
      )}

    </div>
  );
};

export default HarikaParadise;