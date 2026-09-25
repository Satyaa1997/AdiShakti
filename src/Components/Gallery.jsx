
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  X,
} from 'lucide-react';

import entranceRight from '../assets/04.jpeg';
import landscape from '../assets/Landscape.jpg';
import clubhouse from '../assets/Club House.jpg';
import amphitheatre from '../assets/imagesamphitheatre.jfif';
import fitnessTrack from '../assets/fitnessTrack.webp';
import playArea from '../assets/Playarea.jpg';
import layoutWest from '../assets/HARIKA PARADISE VIEW-6.jpeg';
import layoutEast from '../assets/01.jpeg';

// ============================================================
// GALLERY DATA
// ============================================================

const photos = [
  {
    id: 'entrance-right',
    title: 'Grand Entrance',
    category: 'Entrance',
    location: 'Harika Paradise',
    description:
      'A welcoming entrance designed to create a premium first impression.',
    image: entranceRight,
  },
  {
    id: 'landscape',
    title: 'Landscape & Greenery',
    category: 'Lifestyle',
    location: 'Harika Paradise',
    description:
      'Beautifully planned open spaces surrounded by lush greenery, thoughtfully landscaped gardens and refreshing natural surroundings. The development is designed to create a peaceful and visually appealing environment where residents can enjoy open spaces, greenery and a comfortable lifestyle away from the hustle and bustle of the city.',
    image: landscape,
  },
  {
    id: 'clubhouse',
    title: 'Clubhouse',
    category: 'Amenities',
    location: 'Harika Paradise',
    description:
      'A thoughtfully planned clubhouse area for recreation and community living.',
    image: clubhouse,
  },
  {
    id: 'amphitheatre',
    title: 'Amphitheatre',
    category: 'Amenities',
    location: 'Harika Paradise',
    description:
      'An open community space designed for gatherings, events and leisure.',
    image: amphitheatre,
  },
  {
    id: 'fitness-track',
    title: 'Fitness Track',
    category: 'Lifestyle',
    location: 'Harika Paradise',
    description:
      'Dedicated spaces encouraging an active and healthy lifestyle.',
    image: fitnessTrack,
  },
  {
    id: 'play-area',
    title: 'Children Play Area',
    category: 'Amenities',
    location: 'Harika Paradise',
    description:
      'A dedicated recreational space for children and families.',
    image: playArea,
  },
  {
    id: 'layout-west',
    title: 'Master Plan',
    category: 'Master Plan',
    location: 'Harika Paradise',
    description:
      'Project planning and layout overview of Harika Paradise.',
    image: layoutWest,
  },
  {
    id: 'layout-east',
    title: 'Project Layout',
    category: 'Master Plan',
    location: 'Harika Paradise',
    description:
      'A detailed visual representation of the planned development.',
    image: layoutEast,
  },
];

// ============================================================
// FILTERS
// ============================================================

const filters = [
  'All',
  'Entrance',
  'Amenities',
  'Lifestyle',
  'Master Plan',
];

