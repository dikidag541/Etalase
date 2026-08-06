import React, { useEffect, useState, useMemo } from 'react'
import { Head } from '@inertiajs/react'
import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '@/Layouts/MainLayout'


function TeamOrbit({ members = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const radius = isMobile ? 140 : 280;
    const centerMember = members[activeIndex] || {};

    // Other members to be placed in the orbit
    const orbitMembers = useMemo(() => {
        return members.map((m, i) => ({ ...m, originalIndex: i })).filter((_, i) => i !== activeIndex);
    }, [members, activeIndex]);

    const handleSwap = (index) => {
        setActiveIndex(index);
    };

    return (
        <motion.div
            className="relative h-[400px] md:h-[700px] w-full flex items-center justify-center p-4"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* --- ORBIT LINES --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Main Outer Orbit */}
                <div
                    className="absolute border border-white/10 rounded-full"
                    style={{ width: radius * 2, height: radius * 2 }}
                ></div>
                {/* Secondary inner orbits/glows for aesthetics */}
                <div
                    className="absolute border border-etalase-red/20 rounded-full blur-[2px]"
                    style={{ width: radius * 2 + 10, height: radius * 2 + 10 }}
                ></div>

                {/* Animated Glowing Arcs (SVG) */}
                <svg className="absolute overflow-visible" width={radius * 2 + 100} height={radius * 2 + 100}>
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="url(#orbitGradientGold)"
                        strokeWidth="1.5"
                        strokeDasharray="80 320"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="url(#orbitGradientRed)"
                        strokeWidth="1.5"
                        strokeDasharray="60 340"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                        <linearGradient id="orbitGradientGold" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#d4af37" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="orbitGradientRed" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#460008" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* --- CENTER ACTIVE MEMBER --- */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative z-20 flex flex-col items-center text-center"
                >
                    <div className="relative w-40 h-56 md:w-64 md:h-80 mb-6 group">
                        {/* Glow behind center image */}
                        <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full scale-110 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-gold-500/30 bg-surface-lighter/50 backdrop-blur-md">
                            <img
                                src={centerMember.image_url}
                                alt={centerMember.name}
                                className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="reveal active">
                        <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider mb-1">
                            {centerMember.name}
                        </h3>
                        <p className="text-sm md:text-base text-etalase-red font-bold tracking-[0.2em] uppercase mb-4">
                            {centerMember.role}
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center">
                            {/* Facebook */}
                            {centerMember.facebook_url && (
                                <a href={centerMember.facebook_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                                </a>
                            )}
                            {/* TikTok */}
                            {centerMember.tiktok_url && (
                                <a href={centerMember.tiktok_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.39-2.81-.12-1.33.38-2.38 1.58-2.48 2.96-.11 1.13.43 2.22 1.32 2.9.89.71 2.06.91 3.16.71 1.4-.23 2.52-1.38 2.82-2.75.14-.52.22-1.05.21-1.58V.01l-.01.01z" /></svg>
                                </a>
                            )}
                            {/* Instagram */}
                            {centerMember.instagram_url && (
                                <a href={centerMember.instagram_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" /></svg>
                                </a>
                            )}
                            {/* YouTube */}
                            {centerMember.youtube_url && (
                                <a href={centerMember.youtube_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* --- ORBITING MEMBERS --- */}
            {orbitMembers.map((member, index) => {
                const angle = (index / orbitMembers.length) * (2 * Math.PI) - (Math.PI / 2);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                    <motion.div
                        key={member.id || member.originalIndex}
                        layoutId={`member-${member.originalIndex}`}
                        initial={false}
                        animate={{
                            x,
                            y,
                            scale: 1
                        }}
                        whileHover={{ scale: 1.2, zIndex: 30 }}
                        className="absolute z-10 cursor-pointer group"
                        onClick={() => handleSwap(member.originalIndex)}
                        style={{
                            width: isMobile ? '50px' : '80px',
                            height: isMobile ? '50px' : '80px',
                        }}
                    >
                        <div className="relative w-full h-full">
                            {/* Avatar Circle */}
                            <div className="w-full h-full rounded-full border border-white/20 overflow-hidden transition-all duration-500 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] bg-surface-lighter/30">
                                <img
                                    src={member.image_url}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Small Highlight Ring when active (though they won't be active in orbit) */}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

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

            {/* --- TEAM SECTION: INTERACTIVE ORBITAL LAYOUT --- */}
            <section className="py-32 bg-surface relative overflow-hidden transition-colors duration-500 min-h-[800px] flex flex-col items-center justify-center">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-20 reveal">
                        <h2 className="text-4xl md:text-5xl font-serif italic text-text-main mb-4">
                            Meet The Team
                        </h2>
                        <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
                    </div>

                    <TeamOrbit members={members} />
                </div>
            </section>

            {/* --- BACKGROUND PARTICLES / DEBRIS --- */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gold-500/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                        animate={{
                            y: [null, "-100vh"],
                            opacity: [null, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    />
                ))}
            </div>

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
