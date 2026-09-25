import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, ShieldCheck, PhoneCall, 
  Compass, ArrowRight, Landmark, Trees, 
  FileText, Layers, Sparkles, TrendingUp, Shield, ArrowUpRight 
} from 'lucide-react';

// Importing all images at the top for proper Vite bundler handling and Vercel deployment
import heroBgImg from '../assets/ADI SHAKTI GATE VIEW-NIGHT.jpeg';
import plannedDevImg from '../assets/ADI SHAKTI GATE VIEW-NIGHT.jpeg';
import locationFocusImg from '../assets/04.jpeg';

const WhyChoose = () => {
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

        /* Javierrocadev Expandable Card Custom Styles (Compact Sizing) */
        .javier-card {
          width: 100%;
          max-width: 240px;
          height: 270px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 10px;
          background-color: #ffffff;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          margin: 0 auto;
        }

        .javier-card::before {
          content: "";
          width: 240px;
          height: 95px;
          position: absolute;
          top: 0;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
          border-bottom: 3px solid #fefefe;
          background: linear-gradient(40deg, #120303 0%, #6B1312 50%, #C29D56 100%);
          transition: all 0.5s ease;
        }

        .javier-card * {
          z-index: 1;
        }

        .javier-image-box {
          width: 65px;
          height: 65px;
          background-color: #6B1312;
          border-radius: 50%;
          border: 3px solid #fefefe;
          margin-top: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C29D56;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
          transition: all 0.5s ease;
        }

        .javier-card-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          transition: all 0.5s ease;
        }

        .javier-card-info span {
          font-weight: 800;
          font-size: 1.05rem;
          color: #1e293b;
          margin-top: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .javier-card-info p {
          color: #64748b;
          font-size: 0.77rem;
          line-height: 1.45;
        }

        .javier-button {
          text-decoration: none;
          background-color: #6B1312;
          color: white;
          padding: 5px 14px;
          border-radius: 6px;
          border: 1px solid white;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.5s ease;
          display: inline-flex;
          align-items: center;
          gap: 3px;
        }

        .javier-card:hover::before {
          width: 240px;
          height: 270px;
          border-bottom: none;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
          transform: scale(0.96);
        }

        .javier-card:hover .javier-card-info {
          transform: translateY(-10px);
        }

        .javier-card:hover .javier-card-info span,
        .javier-card:hover .javier-card-info p {
          color: #ffffff;
        }

        .javier-card:hover .javier-image-box {
          transform: scale(1.5) translate(-30%, -25%);
          background-color: #120303;
          border-color: #C29D56;
        }

        .javier-button:hover {
          background-color: #C29D56;
          color: #120303;
          transform: scale(1.08);
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-950 text-white h-[440px] sm:h-[500px] lg:h-[540px] overflow-hidden flex items-end pb-12 sm:pb-16 border-b border-[#C29D56]/30">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImg} 
            alt="Why Choose Us Hero" 
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse-glow brightness-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 text-left">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C29D56]/50 text-[#C29D56] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-xl">
              <Sparkles className="w-3 h-3 text-[#C29D56]" /> Ādi Shakti Coloniser & Homebuilders
            </div>
            
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white drop-shadow-lg leading-tight uppercase">
              Why Choose Us
            </h1>
            
            <p className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-sm max-w-xl leading-relaxed">
              Built on a foundation of legal transparency, strategic location planning, and uncompromised structural engineering across Lucknow.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: PLANNED DEVELOPMENT (LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 relative overflow-hidden light-geom-grid">
        {/* Ambient Decorative Glows */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#6B1312]/15 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            {/* Geometric Accent Line */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />
            <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-[#C29D56]/30 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                    Our Development Approach
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    Planned Development Rooted in Legal Integrity
                  </h2>
                </div>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  At Ādi Shakti Coloniser, we believe that true real estate value begins with absolute legal security and methodical land procurement. Every project is conceived after rigorous due diligence, clear title verifications, and compliance with local municipal bodies like Nagar Panchayat approvals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-[#C29D56]/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#6B1312]/10 flex items-center justify-center text-[#6B1312] flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#6B1312]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">100% Clear Titles</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Verified land ownership with hassle-free registry.</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-[#C29D56]/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#C29D56]/15 flex items-center justify-center text-[#C29D56] flex-shrink-0 mt-0.5">
                      <Landmark className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Approved Frameworks</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Fully sanctioned layouts meeting municipal guidelines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C29D56]/30 h-[280px] sm:h-[340px] group">
                  <img 
                    src={plannedDevImg} 
                    alt="Planned Development" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: PROJECT PLANNING (DARK MAROON GEOMETRICAL BG) ================= */}
      <section className="py-14 sm:py-18 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-[#C29D56]/30 relative overflow-hidden">
        
        {/* Glows & Cyber Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-12 -left-12 w-36 h-36 border border-[#C29D56]/20 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-36 h-36 border border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                Infrastructure & Design
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Comprehensive Project Planning
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Engineered for longevity, smooth transit, and sustainable community living. Hover over cards to explore.
              </p>
              <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center relative z-10">
              
              {/* Card 1: Infrastructure */}
              <div className="javier-card">
                <div className="javier-image-box">
                  <Layers className="w-7 h-7 text-[#C29D56]" />
                </div>
                <div className="javier-card-info">
                  <span>Infrastructure</span>
                  <p>Wide internal bitumen & concrete roads, underground stormwater drainage, and reliable electricity provisioning.</p>
                </div>
                <Link to="/contact" className="javier-button">
                  Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 2: Green Open Spaces */}
              <div className="javier-card">
                <div className="javier-image-box">
                  <Trees className="w-7 h-7 text-[#C29D56]" />
                </div>
                <div className="javier-card-info">
                  <span>Green Spaces</span>
                  <p>Thoughtfully allocated landscape parks, children play zones, and lush avenue tree plantation for serene living.</p>
                </div>
                <Link to="/contact" className="javier-button">
                  Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 3: Gated Security */}
              <div className="javier-card">
                <div className="javier-image-box">
                  <Shield className="w-7 h-7 text-[#C29D56]" />
                </div>
                <div className="javier-card-info">
                  <span>Gated Security</span>
                  <p>Secure compound boundary walls, grand entrance portals with round-the-clock surveillance, and bright street lighting.</p>
                </div>
                <Link to="/contact" className="javier-button">
                  Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LOCATION FOCUS (LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />
            <div className="absolute -bottom-10 -right-10 w-28 h-28 border border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C29D56]/30 h-[280px] sm:h-[340px] group">
                  <img 
                    src={locationFocusImg} 
                    alt="Location Focus" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                    Strategic Corridors
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    Location Focus & High-Growth Approach
                  </h2>
                </div>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We handpick land parcels along fast-developing urban corridors like Satrikh Road, Lucknow. Our location strategy ensures seamless connectivity to major highways, educational institutions, healthcare centers, and upcoming commercial hubs while keeping residents tucked away in peaceful surroundings.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-[#C29D56]/50 transition-colors">
                    <Compass className="w-4 h-4 text-[#C29D56]" />
                    <span className="text-xs font-bold text-slate-800">Proximity to major arterial roads & ring roads (e.g., Kisan Path)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-[#C29D56]/50 transition-colors">
                    <TrendingUp className="w-4 h-4 text-[#6B1312]" />
                    <span className="text-xs font-bold text-slate-800">High capital appreciation potential for investors</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CUSTOMER EXPERIENCE (DARK MAROON GEOMETRICAL BG) ================= */}
      <section className="py-14 sm:py-18 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-[#C29D56]/30 relative overflow-hidden">
        
        {/* Decorative Background Glows & Circles */}
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 right-5 w-72 h-72 bg-[#6B1312]/20 rounded-full filter blur-[90px] pointer-events-none" />
        
        {/* Decorative SVG Flowing Connector Line across background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
          <svg className="w-full h-40 max-w-6xl" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100C300 20 400 180 650 100C900 20 1000 180 1150 100" stroke="#C29D56" strokeWidth="2.5" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl relative overflow-hidden">
            
            {/* Corner Decorative Accent Rings */}
            <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-[#C29D56]/20 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border-2 border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                Seamless Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Customer Experience & Process
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                From your first query to final documentation, we ensure a transparent, supportive journey.
              </p>
              <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3 relative group hover:border-[#C29D56]/50 transition-all">
                <span className="absolute top-3 right-3 text-2xl font-black text-[#C29D56]/30">01</span>
                <div className="w-9 h-9 rounded-xl bg-[#C29D56]/20 flex items-center justify-center text-[#C29D56] shadow-inner">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-white">1. Enquiry & Consultation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect with our advisory team via phone or website. We understand your budget, preferred size, and investment goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3 relative group hover:border-[#C29D56]/50 transition-all">
                <span className="absolute top-3 right-3 text-2xl font-black text-[#C29D56]/30">02</span>
                <div className="w-9 h-9 rounded-xl bg-[#C29D56]/20 flex items-center justify-center text-[#C29D56] shadow-inner">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-white">2. Guided Site Visit</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We arrange complimentary site visits to Harika Paradise so you can inspect development progress and surrounding infrastructure firsthand.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3 relative group hover:border-[#C29D56]/50 transition-all">
                <span className="absolute top-3 right-3 text-2xl font-black text-[#C29D56]/30">03</span>
                <div className="w-9 h-9 rounded-xl bg-[#C29D56]/20 flex items-center justify-center text-[#C29D56] shadow-inner">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-white">3. Plot Selection</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Choose your ideal plot from our master layout plan based on road width, orientation, and dimensions matching your dream home blueprint.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3 relative group hover:border-[#C29D56]/50 transition-all">
                <span className="absolute top-3 right-3 text-2xl font-black text-[#C29D56]/30">04</span>
                <div className="w-9 h-9 rounded-xl bg-[#C29D56]/20 flex items-center justify-center text-[#C29D56] shadow-inner">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-white">4. Transparent Documentation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete legal verification, hassle-free registry, and transparent paperwork backed by our expert legal consultants.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= PREMIUM ELEVATED WHITE CTA SECTION (LIGHT GEOMETRICAL BG) ================= */}
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
                Ready to Secure Your Future at Harika Paradise?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Schedule a complimentary guided site visit or speak directly with our real estate advisory team for plot availability and transparent pricing.
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

    </div>
  );
};

export default WhyChoose;