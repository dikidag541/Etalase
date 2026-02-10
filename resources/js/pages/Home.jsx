import React, { useEffect, useState, useRef } from 'react'
import { Head, Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function Home({ cms = {}, divisions = [] }) {
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
      {/* --- HERO SECTION: CINEMATIC MASTERPIECE --- */}
      <section className="relative min-h-[120vh] bg-surface z-[10]">
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
        <div className="relative z-10 w-full min-h-screen flex flex-col justify-end items-center pb-[4vh]">

          {/* Layer 1: UKMK */}
          <div
            className="w-full flex justify-start pl-[5vw]"
            style={{ transform: `translateX(${scrollY * 0.3}px)` }}
          >
            {/* Huge Solid Text - Prismatic Gradient */}
            <span className="font-playfair italic text-texture-grand text-[18vw] leading-[0.8] tracking-tighter select-none block whitespace-nowrap drop-shadow-2xl pr-4">
              {cms.hero_title_1 || 'UKMK'}
            </span>
            {/* Ghost Outline Text */}
            <span className="absolute top-0 left-0 pl-[5vw] font-playfair italic text-outline text-[18vw] leading-[0.8] tracking-tighter select-none block whitespace-nowrap opacity-30 mix-blend-overlay"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
              {cms.hero_title_1 || 'UKMK'}
            </span>
          </div>

          {/* Layer 2: ETALASE */}
          <div
            className="w-full flex justify-end pr-[5vw] -mt-[4vw]"
            style={{ transform: `translateX(${-scrollY * 0.3}px)` }}
          >
            {/* Huge Solid Text - Prismatic Gradient */}
            <span className="font-playfair italic metallic-gold text-[18vw] leading-[0.8] tracking-tight select-none block whitespace-nowrap drop-shadow-2xl pr-4">
              {cms.hero_title_2 || 'Etalase'}
            </span>
            {/* Ghost Outline Text */}
            <span className="absolute top-0 right-0 pr-[5vw] font-playfair italic text-outline text-[18vw] leading-[0.8] tracking-tight select-none block whitespace-nowrap opacity-30 mix-blend-overlay"
              style={{ transform: `translateY(${-scrollY * 0.08}px)` }}>
              {cms.hero_title_2 || 'Etalase'}
            </span>
          </div>

          {/* Manifesto & CTA Section */}
          <div className="mt-24 flex flex-col items-center gap-12 reveal relative z-20">
            <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase opacity-40 mix-blend-difference">
              {cms.hero_subtitle || 'Sebuah wahana transformasi'}
            </p>
            <Link
              href="/gallery"
              className="group relative px-20 py-7 bg-white text-black font-black uppercase text-[10px] tracking-[0.6em] transition-all hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Expand Vision</span>
              <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </Link>
          </div>
        </div>

        {/* Dynamic Background Glyph */}
        <div
          className="absolute top-1/2 left-0 whitespace-nowrap text-[35vw] font-black text-white/[0.015] select-none italic leading-none pointer-events-none uppercase z-0"
          style={{ transform: `translateX(${-scrollY * 0.1}px) translateY(-50%)` }}
        >
          {cms.side_badge_text || 'SOVEREIGN SOVEREIGN SOVEREIGN'}
        </div>

        {/* Cinematic Bottom Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-surface via-surface to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* --- PARADE SECTION: STAGGERED VISUAL FLOW --- */}
      <section className="relative bg-surface py-40 z-[20]">
        {/* Section Transition Glow */}
        <div className="absolute top-0 left-0 w-full h-96 edge-glow-red opacity-40 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 gold-leaf-texture opacity-[0.03]"></div>

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-24 items-start relative z-10">
          {/* Left: Sticky Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-48">
            <div className="reveal">
              <div className="flex items-center gap-8 mb-16">
                <div className="h-px w-32 bg-etalase-red"></div>
                <span className="text-gold-500 text-sm tracking-[1.5em] uppercase font-black">{cms.parade_badge || 'Dynamic Parade'}</span>
              </div>

              <h2 className="font-serif text-[8vw] lg:text-[10rem] leading-[0.8] text-text-main italic tracking-tighter mb-16 select-none">
                <span className="block mb-6">{cms.manifesto_title_1 || 'The Grand'}</span>
                <span className="not-italic metallic-gold block filter drop-shadow-[0_10px_40px_rgba(212,175,55,0.5)]">
                  {cms.manifesto_title_2 || 'Etalase'}
                </span>
              </h2>

              <p className="text-text-muted text-xl md:text-2xl font-light leading-relaxed italic max-w-xl mb-16">
                {cms.manifesto_desc || 'Setiap langkah adalah narasi, setiap kostum adalah prasasti. Kita tidak hanya melintas, kita meninggalkan jejak rupa yang abadi.'}
              </p>

              <div className="flex gap-16">
                <div>
                  <span className="block text-6xl font-black text-text-main italic">{cms.parade_stat_1_val || '12+'}</span>
                  <span className="text-gold-500/50 text-[10px] uppercase tracking-[0.4em] font-bold">{cms.parade_stat_1_label || 'Fase'}</span>
                </div>
                <div>
                  <span className="block text-6xl font-black text-text-main italic">{cms.parade_stat_2_val || '150+'}</span>
                  <span className="text-gold-500/50 text-[10px] uppercase tracking-[0.4em] font-bold">{cms.parade_stat_2_label || 'Kolektif'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Parade (Staggered Images) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-12 pt-24 lg:pt-32">
            {[
              { src: cms.parade_image_1 || '/images/Salinan Ave 4 cymk.jpg', delay: '0', speed: 0.1 },
              { src: cms.parade_image_2 || '/images/IMG_6046 (1).JPG', delay: '300ms', speed: 0.02, margin: 'mt-64' },
              { src: cms.parade_image_3 || '/images/Salinan Ave 4 cymk.jpg', delay: '500ms', speed: 0.05, margin: '-mt-32' },
              { src: cms.parade_image_4 || '/images/IMG_6046 (1).JPG', delay: '700ms', speed: 0.15, margin: 'mt-24' }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`parade-item reveal active ${item.margin || ''}`}
                style={{ transform: `translateY(${-scrollY * item.speed}px)`, transitionDelay: item.delay }}
              >
                <div className="ornamental-border p-3 bg-surface-lighter shadow-3xl group overflow-hidden">
                  <img src={item.src} className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={`Parade ${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Scrolling Background Text */}
        <div
          className="absolute bottom-1/4 left-0 whitespace-nowrap text-[35vw] font-black text-text-main/[0.015] pointer-events-none select-none uppercase z-0"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        >
          MANIFESTO MANIFESTO MANIFESTO
        </div>
      </section>

      {/* --- MASTERPIECE SECTION: CINEMATIC QUOTE --- */}
      <section className="relative bg-surface py-60 flex items-center justify-center z-[30]">
        {/* Section Transition Glow */}
        <div className="absolute top-0 left-0 w-full h-96 edge-glow-blue opacity-30 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 majestic-aura opacity-30 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10 reveal">
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
      <section className="relative bg-surface py-40 z-[40]">
        {/* Section Transition Glow */}
        <div className="absolute top-0 left-0 w-full h-96 edge-glow-red opacity-40 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 gold-leaf-texture opacity-5"></div>

        <div className="max-w-[1400px] mx-auto px-6 text-center mb-48 reveal">
          <span className="text-etalase-red text-sm tracking-[2em] uppercase font-black mb-12 block">{cms.faset_badge || 'Faset Kesenian'}</span>
          <h2 className="text-7xl md:text-[10rem] font-serif text-text-main italic leading-none tracking-tighter">{cms.faset_title || 'Diverse Expression'}</h2>
        </div>

        {/* STAGGERED ORGANIC LAYOUT */}
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">

          {/* Large Background Glyph (Parallax) */}
          <div
            className="absolute top-0 right-0 text-[40vw] font-black text-text-main/[0.02] italic leading-none pointer-events-none select-none z-0"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            FASET
          </div>

          <div className="flex flex-wrap -mx-4">
            {(divisions && divisions.length > 0 ? divisions : [
              { name: 'DANCE', image_url: '/images/dance_performance.png' },
              { name: 'THEATER', image_url: '/images/theater_scene.png' },
              { name: 'MUSIC', image_url: '/images/hero_carnival.png' },
              { name: 'COSTUME', image_url: '/images/costume_detail.png' },
              { name: 'FILM', image_url: '/images/theater_scene.png' },
              { name: 'FINE ART', image_url: '/images/costume_detail.png' }
            ]).map((faset, i) => {
              const layouts = [
                { offset: 'mt-0', width: 'w-full md:w-7/12', speed: 0.05 },
                { offset: 'mt-24 md:mt-48', width: 'w-full md:w-4/12 ml-auto', speed: 0.1 },
                { offset: '-mt-12 md:-mt-32', width: 'w-full md:w-5/12', speed: 0.03 },
                { offset: 'mt-12 md:mt-24', width: 'w-full md:w-6/12 ml-[5%]', speed: 0.08 },
                { offset: 'mt-0 md:-mt-64 mr-auto', width: 'w-full md:w-4/12 ml-[10%]', speed: 0.12 },
                { offset: 'mt-24 md:mt-12 ml-auto', width: 'w-full md:w-7/12', speed: 0.05 }
              ];
              const layout = layouts[i % layouts.length];

              return (
                <div
                  key={i}
                  className={`${layout.width} px-4 mb-24 relative z-10`}
                >
                  <div
                    className={`group relative aspect-[4/5] overflow-hidden ornamental-border bg-black reveal ${layout.offset}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Background Image with Ultra-Slow Ken Burns */}
                    <img
                      src={faset.image_url || faset.img}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-[3s] ease-out ken-burns"
                      alt={faset.name}
                    />

                    {/* Majestic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:from-etalase-red/60 transition-all duration-1000"></div>
                    <div className="absolute inset-0 majestic-aura opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"></div>

                    {/* Content Reveal */}
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                      <div className="overflow-hidden">
                        <span className="text-gold-500 text-[9px] tracking-[0.8em] uppercase font-black block translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                          FASET 0{i + 1}
                        </span>
                      </div>
                      <div className="h-px w-0 group-hover:w-24 bg-gold-500/30 my-4 transition-all duration-1000 delay-300"></div>
                      <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter transition-all duration-1000 group-hover:text-gold-500">
                        {faset.short_name || faset.name}
                      </h3>
                    </div>

                    {/* Individual Glyph Parallax */}
                    <div
                      className="absolute -top-10 -right-10 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none italic"
                      style={{ transform: `translateY(${scrollY * layout.speed}px)` }}
                    >
                      {(faset.short_name || faset.name || 'E')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
                .ken-burns {
                    animation: ken-burns-anim 40s infinite alternate linear;
                }
                @keyframes ken-burns-anim {
                    0% { transform: scale(1) translate(0, 0); }
                    100% { transform: scale(1.3) translate(-2%, -2%); }
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
