import { useState, useEffect, useRef } from 'react';
import slide1Img from '../assets/04.jpeg';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Building2, MapPin, Maximize2, LayoutGrid, Trees, Sparkles, ChevronLeft, ChevronRight, Image as ImageIcon, MapPinHouse, Compass, Star, Quote, X, User, UserRound, ShieldCheck, Landmark, FileText, Layers, TrendingUp, Shield, ArrowUpRight } from 'lucide-react';

// Importing all images at the top for proper Vite bundler handling and Vercel deployment

import introImg from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import featProjImg from '../assets/01.jpeg';

import why1Img from '../assets/Why1.png';
import why2Img from '../assets/Why2.png';
import why3Img from '../assets/Why3.png';
import why4Img from '../assets/Why5.png';
import why5Img from '../assets/Why4.png';
import why6Img from '../assets/Why6.png';

import gallery1Img from '../assets/01.jpeg';
import gallery2Img from '../assets/HARIKA PARADISE PLOT VIEW-3.jpeg';
import gallery3Img from '../assets/HARIKA PARADISE GATE VIEW.jpeg';
import gallery4Img from '../assets/HARIKA PARADISE VIEW-5.jpeg';
import gallery5Img from '../assets/ADI SHAKTI GATE VIEW-NIGHT.jpeg';
import gallery6Img from '../assets/HARIKA PARADISE VIEW-6.jpeg';
import gallery7Img from '../assets/HARIKA PARADISE VIEW-7.jpeg';
import gallery8Img from '../assets/04.jpeg';

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

    /* =====================================================
        SPHERE TARGETS
    ===================================================== */

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

    /* =====================================================
        TEXT PARTICLES (DETAILED HOUSE DRAWING)
    ===================================================== */

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

    /* =========================
       HOUSE OUTER STRUCTURE
    ========================= */

    textContext.beginPath();

    /* Roof */
    textContext.moveTo(110, 500);
    textContext.lineTo(600, 130);
    textContext.lineTo(1090, 500);

    /* Right wall */
    textContext.lineTo(970, 500);
    textContext.lineTo(970, 1080);

    /* House bottom */
    textContext.lineTo(230, 1080);

    /* Left wall */
    textContext.lineTo(230, 500);

    /* Close roof edge */
    textContext.lineTo(110, 500);

    textContext.stroke();

    /* Roof lower architectural line */

    textContext.beginPath();
    textContext.moveTo(230, 500);
    textContext.lineTo(600, 220);
    textContext.lineTo(970, 500);
    textContext.stroke();

    /* =========================
       CHIMNEY
    ========================= */

    textContext.beginPath();
    textContext.moveTo(790, 275);
    textContext.lineTo(790, 165);
    textContext.lineTo(900, 165);
    textContext.lineTo(900, 360);
    textContext.stroke();

    /* =========================
       DOOR
    ========================= */

    textContext.beginPath();
    textContext.rect(510, 720, 180, 360);
    textContext.stroke();

    /* Door upper panel */

    textContext.beginPath();
    textContext.rect(545, 760, 110, 115);
    textContext.stroke();

    /* Door lower panel */

    textContext.beginPath();
    textContext.rect(545, 910, 110, 125);
    textContext.stroke();

    /* Door handle */

    textContext.beginPath();
    textContext.arc(650, 895, 14, 0, Math.PI * 2);
    textContext.fill();

    /* =========================
       LEFT WINDOW
    ========================= */

    textContext.beginPath();
    textContext.rect(290, 590, 175, 190);
    textContext.stroke();

    /* Window divisions */

    textContext.beginPath();
    textContext.moveTo(377.5, 590);
    textContext.lineTo(377.5, 780);

    textContext.moveTo(290, 685);
    textContext.lineTo(465, 685);
    textContext.stroke();

    /* Left window sill */

    textContext.beginPath();
    textContext.moveTo(265, 805);
    textContext.lineTo(490, 805);
    textContext.stroke();

    /* =========================
       RIGHT WINDOW
    ========================= */

    textContext.beginPath();
    textContext.rect(735, 590, 175, 190);
    textContext.stroke();

    /* Window divisions */

    textContext.beginPath();
    textContext.moveTo(822.5, 590);
    textContext.lineTo(822.5, 780);

    textContext.moveTo(735, 685);
    textContext.lineTo(910, 685);
    textContext.stroke();

    /* Right window sill */

    textContext.beginPath();
    textContext.moveTo(710, 805);
    textContext.lineTo(935, 805);
    textContext.stroke();

    /* =========================
       HOUSE BASE AND STEPS
    ========================= */

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

    const stride =
      window.innerWidth < 640
        ? 6
        : 5;

    for (
      let y = 0;
      y < textCanvas.height;
      y += stride
    ) {
      for (
        let x = 0;
        x < textCanvas.width;
        x += stride
      ) {
        const alpha =
          pixels[
          (y *
            textCanvas.width +
            x) *
          4 +
          3
          ];

        if (alpha > 80) {
          textPoints.push({
            x,
            y,
          });
        }
      }
    }

    for (
      let i = 0;
      i < particleCount;
      i += 1
    ) {
      const point =
        textPoints[
        i % textPoints.length
        ];

      const index = i * 3;

      textTargets[index] =
        ((point.x / textCanvas.width) - 0.5) * 8.5;

      textTargets[index + 1] =
        (0.5 - point.y / textCanvas.height) * 5.35 - 0.1;

      textTargets[index + 2] =
        (Math.random() - 0.5) *
        0.22;
    }

    /* =====================================================
        WEBGL BUFFERS
    ===================================================== */

    const positionBuffer =
      gl.createBuffer();

    const sizeBuffer =
      gl.createBuffer();

    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      positionBuffer
    );

    gl.bufferData(
      gl.ARRAY_BUFFER,
      positions,
      gl.DYNAMIC_DRAW
    );

    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      sizeBuffer
    );

    gl.bufferData(
      gl.ARRAY_BUFFER,
      sizes,
      gl.STATIC_DRAW
    );

    gl.useProgram(program);

    gl.enable(gl.BLEND);

    gl.blendFunc(
      gl.SRC_ALPHA,
      gl.ONE
    );

    gl.clearColor(
      0.008,
      0.005,
      0.006,
      1
    );

    /* =====================================================
        POINTER STATE
    ===================================================== */

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
    };

    let targetMode = 'sphere';
    let currentMode = 0;

    let autoStart =
      performance.now() + 2600;

    let lastTime =
      performance.now();

    let rafId;
    let disposed = false;

    /* =====================================================
        RESIZE
    ===================================================== */

    const resize = () => {
      const rect =
        hero.getBoundingClientRect();

      const pixelRatio =
        Math.min(
          window.devicePixelRatio || 1,
          1.8
        );

      canvas.width =
        Math.max(
          1,
          Math.floor(
            rect.width *
            pixelRatio
          )
        );

      canvas.height =
        Math.max(
          1,
          Math.floor(
            rect.height *
            pixelRatio
          )
        );

      canvas.style.width =
        `${rect.width}px`;

      canvas.style.height =
        `${rect.height}px`;

      gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gl.useProgram(program);

      gl.uniform1f(
        pixelRatioLocation,
        pixelRatio
      );
    };

    /* =====================================================
        MOUSE MOVE
        STRONGER AUSTENSOR STYLE INTERACTION
    ===================================================== */

    const onPointerMove = (event) => {
      const rect =
        hero.getBoundingClientRect();

      const normalizedX =
        ((event.clientX -
          rect.left) /
          rect.width) *
        2 -
        1;

      const normalizedY =
        -(
          ((event.clientY -
            rect.top) /
            rect.height) *
          2 -
          1
        );

      pointer.targetX =
        normalizedX;

      pointer.targetY =
        normalizedY;

      pointer.active = true;

      /* Cursor position for glow */
      hero.style.setProperty(
        '--cursor-x',
        `${event.clientX - rect.left}px`
      );

      hero.style.setProperty(
        '--cursor-y',
        `${event.clientY - rect.top}px`
      );
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    /* =====================================================
        TOUCH
    ===================================================== */

    const onTouchMove = (event) => {
      const touch =
        event.touches[0];

      if (!touch) return;

      const rect =
        hero.getBoundingClientRect();

      const normalizedX =
        ((touch.clientX -
          rect.left) /
          rect.width) *
        2 -
        1;

      const normalizedY =
        -(
          ((touch.clientY -
            rect.top) /
            rect.height) *
          2 -
          1
        );

      pointer.targetX =
        normalizedX;

      pointer.targetY =
        normalizedY;

      pointer.active = true;
    };

    const setMode = (mode) => {
      targetMode = mode;

      if (mode === 'sphere') {
        autoStart =
          performance.now() +
          9999999;
      }
    };

    hero.__setParticleMode =
      setMode;

    window.addEventListener(
      'resize',
      resize
    );

    hero.addEventListener(
      'pointermove',
      onPointerMove
    );

    hero.addEventListener(
      'pointerleave',
      onPointerLeave
    );

    hero.addEventListener(
      'touchmove',
      onTouchMove,
      { passive: true }
    );

    resize();

    /* =====================================================
        RENDER LOOP
    ===================================================== */

    const render = (now) => {
      if (disposed) return;

      const delta =
        Math.min(
          32,
          now - lastTime
        );

      lastTime = now;

      /* AUTO TOUR */

      if (
        tourMode &&
        !prefersReducedMotion &&
        now > autoStart
      ) {
        const cycle =
          (now - autoStart) %
          15000;

        targetMode =
          cycle > 7000
            ? 'text'
            : 'sphere';
      }

      const desired =
        targetMode === 'text'
          ? 1
          : 0;

      const morphSpeed =
        prefersReducedMotion
          ? 0.12
          : 0.035;

      currentMode +=
        (desired -
          currentMode) *
        morphSpeed *
        Math.max(
          1,
          delta / 16.67
        );

      /* =================================================
          SMOOTH CURSOR
      ================================================= */

      pointer.x +=
        (pointer.targetX -
          pointer.x) *
        0.16;

      pointer.y +=
        (pointer.targetY -
          pointer.y) *
        0.16;

      /* =================================================
          SPHERE ROTATION
      ================================================= */

      const time =
        now * 0.00035;

      const cosY =
        Math.cos(
          time * 0.65
        );

      const sinY =
        Math.sin(
          time * 0.65
        );

      const cosX =
        Math.cos(
          time * 0.22
        );

      const sinX =
        Math.sin(
          time * 0.22
        );

      const followX =
        pointer.active
          ? pointer.x * 0.55
          : 0;

      const followY =
        pointer.active
          ? pointer.y * 0.42
          : 0;

      /* =================================================
          PARTICLE LOOP
      ================================================= */

      for (
        let i = 0;
        i < particleCount;
        i += 1
      ) {
        const index = i * 3;

        const sx =
          sphereTargets[index];

        const sy =
          sphereTargets[index + 1];

        const sz =
          sphereTargets[index + 2];

        /* Sphere rotation */

        const rx =
          sx * cosY -
          sz * sinY;

        const rz =
          sx * sinY +
          sz * cosY;

        const ry =
          sy * cosX -
          rz * sinX;

        const rz2 =
          sy * sinX +
          rz * cosX;

        /* Text target */

        const tx =
          textTargets[index];

        const ty =
          textTargets[index + 1];

        const tz =
          textTargets[index + 2];

        /* Morph sphere -> text */

        let x =
          rx * (1 - currentMode) +
          tx * currentMode;

        let y =
          ry * (1 - currentMode) +
          ty * currentMode;

        let z =
          rz2 * (1 - currentMode) +
          tz * currentMode;

        /* =================================================
            STRONG MOUSE FIELD
        ================================================= */

        if (pointer.active) {
          const dx =
            followX - x;

          const dy =
            followY - y;

          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );

          const radius = 3.65;

          const influence =
            Math.max(
              0,
              1 -
              distance /
              radius
            );

          const smoothInfluence =
            influence *
            influence;

          x +=
            dx *
            smoothInfluence *
            0.42;

          y +=
            dy *
            smoothInfluence *
            0.42;

          if (
            distance > 0.001
          ) {
            const push =
              smoothInfluence *
              0.20;

            x +=
              (dx /
                distance) *
              push;

            y +=
              (dy /
                distance) *
              push;
          }

          z +=
            smoothInfluence *
            0.55;
        }

        /* =================================================
            EXTRA MICRO MOVEMENT
        ================================================= */

        const wave =
          Math.sin(
            now * 0.0015 +
            i * 0.025
          ) *
          0.008;

        x += wave;
        y += wave * 0.7;

        /* =================================================
            SMOOTH PARTICLE POSITION
        ================================================= */

        positions[index] +=
          (x -
            positions[index]) *
          0.16;

        positions[index + 1] +=
          (y -
            positions[index + 1]) *
          0.16;

        positions[index + 2] +=
          (z -
            positions[index + 2]) *
          0.16;
      }

      /* =================================================
          DRAW
      ================================================= */

      gl.clear(
        gl.COLOR_BUFFER_BIT |
        gl.DEPTH_BUFFER_BIT
      );

      gl.useProgram(program);

      gl.bindBuffer(
        gl.ARRAY_BUFFER,
        positionBuffer
      );

      gl.bufferSubData(
        gl.ARRAY_BUFFER,
        0,
        positions
      );

      gl.enableVertexAttribArray(
        positionLocation
      );

      gl.vertexAttribPointer(
        positionLocation,
        3,
        gl.FLOAT,
        false,
        0,
        0
      );

      gl.bindBuffer(
        gl.ARRAY_BUFFER,
        sizeBuffer
      );

      gl.enableVertexAttribArray(
        sizeLocation
      );

      gl.vertexAttribPointer(
        sizeLocation,
        1,
        gl.FLOAT,
        false,
        0,
        0
      );

      gl.uniform1f(
        pointScaleLocation,
        Math.min(
          canvas.width,
          canvas.height
        ) * 0.0022
      );

      gl.drawArrays(
        gl.POINTS,
        0,
        particleCount
      );

      rafId =
        requestAnimationFrame(
          render
        );
    };

    if (
      prefersReducedMotion ||
      isTouchDevice
    ) {
      targetMode = 'sphere';
    }

    rafId =
      requestAnimationFrame(
        render
      );

    return () => {
      disposed = true;

      cancelAnimationFrame(
        rafId
      );

      window.removeEventListener(
        'resize',
        resize
      );

      hero.removeEventListener(
        'pointermove',
        onPointerMove
      );

      hero.removeEventListener(
        'pointerleave',
        onPointerLeave
      );

      hero.removeEventListener(
        'touchmove',
        onTouchMove
      );

      delete hero.__setParticleMode;

      gl.deleteBuffer(
        positionBuffer
      );

      gl.deleteBuffer(
        sizeBuffer
      );

      gl.deleteProgram(
        program
      );
    };
  }, [tourMode]);

  const setParticleMode = (mode) => {
    if (
      heroRef.current
        ?.__setParticleMode
    ) {
      heroRef.current.__setParticleMode(
        mode
      );
    }

    setTourMode(
      mode === 'auto'
    );
  };

  return (
    <section
      ref={heroRef}
      className="
        group
        relative
        min-h-[560px]
        h-[calc(100vh-80px)]
        max-h-[900px]
        w-full
        overflow-hidden
        bg-[#030202]
        text-white
        cursor-crosshair
      "
    >

      {/* ==================================================
          PARTICLE CANVAS
      ================================================== */}

      <canvas
        ref={canvasRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          block
          h-full
          w-full
          opacity-75
        "
        aria-hidden="true"
      />

      {/* ==================================================
          MOUSE FOLLOWING GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          z-[2]
          h-56
          w-56
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          left: 'var(--cursor-x)',
          top: 'var(--cursor-y)',
          background:
            'radial-gradient(circle, rgba(194,157,86,0.20) 0%, rgba(194,157,86,0.08) 30%, transparent 72%)',
          filter: 'blur(10px)',
        }}
      />

      {/* ==================================================
          BACKGROUND RADIAL LIGHT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_48%,rgba(194,157,86,0.12),transparent_36%),radial-gradient(circle_at_50%_50%,rgba(107,19,18,0.18),transparent_65%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.28),transparent_28%,transparent_72%,rgba(0,0,0,0.75))]
        "
      />

      {/* ==================================================
          TOP LEFT LABEL
      ================================================== */}

      <div
        className="
          absolute
          left-4
          top-5
          z-20
          sm:left-7
          sm:top-7
          lg:left-10
          lg:top-9
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#C29D56]" />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#C29D56]
              sm:text-[10px]
            "
          >
            EXP 00 / RESIDENTIAL
          </span>
        </div>

        <p
          className="
            mt-1
            pl-10
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-white/45
            sm:text-[9px]
          "
        >
          Computational Living
        </p>
      </div>

      {/* ==================================================
          TOP RIGHT BRAND
      ================================================== */}

      <div
        className="
          absolute
          right-4
          top-5
          z-20
          text-right
          sm:right-7
          sm:top-7
          lg:right-10
          lg:top-9
        "
      >
        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white/75
            sm:text-[10px]
          "
        >
          ĀDI SHAKTI
        </p>

        <p
          className="
            mt-1
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-[#C29D56]/75
            sm:text-[8px]
          "
        >
          Coloniser & Homebuilders
        </p>
      </div>

      {/* ==================================================
          LEFT VERTICAL INFORMATION
      ================================================== */}

      <div
        className="
          absolute
          left-4
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          lg:block
        "
      >
        <div
          className="
            writing-vertical
            text-[8px]
            font-bold
            uppercase
            tracking-[0.32em]
            text-white/35
          "
          style={{
            writingMode:
              'vertical-rl',
          }}
        >
          10.38 ACRES · RESIDENTIAL
          PLOTS · SATRIKH ROAD,
          LUCKNOW
        </div>
      </div>

      {/* ==================================================
          RIGHT VERTICAL INFORMATION
      ================================================== */}

      <div
        className="
          absolute
          right-4
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          text-right
          lg:block
        "
      >
        <p
          className="
            text-[8px]
            font-bold
            tracking-[0.25em]
            text-white/35
          "
        >
          01
        </p>

        <div
          className="
            my-2
            ml-auto
            h-16
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#C29D56]/50
            to-transparent
          "
        />

        <p
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#C29D56]/70
          "
        >
          HARIKA PARADISE
        </p>
      </div>

      {/* ==================================================
          HERO CONTENT
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          flex
          justify-center
          px-4
        "
      >
        <div
          className="
            pointer-events-auto
            w-full
            max-w-3xl
            -translate-y-2
            text-center
             sm:-translate-y-24
             lg:-translate-y-28
          "
        >

          {/* Small Heading */}

          <p
            className="
              mb-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.42em]
              text-[#C29D56]
              sm:text-[10px]
            "
          >
            A New Dimension of Living
          </p>

          {/* MAIN HEADING */}

          <h1
            className="
              text-4xl
              font-black
              uppercase
              leading-none
              tracking-[-0.04em]
              text-white
              drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]
              transition-all
              duration-500
              hover:tracking-[-0.02em]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Adi{' '}
            <span
              className="
                text-[#C29D56]
                transition-all
                duration-500
                hover:text-[#E1C27A]
              "
            >
              Shakti
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[11px]
              leading-relaxed
              text-white/65
              sm:text-sm
            "
          >
            Where thoughtful planning meets a
            better way of living.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-2.5
            "
          >

            <Link
              to="/our-projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#C29D56]
                px-4
                py-2.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-wide
                text-[#3a0a0a]
                shadow-[0_8px_30px_rgba(194,157,86,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E1C27A]
                hover:shadow-[0_12px_35px_rgba(194,157,86,0.35)]
                sm:px-5
                sm:text-xs
              "
            >
              Explore Projects

              <ArrowRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="/enquire-now"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-[#C29D56]/45
                bg-black/25
                px-4
                py-2.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-wide
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C29D56]
                hover:bg-[#6B1312]/70
                hover:shadow-[0_10px_30px_rgba(194,157,86,0.18)]
                sm:px-5
                sm:text-xs
              "
            >
              <PhoneCall
                className="
                  h-3.5
                  w-3.5
                  text-[#C29D56]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              Enquire Now
            </Link>

          </div>
        </div>
      </div>

      {/* ==================================================
          INTERACTIVE FIELD LABEL
      ================================================== */}

      <div
        className="
          absolute
          bottom-4
          left-4
          z-20
          flex
          items-center
          gap-2
          sm:left-7
          lg:left-10
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#C29D56]
            shadow-[0_0_10px_rgba(194,157,86,0.9)]
            animate-pulse
          "
        />

        <span
          className="
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/35
          "
        >
          Move Cursor · Interactive Field
        </span>
      </div>

      {/* ==================================================
          WEBGL FALLBACK
      ================================================== */}

      {!webglSupported && (
        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
            bg-[radial-gradient(circle_at_center,rgba(107,19,18,0.45),#030202_65%)]
          "
        >
          <div
            className="
              px-6
              text-center
            "
          >
            <div
              className="
                mx-auto
                mb-5
                h-36
                w-36
                rounded-full
                border
                border-[#C29D56]/30
                bg-[radial-gradient(circle_at_35%_30%,rgba(225,194,122,0.5),rgba(107,19,18,0.25)_35%,transparent_70%)]
                shadow-[0_0_80px_rgba(194,157,86,0.12)]
              "
            />

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#C29D56]
              "
            >
              Harika Paradise
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

const Home = () => {
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
      const container = whyChooseContainerRef.current;
      const container2 = feedbackContainerRef.current;
      const cardElement = container2.querySelector('.feedback-card');
      const cardWidth = cardElement ? cardElement.offsetWidth + 20 : 280;
      container2.scrollBy({
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

        /* Why Choose Us compact expandable cards */
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

        .javier-card * { z-index: 1; }

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

        .javier-card:hover .javier-card-info { transform: translateY(-10px); }

        .javier-card:hover .javier-card-info span,
        .javier-card:hover .javier-card-info p { color: #ffffff; }

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

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= SECTION 1: INTERACTIVE PARTICLE HERO ================= */}
      <ParticleHero />

      {/* ================= SECTION 2: COMPANY & PROJECT OVERVIEW (LIGHT GEOMETRICAL BG) ================= */}
      <section
        ref={section2Ref}
        className="py-12 sm:py-16 bg-white relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
            <h2
              className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C29D56] transition-opacity duration-500 ${isSection2Visible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              Welcome to Harika Paradise
            </h2>

            <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 flex flex-wrap justify-center gap-x-2.5 gap-y-1">
              {headingWords2.map((word, index) => (
                <span
                  key={index}
                  className={`rain-word ${isSection2Visible ? 'animate-rain-drop' : ''
                    }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
            </h3>

            <div
              className={`w-20 h-1 bg-[#6B1312] mx-auto rounded-full mt-2 transition-all duration-700 ${isSection2Visible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-50'
                }`}
            />
          </div>

          <div className="relative mb-12">
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#C29D56]/50 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl h-[280px] sm:h-[340px] border border-slate-200 shadow-sm bg-white">
                <img
                  src={introImg}
                  alt="Company Introduction"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Building Trust, Delivering Excellence Across Generations
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Harika Paradise is dedicated to creating thoughtfully planned spaces
                  that inspire better living. We combine elegant design, modern
                  infrastructure, and natural surroundings in every development. Our
                  commitment to quality ensures lasting comfort, safety, and long-term
                  value.
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Transparency and customer satisfaction remain at the heart of
                  everything we do. Every detail is carefully designed to meet the
                  expectations of modern families.
                </p>

                <div className="pt-1">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-[#6B1312] font-bold text-xs sm:text-sm hover:text-[#C29D56] transition-colors"
                  >
                    Read More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Uiverse Style Feature Cards Carousel */}
          <div
            ref={cardsContainerRef}
            className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory px-2 md:px-0 pb-4 md:pb-0 no-scrollbar"
          >
            {featureCardsData.map((card, index) => (
              <div
                key={index}
                className="group relative flex min-h-[320px] w-[260px] flex-shrink-0 snap-center cursor-pointer flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(170deg,rgba(135,42,39,0.95)_0%,#6B1312_45%,#3D0908_100%)] shadow-[0_25px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-[0.96] hover:shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:w-[290px] md:w-full"
              >
                {/* Ribbon */}
                <span className="absolute left-[-10px] top-[-10px] z-20 flex h-[155px] w-[155px] items-center justify-center overflow-hidden">
                  <span className="absolute flex h-10 w-[150%] -translate-y-5 rotate-[-45deg] items-center justify-center whitespace-nowrap bg-[linear-gradient(45deg,#A87F35_0%,#C29D56_50%,#E1C27A_100%)] text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#6B1312]">
                    {card.subtitle}
                  </span>
                </span>

                {/* Card Content */}
                <div className="relative z-10 flex h-full flex-1 flex-col p-6 pt-20">

                  {/* Heading */}
                  <div className="mb-5 pl-8">
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="mb-5 h-px w-full bg-white/20" />

                  {/* Points */}
                  <ul className="flex-1 space-y-3">
                    {[card.desc1, card.desc2, card.desc3, card.desc4].map(
                      (item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-sm text-white/90"
                        >
                          {/* Check Icon */}
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#C29D56] text-[#6B1312]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="11"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>

                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* Explore Button */}
                  <Link
                    to="/projects/harika-paradise"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-[#C29D56]/70 bg-[#C29D56] px-5 py-2.5 text-xs font-bold text-[#6B1312] shadow-lg transition-all duration-300 hover:border-white hover:bg-white hover:text-[#6B1312]"
                  >
                    Explore Highlights
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: FEATURED PROJECT (DARK MAROON GEOMETRICAL BG) ================= */}
      {/* ================= FEATURED PROJECT ================= */}
      <section
        ref={section3Ref}
        className="relative overflow-hidden bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] py-12 text-white sm:py-16"
      >
        {/* Background Dotted Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        {/* Background Effects */}
        <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#C29D56]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#6B1312]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}

          {/* Main Content */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT — Content */}
            <div
              className={`order-2 lg:order-1 transition-all duration-700 ${isSection3Visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
                }`}
            >
              <div className="max-w-2xl">


                <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-3xl">
                  A premium 10.38-acre residential plotted community designed for
                  elite living.
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Experience a lifestyle of unmatched tranquility and elegance.
                  Strategically located on Satrikh Road, Harika Paradise brings
                  together modern infrastructure, lush green spaces, and complete
                  legal security.
                </p>

                {/* Project Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/40 hover:bg-[#C29D56]/10">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#C29D56]" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                        Total Area
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      10.38 Acres
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/40 hover:bg-[#C29D56]/10">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#C29D56]" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                        Property Type
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      Residential Plots
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/40 hover:bg-[#C29D56]/10">
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="h-4 w-4 text-[#C29D56]" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                        Plot Variety
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      Multiple Sizes
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/40 hover:bg-[#C29D56]/10">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-[#C29D56]" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                        Infrastructure
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      Planned Roads
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/40 hover:bg-[#C29D56]/10">
                    <div className="flex items-center gap-2">
                      <Trees className="h-4 w-4 text-[#C29D56]" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                        Environment
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      Green Spaces
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/40 hover:bg-[#C29D56]/10">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#C29D56]" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/60">
                        Community
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      Lifestyle Amenities
                    </p>
                  </div>

                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    to="/projects/harika-paradise"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#C29D56] px-5 py-3 text-xs font-extrabold text-[#3a0a0a] shadow-lg transition-all duration-300 hover:bg-[#E1C27A] hover:shadow-[0_10px_30px_rgba(194,157,86,0.25)] sm:text-sm"
                  >
                    Explore Harika Paradise
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div
              className={`order-1 lg:order-2 transition-all duration-700 ${isSection3Visible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
                }`}
            >
              <div className="group relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-[#C29D56]/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.45)]">

                {/* Gold Top Line */}
                <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-transparent via-[#C29D56] to-transparent" />

                <img
                  src={featProjImg}
                  alt="Harika Paradise Featured Project"
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[350px] lg:h-[430px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120303]/80 via-transparent to-transparent" />

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#C29D56]/30 bg-black/50 px-3 py-2 backdrop-blur-md">
                    <MapPin className="h-4 w-4 text-[#C29D56]" />
                    <span className="text-xs font-bold text-white">
                      Satrikh Road, Lucknow
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US: MERGED HOME SECTION ================= */}
      <section id="why-choose-us" className="relative overflow-hidden">

        {/* ================= PLANNED DEVELOPMENT ================= */}
        <div className="py-12 sm:py-16 bg-white relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-6 space-y-4">

                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    Planned Development Rooted in Legal Integrity
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  At Ādi Shakti Coloniser, we believe that true real estate value begins
                  with absolute legal security and methodical land procurement. Every
                  project is conceived after rigorous due diligence, clear title
                  verifications, and compliance with local municipal bodies like Nagar
                  Panchayat approvals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-[#C29D56]/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#6B1312]/10 flex items-center justify-center text-[#6B1312] flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#6B1312]" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        100% Clear Titles
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Verified land ownership with hassle-free registry.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-[#C29D56]/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#C29D56]/15 flex items-center justify-center text-[#C29D56] flex-shrink-0 mt-0.5">
                      <Landmark className="w-4 h-4 text-[#C29D56]" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Approved Frameworks
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Fully sanctioned layouts meeting municipal guidelines.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C29D56]/30 h-[280px] sm:h-[340px] group">
                  <img
                    src={gallery5Img}
                    alt="Planned Development"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ================= PROJECT PLANNING ================= */}
        <div className="py-14 sm:py-18 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] border-t border-[#C29D56]/30 relative overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Comprehensive Project Planning
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm">
                Engineered for longevity, smooth transit, and sustainable community
                living. Hover over cards to explore.
              </p>

              <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-items-center">

              <div className="javier-card">
                <div className="javier-image-box">
                  <Layers className="w-7 h-7 text-[#C29D56]" />
                </div>

                <div className="javier-card-info">
                  <span>Infrastructure</span>
                  <p>
                    Wide internal bitumen & concrete roads, underground stormwater
                    drainage, and reliable electricity provisioning.
                  </p>
                </div>

                <Link to="/contact" className="javier-button">
                  Enquire
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>


              <div className="javier-card">
                <div className="javier-image-box">
                  <Trees className="w-7 h-7 text-[#C29D56]" />
                </div>

                <div className="javier-card-info">
                  <span>Green Spaces</span>
                  <p>
                    Thoughtfully allocated landscape parks, children play zones, and
                    lush avenue tree plantation for serene living.
                  </p>
                </div>

                <Link to="/contact" className="javier-button">
                  Enquire
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>


              <div className="javier-card">
                <div className="javier-image-box">
                  <Shield className="w-7 h-7 text-[#C29D56]" />
                </div>

                <div className="javier-card-info">
                  <span>Gated Security</span>
                  <p>
                    Secure compound boundary walls, grand entrance portals with
                    round-the-clock surveillance, and bright street lighting.
                  </p>
                </div>

                <Link to="/contact" className="javier-button">
                  Enquire
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>
        </div>


        {/* ================= LOCATION FOCUS ================= */}
        <div className="py-12 sm:py-16 bg-white border-t border-slate-200 relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#C29D56]/30 h-[280px] sm:h-[340px] group">

                  <img
                    src={slide1Img}
                    alt="Location Focus"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>


              <div className="lg:col-span-6 space-y-4">

                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    Location Focus & High-Growth Approach
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We handpick land parcels along fast-developing urban corridors like
                  Satrikh Road, Lucknow. Our location strategy ensures seamless
                  connectivity to major highways, educational institutions, healthcare
                  centers, and upcoming commercial hubs while keeping residents tucked
                  away in peaceful surroundings.
                </p>

                <div className="space-y-2.5 pt-1">

                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-[#C29D56]/50 transition-colors">
                    <Compass className="w-4 h-4 text-[#C29D56]" />
                    <span className="text-xs font-bold text-slate-800">
                      Proximity to major arterial roads & ring roads (e.g., Kisan Path)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-[#C29D56]/50 transition-colors">
                    <TrendingUp className="w-4 h-4 text-[#6B1312]" />
                    <span className="text-xs font-bold text-slate-800">
                      High capital appreciation potential for investors
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ================= CUSTOMER EXPERIENCE ================= */}
        <div className="py-14 sm:py-18 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden">

          {/* Golden Dotted Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

          {/* Decorative SVG Line */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
            <svg
              className="w-full h-40 max-w-6xl"
              viewBox="0 0 1200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 100C300 20 400 180 650 100C900 20 1000 180 1150 100"
                stroke="#6B1312"
                strokeWidth="2.5"
                strokeDasharray="8 8"
              />
            </svg>
          </div>


          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#050404] tracking-tight">
                Customer Experience & Process
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm">
                From your first query to final documentation, we ensure a transparent,
                supportive journey.
              </p>

              <div className="w-16 h-1 bg-[#C29D56] mx-auto rounded-full mt-2" />

            </div>


            {/* Process Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Card 01 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative group hover:border-[#C29D56]/50 hover:shadow-md transition-all duration-300">

                <span className="absolute top-3 right-3 text-2xl font-black text-[#6B1312]/15 group-hover:text-[#6B1312]/30 transition-colors">
                  01
                </span>

                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#6B1312] shadow-inner group-hover:bg-[#6B1312] group-hover:text-white transition-all duration-300">
                  <PhoneCall className="w-4 h-4" />
                </div>

                <h4 className="text-sm font-extrabold text-[#6B1312]">
                  1. Enquiry & Consultation
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect with our advisory team via phone or website. We understand
                  your budget, preferred size, and investment goals.
                </p>
              </div>


              {/* Card 02 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative group hover:border-[#C29D56]/50 hover:shadow-md transition-all duration-300">

                <span className="absolute top-3 right-3 text-2xl font-black text-[#6B1312]/15 group-hover:text-[#6B1312]/30 transition-colors">
                  02
                </span>

                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#6B1312] shadow-inner group-hover:bg-[#6B1312] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>

                <h4 className="text-sm font-extrabold text-[#6B1312]">
                  2. Guided Site Visit
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  We arrange complimentary site visits to Harika Paradise so you can
                  inspect development progress and surrounding infrastructure firsthand.
                </p>
              </div>


              {/* Card 03 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative group hover:border-[#C29D56]/50 hover:shadow-md transition-all duration-300">

                <span className="absolute top-3 right-3 text-2xl font-black text-[#6B1312]/15 group-hover:text-[#6B1312]/30 transition-colors">
                  03
                </span>

                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#6B1312] shadow-inner group-hover:bg-[#6B1312] group-hover:text-white transition-all duration-300">
                  <Building2 className="w-4 h-4" />
                </div>

                <h4 className="text-sm font-extrabold text-[#6B1312]">
                  3. Plot Selection
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Choose your ideal plot from our master layout plan based on road
                  width, orientation, and dimensions matching your dream home blueprint.
                </p>
              </div>


              {/* Card 04 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative group hover:border-[#C29D56]/50 hover:shadow-md transition-all duration-300">

                <span className="absolute top-3 right-3 text-2xl font-black text-[#6B1312]/15 group-hover:text-[#6B1312]/30 transition-colors">
                  04
                </span>

                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#6B1312] shadow-inner group-hover:bg-[#6B1312] group-hover:text-white transition-all duration-300">
                  <FileText className="w-4 h-4" />
                </div>

                <h4 className="text-sm font-extrabold text-[#6B1312]">
                  4. Transparent Documentation
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete legal verification, hassle-free registry, and transparent
                  paperwork backed by our expert legal consultants.
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ================= SECTION 6: GALLERY PREVIEW (DARK MAROON GEOMETRICAL BG) ================= */}
      <section
        ref={section6Ref}
        className="py-6 sm:py-8 relative bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] text-white border-t border-slate-200 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-15 pointer-events-none" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C29D56]/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">

          <div className="py-1 sm:py-2">

            {/* =========================
            SECTION HEADER
        ========================= */}
            <div className="mb-5 sm:mb-6 text-center">

              <span className="inline-block text-[#C29D56] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-1.5">
                Visual Tour
              </span>

              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Our Gallery
              </h2>

              <p className="text-slate-300 text-[11px] sm:text-xs md:text-sm mt-1.5 max-w-xl mx-auto">
                Explore the beauty, lifestyle and infrastructure of Harika Paradise.
              </p>

              <div className="w-14 h-0.5 bg-[#C29D56] mx-auto rounded-full mt-2" />

            </div>


            {/* =========================
            GALLERY CAROUSEL
        ========================= */}
            {/* =========================
    GALLERY GRID
========================= */}
            <div className="max-w-7xl mx-auto px-0 sm:px-2">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                {/* =========================
        MAIN LARGE IMAGE
    ========================= */}
                <div
                  className="w-full aspect-[14/13] cursor-pointer group"
                  onClick={() => {
                    setActiveGalleryIndex(0);
                    setLightboxImg(galleryImages[0].src);
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl bg-black border border-[#C29D56]/30 shadow-xl">

                    <img
                      src={galleryImages[0].src}
                      alt={`Harika Paradise Gallery 1`}
                      className="w-full h-full rounded-lg sm:rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/50 px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                        Click to Expand
                      </span>
                    </div>

                    {/* Image Number */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full text-[10px] font-semibold">
                      01
                    </div>

                  </div>
                </div>


                {/* =========================
        FOUR SMALL IMAGES
    ========================= */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">

                  {galleryImages.slice(1, 5).map((image, idx) => {

                    const imageIndex = idx + 1;

                    return (
                      <div
                        key={imageIndex}
                        className="w-full aspect-[14/13] cursor-pointer group"
                        onClick={() => {
                          setActiveGalleryIndex(imageIndex);
                          setLightboxImg(image.src);
                        }}
                      >
                        <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl bg-black border border-[#C29D56]/30 shadow-lg">

                          <img
                            src={image.src}
                            alt={`Harika Paradise Gallery ${imageIndex + 1}`}
                            className="w-full h-full rounded-lg sm:rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-[#6B1312] text-[#C29D56] border border-[#C29D56]/50 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold shadow-lg">
                              View
                            </span>
                          </div>

                          {/* Image Number */}
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md border border-white/20 text-white px-2 py-0.5 rounded-full text-[9px] font-semibold">
                            {String(imageIndex + 1).padStart(2, "0")}
                          </div>

                        </div>
                      </div>
                    );
                  })}

                </div>

              </div>


              {/* =========================
    VIEW FULL GALLERY
========================= */}
              <div className="text-center mt-5 sm:mt-6">

                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1.5 bg-[#C29D56] hover:bg-[#b08b47] text-[#6B1312] px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-[11px] sm:text-xs shadow-md transition-all group"
                >
                  View Full Gallery

                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

            </div>
          </div>

        </div>


        {/* =====================================================
    FULLSCREEN LIGHTBOX
===================================================== */}
        {lightboxImg && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">

            {/* Close */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#6B1312] border border-white/20 hover:border-[#C29D56] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>


            {/* Previous Lightbox */}
            <button
              onClick={() => {
                const newIndex =
                  (activeGalleryIndex - 1 + galleryImages.length) %
                  galleryImages.length;

                setActiveGalleryIndex(newIndex);
                setLightboxImg(galleryImages[newIndex].src);
              }}
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#6B1312] border border-white/20 hover:border-[#C29D56] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>


            {/* Main Lightbox Image */}
            <img
              src={lightboxImg}
              alt={`Harika Paradise Enlarged ${activeGalleryIndex + 1}`}
              className="max-w-[88vw] sm:max-w-[85vw] max-h-[78vh] sm:max-h-[82vh] rounded-lg sm:rounded-xl object-contain shadow-2xl border border-white/10"
            />


            {/* Next Lightbox */}
            <button
              onClick={() => {
                const newIndex =
                  (activeGalleryIndex + 1) % galleryImages.length;

                setActiveGalleryIndex(newIndex);
                setLightboxImg(galleryImages[newIndex].src);
              }}
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#6B1312] border border-white/20 hover:border-[#C29D56] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>


            {/* Lightbox Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-[#C29D56]/30 text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold">
              {activeGalleryIndex + 1} / {galleryImages.length}
            </div>

          </div>
        )}

      </section>

      {/* ================= FEEDBACK SECTION (LIGHT GEOMETRICAL BG) ================= */}
      <section
        ref={sectionFeedbackRef}
        className="py-12 sm:py-16 bg-white border-t border-slate-200 relative overflow-hidden bg-[radial-gradient(rgba(194,157,86,0.28)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29D56]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* =========================
            SECTION HEADING
        ========================= */}
          <div className="mb-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">

              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 flex flex-wrap justify-center gap-x-2 gap-y-1">
                {headingWordsFeedback.map((word, index) => (
                  <span
                    key={index}
                    className={`rain-word ${isSectionFeedbackVisible
                      ? "animate-rain-drop"
                      : ""
                      }`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h3>

              <p className="text-slate-600 text-xs font-medium">
                Hear what our valued plot owners and investors have to say about us.
              </p>

              <div
                className={`w-14 h-1 bg-[#6B1312] mx-auto rounded-full mt-1.5 transition-all duration-700 ${isSectionFeedbackVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
                  }`}
              />
            </div>
          </div>

          {/* =========================
            FEEDBACK CARDS
        ========================= */}
          <div className="relative max-w-6xl mx-auto px-2 sm:px-6">

            {/* Left Button */}
            <button
              onClick={() => scrollFeedback("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-[#6B1312] text-slate-700 hover:text-[#C29D56] p-2 rounded-full shadow-md border border-slate-200 transition-all hidden sm:flex items-center justify-center"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scrollFeedback("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-[#6B1312] text-slate-700 hover:text-[#C29D56] p-2 rounded-full shadow-md border border-slate-200 transition-all hidden sm:flex items-center justify-center"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* =========================
                FEEDBACK CARDS CONTAINER
            ========================= */}
            <div
              ref={feedbackContainerRef}
              className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth py-3 px-2"
            >
              {feedbackData.map((item, index) => {

                /* =========================
                    MALE IMAGES
                ========================= */
                const maleImages = [
                  "https://tse3.mm.bing.net/th/id/OIP.7UlLJKC6VjaK803Itd1McwAAAA?r=0&w=260&h=280&rs=1&pid=ImgDetMain&o=7&rm=3",
                  "https://cdn1.vectorstock.com/i/1000x1000/69/80/cartoon-man-elegant-human-resources-vector-10786980.jpg",
                ];

                /* =========================
                    FEMALE IMAGES
                ========================= */
                const femaleImages = [
                  "https://img.freepik.com/premium-vector/female-employee-avatar_505024-1176.jpg?w=2000",
                  "https://img.freepik.com/premium-photo/illustration-single-woman-american-cartoon-art-style-images-with-ai-generated_545052-628.jpg?w=2000",
                ];

                /* =========================
                    IMAGE BASED ON GENDER
                ========================= */
                const isFemale =
                  String(item.gender || "").toLowerCase() === "female";

                const genderImageIndex = Math.floor(index / 2) % 2;

                const profileImage = isFemale
                  ? femaleImages[genderImageIndex]
                  : maleImages[genderImageIndex];

                return (
                  <div
                    key={index}
                    className="
                feedback-card
                relative
                bg-white
                w-[260px]
                max-w-[260px]
                lg:w-[calc((100%_-_60px)/4)]
                lg:max-w-none
                p-5
                border
                border-slate-200
                rounded-2xl
                shadow-sm
                flex-shrink-0
                snap-start
                flex
                flex-col
                justify-between
                transition-all
                duration-300
                hover:shadow-md
                hover:border-[#C29D56]/50
                group
              "
                  >

                    {/* Quote Icon */}
                    <div className="absolute top-2.5 right-2.5 text-[#C29D56]">
                      <Quote className="w-4 h-4 opacity-40" />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col items-center text-center pt-1">

                      {/* =========================
                        PROFILE IMAGE
                    ========================= */}
                      <div className="w-14 h-14 mb-3 rounded-full overflow-hidden bg-[#C29D56]/15 border-2 border-[#C29D56]/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">

                        <img
                          src={profileImage}
                          alt={`${item.name} profile`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />

                      </div>

                      {/* Name */}
                      <h5 className="mb-0.5 text-base font-bold tracking-tight text-slate-900">
                        {item.name}
                      </h5>

                      {/* Role */}
                      <span className="text-[11px] font-semibold text-[#6B1312] bg-[#C29D56]/10 px-2.5 py-0.5 rounded-full">
                        {item.role}
                      </span>

                      {/* Review */}
                      <p className="mt-2.5 text-[11px] text-slate-600 leading-relaxed italic line-clamp-3">
                        "{item.review}"
                      </p>

                      {/* Stars */}
                      <div className="flex mt-3 gap-0.5 text-[#C29D56]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-current"
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: LOCATION / CONTACT CTA (LIGHT GEOMETRICAL BG) ================= */}
      <section ref={section7Ref} className="relative overflow-hidden border-t border-[#C29D56]/20 bg-gradient-to-br from-[#120303] via-[#3a0a0a] to-[#250404] py-12 text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:py-16">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C29D56]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#C29D56_1px,transparent_1px)] [background-size:30px_30px] opacity-25 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="max-w-2xl space-y-2 text-center lg:text-left">
              <span className="inline-flex rounded-full border border-[#C29D56]/40 bg-[#C29D56]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#C29D56]">
                Take The Next Step
              </span>
              <h3 className="text-xl font-black leading-snug tracking-tight text-white sm:text-3xl">
                Looking for a Residential Plot?
              </h3>
              <p className="text-xs font-medium leading-relaxed text-white/70 sm:text-sm">
                Explore Harika Paradise at Satrikh Road. Your dream destination for peace, modern infrastructure, and secure investment awaits.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 flex-shrink-0">
              <Link to="/projects/harika-paradise" className="group flex items-center gap-2 rounded-xl border border-[#C29D56]/50 bg-[#C29D56] px-6 py-3.5 text-xs font-extrabold text-[#3a0a04] shadow-lg transition-all duration-300 hover:bg-[#E1C27A] sm:text-sm">
                <Compass className="h-4 w-4 text-[#3a0a04] transition-transform duration-300 group-hover:rotate-12" />
                View Project
              </Link>
              <Link to="/contact-us" className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-extrabold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#C29D56]/50 hover:bg-white/10 sm:text-sm">
                <PhoneCall className="h-4 w-4 text-[#C29D56]" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;