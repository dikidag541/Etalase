import React, { useState, useEffect } from 'react'
import { usePage, Link } from '@inertiajs/react'

export default function MainLayout({ children, auth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

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
              <img src="/images/Logo Etalase.png" className="w-5 h-5 object-contain" alt="Logo" />
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

            {/* Language Selector (UI only) */}
            <div className={`hidden md:flex items-center gap-2 cursor-pointer group/lang ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
              <div className="w-4 h-3 bg-red-600 relative overflow-hidden rounded-[1px]">
                <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>
              </div>
              <span className="text-[9px] font-black tracking-widest uppercase group-hover/lang:text-gold-500 transition-colors">ID</span>
              <svg className="w-3 h-3 group-hover/lang:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
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

              {/* Profile Circle */}
              <Link href={auth?.user ? "/dashboard" : "/login"} className={`w-10 h-10 rounded-full flex items-center justify-center border-2 overflow-hidden transition-all duration-500 ${isDarkMode ? 'border-white/10 bg-white/5 hover:border-gold-500' : 'border-black/5 bg-black/5 hover:border-black'}`}>
                {auth?.user ? (
                  <div className="w-full h-full flex items-center justify-center font-black text-xs uppercase text-gold-500">{auth.user.name.charAt(0)}</div>
                ) : (
                  <svg className={`w-5 h-5 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer: Editorial Grand Footer */}
      <footer className={`border-t relative overflow-hidden pt-32 pb-16 transition-colors duration-500 bg-surface border-border-main`}>
        <div className="absolute inset-0 gold-leaf-texture opacity-[0.02]"></div>

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 mb-32">
            {/* Branding & Manifesto */}
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-6 mb-12 group/footer-logo">
                <div className={`w-16 h-16 border rounded-full flex items-center justify-center transition-all duration-700 ${isDarkMode ? 'border-gold-500/30 group-hover/footer-logo:border-gold-500' : 'border-black/10 group-hover/footer-logo:border-black'}`}>
                  <span className="text-gold-500 font-serif italic text-3xl">E</span>
                </div>
                <span className={`text-3xl font-black tracking-[0.4em] uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  UKM<span className="metallic-gold">ETALASE</span>
                </span>
              </Link>
              <p className={`text-xl font-light leading-relaxed mb-12 max-w-md italic ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>
                "Sebuah wahana transformasi di mana kesenian tradisional bertemu dengan ambisi futuristik. Melampaui imajinasi rupa dan raga."
              </p>
              <div className="flex gap-8">
                {['INSTAGRAM', 'YOUTUBE', 'TIKTOK'].map(social => (
                  <a key={social} href="#" className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors ${isDarkMode ? 'text-gold-500/50 hover:text-gold-500' : 'text-black/40 hover:text-black'}`}>
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className={`text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b pb-4 inline-block ${isDarkMode ? 'text-white border-etalase-red/30' : 'text-black border-etalase-red/10'}`}>Ekosistem</h4>
                <ul className="space-y-6">
                  {['Galeri Masterpiece', 'Editorial Seni', 'Kolektif Kreatif', 'Arsip Digital'].map(item => (
                    <li key={item}><Link href="#" className={`text-sm hover:text-gold-500 transition-colors font-light ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b pb-4 inline-block ${isDarkMode ? 'text-white border-etalase-red/30' : 'text-black border-etalase-red/10'}`}>Organisasi</h4>
                <ul className="space-y-6">
                  {['Tentang Etalase', 'Struktur Pengurus', 'Visi & Misi', 'Hubungi Kami'].map(item => (
                    <li key={item}><Link href="#" className={`text-sm hover:text-gold-500 transition-colors font-light ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className={`text-[10px] font-black uppercase tracking-[0.5em] mb-10 border-b pb-4 inline-block ${isDarkMode ? 'text-white border-etalase-red/30' : 'text-black border-etalase-red/10'}`}>Milis Sovereign</h4>
                <p className={`text-xs mb-8 font-light leading-relaxed ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>Dapatkan update eksklusif mengenai parade dan instalasi seni terbaru kami.</p>
                <div className="flex">
                  <input type="text" placeholder="Your Email" className={`border px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-gold-500 transition-all w-full ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white/50 border-black/10 text-black'}`} />
                  <button className="bg-gold-500 text-black px-6 py-4 font-black text-[10px] uppercase hover:bg-gold-400 transition-colors">Join</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className={`pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8 border-border-main`}>
            <span className={`text-[10px] font-bold tracking-[0.5em] uppercase ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>
              &copy; 2026 UKM KESENIAN ETALASE. ALL RIGHTS RESERVED.
            </span>
            <span className={`text-[10px] font-bold tracking-[0.5em] uppercase ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>
              SOVEREIGN STUDIO // JEMBER
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
