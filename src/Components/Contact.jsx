import React, { useState } from 'react';
import heroImage from '../assets/ADI SHAKTI GATE VIEW-NIGHT.jpeg';
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Sparkles,
  ChevronDown,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      question: 'What are the visiting hours for Harika Paradise?',
      answer:
        'Available all days between 10:00 AM to 6:00 PM. Please call ahead to coordinate.',
    },
    {
      question: 'Are bank loans available for plots?',
      answer:
        'Yes, we have tie-ups with leading nationalized and private banks.',
    },
    {
      question: 'What documents are required for booking?',
      answer:
        'Valid ID proof (Aadhar/PAN), address proof, and passport-size photographs.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#C29D56] selection:text-white overflow-x-hidden">

      {/* ================= CUSTOM CSS ================= */}
      <style>{`
        .light-geom-grid {
          background-image: radial-gradient(
            rgba(194, 157, 86, 0.28) 1.5px,
            transparent 1.5px
          );
          background-size: 24px 24px;
        }

        .javier-card {
          width: 100%;
          max-width: 250px;
          height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 8px;
          background-color: #ffffff;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          border: 1px solid #e2e8f0;
          margin: 0 auto;
          text-decoration: none;
        }

        .javier-card::before {
          content: "";
          width: 250px;
          height: 85px;
          position: absolute;
          top: 0;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
          border-bottom: 3px solid #fefefe;
          background: linear-gradient(
            40deg,
            #120303 0%,
            #6B1312 50%,
            #C29D56 100%
          );
          transition: all 0.5s ease;
        }

        .javier-card * {
          z-index: 1;
        }

        .javier-image-box {
          width: 58px;
          height: 58px;
          background-color: #6B1312;
          border-radius: 50%;
          border: 3px solid #fefefe;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C29D56;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.5s ease;
        }

        .javier-card-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 14px;
          transition: all 0.5s ease;
        }

        .javier-card-info span {
          font-weight: 800;
          font-size: 0.95rem;
          color: #1e293b;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .javier-card-info h3 {
          font-weight: 900;
          font-size: 1rem;
          color: #0f172a;
        }

        .javier-card-info p {
          color: #64748b;
          font-size: 0.73rem;
          line-height: 1.35;
        }

        .javier-card:hover::before {
          width: 250px;
          height: 250px;
          border-bottom: none;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
          transform: scale(0.96);
        }

        .javier-card:hover .javier-card-info {
          transform: translateY(-8px);
        }

        .javier-card:hover .javier-card-info span,
        .javier-card:hover .javier-card-info h3,
        .javier-card:hover .javier-card-info p {
          color: #ffffff;
        }

        .javier-card:hover .javier-image-box {
          transform: scale(1.4) translate(-25%, -20%);
          background-color: #120303;
          border-color: #C29D56;
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-center bg-[#120303] text-center border-b border-[#C29D56]/30">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Harika Paradise"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Almost Invisible Overlay */}
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px] pointer-events-none" />

        {/* Very Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#C29D56 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Decorative Rings */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C29D56]/20 pointer-events-none" />

        <div className="absolute -left-24 -bottom-10 h-60 w-60 rounded-full border border-[#C29D56]/10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">

          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C29D56]/60 bg-black/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FFF1C7] backdrop-blur-[2px] shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
            <Sparkles size={13} className="text-[#C29D56]" />
            Get In Touch
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
            Your next chapter

            <span className="block mt-1 bg-gradient-to-r from-[#FFF1C7] via-[#C29D56] to-[#FFF1C7] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
              starts with a conversation.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-white font-medium drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
            Have a question about Harika Paradise? Let’s talk about your plans,
            explore your options and arrange a visit with our team.
          </p>

        </div>
      </section>

      {/* ================= CONTACT CARDS SECTION ================= */}
      <section className="relative -mt-16 sm:-mt-20 pb-12 sm:pb-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">

            {/* Phone Card */}
            <a
              href="tel:05224205350"
              className="javier-card"
            >
              <div className="javier-image-box">
                <PhoneCall size={22} />
              </div>

              <div className="javier-card-info">
                <span>Let’s talk</span>
                <h3>0522 4205350</h3>
                <p>Speak directly with our team</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:adishak0234@gmail.com"
              className="javier-card"
            >
              <div className="javier-image-box">
                <Mail size={22} />
              </div>

              <div className="javier-card-info">
                <span>Write to us</span>
                <h3 className="text-xs break-all">
                  adishak0234@gmail.com
                </h3>
                <p>Share your questions</p>
              </div>
            </a>

            {/* Office Card */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="javier-card"
            >
              <div className="javier-image-box">
                <MapPin size={22} />
              </div>

              <div className="javier-card-info">
                <span>Meet us</span>
                <h3>Gomti Nagar, Lucknow</h3>
                <p>View corporate office</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ================= ENQUIRY SECTION ================= */}
      <section className="py-14 sm:py-18 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-[#C29D56]/30 relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C29D56]/15 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl">

            <div className="grid items-start gap-8 lg:grid-cols-12">

              {/* Left Info Panel */}
              <div className="lg:col-span-5 space-y-4">

                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                  Here to help you
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                  A personal approach.
                  <span className="block text-[#E1C48F]">
                    At every step.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Whether exploring your first plot or planning a future home,
                  we guide you through details with transparency.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Discuss plot sizes and availability',
                    'Request current project information',
                    'Arrange a guided site visit',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#C29D56]"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 mt-6">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E1C48F]">
                    Office Address
                  </p>

                  <address className="mt-1.5 text-xs not-italic leading-relaxed text-slate-300">
                    <strong>
                      Ādi Shakti Coloniser & Homebuilders
                    </strong>
                    , Gomti Nagar, Lucknow, Uttar Pradesh
                  </address>

                </div>
              </div>

              {/* Form Panel */}
              <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-[#C29D56]/30 relative">

                {submitted ? (
                  <div className="py-12 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-inner">
                      <CheckCircle2 size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      Enquiry Received Successfully!
                    </h3>

                    <p className="mt-2 text-xs text-slate-600">
                      Our team will get in touch with you shortly.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-xl bg-[#6B1312] px-5 py-2.5 text-xs font-bold text-white uppercase shadow-md"
                    >
                      Send Another
                    </button>

                  </div>
                ) : (
                  <div>

                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#89682F]">
                      Make an enquiry
                    </p>

                    <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                      Tell us what you have in mind.
                    </h2>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-5 space-y-4"
                    >

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div>
                          <label className="text-[11px] font-bold uppercase text-slate-700">
                            Full Name *
                          </label>

                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            className="mt-1 block h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-[#C29D56] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-bold uppercase text-slate-700">
                            Phone Number *
                          </label>

                          <input
                            type="tel"
                            required
                            placeholder="Phone number"
                            className="mt-1 block h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-[#C29D56] focus:bg-white"
                          />
                        </div>

                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div>
                          <label className="text-[11px] font-bold uppercase text-slate-700">
                            Email Address
                          </label>

                          <input
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 block h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-[#C29D56] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-bold uppercase text-slate-700">
                            Interested In
                          </label>

                          <select className="mt-1 block h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:border-[#C29D56] focus:bg-white">
                            <option>Residential plots</option>
                            <option>Schedule a site visit</option>
                            <option>Project information</option>
                            <option>Other enquiry</option>
                          </select>
                        </div>

                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase text-slate-700">
                          Your Message
                        </label>

                        <textarea
                          rows="3"
                          placeholder="Requirements or convenient time..."
                          className="mt-1 block w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:border-[#C29D56] focus:bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#6B1312] hover:bg-[#520e0e] px-6 text-xs font-bold text-white shadow-md transition"
                      >
                        Send Enquiry
                        <Send size={14} />
                      </button>

                    </form>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION & FAQ SECTION ================= */}
      <section className="py-12 sm:py-16 bg-slate-100 light-geom-grid relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid gap-8 lg:grid-cols-2 items-start">

            {/* Location Details */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-4">

              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                Strategic Location
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Closer to your next beginning.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore Harika Paradise on Satrikh Road. Speak with our team
                to understand connectivity and coordinate your visit.
              </p>

              <div className="rounded-xl border border-[#C29D56]/30 bg-[#C29D56]/10 p-4">

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#6B1312]">
                  <MapPin size={16} />
                  Project Site · Satrikh Road, Lucknow
                </div>

                <p className="mt-1.5 text-[11px] text-slate-600">
                  Site and corporate office locations are separate. Please
                  confirm meeting point.
                </p>

              </div>

              <div className="flex gap-3 pt-2">

                {/* Site Visit */}
                <a
                  href="tel:05224205350"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#6B1312] text-white px-4 text-xs font-bold shadow"
                >
                  <PhoneCall size={14} />
                  Site Visit
                </a>

                {/* Google Maps */}
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white text-slate-800 px-4 text-xs font-bold shadow-sm"
                >
                  <ArrowUpRight size={14} />
                  Open Maps
                </a>

              </div>

            </div>

            {/* FAQ */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-4">

              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3.5 py-1 rounded-full border border-[#C29D56]/30">
                Got Questions?
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked
              </h2>

              <div className="space-y-2.5 pt-1">

                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm"
                  >

                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-3.5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:bg-slate-100 transition-colors"
                    >

                      <span className="flex items-center gap-2">
                        <MessageSquare
                          size={15}
                          className="text-[#6B1312]"
                        />
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform ${
                          openFaq === index
                            ? 'rotate-180 text-[#6B1312]'
                            : ''
                        }`}
                      />

                    </button>

                    {openFaq === index && (
                      <div className="px-3.5 pb-3 text-xs text-slate-600 border-t border-slate-200 bg-white pt-2 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-[#C29D56]/30 relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">

            <div className="space-y-1.5 text-center sm:text-left">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E1C48F]">
                Harika Paradise
              </span>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Let’s take the next step together.
              </h2>

              <p className="text-xs text-slate-300">
                Have questions about the project? Our team is ready to connect.
              </p>

            </div>

            {/* Talk to Our Team */}
            <a
              href="tel:05224205350"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-[#C29D56] hover:bg-[#d4ac5e] px-7 text-xs font-bold text-[#120303] shadow-lg transition"
            >
              <PhoneCall size={16} />
              Talk to Our Team
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;