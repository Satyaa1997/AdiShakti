import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  X,
} from 'lucide-react';

// ============================================================
// IMAGES
// ============================================================

import entranceRightImg from '../assets/04.jpeg';
import landscapeImg from '../assets/Landscape.jpg';
import clubhouseImg from '../assets/Club House.jpg';
import amphitheatreImg from '../assets/imagesamphitheatre.jfif';
import fitnessTrackImg from '../assets/fitnessTrack.webp';
import playAreaImg from '../assets/Playarea.jpg';
import layoutWestImg from '../assets/HARIKA PARADISE VIEW-6.jpeg';
import layoutEastImg from '../assets/01.jpeg';

// ============================================================
// GALLERY DATA
// ============================================================

const photos = [
  {
    id: 'entrance-right',
    title: 'Grand Entrance',
    category: 'Entrance',
    image: entranceRightImg,
  },
  {
    id: 'landscape',
    title: 'Landscape & Greenery',
    category: 'Lifestyle',
    image: landscapeImg,
  },
  {
    id: 'clubhouse',
    title: 'Clubhouse',
    category: 'Amenities',
    image: clubhouseImg,
  },
  {
    id: 'amphitheatre',
    title: 'Amphitheatre',
    category: 'Amenities',
    image: amphitheatreImg,
  },
  {
    id: 'fitness-track',
    title: 'Fitness Track',
    category: 'Lifestyle',
    image: fitnessTrackImg,
  },
  {
    id: 'play-area',
    title: 'Children Play Area',
    category: 'Amenities',
    image: playAreaImg,
  },
  {
    id: 'layout-west',
    title: 'Master Plan',
    category: 'Master Plan',
    image: layoutWestImg,
  },
  {
    id: 'layout-east',
    title: 'Project Layout',
    category: 'Master Plan',
    image: layoutEastImg,
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

  // ==========================================================
  // FILTERED PHOTOS
  // ==========================================================

  const filteredPhotos =
    activeFilter === 'All'
      ? photos
      : photos.filter(
        (photo) => photo.category === activeFilter
      );

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
    if (!selectedPhoto || filteredPhotos.length <= 1) return;

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
    if (!selectedPhoto || filteredPhotos.length <= 1) return;

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
  // BODY SCROLL LOCK
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
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans overflow-x-hidden">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative h-[380px] sm:h-[460px] lg:h-[560px] overflow-hidden bg-slate-950">

        {/* Background Image */}

        <div className="absolute inset-0">

          <img
            src={entranceRightImg}
            alt="Harika Paradise Gallery"
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        </div>

        {/* Hero Content */}

        <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-end pb-8 sm:pb-10">

          <div className="max-w-2xl">

            {/* Badge */}



            {/* Heading */}

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">

              Explore Harika Paradise

              <span className="block text-[#C29D56]">
                Through Our Gallery
              </span>

            </h1>

            {/* Description */}

            <p className="mt-2 text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">

              Explore the entrance, amenities, lifestyle and planned
              development of Harika Paradise.

            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          FILTER SECTION
      ====================================================== */}

      <section className="relative py-7 sm:py-7 bg-slate-100 border-b border-slate-200">

        {/* Background Pattern */}

        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            {/* Section Heading */}

            <div className="text-center w-full">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C29D56]">
                Visual Tour
              </span>

              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                Project Gallery
              </h2>
            </div>



          </div>

        </div>

      </section>


      {/* ======================================================
          SIMPLE IMAGE GALLERY
      ====================================================== */}

      {/* ======================================================
    SIMPLE IMAGE GALLERY
====================================================== */}

      <section className="relative py-8 sm:py-12 lg:py-14 bg-white overflow-hidden">

        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {filteredPhotos.length > 0 && (
            <div className="space-y-6">

              {/* ==================================================
            ROW 1 — 3 : 6
        ================================================== */}
              {filteredPhotos.length >= 2 && (
                <div className="grid grid-cols-1 md:grid-cols-9 gap-6">

                  {/* LEFT — 3 COLUMNS */}
                  <button
                    type="button"
                    onClick={() => openModal(filteredPhotos[0])}
                    className="group relative w-full md:h-[300px] md:col-span-3 overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={filteredPhotos[0].image}
                      alt={filteredPhotos[0].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Category */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {filteredPhotos[0].category}
                      </span>
                    </div>

                    {/* Expand */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                      <Expand size={15} />
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                        {filteredPhotos[0].title}
                      </h3>
                    </div>
                  </button>

                  {/* RIGHT — 6 COLUMNS */}
                  <button
                    type="button"
                    onClick={() => openModal(filteredPhotos[1])}
                    className="group relative w-full md:h-[300px] md:col-span-6 overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={filteredPhotos[1].image}
                      alt={filteredPhotos[1].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Category */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {filteredPhotos[1].category}
                      </span>
                    </div>

                    {/* Expand */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                      <Expand size={15} />
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                        {filteredPhotos[1].title}
                      </h3>
                    </div>
                  </button>

                </div>
              )}

              {/* ==================================================
            ROW 2 — 6 : 6
        ================================================== */}
              {filteredPhotos.length >= 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* IMAGE 3 */}
                  <button
                    type="button"
                    onClick={() => openModal(filteredPhotos[2])}
                    className="group relative w-full md:h-[300px] overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={filteredPhotos[2].image}
                      alt={filteredPhotos[2].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {filteredPhotos[2].category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                      <Expand size={15} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                        {filteredPhotos[2].title}
                      </h3>
                    </div>
                  </button>

                  {/* IMAGE 4 */}
                  <button
                    type="button"
                    onClick={() => openModal(filteredPhotos[3])}
                    className="group relative w-full md:h-[300px] overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={filteredPhotos[3].image}
                      alt={filteredPhotos[3].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {filteredPhotos[3].category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                      <Expand size={15} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                        {filteredPhotos[3].title}
                      </h3>
                    </div>
                  </button>

                </div>
              )}

              {/* ==================================================
            ROW 3 — 6 : 3
        ================================================== */}
              {filteredPhotos.length >= 6 && (
                <div className="grid grid-cols-1 md:grid-cols-9 gap-6">

                  {/* LEFT — 6 COLUMNS */}
                  <button
                    type="button"
                    onClick={() => openModal(filteredPhotos[4])}
                    className="group relative w-full md:h-[300px] md:col-span-6 overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={filteredPhotos[4].image}
                      alt={filteredPhotos[4].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {filteredPhotos[4].category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                      <Expand size={15} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                        {filteredPhotos[4].title}
                      </h3>
                    </div>
                  </button>

                  {/* RIGHT — 3 COLUMNS */}
                  <button
                    type="button"
                    onClick={() => openModal(filteredPhotos[5])}
                    className="group relative w-full md:h-[300px] md:col-span-3 overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={filteredPhotos[5].image}
                      alt={filteredPhotos[5].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {filteredPhotos[5].category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                      <Expand size={15} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                        {filteredPhotos[5].title}
                      </h3>
                    </div>
                  </button>

                </div>
              )}

              {/* ==================================================
            REMAINING IMAGES
        ================================================== */}
              {filteredPhotos.length > 6 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {filteredPhotos.slice(6).map((photo) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => openModal(photo)}
                      className="group relative w-full h-[260px] overflow-hidden rounded-lg bg-slate-200 text-left border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#C29D56] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                          {photo.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-[#6B1312] group-hover:text-[#C29D56]">
                        <Expand size={15} />
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">
                          {photo.title}
                        </h3>
                      </div>
                    </button>
                  ))}

                </div>
              )}

            </div>
          )}

          {/* ==================================================
        EMPTY STATE
    ================================================== */}
          {filteredPhotos.length === 0 && (
            <div className="min-h-[250px] flex flex-col items-center justify-center text-center">

              <Images
                size={35}
                className="text-[#6B1312] mb-3"
              />

              <h3 className="text-lg font-bold text-slate-900">
                No Images Found
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                No gallery images are available in this category.
              </p>

            </div>
          )}

        </div>
      </section>


      {/* ======================================================
          SIMPLE CTA
      ====================================================== */}

      <section className="relative py-9 sm:py-12 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-[#C29D56]/30 overflow-hidden">

        {/* Pattern */}

        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-10 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">

            <div>

              <p className="text-[#C29D56] text-[10px] font-bold uppercase tracking-widest">
                Harika Paradise
              </p>

              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-white">
                Discover the project in person
              </h2>

              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Schedule a site visit and explore Harika Paradise.
              </p>

            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 shrink-0 rounded-lg bg-[#C29D56] hover:bg-[#b08b47] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#6B1312] transition-all shadow-lg group"
            >

              Enquire Now

              <ArrowUpRight
                size={16}
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
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close gallery"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#6B1312] hover:bg-[#520e0e] text-[#C29D56] border border-[#C29D56]/50 flex items-center justify-center transition-all"
          >

            <X size={20} />

          </button>


          {/* PREVIOUS */}

          {filteredPhotos.length > 1 && (

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#6B1312] text-white border border-white/20 hover:border-[#C29D56] backdrop-blur-md flex items-center justify-center transition-all"
            >

              <ChevronLeft
                size={22}
                className="text-[#C29D56]"
              />

            </button>

          )}


          {/* IMAGE */}

          <div className="relative max-w-6xl w-full flex items-center justify-center">

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[88vh] max-w-[88vw] sm:max-w-[82vw] object-contain rounded-xl shadow-2xl border border-white/10"
            />

          </div>


          {/* NEXT */}

          {filteredPhotos.length > 1 && (

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#6B1312] text-white border border-white/20 hover:border-[#C29D56] backdrop-blur-md flex items-center justify-center transition-all"
            >

              <ChevronRight
                size={22}
                className="text-[#C29D56]"
              />

            </button>

          )}


          {/* IMAGE COUNTER */}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-[#C29D56]/40 text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold">

            {filteredPhotos.findIndex(
              (photo) => photo.id === selectedPhoto.id
            ) + 1}{' '}
            / {filteredPhotos.length}

          </div>

        </div>

      )}

    </main>
  );
};

export default Gallery;