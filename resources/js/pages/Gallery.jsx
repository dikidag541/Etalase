import React, { useEffect, useState, useRef } from 'react'
import { Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'
import CinematicHero from '@/Components/CinematicHero'
import { useLang } from '@/lib/LangContext'
import CMSText from '@/Components/CMSText'

export default function Gallery({ cms = {}, initialItems = [] }) {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { t } = useLang();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal, .museum-plaque').forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
        };
    }, [activeFilter, initialItems]);

    // Construct Dynamic Timeline
    const timeline = [
        {
            year: cms.gallery_timeline_1_year || "2010",
            event: cms.gallery_timeline_1_title || "The Genesis",
            detail: cms.gallery_timeline_1_desc || "Initial collective of artists seeking sovereignty in expression."
        },
        {
            year: cms.gallery_timeline_2_year || "2015",
            event: cms.gallery_timeline_2_title || "Regency Ascent",
            detail: cms.gallery_timeline_2_desc || "Cultural breakthrough as the leading artistic hub of the region."
        },
        {
            year: cms.gallery_timeline_3_year || "2020",
            event: cms.gallery_timeline_3_title || "Maximalist Shift",
            detail: cms.gallery_timeline_3_desc || "Adopting the Sovereign Maximalist philosophy for all performances."
        },
        {
            year: cms.gallery_timeline_4_year || "2024",
            event: cms.gallery_timeline_4_title || "Digital Monolith",
            detail: cms.gallery_timeline_4_desc || "Transforming the archive into an immersive digital museum experience."
        }
    ];

    // Filter items if needed (currently showing all)
    const museumCollection = initialItems.map(item => ({
        title: item.title,
        category: item.category,
        desc: item.description || "No description provided in archive.",
        img: item.image_url
    }));

    return (
        <MainLayout>
            <Head title={`COLLECTION | ${cms.gallery_hero_headline || "Museum"} ${cms.gallery_hero_highlight || "of Ancient Art"}`} />

            {/* --- HERO: THE CINEMATIC BUST --- */}
            <CinematicHero
                headline={cms.gallery_hero_headline || "Museum"}
                highlightWord={cms.gallery_hero_highlight || "of Ancient Art"}
                imageUrl={cms.gallery_hero_image || "/images/assets/statues/statue_bust.png"}
            />

            {/* --- SECTION: THE HISTORY (TIMELINE) --- */}
            <section className="py-64 bg-surface relative overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 gold-leaf-texture opacity-5"></div>

                <div className="container mx-auto px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row gap-24 items-start">
                        <div className="lg:w-1/3 sticky top-48 reveal">
                            <CMSText className="text-etalase-red text-[10px] tracking-[1em] uppercase font-black block mb-8">
                                {cms.gallery_history_badge || "CHRONICLES"}
                            </CMSText>
                            <h2 className="font-serif text-6xl text-text-main italic mb-12">
                                <CMSText>{cms.gallery_history_title_1 || "The Path of"}</CMSText> <br />
                                <CMSText className="metallic-gold not-italic">{cms.gallery_history_title_2 || "Sovereignty"}</CMSText>
                            </h2>
                            <CMSText as="p" className="text-text-muted text-lg font-light leading-relaxed italic max-w-sm">
                                {cms.gallery_history_desc || "Setiap maha karya memiliki awal. Menelusuri jejak transformasi dari sekadar mimpi menjadi kedaulatan seni yang mutlak."}
                            </CMSText>
                        </div>

                        <div className="lg:w-2/3 space-y-24">
                            {timeline.map((item, i) => (
                                <div key={i} className="museum-plaque flex gap-12 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-4 h-4 rounded-full bg-gold-500 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_#D4AF37]"></div>
                                        <div className="w-[1px] h-full bg-white/10 mt-4 group-last:hidden"></div>
                                    </div>
                                    <div className="pb-16 border-b border-border-main group-last:border-none">
                                        <span className="text-gold-500 font-black text-2xl mb-4 block tracking-widest">{item.year}</span>
                                        <CMSText as="h3" className="text-text-main text-3xl font-serif italic mb-4">{item.event}</CMSText>
                                        <CMSText as="p" className="text-text-muted text-lg font-light leading-relaxed">{item.detail}</CMSText>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION: THE COLLECTION (GALLERY) --- */}
            <section className="py-96 bg-surface relative transition-colors duration-500">
                {/* Background Typography */}
                <div
                    className="absolute top-1/4 right-0 text-[35vw] font-black text-text-main/5 italic leading-none pointer-events-none select-none z-0 uppercase"
                    style={{ transform: `translateX(${scrollY * 0.1}px)` }}
                >
                    COLLECTION
                </div>

                <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="text-center mb-48 reveal">
                        <CMSText className="text-gold-500 text-[10px] tracking-[2em] uppercase font-black block mb-8">
                            {cms.gallery_archive_badge || "MASTERPIECES"}
                        </CMSText>
                        <CMSText as="h2" className="font-serif text-7xl md:text-[10rem] text-text-main italic leading-none tracking-tighter">
                            {cms.gallery_archive_title || "The Archive"}
                        </CMSText>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-48">
                        {museumCollection.map((item, i) => (
                            <MuseumItem key={i} item={item} i={i} scrollY={scrollY} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Spotlight Cursor */}
            <div
                className="fixed inset-0 pointer-events-none z-[999] opacity-30 blur-[150px]"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,175,55,0.15) 0%, transparent 50%)`
                }}
            ></div>

            {/* Custom Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .active-zoom {
                    animation: ultra-slow-zoom 60s infinite alternate linear;
                }
                @keyframes ultra-slow-zoom {
                    from { transform: scale(1.1); }
                    to { transform: scale(1.25); }
                }
                .animate-slide-up-slow {
                    animation: slide-up-slow 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
                @keyframes slide-up-slow {
                    from { transform: translateY(100%) rotate(5deg); opacity: 0; }
                    to { transform: translateY(0) rotate(0deg); opacity: 1; }
                }
                .museum-plaque {
                    opacity: 0;
                    transform: translateX(50px);
                    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .museum-plaque.active {
                    opacity: 1;
                    transform: translateX(0);
                }
                .delay-300 { animation-delay: 300ms; }
                .delay-500 { animation-delay: 500ms; }
                
                .metallic-gold {
                    background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 0 10px rgba(212,175,55,0.2));
                }
            `}} />
        </MainLayout>
    )
}

