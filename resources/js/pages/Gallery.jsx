import React, { useEffect, useState } from 'react'
import { Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function Gallery({ cms = {}, initialItems = [] }) {
    const [activeFilter, setActiveFilter] = useState('ALL');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [activeFilter, initialItems]);

    const items = initialItems;

    const filteredItems = activeFilter === 'ALL' ? items : items.filter(item => item.category === activeFilter);

    return (
        <MainLayout>
            <Head title="GALLERY | The Grand Archive" />

            {/* --- HEADER: IMMERSIVE TITLE --- */}
            <section className="pt-64 pb-32 bg-surface relative overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 gold-leaf-texture opacity-5"></div>
                <div className="max-w-[1800px] mx-auto px-12 sm:px-24">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32 reveal">
                        <div>
                            <span className="text-gold-500 text-xs tracking-[1.5em] uppercase block mb-8 font-black">Archive & Documentation</span>
                            <h1 className="font-serif text-[12vw] leading-[0.8] text-text-main italic tracking-tighter">{cms.gallery_title_1 || 'Grand'} <br /><span className="not-italic metallic-gold">{cms.gallery_title_2 || 'Gallery'}</span></h1>
                        </div>

                        <div className="flex flex-wrap gap-12 font-sans text-[10px] uppercase tracking-[0.4em] text-text-muted">
                            {['ALL', 'PERFORMANCE', 'COSTUME', 'DANCE', 'THEATER'].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-8 py-3 rounded-full border border-border-main transition-all ${activeFilter === f ? 'bg-etalase-red text-white border-etalase-red font-black shadow-[0_0_20px_rgba(70,0,8,0.3)]' : 'hover:border-etalase-red/40 hover:text-text-main'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MASONRY GRID --- */}
            <section className="pb-96 bg-surface transition-colors duration-500">
                <div className="max-w-[1800px] mx-auto px-12 sm:px-24">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                        {filteredItems.map((item, i) => (
                            <div key={i} className="break-inside-avoid reveal group relative">
                                <div className="ornamental-border p-2 bg-surface/50 backdrop-blur-xl transition-transform duration-1000 group-hover:scale-[1.02]">
                                    <img src={item.image_url} className="w-full grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-in-out" alt={item.title} />

                                    <div className="absolute inset-0 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-black via-transparent to-transparent">
                                        <span className="text-gold-500 text-[8px] tracking-[0.6em] uppercase mb-4">{item.category}</span>
                                        <h4 className="font-serif text-4xl text-white italic tracking-tighter">{item.title}</h4>
                                        <div className="w-full h-[1px] bg-gold-500 mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FLOATING DECORATIONS --- */}
            <div className="fixed top-1/2 left-0 -translate-y-1/2 w-96 h-96 majestic-aura opacity-10 pointer-events-none blur-[150px]"></div>
            <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] majestic-aura opacity-5 pointer-events-none blur-[200px]"></div>
        </MainLayout>
    )
}
