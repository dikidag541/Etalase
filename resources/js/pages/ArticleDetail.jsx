import React from 'react'
import { Link, Head } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function ArticleDetail() {
    return (
        <MainLayout>
            <Head title="Gemerlap Mahakarya - UKM Etalase" />

            {/* Article Header */}
            <article className="bg-surface transition-colors duration-500">
                <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                    <img
                        src="/images/hero_etalase_dramatic_1770456936209.png"
                        className="w-full h-full object-cover opacity-60"
                        alt="Article Header"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full py-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <Link href="/articles" className="text-gold-500 text-[10px] uppercase tracking-[0.4em] mb-8 inline-block border-b border-gold-500/30 pb-2 hover:border-gold-500 transition-all">
                                ← Kembali ke Editorial
                            </Link>
                            <div className="flex items-center gap-6 mb-6">
                                <span className="bg-etalase-red px-3 py-1 text-[10px] uppercase tracking-widest text-white">Pertunjukan</span>
                                <span className="text-text-muted text-[10px] uppercase tracking-widest">15 Jan 2024</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl text-text-main mb-8 leading-tight">
                                Gemerlap Mahakarya: Di Balik Layar <span className="italic text-gold-500">Lentera Jiwa</span> 2024
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500 overflow-hidden border border-border-main">
                                    {/* Avatar placeholder */}
                                    <div className="w-full h-full bg-surface flex items-center justify-center text-gold-500 font-serif text-xl border border-border-main">E</div>
                                </div>
                                <div>
                                    <span className="block text-text-main text-xs tracking-widest uppercase">Tim Redaksi Etalase</span>
                                    <span className="block text-text-muted text-[10px] tracking-widest uppercase">Penulis Konten</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="py-24 bg-surface transition-colors duration-500">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="editorial-content font-sans text-lg text-text-muted font-light leading-relaxed space-y-12">
                            <p className="text-2xl font-serif italic text-text-main leading-relaxed">
                                "Panggung bukan sekadar tempat beraksi, ia adalah cerminan dari kegelisahan jiwa yang tertuang dalam setiap gerak dan nada." — Inilah premis yang mendasari pertunjukan kolosal terbaru kami.
                            </p>

                            <p>
                                Persiapan dimulai tepat enam bulan lalu. Di sebuah ruangan kecil di sudut kampus, gagasan tentang <strong>Lentera Jiwa</strong> pertama kali muncul. Bukan sekadar drama musikal, tim kreatif UKM Etalase ingin menciptakan pengalaman sensorik yang memadukan tradisi mistis Jember dengan estetika visual kontemporer.
                            </p>

                            <div className="my-16 border-y border-border-main py-12">
                                <h3 className="font-serif text-3xl text-text-main mb-6">Inovasi dalam Tradisi</h3>
                                <p>
                                    Salah satu tantangan terberat adalah kostum. Terinspirasi dari kemegahan <em>Jember Fashion Carnaval</em>, divisi artistik kami merancang 'Sayap-Sayap Budaya' seberat 15 kilogram yang harus digunakan oleh penari utama selama 20 menit penuh. Materialnya? Gabungan dari kain perca batik lama dan struktur metal ringan hasil modifikasi divisi seni rupa.
                                </p>
                            </div>

                            <img
                                src="/images/gallery_dance_performance_1770456952698.png"
                                className="w-full aspect-video object-cover border border-border-main"
                                alt="Behind the scene"
                            />
                            <span className="text-[10px] uppercase tracking-widest text-text-muted text-center block mt-4">Dokumentasi: Divisi Fotografi Etalase - Sesi Latihan Kostum</span>

                            <p>
                                Dari segi musik, harmoni diciptakan melalui perpaduan instrumen gamelan tradisional dengan modulasi synthesizer modern. "Kami ingin penonton merasa seperti sedang berada di persimpangan zaman," ujar kepala divisi musik.
                            </p>

                            <p>
                                Malam puncak yang dihadiri lebih dari seribu penonton menjadi bukti bahwa seni tradisional masih memiliki daya pikat yang luar biasa kuat di kalangan generasi Z. <strong>Etalase</strong> akan terus bergerak, terus menantang batas, and terus menjadi wadah bagi mahakarya selanjutnya.
                            </p>
                        </div>

                        {/* Tags & Share */}
                        <div className="mt-20 pt-10 border-t border-border-main flex flex-wrap justify-between items-center gap-8">
                            <div className="flex gap-3">
                                {['Seni', 'Budaya', 'Teater', 'Jember'].map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-widest text-text-muted border border-border-main px-4 py-1 hover:border-gold-500 hover:text-text-main transition-all cursor-default">#{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted">Bagikan</span>
                                <div className="flex gap-4">
                                    <button className="w-8 h-8 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:bg-text-main hover:text-surface transition-all">I</button>
                                    <button className="w-8 h-8 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:bg-text-main hover:text-surface transition-all">F</button>
                                    <button className="w-8 h-8 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:bg-text-main hover:text-surface transition-all">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Author Info */}
                <section className="py-20 bg-surface border-y border-border-main transition-colors duration-500">
                    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-32 h-32 bg-gold-400 shrink-0 border border-border-main">
                            <div className="w-full h-full bg-surface flex items-center justify-center text-gold-500 font-serif text-5xl border border-border-main">E</div>
                        </div>
                        <div>
                            <h4 className="font-serif text-2xl text-text-main mb-3">UKM Kesenian Etalase</h4>
                            <p className="text-text-muted font-light leading-relaxed mb-6">Sebuah kolektif mahasiswa yang berdedikasi untuk menciptakan panggung inovasi bagi seni tradisional Indonesia. Bergabunglah dalam perjalanan kami.</p>
                            <Link href="/about" className="text-gold-500 text-xs uppercase tracking-[0.3em] font-bold border-b border-gold-500/30 pb-1">Selengkapnya</Link>
                        </div>
                    </div>
                </section>

                {/* Related / Next Article */}
                <section className="py-32 bg-surface transition-colors duration-500">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <span className="text-text-muted text-[10px] uppercase tracking-[0.5em] mb-4 block">Selanjutnya</span>
                        <h5 className="font-serif text-3xl md:text-5xl text-text-main mb-10">Membangun Ekosistem Kesenian Mahasiswa</h5>
                        <Link href="/articles/3" className="px-12 py-5 bg-gold-500 text-black font-bold uppercase text-xs tracking-widest hover:bg-text-main hover:text-surface transition-all inline-block">Baca Artikel Ini</Link>
                    </div>
                </section>
            </article>
        </MainLayout>
    )
}
