import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Compass, Layers, Cpu, Smile, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Building2, CheckCircle2, Award, Sparkles } from 'lucide-react';

// Importing all images at the top for proper Vite bundler handling and Vercel deployment
import heroBgImg from '../assets/ADI SHAKTI GATE VIEW-NIGHT.jpeg';
import siteViewImg from '../assets/HARIKA PARADISE VIEW-7.jpeg';
import visionImg from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import missionImg from '../assets/01.jpeg';

const About = () => {
  // Counter Animation States
  const [percentCount, setPercentCount] = useState(0);
  const [acresCount, setAcresCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer to trigger counter when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate 0 to 100%
          let pStart = 0;
          const pEnd = 100;
          const pDuration = 1500;
          const pStepTime = Math.abs(Math.floor(pDuration / pEnd));
          const pTimer = setInterval(() => {
            pStart += 1;
            setPercentCount(pStart);
            if (pStart === pEnd) clearInterval(pTimer);
          }, pStepTime);

          // Animate 0 to 10.38 Acres
          let aStart = 0;
          const aEnd = 10.38;
          const aDuration = 1500;
          const aSteps = 60;
          const aIncrement = aEnd / aSteps;
          let aCurrentStep = 0;
          const aTimer = setInterval(() => {
            aCurrentStep += 1;
            aStart += aIncrement;
            if (aCurrentStep >= aSteps) {
              setAcresCount(aEnd);
              clearInterval(aTimer);
            } else {
              setAcresCount(Number(aStart.toFixed(2)));
            }
          }, aDuration / aSteps);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#C29D56] selection:text-white overflow-x-hidden">
      
      {/* Custom Geometrical Grid Pattern CSS for Light Sections */}
      <style>{`
        .light-geom-grid {
          background-image: radial-gradient(rgba(194, 157, 86, 0.28) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* ================= HERO BANNER ================= */}
      <section className="relative bg-slate-950 text-white h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden flex items-end pb-12 sm:pb-16 border-b border-[#C29D56]/30">
        
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImg} 
            alt="Corporate Background" 
            className="w-full h-full object-cover object-center transform scale-105"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C29D56]/50 text-[#C29D56] text-xs font-bold uppercase tracking-widest shadow-lg">
              <Award className="w-3.5 h-3.5 text-[#C29D56]" /> Corporate Enterprise Profile
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight">
              Ādi Shakti Coloniser & Homebuilders Pvt. Ltd.
            </h1>
            
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed drop-shadow-sm font-medium">
              Engineering sustainable master communities, uncompromised legal clarity, and architectural reliability across Lucknow's finest corridors.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: ABOUT COMPANY (VISIBLE LIGHT GEOMETRICAL BG) ================= */}
      <section ref={statsRef} className="py-12 sm:py-16 bg-slate-100 relative overflow-hidden light-geom-grid">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#C29D56]/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#6B1312]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />
            <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-[#C29D56]/30 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                    Who We Are
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
                    Setting New Benchmarks in Organized Real Estate Development
                  </h2>
                </div>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-slate-900">Ādi Shakti Coloniser & Homebuilders Pvt. Ltd.</strong> operates at the forefront of organized real estate. Headquartered in Gomti Nagar, Lucknow, our organization is structured around strategic land acquisition, robust infrastructural planning, and absolute legal transparency.
                </p>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  With a rigorous focus on Nagar Panchayat approvals and high-growth locations like Satrikh Road, we ensure that every plotted community we build delivers secure living and exceptional long-term appreciation for families and investors.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#C29D56]/60">
                    <h4 className="text-3xl font-extrabold text-[#6B1312] tabular-nums">
                      {percentCount}%
                    </h4>
                    <p className="text-xs text-slate-600 font-semibold mt-1">Approved & Verified Titles</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#C29D56]/60">
                    <h4 className="text-3xl font-extrabold text-[#6B1312] tabular-nums">
                      {acresCount} Acres
                    </h4>
                    <p className="text-xs text-slate-600 font-semibold mt-1">Flagship Master Plan</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C29D56]/40 h-[340px] sm:h-[420px] group">
                  <img 
                    src={siteViewImg} 
                    alt="Corporate & Project Site" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C29D56]">Corporate Headquarters</p>
                      <p className="text-sm font-medium">Gomti Nagar, Lucknow, Uttar Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CORE PHILOSOPHY (GRADIENT MAROON BOX + GEOMETRICAL BG) ================= */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white relative overflow-hidden border-t border-b border-[#C29D56]/30">
        
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C29D56]/15 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl space-y-12 sm:space-y-16 relative overflow-hidden">
            
            <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-[#C29D56]/20 rounded-full pointer-events-none" />

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                Core Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Driven by Vision. Dedicated to Mission.
              </h2>
              <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />
            </div>

            {/* Row 1: Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              <div className="lg:col-span-6 flex flex-col justify-between space-y-3 py-1">
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56]">Our Visionary Outlook</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    Redefining Standards of Living & Structural Reliability
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    To be the most trusted and admired real estate development enterprise across Uttar Pradesh by consistently delivering world-class, thoughtfully planned communities. We aspire to set a benchmark in architectural reliability, green urban spaces, and uncompromised customer-first values that stand the test of time.
                  </p>
                  <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                    Our long-term goal is to shape modern residential corridors that bridge everyday comfort with high-yield financial appreciation for every family who puts their trust in our name.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#C29D56] text-xs font-bold uppercase tracking-wider pt-1">
                  <Sparkles className="w-4 h-4 text-[#C29D56]" /> Excellence in Every Square Foot
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C29D56]/40 h-[260px] sm:h-[320px] lg:h-full w-full group">
                  <img 
                    src={visionImg} 
                    alt="Our Vision" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </div>

            </div>

            {/* Row 2: Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-6 border-t border-white/10">
              
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C29D56]/40 h-[260px] sm:h-[320px] lg:h-full w-full group">
                  <img 
                    src={missionImg} 
                    alt="Our Mission" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-3 py-1 order-1 lg:order-2">
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56]">Our Core Mandate</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    Engineering Secure, Sustainable & High-Growth Ecosystems
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    To engineer secure, sustainable, and high-growth residential ecosystems through meticulous layout planning, flawless legal documentation, robust infrastructure networks, and compassionate customer service at every single step of ownership.
                  </p>
                  <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                    We are committed to fostering vibrant neighborhoods equipped with wide internal roads, advanced drainage systems, and green open spaces that nurture holistic community well-being.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#C29D56] text-xs font-bold uppercase tracking-wider pt-1">
                  <Sparkles className="w-4 h-4 text-[#C29D56]" /> Absolute Legal Transparency
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OUR APPROACH (VISIBLE LIGHT GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Approach to Excellence
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Every project undergoes a rigorous four-pillar lifecycle to ensure unmatched quality and satisfaction.
              </p>
              <div className="w-16 h-1 bg-[#6B1312] mx-auto rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-xl hover:border-[#C29D56]/60 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#6B1312] text-[#C29D56] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5 text-[#C29D56]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">1. Planning</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Strategic location scouting, master layout design, and rigorous regulatory checks to ensure optimal space utilization and compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-xl hover:border-[#C29D56]/60 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#6B1312] text-[#C29D56] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-[#C29D56]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">2. Development</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Executing land shaping, demarcation, green park allocation, and gated community structuring with precise engineering standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-xl hover:border-[#C29D56]/60 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#6B1312] text-[#C29D56] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 text-[#C29D56]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">3. Infrastructure</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Building robust internal roads, underground wiring networks, efficient drainage systems, and modern street lighting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-xl hover:border-[#C29D56]/60 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#6B1312] text-[#C29D56] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Smile className="w-5 h-5 text-[#C29D56]" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">4. Customer Experience</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Providing hassle-free documentation, clear title deeds, dedicated support, and complete assistance at every ownership milestone.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CORPORATE HEADQUARTERS & CONTACT (GRADIENT MAROON BOX + GEOMETRICAL BG) ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-[#C29D56]/30 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -top-12 -right-12 w-32 h-32 border border-[#C29D56]/20 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                  Get in Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Corporate Headquarters
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Ādi Shakti Coloniser & Homebuilders Pvt. Ltd. welcomes clients, partners, and investors to visit our corporate office in Lucknow for consultations.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#C29D56]/15 border border-[#C29D56]/40 flex items-center justify-center text-[#C29D56] flex-shrink-0 shadow-lg">
                      <MapPin className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#C29D56]">Office Address</h3>
                      <p className="text-slate-200 text-xs mt-0.5 leading-relaxed">D2/540, Vikalp Khand, Gomti Nagar, Near Kathauta Jheel, Lucknow – 226010</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#C29D56]/15 border border-[#C29D56]/40 flex items-center justify-center text-[#C29D56] flex-shrink-0 shadow-lg">
                      <Phone className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#C29D56]">Phone Line</h3>
                      <p className="text-slate-200 text-xs mt-0.5">0522 4205350</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#C29D56]/15 border border-[#C29D56]/40 flex items-center justify-center text-[#C29D56] flex-shrink-0 shadow-lg">
                      <Mail className="w-4 h-4 text-[#C29D56]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#C29D56]">Official Email</h3>
                      <p className="text-slate-200 text-xs mt-0.5">adishak0234@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#C29D56]/40 space-y-4 shadow-xl">
                <h3 className="text-xl font-bold text-white">Looking for Our Flagship Project?</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Explore <strong className="text-[#C29D56]">Harika Paradise</strong> on Satrikh Road—our 10.38-acre gated community offering premium residential plots designed for elite family living.
                </p>
                <div className="pt-2">
                  <Link
                    to="/harika-paradise"
                    className="inline-flex items-center gap-2 bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-2xl transition-all group"
                  >
                    Explore Harika Paradise <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;