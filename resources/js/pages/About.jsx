import React, { useEffect, useState } from 'react'
import { Head } from '@inertiajs/react'
import CinematicHero from '@/Components/CinematicHero'
import MainLayout from '@/Layouts/MainLayout'
import { useLang } from '@/lib/LangContext'
import CMSText from '@/Components/CMSText'

export default function About({ cms = {} }) {
    const { t } = useLang();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal, .curtain-reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <MainLayout>
            <Head title="ABOUT | The Sovereign Identity" />

            {/* --- HERO: THE GENESIS --- */}
            <CinematicHero
                tagline={cms.concept_badge || "CONCEPT"}
                headline="The Sovereign"
                highlightWord="Manifesto"
                imageUrl={cms.about_hero_image || "/images/Salinan Ave 4 cymk.webp"}
                showButton={false}
                showDiscover={false}
            />

            {/* --- SECTION: THE ORIGIN (STORYTELLING) --- */}
            <section className="py-96 bg-surface relative transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto px-12 sm:px-24">
                    <div className="grid lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-12 mb-32 curtain-reveal">
                            <CMSText className="text-gold-500 text-xs tracking-[1em] uppercase block mb-12 font-black">{cms.philosophy_badge || 'Misi & Filosofi'}</CMSText>
                            <h3 className="font-serif text-7xl md:text-[10vw] text-text-main italic leading-none">
                                <CMSText>{cms.philosophy_title_1 || 'Lahir Dari'}</CMSText> <br /> <CMSText className="not-italic metallic-gold">{cms.philosophy_title_2 || 'Api Tradisi'}</CMSText>
                            </h3>
                        </div>

                        <div className="lg:col-span-7 reveal">
                            <div className="space-y-16 text-text-muted text-2xl font-light leading-relaxed">
                                <CMSText as="p">
                                    {cms.mission_text || 'UKM Kesenian Etalase Universitas Jember bukan sekadar wadah organisasi, melainkan sebuah wahana transformasi di mana kesenian tradisional bertemu dengan ambisi futuristik.'}
                                </CMSText>
                                <CMSText as="p">
                                    {cms.mission_text_2 || 'Terinspirasi oleh semangat Jember Fashion Carnaval, kami mengadopsi prinsip Sovereign Maximalist—di mana setiap detail adalah pernyataan, dan setiap panggung adalah kedaulatan seni.'}
                                </CMSText>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative reveal">
                            <div className="ornamental-border p-4">
                                <img src={cms.identity_image || "/images/IMG_6046 (1).JPG"} className="w-full grayscale hover:grayscale-0 transition-all duration-[2000ms]" alt="The Identity" />
                            </div>
                            <div className="absolute -top-10 -right-10 bg-gold-500 text-black px-12 py-6 font-serif italic text-3xl rotate-12">Established 2026</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION: THE PILLARS (VALUE) --- */}
            <section className="py-96 bg-surface border-y border-border-main relative transition-colors duration-500 overflow-hidden">
                <div className="absolute inset-0 gold-leaf-texture opacity-5"></div>
                <div className="container mx-auto px-12">
                    <div className="grid md:grid-cols-3 gap-24">
                        {[
                            { title: cms.pillar_1_title || 'Inovasi', desc: cms.pillar_1_desc || 'Mendobrak batas kreativitas tanpa melupakan akar budaya.' },
                            { title: cms.pillar_2_title || 'Kolaborasi', desc: cms.pillar_2_desc || 'Sinergi lintas faset seni untuk menciptakan pengalaman imersif.' },
                            { title: cms.pillar_3_title || 'Kedaulatan', desc: cms.pillar_3_desc || 'Memberikan ruang bagi setiap seniman untuk menguasai panggungnya.' }
                        ].map((pillar, i) => (
                            <div key={i} className="group p-20 border border-gold-500/10 hover:border-gold-500 transition-all duration-700 reveal">
                                <span className="font-serif text-8xl text-gold-500/10 mb-12 block transition-colors group-hover:text-gold-500">0{i + 1}</span>
                                <CMSText as="h4" className="font-serif text-4xl text-text-main italic mb-8 uppercase tracking-widest">{pillar.title}</CMSText>
                                <CMSText as="p" className="text-text-muted text-lg font-light leading-relaxed group-hover:text-text-main transition-colors">{pillar.desc}</CMSText>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL: THE CALL --- */}
            <section className="py-96 bg-surface flex flex-col items-center justify-center text-center transition-colors duration-500">
                <div className="reveal max-w-4xl px-8">
                    <CMSText as="h3" className="font-serif text-6xl md:text-8xl text-text-main italic mb-20">
                        "{cms.about_quote || 'Jadilah bagian dari revolusi rupa dan raga di panggung Etalase.'}"
                    </CMSText>
                    <div className="flex flex-col sm:flex-row gap-12 justify-center mt-20">
                        <button className="px-16 py-6 bg-gold-500 text-black font-black text-xs tracking-[1em] uppercase hover:bg-white transition-all transform hover:scale-105 duration-500">
                            {t('about_join_parade')}
                        </button>
                        <button className="px-16 py-6 border border-gold-500 text-gold-500 font-black text-xs tracking-[1em] uppercase hover:bg-gold-500 hover:text-black transition-all duration-500">
                            {t('about_contact_us')}
                        </button>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
