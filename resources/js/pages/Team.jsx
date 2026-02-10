import React, { useEffect, useState } from 'react'
import { Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function Team({ cms = {}, members = [] }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [members]);

    return (
        <MainLayout>
            <Head title="TEAM | The Collective Identity" />

            {/* --- HERO SECTION: SPLIT LAYOUT (JFC STYLE) --- */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-surface transition-colors duration-500">
                <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Large Typography */}
                        <div className="reveal py-20 lg:py-32">
                            <span className="text-text-main text-xs md:text-sm tracking-[0.3em] uppercase block mb-8 font-bold">
                                {cms.team_badge_text || 'UKM KESENIAN ETALASE'}
                            </span>

                            {/* Title Lines - All Editable */}
                            <div className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] uppercase tracking-tight">
                                {/* Black text lines */}
                                {cms.team_title_line1 && (
                                    <div className="text-text-main">{cms.team_title_line1}</div>
                                )}
                                {cms.team_title_line2 && (
                                    <div className="text-text-main">{cms.team_title_line2}</div>
                                )}
                                {cms.team_title_line3 && (
                                    <div className="text-text-main mb-2">{cms.team_title_line3}</div>
                                )}

                                {/* Red text lines */}
                                {cms.team_title_line4 && (
                                    <div className="text-etalase-red">{cms.team_title_line4}</div>
                                )}
                                {cms.team_title_line5 && (
                                    <div className="text-etalase-red">{cms.team_title_line5}</div>
                                )}
                                {cms.team_title_line6 && (
                                    <div className="text-etalase-red">{cms.team_title_line6}</div>
                                )}
                                {cms.team_title_line7 && (
                                    <div className="text-etalase-red">{cms.team_title_line7}</div>
                                )}
                            </div>
                        </div>

                        {/* Right: Hero Image */}
                        <div className="reveal lg:absolute lg:right-0 lg:top-0 lg:h-screen lg:w-1/2">
                            {cms.team_hero_image ? (
                                <div className="relative h-[60vh] lg:h-full w-full">
                                    <img
                                        src={cms.team_hero_image}
                                        className="w-full h-full object-cover object-center"
                                        alt="Team Hero"
                                    />
                                    {/* Gradient overlay on left edge for blend */}
                                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent"></div>
                                </div>
                            ) : (
                                <div className="h-[60vh] lg:h-full w-full bg-surface-lighter flex items-center justify-center">
                                    <p className="text-text-muted text-sm">Upload hero image in CMS</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-12 z-10 animate-bounce hidden lg:block">
                    <div className="w-6 h-10 border-2 border-text-main/20 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-text-main/30 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* --- TEAM GRID: MODERN LAYOUT --- */}
            <section className="py-32 bg-surface transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-20 reveal">
                        <h2 className="text-4xl md:text-5xl font-serif italic text-text-main mb-4">
                            Meet The Team
                        </h2>
                        <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
                        {members.map((member, i) => (
                            <div key={i} className="group reveal">
                                {/* Image Container - Optimized for Transparent PNG */}
                                <div className="relative mb-6 transition-transform duration-500 group-hover:-translate-y-4">
                                    {/* Glow/Shadow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-gold-500/20 to-etalase-red/20 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-90"></div>

                                    {/* Image - No background needed, supports transparent PNG */}
                                    <div className="relative">
                                        <img
                                            src={member.image_url}
                                            className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-2xl"
                                            alt={member.name}
                                        />
                                    </div>
                                </div>

                                {/* Info Below Image */}
                                <div className="text-center transition-all duration-500 group-hover:translate-y-2">
                                    <h3 className="text-lg md:text-xl font-bold text-text-main mb-1 uppercase tracking-tight transition-colors group-hover:text-gold-500">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs tracking-[0.15em] uppercase font-bold text-etalase-red">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VISION SECTION: CLEAN & CENTERED --- */}
            <section className="py-32 md:py-48 bg-surface relative overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white italic leading-tight mb-12">
                        {cms.team_vision_quote || '"Kami bekerja dalam bayang-bayang untuk memastikan cahaya panggung mendarat dengan sempurna."'}
                    </h2>
                    <div className="w-32 h-[2px] bg-gold-500 mx-auto"></div>
                </div>
            </section>
        </MainLayout>
    )
}
