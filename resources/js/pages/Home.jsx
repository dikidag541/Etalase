import React, { useEffect, useState, useRef } from 'react'
import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function Home({ cms = {} }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .curtain-reveal, .parade-item').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <Head title="SOVEREIGN | UKM Kesenian Etalase" />

      {/* Artistic Noise & Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[999] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
      <div className="fixed inset-0 pointer-events-none gold-leaf-texture opacity-[0.02] z-[998]"></div>

      {/* --- HERO SECTION: CINEMATIC MASTERPIECE --- */}
      <section className="section-stack-pin z-[10] bg-surface">
        {/* Top Edge Glow */}
        <div className="absolute top-0 left-0 w-full h-96 edge-glow-blue opacity-50 z-20 pointer-events-none"></div>
        {/* Background Media & Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70 scale-110 active-zoom"
          >
            <source src={cms.hero_video || '/videos/Trailer.mp4'} type="video/mp4" />
          </video>

          {/* Dramatic Gradient Fades */}
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-surface via-surface/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>

          {/* Majestic Aura Overlay */}
          <div className="absolute inset-0 majestic-aura opacity-30 pointer-events-none"></div>
        </div>

        {/* Floating Narrative Cards (Staggered Movement) */}
        <div
          className="absolute left-[5%] top-[30%] -translate-y-1/2 hidden 2xl:block"
          style={{ transform: `translateY(${-scrollY * 0.1}px) rotate(-8deg)` }}
        >
          <div className="w-[400px] h-[550px] ornamental-border p-3 bg-surface/5 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] group transition-transform duration-[1.5s] hover:rotate-0">
            <img src="/images/Salinan Ave 4 cymk.jpg" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]" alt="Sovereign Detail 1" />
          </div>
        </div>

        <div
          className="absolute right-[5%] top-[60%] -translate-y-1/2 hidden 2xl:block"
          style={{ transform: `translateY(${-scrollY * 0.05}px) rotate(8deg)` }}
        >
          <div className="w-[400px] h-[550px] ornamental-border p-3 bg-surface/5 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] group transition-transform duration-[1.5s] hover:rotate-0">
            <img src="/images/IMG_6046 (1).JPG" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]" alt="Sovereign Detail 2" />
          </div>
        </div>

        {/* Main Content: Monumental Typography */}
        {/* Main Content: OVERSIZED DYNAMIC SCROLL TYPOGRAPHY */}
        <div className="relative z-10 w-full h-[150vh] flex flex-col justify-end items-center overflow-hidden pb-[20vh]">

          {/* Layer 1: UKMK (Moves Right) */}
          <div
            className="w-full flex justify-start pl-[5vw]"
            style={{ transform: `translateX(${scrollY * 0.4}px)` }}
          >
            {/* Huge Solid Text - Prismatic Gradient */}
            <span className="font-playfair italic text-texture-grand text-[18vw] leading-[0.8] tracking-tighter select-none block whitespace-nowrap drop-shadow-2xl pr-4">
              UKMK
            </span>
            {/* Ghost Outline Text */}
            <span className="absolute top-0 left-0 pl-[5vw] font-playfair italic text-outline text-[18vw] leading-[0.8] tracking-tighter select-none block whitespace-nowrap opacity-30 mix-blend-overlay"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              UKMK
            </span>
          </div>

          {/* Layer 2: ETALASE (Moves Left) */}
          <div
            className="w-full flex justify-end pr-[5vw] -mt-[4vw]"
            style={{ transform: `translateX(${-scrollY * 0.4}px)` }}
          >
            {/* Huge Solid Text - Prismatic Gradient */}
            <span className="font-playfair italic text-texture-gold text-[18vw] leading-[0.8] tracking-tight select-none block whitespace-nowrap drop-shadow-2xl pr-4">
              Etalase
            </span>
            {/* Ghost Outline Text */}
            <span className="absolute top-0 right-0 pr-[5vw] font-playfair italic text-outline text-[18vw] leading-[0.8] tracking-tight select-none block whitespace-nowrap opacity-30 mix-blend-overlay"
              style={{ transform: `translateY(${-scrollY * 0.15}px)` }}>
              Etalase
            </span>
          </div>

          {/* Narrative Touch: Manifesto Reveal */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center mix-blend-difference">
            <p className="text-white text-xs md:text-sm font-bold tracking-[0.5em] uppercase opacity-60"
              style={{ opacity: Math.min(1, scrollY * 0.005) }}
            >
              Sebuah wahana transformasi
            </p>
          </div>
        </div>

        <div className="mt-28 flex flex-col sm:flex-row gap-16 justify-center items-center reveal delay-1k">
          <Link
            href="/gallery"
            className="group relative px-28 py-10 bg-white text-black font-black uppercase text-[12px] tracking-[0.8em] transition-all hover:bg-gold-500 hover:text-white hover:scale-110 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10">Expand Vision</span>
            <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </Link>
        </div>

        {/* Dynamic Background Glyph (Horizontal Scroll) */}
        <div
          className="absolute top-1/2 left-0 whitespace-nowrap text-[30vw] font-black text-white/[0.04] select-none italic leading-none pointer-events-none uppercase"
          style={{ transform: `translateX(${-scrollY * 0.4}px) translateY(-50%)` }}
        >
          SOVEREIGN SOVEREIGN SOVEREIGN
        </div>

        {/* Cinematic Bottom Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-surface to-transparent z-20"></div>
      </section>

      {/* --- PARADE SECTION: STAGGERED VISUAL FLOW --- */}
      <section className="section-stack-pin z-[20] bg-surface overflow-hidden relative">
        {/* Section Transition Glow */}
        <div className="absolute top-0 left-0 w-full h-64 edge-glow-red opacity-60 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 gold-leaf-texture opacity-[0.03]"></div>

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-24 items-start">
          {/* Left: Sticky Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-48">
            <div className="reveal">
              <div className="flex items-center gap-8 mb-16">
                <div className="h-px w-32 bg-etalase-red"></div>
                <span className="text-gold-500 text-sm tracking-[1.5em] uppercase font-black">Dynamic Parade</span>
              </div>

              <h2 className="font-serif text-[8vw] lg:text-[10rem] leading-[0.8] text-text-main italic tracking-tighter mb-16 select-none">
                <span className="block mb-6">The Grand</span>
                <span className="not-italic metallic-gold block filter drop-shadow-[0_10px_40px_rgba(212,175,55,0.5)]">
                  Etalase
                </span>
              </h2>

              <p className="text-text-muted text-xl md:text-2xl font-light leading-relaxed italic max-w-xl mb-16 opacity-0 reveal active">
                {cms.manifesto_desc || 'Setiap langkah adalah narasi, setiap kostum adalah prasasti. Kita tidak hanya melintas, kita meninggalkan jejak rupa yang abadi.'}
              </p>

              <div className="flex gap-16">
                <div>
                  <span className="block text-6xl font-black text-text-main italic">12+</span>
                  <span className="text-gold-500/50 text-[10px] uppercase tracking-[0.4em] font-bold">Fase</span>
                </div>
                <div>
                  <span className="block text-6xl font-black text-text-main italic">150+</span>
                  <span className="text-gold-500/50 text-[10px] uppercase tracking-[0.4em] font-bold">Kolektif</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Parade (Staggered Images) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-12 pt-24 lg:pt-0">
            {/* Item 1 - Fast */}
            <div
              className="parade-item reveal active"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              <div className="ornamental-border p-3 bg-surface-lighter shadow-3xl">
                <img src="/images/Salinan Ave 4 cymk.jpg" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Parade 1" />
              </div>
            </div>
            {/* Item 2 - Slow */}
            <div
              className="parade-item reveal delay-300 active mt-48 lg:mt-64"
              style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
            >
              <div className="ornamental-border p-3 bg-surface-lighter shadow-3xl">
                <img src="/images/IMG_6046 (1).JPG" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Parade 2" />
              </div>
            </div>
            {/* Item 3 - Medium */}
            <div
              className="parade-item reveal delay-500 active -mt-24 lg:-mt-32"
              style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
            >
              <div className="ornamental-border p-3 bg-surface-lighter shadow-3xl">
                <img src="/images/Salinan Ave 4 cymk.jpg" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Parade 3" />
              </div>
            </div>
            {/* Item 4 - Very Fast */}
            <div
              className="parade-item reveal delay-700 active mt-24"
              style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
            >
              <div className="ornamental-border p-3 bg-surface-lighter shadow-3xl">
                <img src="/images/IMG_6046 (1).JPG" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Parade 4" />
              </div>
            </div>
          </div>
        </div>

        {/* Large Scrolling Background Text */}
        <div
          className="absolute bottom-1/4 left-0 whitespace-nowrap text-[35vw] font-black text-text-main/[0.015] pointer-events-none select-none uppercase"
          style={{ transform: `translateX(${scrollY * 0.15}px)` }}
        >
          MANIFESTO MANIFESTO MANIFESTO
        </div>
      </section>

      {/* --- MASTERPIECE SECTION: CINEMATIC QUOTE --- */}
      <section className="section-stack-pin z-[30] bg-surface flex items-center justify-center overflow-hidden relative">
        {/* Section Transition Glow */}
        <div className="absolute top-0 left-0 w-full h-64 edge-glow-blue opacity-40 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 majestic-aura opacity-30 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10 reveal active">
          <blockquote
            className="font-serif italic text-[6vw] md:text-[5vw] lg:text-[4vw] leading-[1.2] text-text-main mb-12 select-none tracking-tight"
          >
            "{cms.masterpiece_quote || 'Setiap helai kain adalah doa, setiap gerak adalah revolusi rupa raga.'}"
          </blockquote>
          <Link
            href="/about"
            className="text-gold-500 text-sm font-black uppercase tracking-[1.5em] border-b border-gold-500/30 pb-4 hover:border-gold-500 hover:tracking-[1.8em] transition-all inline-flex items-center gap-12 group"
          >
            The Essence <ArrowRightIcon className="w-8 h-8 transition-transform group-hover:translate-x-6" />
          </Link>
        </div>
      </section>

      {/* --- FASET KESENIAN: GRID OF EXCELLENCE --- */}
      <section className="section-stack-pin z-[40] bg-surface relative">
        {/* Section Transition Glow */}
        <div className="absolute top-0 left-0 w-full h-64 edge-glow-red opacity-50 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 gold-leaf-texture opacity-5"></div>
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-48 reveal">
          <span className="text-etalase-red text-sm tracking-[2em] uppercase font-black mb-12 block">Faset Kesenian</span>
          <h2 className="text-7xl md:text-[10rem] font-serif text-text-main italic leading-none tracking-tighter">Diverse Expression</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-border-main">
          {['DANCE', 'THEATER', 'MUSIC', 'COSTUME', 'FILM', 'FINE ART'].map((faset, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] lg:aspect-square overflow-hidden border-r border-b border-border-main reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-black group-hover:bg-etalase-red/60 transition-all duration-700"></div>
              <div className="absolute inset-0 p-16 flex flex-col justify-end z-10">
                <span className="text-gold-500 text-[10px] tracking-[1em] uppercase font-black mb-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">FASET {i + 1}</span>
                <h3 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-700 group-hover:-translate-y-4 group-hover:text-gold-500">{faset}</h3>
                <div className="w-0 group-hover:w-full h-[2px] bg-gold-500 mt-8 transition-all duration-1000 ease-out"></div>
              </div>

              {/* Artistic Glyph Overlay on Hover */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.04] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000 uppercase italic leading-none"
                style={{ transform: i % 2 === 0 ? 'translate(-50%, -50%) rotate(10deg)' : 'translate(-50%, -50%) rotate(-10deg)' }}
              >
                {faset[0]}
              </div>

              {/* Individual Aura */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none majestic-aura"></div>
            </div>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
                .active-zoom {
                    animation: ultra-slow-zoom 60s infinite alternate linear;
                }
                @keyframes ultra-slow-zoom {
                    from { transform: scale(1.1); }
                    to { transform: scale(1.2); }
                }
                .reveal {
                    opacity: 0;
                    transform: translateY(60px);
                    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                .reveal-long {
                    opacity: 0;
                    transform: translateY(100px);
                    transition: all 2.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-long.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                .delay-300 { transition-delay: 300ms; }
                .delay-500 { transition-delay: 500ms; }
                .delay-700 { transition-delay: 700ms; }
                .delay-1k { transition-delay: 1000ms; }
                
                .parade-item {
                   opacity: 0;
                   transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .parade-item.active {
                   opacity: 1;
                }

                @keyframes scroll-line {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
                .animate-scroll-line {
                    animation: scroll-line 4s infinite cubic-bezier(0.15, 0.41, 0.69, 0.94);
                }
            `
      }} />
    </MainLayout >
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}