// ============================================================
// GALLERY COMPONENT
// ============================================================

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const modalRef = useRef(null);

  // ==========================================================
  // FILTERED PHOTOS
  // ==========================================================

  const filteredPhotos =
    activeFilter === 'All'
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  // ==========================================================
  // OPEN MODAL
  // ==========================================================

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  // ==========================================================
  // CLOSE MODAL
  // ==========================================================

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // ==========================================================
  // NEXT IMAGE
  // ==========================================================

  const showNext = () => {
    if (!selectedPhoto || filteredPhotos.length === 0) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const nextIndex =
      currentIndex === filteredPhotos.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  // ==========================================================
  // PREVIOUS IMAGE
  // ==========================================================

  const showPrevious = () => {
    if (!selectedPhoto || filteredPhotos.length === 0) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const previousIndex =
      currentIndex === 0
        ? filteredPhotos.length - 1
        : currentIndex - 1;

    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  // ==========================================================
  // KEYBOARD CONTROLS
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedPhoto) return;

      if (event.key === 'Escape') {
        closeModal();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, filteredPhotos]);

  // ==========================================================
  // BODY SCROLL LOCK WHEN MODAL IS OPEN
  // ==========================================================

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#C29D56] selection:text-white overflow-x-hidden">

      {/* Custom Geometrical Grid Pattern CSS */}
      <style>{`
        .light-geom-grid {
          background-image: radial-gradient(
            rgba(194, 157, 86, 0.28) 1.5px,
            transparent 1.5px
          );
          background-size: 24px 24px;
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.04);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }
      `}</style>

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white h-[380px] sm:h-[440px] lg:h-[480px] flex items-end pb-10 sm:pb-14 border-b border-[#C29D56]/30">

        <div className="absolute inset-0 z-0">

          {/* FIXED: Hero uses entranceRight image */}
          <img
            src={entranceRight}
            alt="Harika Paradise Gallery"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse-glow brightness-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 z-10" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-20">

          <div className="max-w-2xl space-y-3">

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C29D56]/50 text-[#C29D56] text-xs font-bold uppercase tracking-widest shadow-xl">
              <Images size={16} />
              Harika Paradise Gallery
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight">
              Experience Harika Paradise
              <span className="block text-[#C29D56]">
                Through Our Gallery
              </span>
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm font-medium drop-shadow-sm max-w-xl leading-relaxed">
              Explore the spaces, lifestyle, amenities and planned
              development of Harika Paradise through our project gallery.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          FILTER SECTION
      ====================================================== */}

      <section className="py-10 sm:py-14 bg-slate-100 border-b border-slate-200 relative overflow-hidden light-geom-grid">

        <div className="absolute top-0 left-0 w-80 h-80 bg-[#C29D56]/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-wrap items-center justify-between gap-5">

            <div>

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/10 px-3 py-1 rounded-full border border-[#C29D56]/30">
                Explore Categories
              </span>

              <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Project Gallery
              </h2>

            </div>

            <div className="flex flex-wrap gap-2">

              {filters.map((filter) => {

                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/50 shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-[#6B1312] hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          GALLERY GRID
      ====================================================== */}

      <section className="py-12 sm:py-16 bg-slate-100 relative overflow-hidden light-geom-grid">

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6B1312]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredPhotos.map((photo, index) => (

              <article
                key={photo.id}
                className={`group overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 0
                    ? 'sm:col-span-2 lg:col-span-2'
                    : ''
                }`}
              >

                {/* IMAGE */}

                <button
                  type="button"
                  onClick={() => openModal(photo)}
                  className={`relative block w-full overflow-hidden text-left ${
                    index === 0
                      ? 'aspect-[16/9]'
                      : 'aspect-[4/3]'
                  }`}
                >

                  {/* FIXED: Each card uses its own photo.image */}
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* CATEGORY */}

                  <div className="absolute left-4 top-4">

                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-bold text-[#C29D56] backdrop-blur-md uppercase tracking-wider">
                      {photo.category}
                    </span>

                  </div>

                  {/* EXPAND ICON */}

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56] border border-white/20">

                    <Expand size={16} />

                  </div>

                  {/* BOTTOM TEXT */}

                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <div className="flex items-end justify-between gap-4">

                      <div>

                        <p className="mb-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[#C29D56]">
                          {photo.location}
                        </p>

                        <h3 className="text-lg font-extrabold text-white sm:text-xl tracking-tight">
                          {photo.title}
                        </h3>

                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/40 transition-transform duration-300 group-hover:rotate-45">

                        <ArrowUpRight size={16} />

                      </div>

                    </div>

                  </div>

                </button>

                {/* DESCRIPTION */}

                <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-white to-slate-50">

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {photo.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

          {/* EMPTY STATE */}

          {filteredPhotos.length === 0 && (

            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl bg-white border border-slate-200 text-center p-8 shadow-sm">

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#6B1312]/10 text-[#6B1312]">
                <Images size={24} />
              </div>

              <h3 className="text-lg font-extrabold text-slate-900">
                No Images Found
              </h3>

              <p className="mt-1 max-w-md text-xs sm:text-sm text-slate-600">
                There are currently no gallery images available in this
                category.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ======================================================
          CTA SECTION
      ====================================================== */}

      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-[#C29D56]/30 relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C29D56]/40 shadow-2xl flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

            <div className="max-w-2xl space-y-2">

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full">
                Harika Paradise
              </span>

              <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white tracking-tight">
                See the vision.
                <span className="block text-slate-300">
                  Discover the lifestyle.
                </span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Explore Harika Paradise and discover a thoughtfully planned
                destination designed for comfortable and connected living.
              </p>

            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#C29D56] hover:bg-[#b08b47] px-7 py-3.5 text-xs sm:text-sm font-extrabold text-[#6B1312] shadow-2xl transition-all group"
            >
              Enquire Now

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />

            </Link>

          </div>

        </div>

      </section>

      {/* ======================================================
          FULLSCREEN IMAGE MODAL
      ====================================================== */}

      {selectedPhoto && (

        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/40 transition-colors hover:bg-[#520e0e] sm:right-8 sm:top-8 shadow-xl"
          >
            <X size={21} />
          </button>

          {/* PREVIOUS */}

          {filteredPhotos.length > 1 && (

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 sm:left-8 border border-white/20"
            >
              <ChevronLeft size={22} className="text-[#C29D56]" />
            </button>

          )}

          {/* IMAGE CONTAINER */}

          <div className="relative flex max-h-[90vh] max-w-6xl flex-col items-center">

            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/20">

              {/* FIXED: Modal uses selectedPhoto.image */}
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[72vh] w-auto max-w-[90vw] object-contain"
              />

            </div>

            {/* MODAL INFORMATION */}

            <div className="mt-5 max-w-2xl text-center space-y-1">

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 border border-[#C29D56]/40 px-3.5 py-1 rounded-full inline-block">
                {selectedPhoto.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {selectedPhoto.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {selectedPhoto.description}
              </p>

            </div>

          </div>

          {/* NEXT */}

          {filteredPhotos.length > 1 && (

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 sm:right-8 border border-white/20"
            >
              <ChevronRight size={22} className="text-[#C29D56]" />
            </button>

          )}

        </div>

      )}

    </main>
  );
};

export default Gallery;
