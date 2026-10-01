import { useState, useEffect, useRef } from 'react';
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
import harikaLogo from '../assets/Harika Logo.png';

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

const ParticleHero = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  const [tourMode, setTourMode] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;

    if (!canvas || !hero) return undefined;

    let gl;

    try {
      gl = canvas.getContext('webgl', {
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch (error) {
      gl = null;
    }

    if (!gl) {
      setWebglSupported(false);
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isTouchDevice = window.matchMedia(
      '(pointer: coarse)'
    ).matches;

    const particleCount =
      window.innerWidth < 640
        ? 1800
        : window.innerWidth < 1024
          ? 2800
          : 4200;

    const vertexSource = `
      attribute vec3 aPosition;
      attribute float aSize;

      uniform float uPointScale;
      uniform float uPixelRatio;

      varying float vDepth;

      void main() {

        float perspectiveDepth = max(
          0.55,
          5.0 - aPosition.z
        );

        vec2 clipPosition = vec2(
          aPosition.x / 4.25,
          aPosition.y / 2.35
        );

        gl_Position = vec4(
          clipPosition,
          clamp(
            aPosition.z / 5.0,
            -0.85,
            0.85
          ),
          1.0
        );

        gl_PointSize =
          aSize *
          uPointScale *
          uPixelRatio /
          perspectiveDepth;

        vDepth = perspectiveDepth;
      }
    `;

    const fragmentSource = `
      precision mediump float;

      varying float vDepth;

      void main() {

        vec2 uv = gl_PointCoord - 0.5;

        float distanceFromCenter = length(uv);

        float soft =
          1.0 -
          smoothstep(
           0.1,
            0.48,
            distanceFromCenter
          );

        if (soft <= 0.01) discard;

        vec3 gold =
          vec3(
           0.95,
            0.78,
            0.42
          );

        vec3 warmWhite =
          vec3(
            1.0,
            0.92,
            0.72
          );

        float glow =
          smoothstep(
            1.6,
            0.35,
            vDepth
          );

        vec3 color =
          mix(
            gold,
            warmWhite,
            glow * 0.35
          );

        gl_FragColor =
          vec4(
           color * 1.5,
            soft *
            (0.95 + glow * 0.5)
          );
      }
    `;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (
        !gl.getShaderParameter(
          shader,
          gl.COMPILE_STATUS
        )
      ) {
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = compileShader(
      gl.VERTEX_SHADER,
      vertexSource
    );

    const fragmentShader = compileShader(
      gl.FRAGMENT_SHADER,
      fragmentSource
    );

    if (!vertexShader || !fragmentShader) {
      setWebglSupported(false);
      return undefined;
    }

    const program = gl.createProgram();

    gl.attachShader(
      program,
      vertexShader
    );

    gl.attachShader(
      program,
      fragmentShader
    );

    gl.linkProgram(program);

    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    if (
      !gl.getProgramParameter(
        program,
        gl.LINK_STATUS
      )
    ) {
      setWebglSupported(false);
      return undefined;
    }

    const positionLocation =
      gl.getAttribLocation(
        program,
        'aPosition'
      );

    const sizeLocation =
      gl.getAttribLocation(
        program,
        'aSize'
      );

    const pointScaleLocation =
      gl.getUniformLocation(
        program,
        'uPointScale'
      );

    const pixelRatioLocation =
      gl.getUniformLocation(
        program,
        'uPixelRatio'
      );

    const positions =
      new Float32Array(
        particleCount * 3
      );

    const sphereTargets =
      new Float32Array(
        particleCount * 3
      );

    const textTargets =
      new Float32Array(
        particleCount * 3
      );

    const sizes =
      new Float32Array(
        particleCount
      );

    const goldenAngle =
      Math.PI *
      (3 - Math.sqrt(5));

    for (
      let i = 0;
      i < particleCount;
      i += 1
    ) {
      const y =
        1 -
        (i / (particleCount - 1)) *
        2;

      const radius =
        Math.sqrt(
          Math.max(
            0,
            1 - y * y
          )
        );

      const theta =
        goldenAngle * i;

      const jitter =
        0.96 +
        Math.random() * 0.08;

      const x =
        Math.cos(theta) *
        radius *
        jitter;

      const z =
        Math.sin(theta) *
        radius *
        jitter;

      const index = i * 3;

      sphereTargets[index] =
        x * 2.05;

      sphereTargets[index + 1] =
        y * 2.05;

      sphereTargets[index + 2] =
        z * 2.05;

      positions[index] =
        sphereTargets[index];

      positions[index + 1] =
        sphereTargets[index + 1];

      positions[index + 2] =
        sphereTargets[index + 2];

      sizes[i] =
        3.2 +
        Math.random() * 3.8;
    }

    const textCanvas = document.createElement('canvas');
    const textContext = textCanvas.getContext('2d', {
      willReadFrequently: true,
    });

    textCanvas.width = 1200;
    textCanvas.height = 1200;

    textContext.clearRect(0, 0, 1200, 1200);

    textContext.strokeStyle = '#ffffff';
    textContext.fillStyle = '#ffffff';
    textContext.lineWidth = 32;
    textContext.lineJoin = 'round';
    textContext.lineCap = 'round';

    textContext.beginPath();
    textContext.moveTo(110, 500);
    textContext.lineTo(600, 130);
    textContext.lineTo(1090, 500);
    textContext.lineTo(970, 500);
    textContext.lineTo(970, 1080);
    textContext.lineTo(230, 1080);
    textContext.lineTo(230, 500);
    textContext.lineTo(110, 500);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(230, 500);
    textContext.lineTo(600, 220);
    textContext.lineTo(970, 500);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(790, 275);
    textContext.lineTo(790, 165);
    textContext.lineTo(900, 165);
    textContext.lineTo(900, 360);
    textContext.stroke();

    textContext.beginPath();
    textContext.rect(510, 720, 180, 360);
    textContext.stroke();

    textContext.beginPath();
    textContext.rect(545, 760, 110, 115);
    textContext.stroke();

    textContext.beginPath();
    textContext.rect(545, 910, 110, 125);
    textContext.stroke();

    textContext.beginPath();
    textContext.arc(650, 895, 14, 0, Math.PI * 2);
    textContext.fill();

    textContext.beginPath();
    textContext.rect(290, 590, 175, 190);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(377.5, 590);
    textContext.lineTo(377.5, 780);
    textContext.moveTo(290, 685);
    textContext.lineTo(465, 685);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(265, 805);
    textContext.lineTo(490, 805);
    textContext.stroke();

    textContext.beginPath();
    textContext.rect(735, 590, 175, 190);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(822.5, 590);
    textContext.lineTo(822.5, 780);
    textContext.moveTo(735, 685);
    textContext.lineTo(910, 685);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(710, 805);
    textContext.lineTo(935, 805);
    textContext.stroke();

    textContext.beginPath();
    textContext.moveTo(165, 1080);
    textContext.lineTo(1035, 1080);
    textContext.moveTo(475, 1110);
    textContext.lineTo(725, 1110);
    textContext.moveTo(430, 1140);
    textContext.lineTo(770, 1140);
    textContext.stroke();

    const pixels =
      textContext.getImageData(
        0,
        0,
        textCanvas.width,
        textCanvas.height
      ).data;

    const textPoints = [];
    const stride = window.innerWidth < 640 ? 6 : 5;

    for (let y = 0; y < textCanvas.height; y += stride) {
      for (let x = 0; x < textCanvas.width; x += stride) {
        const alpha = pixels[(y * textCanvas.width + x) * 4 + 3];
        if (alpha > 80) {
          textPoints.push({ x, y });
        }
      }
    }

    for (let i = 0; i < particleCount; i += 1) {
      const point = textPoints[i % textPoints.length];
      const index = i * 3;

      textTargets[index] = ((point.x / textCanvas.width) - 0.5) * 8.5;
      textTargets[index + 1] = (0.5 - point.y / textCanvas.height) * 5.35 - 0.1;
      textTargets[index + 2] = (Math.random() - 0.5) * 0.22;
    }

    const positionBuffer = gl.createBuffer();
    const sizeBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);

    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.clearColor(0.008, 0.005, 0.006, 1);

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
    };

    let targetMode = 'sphere';
    let currentMode = 0;
    let autoStart = performance.now() + 2600;
    let lastTime = performance.now();
    let rafId;
    let disposed = false;

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.8);

      canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform1f(pixelRatioLocation, pixelRatio);
    };

    const onPointerMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const normalizedY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      pointer.targetX = normalizedX;
      pointer.targetY = normalizedY;
      pointer.active = true;

      hero.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`);
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const onTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      const rect = hero.getBoundingClientRect();
      pointer.targetX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.targetY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      pointer.active = true;
    };

    const setMode = (mode) => {
      targetMode = mode;
      if (mode === 'sphere') {
        autoStart = performance.now() + 9999999;
      }
    };

    hero.__setParticleMode = setMode;

    window.addEventListener('resize', resize);
    hero.addEventListener('pointermove', onPointerMove);
    hero.addEventListener('pointerleave', onPointerLeave);
    hero.addEventListener('touchmove', onTouchMove, { passive: true });

    resize();

    const render = (now) => {
      if (disposed) return;

      const delta = Math.min(32, now - lastTime);
      lastTime = now;

      if (tourMode && !prefersReducedMotion && now > autoStart) {
        const cycle = (now - autoStart) % 15000;
        targetMode = cycle > 7000 ? 'text' : 'sphere';
      }

      const desired = targetMode === 'text' ? 1 : 0;
      const morphSpeed = prefersReducedMotion ? 0.12 : 0.035;

      currentMode += (desired - currentMode) * morphSpeed * Math.max(1, delta / 16.67);

      pointer.x += (pointer.targetX - pointer.x) * 0.16;
      pointer.y += (pointer.targetY - pointer.y) * 0.16;

      const time = now * 0.00035;
      const cosY = Math.cos(time * 0.65);
      const sinY = Math.sin(time * 0.65);
      const cosX = Math.cos(time * 0.22);
      const sinX = Math.sin(time * 0.22);

      const followX = pointer.active ? pointer.x * 0.55 : 0;
      const followY = pointer.active ? pointer.y * 0.42 : 0;

      for (let i = 0; i < particleCount; i += 1) {
        const index = i * 3;
        const sx = sphereTargets[index];
        const sy = sphereTargets[index + 1];
        const sz = sphereTargets[index + 2];

        const rx = sx * cosY - sz * sinY;
        const rz = sx * sinY + sz * cosY;
        const ry = sy * cosX - rz * sinX;
        const rz2 = sy * sinX + rz * cosX;

        const tx = textTargets[index];
        const ty = textTargets[index + 1];
        const tz = textTargets[index + 2];

        let x = rx * (1 - currentMode) + tx * currentMode;
        let y = ry * (1 - currentMode) + ty * currentMode;
        let z = rz2 * (1 - currentMode) + tz * currentMode;

        if (pointer.active) {
          const dx = followX - x;
          const dy = followY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const radius = 3.65;
          const influence = Math.max(0, 1 - distance / radius);
          const smoothInfluence = influence * influence;

          x += dx * smoothInfluence * 0.42;
          y += dy * smoothInfluence * 0.42;

          if (distance > 0.001) {
            const push = smoothInfluence * 0.20;
            x += (dx / distance) * push;
            y += (dy / distance) * push;
          }
          z += smoothInfluence * 0.55;
        }

        const wave = Math.sin(now * 0.0015 + i * 0.025) * 0.008;
        x += wave;
        y += wave * 0.7;

        positions[index] += (x - positions[index]) * 0.16;
        positions[index + 1] += (y - positions[index + 1]) * 0.16;
        positions[index + 2] += (z - positions[index + 2]) * 0.16;
      }

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, positions);

      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
      gl.enableVertexAttribArray(sizeLocation);
      gl.vertexAttribPointer(sizeLocation, 1, gl.FLOAT, false, 0, 0);

      gl.uniform1f(pointScaleLocation, Math.min(canvas.width, canvas.height) * 0.0022);
      gl.drawArrays(gl.POINTS, 0, particleCount);

      rafId = requestAnimationFrame(render);
    };

    if (prefersReducedMotion || isTouchDevice) {
      targetMode = 'sphere';
    }

    rafId = requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      hero.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerleave', onPointerLeave);
      hero.removeEventListener('touchmove', onTouchMove);
      delete hero.__setParticleMode;
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(sizeBuffer);
      gl.deleteProgram(program);
    };
  }, [tourMode]);

  return (
    <section
      ref={heroRef}
      className="group relative min-h-[380px] h-[400px] sm:h-[calc(100vh-80px)] sm:min-h-[560px] sm:max-h-[900px] w-full overflow-hidden bg-[#030202] text-white cursor-crosshair"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 block h-full w-full opacity-75"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute z-[2] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          left: 'var(--cursor-x)',
          top: 'var(--cursor-y)',
          background: 'radial-gradient(circle, rgba(194,157,86,0.20) 0%, rgba(194,157,86,0.08) 30%, transparent 72%)',
          filter: 'blur(10px)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(194,157,86,0.12),transparent_36%),radial-gradient(circle_at_50%_50%,rgba(107,19,18,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.28),transparent_28%,transparent_72%,rgba(0,0,0,0.75))]" />

      <div className="absolute left-4 top-5 z-20 sm:left-7 sm:top-7 lg:left-10 lg:top-9">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#C29D56]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#C29D56] sm:text-[10px]">
            EXP 01 / RESIDENTIAL
          </span>
        </div>
        <p className="mt-1 pl-10 text-[8px] uppercase tracking-[0.22em] text-white/45 sm:text-[9px]">
          Harika Paradise Living
        </p>
      </div>

      <div className="absolute right-4 top-5 z-20 text-right sm:right-7 sm:top-7 lg:right-10 lg:top-9">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
          ĀDI SHAKTI
        </p>
        <p className="mt-1 text-[7px] uppercase tracking-[0.22em] text-[#C29D56]/75 sm:text-[8px]">
          Coloniser & Homebuilders
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center px-4 sm:bottom-0">
        <div className="pointer-events-auto w-full max-w-3xl text-center -translate-y-4 sm:-translate-y-36 lg:-translate-y-44">
          <div className="mb-2 flex justify-center">
            <img
              src={harikaLogo}
              alt="Harika Paradise Logo"
              className="h-16 w-auto object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.65)] sm:h-24 lg:h-32"
            />
          </div>

          <p className="mb-0.5 text-[7px] font-semibold uppercase tracking-[0.3em] text-[#C29D56] sm:mb-1 sm:text-[10px] sm:tracking-[0.42em]">
            Satrikh Road, Lucknow · 10.38 Acres Gated Enclave
          </p>

          <h1 className="text-2xl font-black uppercase leading-none tracking-[-0.04em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl">
            Harika <span className="text-[#C29D56]">Paradise</span>
          </h1>

          <p className="mx-auto mt-1 max-w-xl text-[9px] leading-relaxed text-white/65 sm:mt-3 sm:text-sm">
            Where thoughtful planning meets a better way of living. Nagar Panchayat approved residential plots.
          </p>

          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 sm:mt-5 sm:gap-2.5">
            <a
              href="#amenities"
              className="group inline-flex items-center gap-1.5 rounded-md bg-[#C29D56] px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-wide text-[#3a0a0a] shadow-[0_8px_30px_rgba(194,157,86,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1C27A] sm:px-5 sm:py-2.5 sm:text-xs"
            >
              Explore Amenities
              <ArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
            </a>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-md border border-[#C29D56]/45 bg-black/25 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C29D56] hover:bg-[#6B1312]/70 sm:px-5 sm:py-2.5 sm:text-xs"
            >
              <PhoneCall className="h-2.5 w-2.5 text-[#C29D56] transition-transform duration-300 group-hover:rotate-12 sm:h-3.5 sm:w-3.5" />
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const HarikaParadise = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');

  const amenitiesList = [
    { title: "Road Network", desc: "Smooth wide internal pathways designed for effortless vehicle movement.", icon: <Compass className="w-8 h-8 text-[#C29D56]" />, image: roadImg },
    { title: "Surroundings", desc: "Serene, pollution-free natural environment for peaceful family living.", icon: <Trees className="w-8 h-8 text-[#C29D56]" />, image: surroundingsImg },
    { title: "Club House", desc: "Exclusive community leisure and social gathering hub for residents.", icon: <Building2 className="w-8 h-8 text-[#C29D56]" />, image: clubHouseImg },
    { title: "Landscaping", desc: "Bountiful green parks, open lawns, and beautifully manicured tracks.", icon: <Sparkles className="w-8 h-8 text-[#C29D56]" />, image: landscapeImg },
    { title: "Play Area", desc: "Safe, dedicated recreational zones equipped for children's activities.", icon: <Baby className="w-8 h-8 text-[#C29D56]" />, image: playAreaImg },
    { title: "Street Lighting", desc: "Advanced illuminated pathways ensuring secure night-time strolls.", icon: <SunMedium className="w-8 h-8 text-[#C29D56]" />, image: streetlightImg },
    { title: "Commercial", desc: "Daily need shops and commercial convenience right at your doorstep.", icon: <Store className="w-8 h-8 text-[#C29D56]" />, image: commercialImg },
    { title: "Entrance Gate", desc: "Secure, majestic gated entry portal with 24/7 security surveillance.", icon: <ShieldCheck className="w-8 h-8 text-[#C29D56]" />, image: entranceGateImg },
    { title: "Water Supply", desc: "Reliable round-the-clock water supply provision across all plots.", icon: <Waves className="w-8 h-8 text-[#C29D56]" />, image: waterSupplyImg },
    { title: "Drainage System", desc: "Clean and robust underground sanitation and stormwater drainage.", icon: <LayoutGrid className="w-8 h-8 text-[#C29D56]" />, image: drainageImg },
    { title: "Entertainment", desc: "Open-air gathering and cultural event arenas for community bonding.", icon: <Home className="w-8 h-8 text-[#C29D56]" />, image: entertainmentImg }
  ];

  const siteHighlights = [
    "10.38 Acres Master Planned Plotted Community",
    "Nagar Panchayat Approved Layout & Clear Legal Titles",
    "Strategically Located on High-Growth Satrikh Road",
    "Wide Internal Concrete Roads with Avenue Plantation",
    "Gated Enclave with 24/7 Security & Boundary Wall",
    "Ready for Immediate Registry & Construction"
  ];

  const connectivityData = [
    { destination: "Ayodhya Road", distance: "5 Km", time: "10 Mins" },
    { destination: "Kishan Path", distance: "9 Km", time: "15 Mins" },
    { destination: "Chinhut", distance: "15.6 Km", time: "25 Mins" },
    { destination: "Polytechnic", distance: "18 Km", time: "30 Mins" },
    { destination: "Ahmamau", distance: "27 Km", time: "40 Mins" }
  ];

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

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C29D56] selection:text-white overflow-x-hidden">

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

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

      {/* ================= HERO SECTION WITH 3D WEBGL PARTICLE EFFECT ================= */}
      <ParticleHero />

      {/* ================= 5.1 PROJECT OVERVIEW ================= */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
                  Harika Paradise — Master Planned Living
                </h2>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Harika Paradise is a thoughtfully curated 10.38-acre plotted residential community situated on the high-growth Satrikh Road corridor in Lucknow. Designed for modern families seeking tranquility and absolute legal safety.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#6B1312]/5 flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <Building2 className="w-4 h-4 text-[#6B1312]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Project Name</span>
                    <span className="text-xs font-bold text-slate-900">Harika Paradise</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56]/10 flex items-center justify-center text-[#C29D56] flex-shrink-0">
                    <Landmark className="w-4 h-4 text-[#C29D56]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Presented By</span>
                    <span className="text-xs font-bold text-[#6B1312]">Ādi Shakti Coloniser</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#6B1312]/5 flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#6B1312]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Approved By</span>
                    <span className="text-xs font-bold text-slate-900">Nagar Panchayat</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56]/10 flex items-center justify-center text-[#C29D56] flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#C29D56]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Location</span>
                    <span className="text-xs font-bold text-slate-900">Satrikh Road</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#6B1312]/5 flex items-center justify-center text-[#6B1312] flex-shrink-0">
                    <Maximize2 className="w-4 h-4 text-[#6B1312]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-semibold">Total Area</span>
                    <span className="text-xs font-bold text-slate-900">10.38 Acres</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C29D56]/10 flex items-center justify-center text-[#C29D56] flex-shrink-0">
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
      </section>

      {/* ================= 5.2 AMENITIES ================= */}
      <section id="amenities" className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              World-Class Amenities
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Designed to provide absolute comfort, recreation, and modern convenience within the gated community.
            </p>
            <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />
          </div>

          <div className="w-full overflow-hidden py-4">
            <div className="animate-marquee-left flex gap-6 px-3">
              {[...amenitiesList, ...amenitiesList].map((amenity, idx) => (
                <div key={idx} className="book-card">
                  <div className="absolute inset-0 p-4 flex flex-col justify-between text-left z-0 bg-white rounded-2xl border border-slate-200">
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-extrabold text-[#6B1312] uppercase tracking-widest block">Feature Details</span>
                      <h4 className="text-sm font-black text-[#6B1312] uppercase tracking-wide">{amenity.title}</h4>
                      <p className="text-[11px] text-slate-700 font-medium leading-relaxed">{amenity.desc}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[9px] font-bold text-[#C29D56]">Harika Paradise</span>
                      <Link to="/contact" className="text-[10px] font-black text-[#6B1312] hover:text-[#C29D56] uppercase tracking-wider underline">Enquire</Link>
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
                      <span className="text-[9px] font-bold text-slate-300 tracking-widest uppercase">Harika Living</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5.3 SITE PLAN ================= */}
      <section className="py-12 sm:py-14 bg-white text-slate-900 relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">Project Site Plan</h2>
            <p className="text-slate-700 text-xs sm:text-sm">Inspect the comprehensive layout plan, road networks, and plot demarcations.</p>
            <div className="w-14 h-1 bg-[#6B1312] mx-auto rounded-full mt-1.5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative">
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-xl overflow-hidden h-[240px] sm:h-[300px] border border-slate-200 group cursor-pointer shadow-lg">
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
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Why Harika Paradise Master Plan Stands Out</h3>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Every square foot of Harika Paradise is engineered to offer maximum ventilation, wide approach roads, and absolute transparency in plot demarcations.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                {siteHighlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200 shadow-[0_4px_18px_rgba(15,23,42,0.06)] hover:bg-slate-100/70 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#C29D56] flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5.4 CONNECTIVITY & LOCATION ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#C29D56]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">Satrikh Road, Lucknow Location Advantages</h2>
            <p className="text-slate-300 text-xs sm:text-sm">Effortless transit connectivity to major city landmarks and highways.</p>
            <div className="w-14 h-1 bg-[#C29D56] mx-auto rounded-full mt-1.5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-2.5">
              {connectivityData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#C29D56] group-hover:bg-[#C29D56] group-hover:text-[#6B1312] transition-colors">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white">{item.destination}</h4>
                      <span className="text-[10px] text-slate-300 font-medium">Approx. travel time: {item.time}</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#C29D56] bg-black/40 border border-[#C29D56]/30 px-3 py-1 rounded-full shadow-sm">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#C29D56]/30 h-[260px] sm:h-[310px] bg-slate-800 flex items-center justify-center">
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
      </section>

      {/* ================= 5.5 PROJECT GALLERY ================= */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200 relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Project Gallery</h2>
            <div className="w-14 h-1 bg-[#6B1312] mx-auto rounded-full mt-1.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setLightboxImg(item.src);
                  setZoomLevel(1);
                }}
                className="relative rounded-xl overflow-hidden shadow-sm h-[220px] cursor-pointer border border-slate-200 group bg-white"
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                  <span className="text-white bg-[#6B1312] border border-[#C29D56]/40 px-3 py-1.5 rounded-lg font-bold text-xs shadow-md">
                    {item.alt} (Expand & Zoom)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5.6 ENQUIRY CTA ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-[#C29D56]/30 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29D56]/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56] bg-[#C29D56]/20 px-3 py-1 rounded-full border border-[#C29D56]/40">
                Take The Next Step
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                Interested in Harika Paradise?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Find the right plot for your requirements. Connect with our sales advisory team today for exclusive pricing and site visits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
              <Link
                to="/contact"
                className="bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl transition-all flex items-center gap-2 group"
              >
                Enquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:05224205350"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#C29D56]" /> Call: 0522 4205350
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Zoomable Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-50">
            <button onClick={handleZoomIn} className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-all shadow-md" title="Zoom In">
              <ZoomIn className="w-5 h-5 text-[#C29D56]" />
            </button>
            <button onClick={handleZoomOut} className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-all shadow-md" title="Zoom Out">
              <ZoomOut className="w-5 h-5 text-[#C29D56]" />
            </button>
            <button onClick={handleResetZoom} className="bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-all shadow-md" title="Reset Zoom">
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