function MuseumItem({ item, i, scrollY }) {
    const [isHovered, setIsHovered] = useState(false);
    const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0 });
    const { t } = useLang();

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setCardMousePos({ x, y });
    };

    const yOffset = (i % 2 === 0) ? -scrollY * 0.05 : scrollY * 0.05;

    return (
        <div
            className={`reveal ${i % 2 !== 0 ? 'md:mt-48' : ''}`}
            style={{ transform: `translateY(${yOffset}px)` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setIsHovered(false);
                setCardMousePos({ x: 0, y: 0 });
            }}
        >
            <div className="group relative">
                {/* 3D Frame */}
                <div
                    className="p-4 bg-surface-lighter border border-border-main backdrop-blur-md shadow-2xl transition-transform duration-700 ease-out"
                    style={{
                        transform: isHovered
                            ? `perspective(1500px) rotateX(${cardMousePos.y * -20}deg) rotateY(${cardMousePos.x * 20}deg) scale3d(1.05, 1.05, 1.05)`
                            : 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                    }}
                >
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface-darker">
                        <img
                            src={item.img}
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-[2s] ease-out scale-110 group-hover:scale-125"
                            alt={item.title}
                            style={{
                                transform: isHovered
                                    ? `translate3d(${cardMousePos.x * 40}px, ${cardMousePos.y * 40}px, 20px)`
                                    : 'translate3d(0, 0, 0)'
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                        {/* Museum Plaque Overlay */}
                        <div className="absolute inset-x-8 bottom-8 p-8 bg-black/60 backdrop-blur-xl border-l-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                            <CMSText className="text-gold-500 text-[8px] tracking-[1em] uppercase block mb-2">{item.category}</CMSText>
                            <CMSText as="h4" className="text-white text-3xl font-serif italic mb-4">{item.title}</CMSText>
                            <CMSText as="p" className="text-white/60 text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                                {item.desc}
                            </CMSText>
                        </div>
                    </div>
                </div>

                {/* Floating Decoration */}
                <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-gold-500 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-border-main group-hover:scale-125 transition-transform duration-700"></div>
            </div>
        </div>
    );
}
