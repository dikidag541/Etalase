import React, { useEffect, useState } from 'react'
import { Link, Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function Articles({ articles = [] }) {
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
    }, [articles]);

    const validArticles = articles;

    return (
        <MainLayout>
            <Head title="EDITORIAL | The Sovereign Perspective" />

            {/* --- HEADER: EDITORIAL SCALE --- */}
            <section className="pt-64 pb-32 bg-surface transition-colors duration-500 overflow-hidden relative border-b border-border-main">
                <div className="absolute inset-x-0 bottom-0 text-[25vw] font-serif text-text-main/5 pointer-events-none select-none italic text-center leading-[0.5]">EDITORIAL</div>
                <div className="max-w-[1400px] mx-auto px-12 sm:px-24 relative z-10">
                    <div className="reveal">
                        <span className="text-gold-500 text-xs tracking-[1.5em] uppercase block mb-8 font-black">Official Publication • Perspectives</span>
                        <h1 className="font-serif text-7xl md:text-9xl text-text-main italic tracking-tighter">Esensi <br /><span className="not-italic metallic-gold">Kesenian</span></h1>
                    </div>
                </div>
            </section>

            {/* --- LIST: MAXIMALIST CARDS --- */}
            <section className="py-96 bg-surface transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto px-12 sm:px-24">
                    <div className="space-y-64">
                        {validArticles.map((article, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center reveal`}>
                                {/* Image Part */}
                                <div className="lg:col-span-12 lg:w-3/5 relative group">
                                    <div className="ornamental-border p-2 bg-surface">
                                        <div className="aspect-[21/9] overflow-hidden">
                                            <img src={article.image_url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" alt={article.title} />
                                        </div>
                                    </div>
                                    <span className="absolute -top-10 -left-10 md:left-auto md:-right-10 bg-etalase-red text-white text-[10px] tracking-[0.5em] px-8 py-3 uppercase font-black z-10">{article.category}</span>
                                </div>

                                {/* Text Part */}
                                <div className="lg:w-2/5 space-y-12">
                                    <div className="flex gap-12 text-[10px] tracking-[0.5em] uppercase font-black text-gold-500">
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.author}</span>
                                    </div>
                                    <h2 className="font-serif text-5xl md:text-7xl text-text-main italic tracking-tighter uppercase leading-none">
                                        {article.title}
                                    </h2>
                                    <p className="text-text-muted text-xl font-light leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <Link
                                        href={`/articles/${article.slug || i}`}
                                        className="inline-block px-12 py-5 border border-gold-500 text-gold-500 text-[10px] tracking-[1em] uppercase hover:bg-gold-500 hover:text-black transition-all duration-700"
                                    >
                                        Read Manifest
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- DECORATIVE AURA --- */}
            <div className="fixed top-0 left-0 w-full h-[50vh] majestic-aura opacity-5 pointer-events-none blur-[200px]"></div>
        </MainLayout>
    )
}
