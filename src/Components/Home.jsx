import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Building2, MapPin, Maximize2, LayoutGrid, Trees, Sparkles, ChevronLeft, ChevronRight, Image as ImageIcon, MapPinHouse, Compass, Star, Quote, X, User, UserRound } from 'lucide-react';

// Importing all images at the top for proper Vite bundler handling and Vercel deployment
import slide1Img from '../assets/04.jpeg';
import slide2Img from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import slide3Img from '../assets/HARIKA PARADISE VIEW-5.jpeg';
import slide4Img from '../assets/HARIKA PARADISE VIEW-6.jpeg';
import slide5Img from '../assets/HARIKA PARADISE VIEW-7.jpeg';

import introImg from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import featProjImg from '../assets/01.jpeg';

import why1Img from '../assets/Why1.png';
import why2Img from '../assets/Why2.png';
import why3Img from '../assets/Why3.png';
import why4Img from '../assets/Why4.png';
import why5Img from '../assets/Why5.png';
import why6Img from '../assets/Why6.png';

import gallery1Img from '../assets/01.jpeg';
import gallery2Img from '../assets/HARIKA PARADISE PLOT VIEW-3.jpeg';
import gallery3Img from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import gallery4Img from '../assets/HARIKA PARADISE VIEW-5.jpeg';
import gallery5Img from '../assets/ADI SHAKTI GATE VIEW-NIGHT.jpeg';
import gallery6Img from '../assets/HARIKA PARADISE VIEW-6.jpeg';
import gallery7Img from '../assets/HARIKA PARADISE VIEW-7.jpeg';
import gallery8Img from '../assets/04.jpeg';

