import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/react'

export default function AdminArticles() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingArticle, setEditingArticle] = useState(null)

    const articles = [
        { id: 1, title: 'Gemerlap Mahakarya: Di Balik Layar Lentera Jiwa', category: 'Pertunjukan', date: 'Jan 15, 2024', status: 'Published' },
        { id: 2, title: 'Eksplorasi Tubuh dalam Kontemporer', category: 'Wawasan', date: 'Jan 10, 2024', status: 'Draft' },
        { id: 3, title: 'Membangun Ekosistem Kesenian', category: 'Organisasi', date: 'Jan 05, 2024', status: 'Published' },
    ]

    const openModal = (article = null) => {
        setEditingArticle(article)
        setIsModalOpen(true)
    }

    return (
        <div className="min-h-screen bg-surface text-text-main font-sans transition-colors duration-500">
            <Head title="Admin: Kelola Artikel" />

            {/* Sidebar Navigation (Simple) */}
            <div className="fixed w-64 h-full border-r border-border-main bg-surface p-8">
                <h2 className="font-serif text-2xl text-gold-500 mb-12">ETALASE <span className="text-[10px] text-text-muted block uppercase tracking-widest mt-1">Admin Panel</span></h2>
                <nav className="space-y-6 text-sm tracking-widest uppercase">
                    <Link href="#" className="block text-gold-500 font-bold border-l-2 border-gold-500 pl-4">Artikel</Link>
                    <Link href="#" className="block text-text-muted hover:text-text-main pl-4 transition-colors">Galeri</Link>
                    <Link href="#" className="block text-text-muted hover:text-text-main pl-4 transition-colors">Divisi</Link>
                    <Link href="#" className="block text-text-muted hover:text-text-main pl-4 transition-colors">Pengguna</Link>
                    <div className="pt-20">
                        <Link href="/" className="block text-text-muted hover:text-gold-400 text-xs transition-colors">→ Lihat Situs</Link>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <main className="ml-64 p-12">
                <header className="flex justify-between items-end mb-16">
                    <div>
                        <h1 className="font-serif text-4xl mb-2">Manajemen <span className="italic text-gold-500">Artikel</span></h1>
                        <p className="text-text-muted text-sm font-light">Publikasikan karya tulis dan berita terbaru UKM Etalase.</p>
                    </div>
                    <button
                        onClick={() => openModal()}
                        className="bg-gold-500 text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all"
                    >
                        + Buat Artikel Baru
                    </button>
                </header>

                {/* Table */}
                <div className="bg-surface border border-border-main">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border-main text-[10px] uppercase tracking-[0.3em] text-text-muted">
                                <th className="px-8 py-6 font-light">Judul</th>
                                <th className="px-8 py-6 font-light">Kategori</th>
                                <th className="px-8 py-6 font-light">Tanggal</th>
                                <th className="px-8 py-6 font-light">Status</th>
                                <th className="px-8 py-6 font-light text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light">
                            {articles.map((art) => (
                                <tr key={art.id} className="border-b border-border-main group hover:bg-text-main hover:text-surface transition-colors">
                                    <td className="px-8 py-6 text-text-main group-hover:text-gold-400 transition-colors">{art.title}</td>
                                    <td className="px-8 py-6 text-text-muted group-hover:text-surface-muted">{art.category}</td>
                                    <td className="px-8 py-6 text-text-muted group-hover:text-surface-muted">{art.date}</td>
                                    <td className="px-8 py-6 text-text-muted group-hover:text-surface-muted">
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${art.status === 'Published' ? 'bg-green-500' : 'bg-gray-700'}`}></span>
                                        {art.status}
                                    </td>
                                    <td className="px-8 py-6 text-right space-x-4">
                                        <button onClick={() => openModal(art)} className="text-text-muted group-hover:text-surface transition-colors">Edit</button>
                                        <button className="text-etalase-red hover:text-etalase-red-700 transition-colors">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Modal for CRUD (UI Only) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
                    <div className="w-full max-w-2xl bg-surface border border-border-main p-10 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-8 text-text-muted hover:text-text-main text-2xl font-light"
                        >
                            ×
                        </button>

                        <h2 className="font-serif text-3xl mb-10 text-text-main">
                            {editingArticle ? 'Edit' : 'Tambah'} <span className="italic text-gold-500">Artikel</span>
                        </h2>

                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-text-muted">Judul Artikel</label>
                                <input
                                    type="text"
                                    defaultValue={editingArticle?.title}
                                    className="w-full bg-surface border border-border-main p-4 text-text-main focus:outline-none focus:border-gold-500 transition-all font-light"
                                    placeholder="Masukkan judul..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-text-muted">Kategori</label>
                                    <select className="w-full bg-surface border border-border-main p-4 text-text-main focus:outline-none focus:border-gold-500 transition-all font-light appearance-none">
                                        <option>Pertunjukan</option>
                                        <option>Wawasan</option>
                                        <option>Organisasi</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-text-muted">Status</label>
                                    <select className="w-full bg-surface border border-border-main p-4 text-text-main focus:outline-none focus:border-gold-500 transition-all font-light appearance-none">
                                        <option>Published</option>
                                        <option>Draft</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-text-muted">Gambar Utama</label>
                                <div className="border border-dashed border-border-main p-8 text-center text-text-muted hover:border-gold-500/50 transition-all cursor-pointer">
                                    Klik untuk unggah gambar dramatic (JPEG/PNG)
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-text-muted">Konten Artikel</label>
                                <textarea
                                    rows="6"
                                    className="w-full bg-surface border border-border-main p-4 text-text-main focus:outline-none focus:border-gold-500 transition-all font-light"
                                    placeholder="Ceritakan mahakarya Anda..."
                                ></textarea>
                            </div>

                            <div className="pt-6 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 border border-border-main py-4 text-xs font-bold uppercase tracking-widest hover:bg-text-main hover:text-surface transition-all text-text-main"
                                >
                                    Batalkan
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 bg-gold-500 text-black py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
