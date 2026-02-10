import React, { useState, useEffect } from 'react'
import { usePage, Link } from '@inertiajs/react'

export default function MainLayout({ children, auth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const [lang, setLang] = useState('ID');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Check local storage for theme preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Apply theme class to body/html on mount/change
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden transition-colors duration-500 bg-surface text-text-main`}>

      {/* Floating Pill Navbar */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-700 ${isScrolled ? 'w-[92%] md:w-[75%] lg:w-[65%]' : 'w-[95%] md:w-[85%] lg:w-[75%]'}`}>
        <div className={`
          flex items-center justify-between px-8 py-3 rounded-full 
          backdrop-blur-2xl border transition-all duration-700
          ${isDarkMode ? 'bg-black/80 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]' : 'bg-white/80 border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.1)]'}
        `}>

          {/* Left: Branding */}
          <Link href="/" className="flex items-center gap-3 group/logo">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-500 ${isDarkMode ? 'border-gold-500/50 bg-black/40 group-hover/logo:border-gold-500' : 'border-black/10 bg-white group-hover/logo:border-black'}`}>
              <img src="/images/Logo UKMK Etalase.png" className="w-5 h-5 object-contain" alt="Logo" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>UKMK</span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase metallic-gold">Etalase</span>
            </div>
          </Link>

          {/* Center: Corrected Navigation Links */}
          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.25em] uppercase ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-gold-500 transition-colors">About</Link>
            <Link href="/articles" className="hover:text-gold-500 transition-colors">Articles</Link>
            <Link href="/gallery" className="hover:text-gold-500 transition-colors">Gallery</Link>
            <Link href="/team" className="hover:text-gold-500 transition-colors">Pengurus</Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6">

            {/* Language Selector (Functional) */}
            <div className="relative">
              <div
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={`hidden md:flex items-center gap-2 cursor-pointer group/lang transition-all duration-300 ${isDarkMode ? 'text-white/60' : 'text-black/60'} hover:text-gold-500`}
              >
                <div className="w-4 h-3 bg-red-600 relative overflow-hidden rounded-[1px]">
                  {lang === 'ID' ? (
                    <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>
                  ) : (
                    <div className="w-full h-full bg-blue-900 flex flex-col">
                      <div className="flex h-1/2">
                        <div className="w-1/2 bg-white"></div>
                        <div className="w-1/2 bg-red-600"></div>
                      </div>
                      <div className="h-1/2 bg-white"></div>
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase">{lang}</span>
                <svg className={`w-3 h-3 transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* Dropdown Menu */}
              {showLangDropdown && (
                <div className={`absolute top-full mt-4 right-0 w-32 py-2 rounded-2xl border backdrop-blur-3xl animate-in fade-in zoom-in duration-300 ${isDarkMode ? 'bg-black/90 border-white/10' : 'bg-white/90 border-black/5'}`}>
                  {['ID', 'EN'].map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setShowLangDropdown(false); }}
                      className={`w-full text-left px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-colors ${lang === l ? 'text-gold-500' : isDarkMode ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
                    >
                      {l === 'ID' ? 'Bahasa' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Icons Divider */}
            <div className={`w-[1px] h-4 hidden md:block ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>

            <div className="flex items-center gap-4">
              {/* Theme Toggle icon only */}
              <button
                onClick={toggleTheme}
                className={`transition-all duration-300 ${isDarkMode ? 'text-yellow-400 hover:scale-110' : 'text-gray-400 hover:text-black hover:scale-110'}`}
              >
                {isDarkMode ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer: Editorial Grand Footer */}
      <footer className={`relative overflow-hidden pt-60 pb-20 transition-colors duration-700 bg-surface border-t border-border-main`}>
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 gold-leaf-texture opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.05] pointer-events-none"></div>

        {/* Monumental Branding Seal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full opacity-[0.02] blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-32 mb-48">
            {/* Branding & Manifesto */}
            <div className="lg:col-span-6">
              <Link href="/" className="inline-flex items-center gap-10 mb-20 group/footer-logo">
                <div className={`w-28 h-28 border-2 rounded-full flex items-center justify-center transition-all duration-1000 ${isDarkMode ? 'border-gold-500/10 group-hover/footer-logo:border-gold-500 bg-black/40 shadow-[0_0_50px_rgba(212,175,55,0.1)]' : 'border-black/5 group-hover/footer-logo:border-black bg-white shadow-xl'}`}>
                  <img src="/images/Logo UKMK Etalase.png" className="w-14 h-14 object-contain opacity-60 group-hover/footer-logo:opacity-100 group-hover/footer-logo:scale-125 transition-all duration-700" alt="Footer Logo" />
                </div>
                <div className="flex flex-col">
                  <span className={`text-[14px] font-black tracking-[0.6em] uppercase mb-2 ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>UKMK KESENIAN</span>
                  <span className="text-5xl md:text-6xl font-black tracking-[0.3em] uppercase metallic-gold drop-shadow-2xl">ETALASE</span>
                </div>
              </Link>
              <div className="max-w-2xl relative">
                <span className="absolute -left-12 top-0 text-7xl font-serif text-gold-500/20 italic">"</span>
                <p className={`text-2xl md:text-3xl font-light leading-snug mb-20 italic tracking-tight ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>
                  Sebuah wahana transformasi di mana kesenian tradisional bertemu dengan ambisi futuristik. Kita tidak hanya melintas, <span className="text-text-main font-medium">kita meninggalkan jejak rupa yang abadi.</span>
                </p>
              </div>
              <div className="flex items-center gap-16">
                {['INSTAGRAM', 'YOUTUBE', 'TIKTOK'].map(social => (
                  <a key={social} href="#" className={`text-[11px] font-black tracking-[0.5em] uppercase transition-all hover:-translate-y-2 hover:text-gold-500 ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Grid - Asymmetric */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-20">
              <div className="pt-10">
                <h4 className={`text-[12px] font-black uppercase tracking-[0.8em] mb-16 flex items-center gap-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  EKOSISTEM
                </h4>
                <ul className="space-y-8">
                  {['Galeri Masterpiece', 'Editorial Seni', 'Kolektif Kreatif', 'Arsip Digital'].map(item => (
                    <li key={item}><Link href="#" className={`text-lg md:text-xl hover:text-gold-500 transition-all font-light tracking-tight hover:pl-4 ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gold-500/[0.02] p-12 rounded-3xl border border-white/[0.05]">
                <h4 className={`text-[12px] font-black uppercase tracking-[0.8em] mb-16 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  MILIS SOVEREIGN
                </h4>
                <p className={`text-lg mb-12 font-light leading-relaxed tracking-tight ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>Bergabunglah dalam lingkaran eksklusif kurasi seni dan budaya kami.</p>
                <div className="relative group/input mt-auto">
                  <input
                    type="text"
                    placeholder="Signature E-mail"
                    className={`w-full border-b-2 py-6 bg-transparent text-xl tracking-tighter focus:outline-none transition-all ${isDarkMode ? 'border-white/10 text-white focus:border-gold-500' : 'border-black/10 text-black focus:border-black'}`}
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] font-black uppercase tracking-[0.5em] metallic-gold group-hover/input:translate-x-2 transition-all">Join</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className={`pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-12 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
            <span className={`text-[11px] font-black tracking-[0.8em] uppercase ${isDarkMode ? 'text-white/10' : 'text-black/10'}`}>
              &copy; 2026 UKM KESENIAN ETALASE // PRESERVE THE CRAFT
            </span>
            <div className="flex items-center gap-16">
              <span className={`text-[11px] font-black tracking-[0.8em] uppercase ${isDarkMode ? 'text-white/10' : 'text-black/10'}`}>
                SOVEREIGN STUDIO // DESIGNED FOR THE BOLD
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