const Home = () => {
  // Hero Slider Images (Using imported variables)
  const slides = [
    {
      image: slide1Img, 
      title: 'Building Spaces. Creating Possibilities.',
      description: 'A thoughtfully planned community offering organized infrastructure, green surroundings, and promising opportunities for comfortable living and long-term investment.',
    },
    {
      image: slide2Img,
      title: 'Where Grandeur Welcomes You Home',
      description: 'Experience refined landscapes, timeless design, and everyday comfort coming together beautifully in a 10.38-acre gated community.',
    },
    {
      image: slide3Img,
      title: 'An Address of Enduring Prestige',
      description: 'Designed to meet the expectations of modern families with modern infrastructure, lush green parks, and high-end security.',
    },
    {
      image: slide4Img,
      title: 'Experience Elite Community Living',
      description: 'Thoughtfully structured layouts ensuring smooth internal roads, demarcation, and optimized utility lines for seamless living.',
    },
    {
      image: slide5Img,
      title: 'Your Dream Destination Awaits',
      description: 'Strategically situated on Satrikh Road with seamless connectivity, approved legal titles, and lush green surroundings.',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Gallery State & Lightbox
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Custom Gallery Images (Using imported variables)
  const galleryImages = [
    { src: gallery1Img, alt: "Harika Paradise Gate View" },
    { src: gallery2Img, alt: "Harika Paradise Infrastructure" },
    { src: gallery3Img, alt: "Luxury Plot View" },
    { src: gallery4Img, alt: "Green Landscape" },
    { src: gallery5Img, alt: "Modern Villa Design" },
    { src: gallery6Img, alt: "Clubhouse Interior" },
    { src: gallery7Img, alt: "Clubhouse Interior" },
    { src: gallery8Img, alt: "Clubhouse Interior" }
  ];
  
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [isSection5Visible, setIsSection5Visible] = useState(false);
  const [isSection6Visible, setIsSection6Visible] = useState(false);
  const [isSectionFeedbackVisible, setIsSectionFeedbackVisible] = useState(false);
  const [isSection7Visible, setIsSection7Visible] = useState(false);
  
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const sectionFeedbackRef = useRef(null);
  const section7Ref = useRef(null);
  const cardsContainerRef = useRef(null);
  const whyChooseContainerRef = useRef(null);
  const feedbackContainerRef = useRef(null);
  const thumbnailContainerRef = useRef(null);

  // Auto-slide effect for Hero every 6 seconds with cinematic zoom
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto-scroll effect for Feature Cards every 3 seconds on Mobile
  useEffect(() => {
    const cardTimer = setInterval(() => {
      if (cardsContainerRef.current) {
        const container = cardsContainerRef.current;
        if (window.innerWidth < 768) {
          const cardWidth = container.querySelector('.snap-center')?.offsetWidth || 300;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
          }
        }
      }
    }, 3000);

    return () => clearInterval(cardTimer);
  }, []);

  // Auto-scroll effect for Why Choose Us Carousel
  useEffect(() => {
    const whyTimer = setInterval(() => {
      if (whyChooseContainerRef.current) {
        const container = whyChooseContainerRef.current;
        const cardElement = container.querySelector('.why-card');
        if (cardElement) {
          const cardWidth = cardElement.offsetWidth + 24;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }
    }, 3500);

    return () => clearInterval(whyTimer);
  }, []);

  // Auto-scroll effect for Feedback Carousel
  useEffect(() => {
    const feedbackTimer = setInterval(() => {
      if (feedbackContainerRef.current) {
        const container = feedbackContainerRef.current;
        const cardElement = container.querySelector('.feedback-card');
        if (cardElement) {
          const cardWidth = cardElement.offsetWidth + 20;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }
    }, 3000);

    return () => clearInterval(feedbackTimer);
  }, []);

  // Manual scroll controls for Why Choose Us
  const scrollWhyChoose = (direction) => {
    if (whyChooseContainerRef.current) {
      const container = whyChooseContainerRef.current;
      const cardElement = container.querySelector('.why-card');
      const cardWidth = cardElement ? cardElement.offsetWidth + 24 : 350;
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Manual scroll controls for Feedback
  const scrollFeedback = (direction) => {
    if (feedbackContainerRef.current) {
      const container = feedbackContainerRef.current;
      const cardElement = container.querySelector('.feedback-card');
      const cardWidth = cardElement ? cardElement.offsetWidth + 20 : 280;
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Gallery Navigation Functions
  const nextImage = () => {
    setActiveGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    scrollToThumbnail(activeGalleryIndex === galleryImages.length - 1 ? 0 : activeGalleryIndex + 1);
  };

  const prevImage = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    scrollToThumbnail(activeGalleryIndex === 0 ? galleryImages.length - 1 : activeGalleryIndex - 1);
  };

  const selectImage = (index) => {
    setActiveGalleryIndex(index);
    scrollToThumbnail(index);
  };

  const scrollToThumbnail = (index) => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbElement = container.children[index];
      if (thumbElement) {
        const containerWidth = container.offsetWidth;
        const thumbOffsetLeft = thumbElement.offsetLeft;
        const thumbWidth = thumbElement.offsetWidth;
        const scrollLeft = thumbOffsetLeft - (containerWidth / 2) + (thumbWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  // Scroll & Reload Triggers
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsSection2Visible(entry.isIntersecting); }, { threshold: 0.2 });
    if (section2Ref.current) observer.observe(section2Ref.current);
    return () => { if (section2Ref.current) observer.unobserve(section2Ref.current); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsSection3Visible(entry.isIntersecting); }, { threshold: 0.2 });
    if (section3Ref.current) observer.observe(section3Ref.current);
    return () => { if (section3Ref.current) observer.unobserve(section3Ref.current); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsSection5Visible(entry.isIntersecting); }, { threshold: 0.2 });
    if (section5Ref.current) observer.observe(section5Ref.current);
    return () => { if (section5Ref.current) observer.unobserve(section5Ref.current); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsSection6Visible(entry.isIntersecting); }, { threshold: 0.2 });
    if (section6Ref.current) observer.observe(section6Ref.current);
    return () => { if (section6Ref.current) observer.unobserve(section6Ref.current); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsSectionFeedbackVisible(entry.isIntersecting); }, { threshold: 0.2 });
    if (sectionFeedbackRef.current) observer.observe(sectionFeedbackRef.current);
    return () => { if (sectionFeedbackRef.current) observer.unobserve(sectionFeedbackRef.current); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { setIsSection7Visible(entry.isIntersecting); }, { threshold: 0.2 });
    if (section7Ref.current) observer.observe(section7Ref.current);
    return () => { if (section7Ref.current) observer.unobserve(section7Ref.current); };
  }, []);

  const headingWords2 = "An Address of Enduring Prestige & Modern Living".split(" ");
  const headingWords3 = "Harika Paradise".split(" ");
  const headingWords5 = "Why Choose Us".split(" ");
  const headingWords6 = "Glimpse of Our Community".split(" ");
  const headingWordsFeedback = "Customer Testimonials".split(" ");

  // Feature Cards Data
  const featureCardsData = [
    {
      title: "Thoughtfully Planned",
      subtitle: "Master Design",
      desc1: "Organized internal layouts",
      desc2: "Optimized utility lines",
      desc3: "Serene green surroundings",
      desc4: "Modern infrastructure"
    },
    {
      title: "Approved & Secure",
      subtitle: "Legal Trust",
      desc1: "Nagar Panchayat approved",
      desc2: "10.38-acre gated community",
      desc3: "Round-the-clock security",
      desc4: "Clear title documentation"
    },
    {
      title: "Prime Location",
      subtitle: "High Growth",
      desc1: "Situated on Satrikh Road",
      desc2: "Seamless city connectivity",
      desc3: "Rapid property appreciation",
      desc4: "Near key transit points"
    }
  ];

  // Why Choose Us Data (Using imported variables)
  const whyChooseData = [
    {
      title: "Strategic Location",
      desc: "Prime address situated on Satrikh Road, Lucknow, offering effortless connectivity to major city hubs and transit points.",
      image: why1Img
    },
    {
      title: "Nagar Panchayat Approved",
      desc: "Complete legal security and government-approved plotted community ensuring absolute peace of mind for buyers.",
      image: why2Img
    },
    {
      title: "10.38 Acres Gated Community",
      desc: "Sprawling across 10.38 acres of meticulously planned residential land designed for elite living and modern families.",
      image: why3Img
    },
    {
      title: "Lush Green Surroundings",
      desc: "Embraced by beautifully landscaped parks and natural open spaces that inspire a peaceful and healthy lifestyle.",
      image: why4Img
    },
    {
      title: "Modern Infrastructure",
      desc: "Equipped with wide internal roads, advanced drainage networks, and reliable utility setups for seamless living.",
      image: why5Img
    },
    {
      title: "High Return Investment",
      desc: "A rapidly developing growth corridor ensuring strong property appreciation and high-yield long-term investment value.",
      image: why6Img
    }
  ];

  // Feedback Data (Total 7 Testimonials)
  const feedbackData = [
    {
      name: "Rajesh Kumar",
      role: "Plot Owner, Harika Paradise",
      gender: "male",
      review: "Buying a residential plot at Satrikh Road through Ādi Shakti Coloniser was completely hassle-free. Transparent documentation and great staff!"
    },
    {
      name: "Sunita Sharma",
      role: "Home Investor",
      gender: "female",
      review: "The infrastructure planning and green environment at Harika Paradise are exceptional. Highly recommend their projects in Lucknow."
    },
    {
      name: "Amitabh Verma",
      role: "Business Professional",
      gender: "male",
      review: "Very professional team. Nagar Panchayat approval and clear titles gave us absolute peace of mind for our long-term investment."
    },
    {
      name: "Pooja Mishra",
      role: "Resident",
      gender: "female",
      review: "Wonderful gated community feel. The wide roads and upcoming lifestyle amenities make it the best place to build our dream home."
    },
    {
      name: "Vikram Singh",
      role: "Real Estate Investor",
      gender: "male",
      review: "Satrikh Road is growing rapidly, and investing in Harika Paradise has been one of my best financial decisions with great returns."
    },
    {
      name: "Anjali Srivastava",
      role: "Architect & Homeowner",
      gender: "female",
      review: "The layout design and utility spacing within the community reflect high engineering standards. Truly a masterpiece project!"
    },
    {
      name: "Manoj Tiwari",
      role: "Senior Manager",
      gender: "male",
      review: "Clear titles, polite staff, and on-time project development. Ādi Shakti Coloniser truly delivers on their promises."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-[#C29D56] selection:text-white">
      
      {/* Custom Geometrical Grid Pattern CSS for Light Sections */}
      <style>{`
        .light-geom-grid {
          background-image: radial-gradient(rgba(194, 157, 86, 0.28) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }

        @keyframes rainDropWord {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .rain-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(-50px);
        }
        .animate-rain-drop {
          animation: rainDropWord 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes cinematicZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .animate-cinematic-zoom {
          animation: cinematicZoom 6s ease-out forwards;
        }

        @keyframes blueprintFloat {
          0% {
            background-position: 0 0, 0 0;
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            background-position: 40px 40px, 40px 40px;
            transform: scale(1);
          }
        }
        .real-estate-3d-bg {
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(107, 19, 18, 0.15) 0%, transparent 70%),
            linear-gradient(to right, rgba(107, 19, 18, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(107, 19, 18, 0.08) 1px, transparent 1px);
          background-size: 100% 100%, 30px 30px, 30px 30px;
          animation: blueprintFloat 12s ease-in-out infinite alternate;
        }

        @keyframes rotateBorder {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .uiverse-rotating-border::before {
          content: "";
          pointer-events: none;
          position: absolute;
          z-index: 10;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 10rem;
          background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, #C29D56 40%, #C29D56 60%, hsla(0, 0%, 40%, 0) 100%);
          animation: rotateBorder 8s linear infinite;
          transform: translate(-50%, -50%);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= SECTION 1: HERO SLIDER (CINEMATIC FADE & ZOOM STYLE) ================= */}
      <section className="relative w-full overflow-hidden bg-slate-900 
                          h-[400px] sm:h-[450px] md:h-[520px] lg:h-[calc(100vh-80px)]">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover object-center ${index === currentSlide ? 'animate-cinematic-zoom' : ''}`}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';
              }}
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex items-end pb-8 sm:pb-12 md:pb-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-md space-y-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-slate-100 text-[11px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-none drop-shadow-sm">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Link
                      to="/our-projects"
                      className="bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-3 py-1.5 rounded-md font-bold text-[11px] sm:text-xs shadow-md transition-all flex items-center gap-1 group"
                    >
                      Explore Projects 
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/enquire-now"
                      className="bg-[#6B1312] hover:bg-[#520e0e] text-white border border-[#C29D56]/40 px-3 py-1.5 rounded-md font-bold text-[11px] sm:text-xs shadow-md transition-all flex items-center gap-1"
                    >
                      <PhoneCall className="w-3 h-3 text-[#C29D56]" /> Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-3 left-0 right-0 z-30 flex justify-center space-x-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide ? 'w-5 bg-[#C29D56]' : 'w-1.5 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: COMPANY & PROJECT OVERVIEW (LIGHT GEOMETRICAL BG) ================= */}
      <section ref={section2Ref} className="py-12 sm:py-16 bg-slate-100 relative overflow-hidden light-geom-grid">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#C29D56]/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#6B1312]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
            <h2 className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C29D56] transition-opacity duration-500 ${isSection2Visible ? 'opacity-100' : 'opacity-0'}`}>
              Welcome to Harika Paradise
            </h2>
            
            <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 flex flex-wrap justify-center gap-x-2.5 gap-y-1">
              {headingWords2.map((word, index) => (
                <span
                  key={index}
                  className={`rain-word ${isSection2Visible ? 'animate-rain-drop' : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
            </h3>

            <div className={`w-20 h-1 bg-[#6B1312] mx-auto rounded-full mt-2 transition-all duration-700 ${isSection2Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
          </div>

          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden mb-12">
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl h-[280px] sm:h-[340px] border border-slate-200 shadow-sm">
                <img 
                  src={introImg} 
                  alt="Company Introduction" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3 py-1 rounded-full border border-[#C29D56]/30">
                  Company Introduction
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Building Trust, Delivering Excellence Across Generations
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Harika Paradise is dedicated to creating thoughtfully planned spaces that inspire better living. We combine elegant design, modern infrastructure, and natural surroundings in every development. Our commitment to quality ensures lasting comfort, safety, and long-term value.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Transparency and customer satisfaction remain at the heart of everything we do. Every detail is carefully designed to meet the expectations of modern families.
                </p>
                <div className="pt-1">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-[#6B1312] font-bold text-xs sm:text-sm hover:text-[#C29D56] transition-colors"
                  >
                    Read More About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Uiverse Style Feature Cards Carousel */}
          <div 
            ref={cardsContainerRef} 
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible no-scrollbar snap-x snap-mandatory px-2 md:px-0 max-w-5xl mx-auto pb-4 md:pb-0 scroll-smooth"
          >
            {featureCardsData.map((card, index) => (
              <div 
                key={index} 
                className="relative flex flex-col gap-4 p-5 w-[280px] sm:w-[320px] md:w-full flex-shrink-0 snap-center bg-[#120303] rounded-2xl shadow-xl border border-[#C29D56]/30 overflow-hidden group hover:scale-[1.02] transition-all duration-500"
                style={{
                  backgroundImage: `radial-gradient(at 88% 40%, hsla(0, 0%, 0%, 1) 0px, transparent 85%),
                                    radial-gradient(at 49% 30%, hsla(0, 0%, 0%, 1) 0px, transparent 85%),
                                    radial-gradient(at 0% 64%, rgba(107, 19, 18, 0.4) 0px, transparent 85%),
                                    radial-gradient(at 41% 94%, rgba(194, 157, 86, 0.3) 0px, transparent 85%)`
                }}
              >
                <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-40">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-40 uiverse-rotating-border" />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C29D56]">
                    {card.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    {card.title}
                  </h3>
                </div>

                <hr className="border-t border-[#C29D56]/30 my-1" />

                <ul className="relative z-10 space-y-2.5">
                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#C29D56] rounded-full text-[#120303] flex-shrink-0">
                      <svg className="w-3 h-3 font-bold" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path>
                      </svg>
                    </span>
                    <span>{card.desc1}</span>
                  </li>

                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#C29D56] rounded-full text-[#120303] flex-shrink-0">
                      <svg className="w-3 h-3 font-bold" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path>
                      </svg>
                    </span>
                    <span>{card.desc2}</span>
                  </li>

                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#C29D56] rounded-full text-[#120303] flex-shrink-0">
                      <svg className="w-3 h-3 font-bold" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path>
                      </svg>
                    </span>
                    <span>{card.desc3}</span>
                  </li>

                  <li className="flex items-center gap-2.5 text-xs text-slate-200">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#C29D56] rounded-full text-[#120303] flex-shrink-0">
                      <svg className="w-3 h-3 font-bold" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path>
                      </svg>
                    </span>
                    <span>{card.desc4}</span>
                  </li>
                </ul>

                <Link 
                  to="/projects/harika-paradise"
                  className="relative z-15 mt-2 text-center py-2.5 px-4 bg-gradient-to-r from-[#6B1312] to-[#C29D56] hover:opacity-90 text-white font-bold text-xs rounded-full shadow-lg transition-all"
                >
                  Explore Highlights
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: FEATURED PROJECT (DARK MAROON GEOMETRICAL BG) ================= */}
      <section ref={section3Ref} className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="relative text-center max-w-3xl mx-auto py-6 px-4 mb-10 rounded-3xl overflow-hidden border border-[#C29D56]/40 shadow-xl bg-black/40 backdrop-blur-md">
            <div className="relative z-10 space-y-2">
              <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full inline-block transition-opacity duration-500 ${isSection3Visible ? 'opacity-100' : 'opacity-0'}`}>
                Featured Project
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white flex flex-wrap justify-center gap-x-2.5 gap-y-1">
                {headingWords3.map((word, index) => (
                  <span
                    key={index}
                    className={`rain-word ${isSection3Visible ? 'animate-rain-drop' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm font-medium">
                A premium 10.38-acre residential plotted community designed for elite living.
              </p>
              <div className={`w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2 transition-all duration-700 ${isSection3Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-5 sm:p-8 border border-[#C29D56]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Harika Paradise
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Experience a lifestyle of unmatched tranquility and elegance. Strategically located on Satrikh Road, Harika Paradise brings together modern infrastructure, lush green spaces, and complete legal security.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56] flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Total Area</span>
                    <span className="text-xs sm:text-sm font-bold text-white">10.38 Acres</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56] flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Property Type</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Residential Plots</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56] flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <LayoutGrid className="w-4 h-4 text-[#6B1312]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Plot Variety</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Multiple Sizes</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56] flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Infrastructure</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Planned Roads</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56] flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <Trees className="w-4 h-4 text-[#6B1312]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Environment</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Green Spaces</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56] flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-medium">Community</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Lifestyle Amenities</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/projects/harika-paradise"
                  className="inline-flex items-center justify-center gap-2 bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all group w-full sm:w-auto"
                >
                  Explore Harika Paradise 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#6B1312]" />
                </Link>
              </div>

            </div>

            <div className="lg:col-span-6 relative overflow-hidden rounded-2xl shadow-lg h-[280px] sm:h-[350px] order-1 lg:order-2 border border-white/10">
              <img 
                src={featProjImg} 
                alt="Harika Paradise Featured Project" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#6B1312] text-[#C29D56] font-bold text-xs px-3 py-1.5 rounded-lg shadow-md border border-[#C29D56]/40">
                Featured Development
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 5: WHY CHOOSE US (LIGHT GEOMETRICAL BG) ================= */}
      <section ref={section5Ref} className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-12">
            <div className="text-center max-w-3xl mx-auto space-y-2.5">
              <h2 className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-[#926a29] transition-opacity duration-500 ${isSection5Visible ? 'opacity-100' : 'opacity-0'}`}>
                Our Core Strengths
              </h2>
              
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 flex flex-wrap justify-center gap-x-2.5 gap-y-1">
                {headingWords5.map((word, index) => (
                  <span
                    key={index}
                    className={`rain-word ${isSection5Visible ? 'animate-rain-drop' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Discover why families and investors trust Ādi Shakti Coloniser & Homebuilders.
              </p>
              <div className={`w-16 h-1 bg-[#6B1312] mx-auto rounded-full mt-2 transition-all duration-700 ${isSection5Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-2 sm:px-8">
            <button 
              onClick={() => scrollWhyChoose('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#6B1312] text-slate-700 hover:text-[#C29D56] p-2.5 rounded-full shadow-md border border-slate-200 transition-all hidden sm:flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={() => scrollWhyChoose('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#6B1312] text-slate-700 hover:text-[#C29D56] p-2.5 rounded-full shadow-md border border-slate-200 transition-all hidden sm:flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div 
              ref={whyChooseContainerRef}
              className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth py-2"
            >
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className="why-card relative h-[320px] sm:h-[350px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 snap-start w-[calc(100vw-3rem)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-500 hover:shadow-xl group border border-[#C29D56]/30 bg-slate-900"
                >
                  <img 
                    src={item.image} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={item.title} 
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full z-10 space-y-2">
                    <h3 className="text-white text-base sm:text-lg font-bold tracking-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                      {item.title}
                    </h3>

                    <p className="text-slate-100 text-xs sm:text-[13px] leading-relaxed [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)] line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 6: GALLERY PREVIEW (DARK MAROON GEOMETRICAL BG) ================= */}
      <section ref={section6Ref} className="py-14 relative bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl">
            <div className="mb-10 text-center">
              <h2 className="text-white text-3xl font-extrabold tracking-tight pb-2">Our Gallery</h2>
              <p className="text-slate-300 text-sm">Explore the essence of beauty and infrastructure in our community.</p>
              <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />
            </div>

            <div className="flex flex-col xl:flex-row gap-6 items-center justify-center max-w-5xl mx-auto">
              
              {/* Main Display Image with Prev / Next Buttons */}
              <div className="relative w-full xl:w-[700px] h-[300px] sm:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-white/20 bg-black group">
                <img 
                  src={galleryImages[activeGalleryIndex].src} 
                  alt="Active Gallery" 
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105" 
                  onClick={() => setLightboxImg(galleryImages[activeGalleryIndex].src)}
                />

                {/* Prev Button */}
                <button 
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#6B1312] text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5 text-[#C29D56]" />
                </button>

                {/* Next Button */}
                <button 
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#6B1312] text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/20"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5 text-[#C29D56]" />
                </button>

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-[#C29D56] px-3 py-1 rounded-lg text-[11px] font-bold border border-[#C29D56]/30 pointer-events-none">
                  {activeGalleryIndex + 1} / {galleryImages.length} (Click to Expand)
                </div>
              </div>

              {/* Thumbnails Scroller */}
              <div 
                ref={thumbnailContainerRef}
                className="w-full xl:w-[140px] flex xl:flex-col gap-3 justify-start xl:justify-center overflow-x-auto xl:overflow-y-auto no-scrollbar max-h-[380px] py-1 px-1"
              >
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => selectImage(idx)}
                    className={`w-[90px] h-[65px] sm:w-[110px] sm:h-[75px] xl:w-full xl:h-[80px] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 flex-shrink-0 ${
                      activeGalleryIndex === idx ? 'border-[#C29D56] scale-105 shadow-md ring-2 ring-[#C29D56]/50' : 'border-white/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

            </div>

            {/* View Full Gallery Navigation Button */}
            <div className="text-center mt-10">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all group"
              >
                View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8 text-[#C29D56]" />
            </button>
            <img src={lightboxImg} alt="Enlarged View" className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10" />
          </div>
        )}
      </section>

      {/* ================= FEEDBACK SECTION (LIGHT GEOMETRICAL BG) ================= */}
      <section ref={sectionFeedbackRef} className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C29D56] transition-opacity duration-500 ${isSectionFeedbackVisible ? 'opacity-100' : 'opacity-0'}`}>
                Client Voices
              </h2>
              
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 flex flex-wrap justify-center gap-x-2 gap-y-1">
                {headingWordsFeedback.map((word, index) => (
                  <span
                    key={index}
                    className={`rain-word ${isSectionFeedbackVisible ? 'animate-rain-drop' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h3>

              <p className="text-slate-600 text-xs font-medium">
                Hear what our valued plot owners and investors have to say about us.
              </p>
              <div className={`w-14 h-1 bg-[#6B1312] mx-auto rounded-full mt-1.5 transition-all duration-700 ${isSectionFeedbackVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto px-2 sm:px-6">
            <button 
              onClick={() => scrollFeedback('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#6B1312] text-slate-700 hover:text-[#C29D56] p-2 rounded-full shadow-md border border-slate-200 transition-all hidden sm:flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button 
              onClick={() => scrollFeedback('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-[#6B1312] text-slate-700 hover:text-[#C29D56] p-2 rounded-full shadow-md border border-slate-200 transition-all hidden sm:flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div 
              ref={feedbackContainerRef}
              className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth py-3 px-2"
            >
              {feedbackData.map((item, index) => (
                <div 
                  key={index} 
                  className="feedback-card relative bg-white max-w-[260px] w-[260px] p-5 border border-slate-200 rounded-2xl shadow-sm flex-shrink-0 snap-start flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#C29D56]/50 group"
                >
                  <div className="absolute top-2.5 right-2.5 text-[#C29D56]">
                    <Quote className="w-4 h-4 opacity-40" />
                  </div>

                  <div className="flex flex-col items-center text-center pt-1">
                    <div className="w-14 h-14 mb-3 rounded-full bg-[#C29D56]/15 border-2 border-[#C29D56]/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {item.gender === 'female' ? (
                        <UserRound className="w-7 h-7 text-[#6B1312]" />
                      ) : (
                        <User className="w-7 h-7 text-[#6B1312]" />
                      )}
                    </div>

                    <h5 className="mb-0.5 text-base font-bold tracking-tight text-slate-900">
                      {item.name}
                    </h5>
                    <span className="text-[11px] font-semibold text-[#6B1312] bg-[#C29D56]/10 px-2.5 py-0.5 rounded-full">
                      {item.role}
                    </span>
                    <p className="mt-2.5 text-[11px] text-slate-600 leading-relaxed italic line-clamp-3">
                      "{item.review}"
                    </p>

                    <div className="flex mt-3 gap-0.5 text-[#C29D56]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: LOCATION / CONTACT CTA (LIGHT GEOMETRICAL BG) ================= */}
      <section ref={section7Ref} className="py-12 sm:py-16 bg-slate-100 border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden light-geom-grid">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />

            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3 py-1 rounded-full border border-[#C29D56]/30">
                Take The Next Step
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Looking for a Residential Plot?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Explore Harika Paradise at Satrikh Road. Your dream destination for peace, modern infrastructure, and secure investment awaits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
              <Link
                to="/projects/harika-paradise"
                className="bg-[#6B1312] hover:bg-[#520e0e] text-[#C29D56] border border-[#C29D56]/40 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group"
              >
                <Compass className="w-4 h-4 text-[#C29D56]" /> View Project
              </Link>
              <Link
                to="/contact-us"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#6B1312]" /> Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;