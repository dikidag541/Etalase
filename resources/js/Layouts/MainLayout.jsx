import React, { useState, useEffect } from 'react'
import { usePage, Link } from '@inertiajs/react'
import { useLang } from '@/lib/LangContext'

export default function MainLayout({ children, auth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_about'), href: '/about' },
    { label: t('nav_articles'), href: '/articles' },
    { label: t('nav_gallery'), href: '/gallery' },
    { label: t('nav_team'), href: '/team' },
  ];

  return (
    <div className={`min-h-screen font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden transition-colors duration-500 bg-surface text-text-main`}>

      {/* Floating Pill Navbar */}
      <nav className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-700 ${isScrolled ? 'w-[96%] md:w-[75%] lg:w-[65%]' : 'w-[96%] md:w-[85%] lg:w-[75%]'}`}>
        <div className={`
          flex items-center justify-between px-5 md:px-8 py-3 rounded-full
          backdrop-blur-2xl border transition-all duration-700
          ${isDarkMode ? 'bg-black/80 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]' : 'bg-white/80 border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.1)]'}
        `}>

          {/* Left: Branding */}
          <Link href="/" className="flex items-center gap-3 group/logo">
            <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border transition-all duration-500 ${isDarkMode ? 'border-gold-500/50 bg-black/40 group-hover/logo:border-gold-500' : 'border-black/10 bg-white group-hover/logo:border-black'}`}>
              <img src="/images/Logo UKMK Etalase.png" className="w-4 h-4 md:w-5 md:h-5 object-contain" alt="Logo" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>UKMK</span>
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase metallic-gold">Etalase</span>
            </div>
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.25em] uppercase ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-gold-500 transition-colors">{label}</Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Language Selector (Desktop only) */}
            <div className="relative hidden md:block">
              <div
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={`flex items-center gap-2 cursor-pointer group/lang transition-all duration-300 ${isDarkMode ? 'text-white/60' : 'text-black/60'} hover:text-gold-500`}
              >
                <div className="w-4 h-3 bg-red-600 relative overflow-hidden rounded-[1px]">
                  {lang === 'ID' ? (
                    <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>
                  ) : (
                    <div className="w-full h-full bg-red-600 flex flex-col">
                      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>
                      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/30"></div>
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase">{lang}</span>
                <svg className={`w-3 h-3 transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </div>

              {showLangDropdown && (
                <div className={`absolute top-full mt-4 right-0 w-32 py-2 rounded-2xl border backdrop-blur-3xl animate-in fade-in zoom-in duration-300 ${isDarkMode ? 'bg-black/90 border-white/10' : 'bg-white/90 border-black/5'}`}>
                  {['ID', 'JV'].map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setShowLangDropdown(false); }}
                      className={`w-full text-left px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-colors ${lang === l ? 'text-gold-500' : isDarkMode ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
                    >
                      {l === 'ID' ? t('lang_id') : t('lang_jv')}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider (desktop) */}
            <div className={`w-[1px] h-4 hidden md:block ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>

            {/* Theme Toggle */}
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

            {/* Hamburger Button (Mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-[5px] p-1 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-5 h-[2px] transition-all duration-300 origin-center ${isDarkMode ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`block w-5 h-[2px] transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`block w-5 h-[2px] transition-all duration-300 origin-center ${isDarkMode ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`
        fixed top-0 right-0 h-full w-[85%] max-w-sm z-[999] lg:hidden
        transition-transform duration-500 ease-out
        ${isDarkMode ? 'bg-black/95 border-l border-white/10' : 'bg-white/95 border-l border-black/5'}
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col pt-24 pb-12 px-10 backdrop-blur-3xl
      `}>
        {/* Nav Links */}
        <nav className="flex flex-col gap-2 mb-12">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-[0.15em] uppercase py-4 border-b transition-all hover:pl-4 hover:text-gold-500
                ${isDarkMode ? 'text-white/70 border-white/5' : 'text-black/70 border-black/5'}
              `}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Language Selector (mobile) */}
        <div className="mb-8">
          <p className={`text-[10px] font-black tracking-[0.5em] uppercase mb-4 ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>BAHASA</p>
          <div className="flex gap-4">
            {['ID', 'JV'].map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border transition-all ${lang === l
                    ? 'bg-gold-500 text-black border-gold-500'
                    : isDarkMode ? 'border-white/10 text-white/40 hover:border-gold-500 hover:text-gold-500' : 'border-black/10 text-black/40 hover:border-gold-500 hover:text-gold-500'
                  }`}
              >
                {l === 'ID' ? t('lang_id') : t('lang_jv')}
              </button>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-auto flex gap-8">
          {['IG', 'YT', 'TT'].map(s => (
            <a key={s} href="#" className={`text-[10px] font-black tracking-[0.4em] uppercase transition-colors hover:text-gold-500 ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>{s}</a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className={`relative overflow-hidden pt-24 md:pt-48 lg:pt-60 pb-12 md:pb-20 transition-colors duration-700 bg-surface border-t border-border-main`}>
        <div className="absolute inset-0 gold-leaf-texture opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.05] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500 rounded-full opacity-[0.02] blur-[150px] pointer-events-none"></div>

        <div className="mx-auto max-w-[1700px] px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 lg:gap-32 mb-16 md:mb-32 lg:mb-48">

            {/* Branding & Manifesto */}
            <div className="lg:col-span-6">
              <Link href="/" className="inline-flex items-center gap-6 md:gap-10 mb-12 md:mb-20 group/footer-logo">
                <div className={`w-16 h-16 md:w-28 md:h-28 border-2 rounded-full flex items-center justify-center transition-all duration-1000 ${isDarkMode ? 'border-gold-500/10 group-hover/footer-logo:border-gold-500 bg-black/40 shadow-[0_0_50px_rgba(212,175,55,0.1)]' : 'border-black/5 group-hover/footer-logo:border-black bg-white shadow-xl'}`}>
                  <img src="/images/Logo UKMK Etalase.png" className="w-8 h-8 md:w-14 md:h-14 object-contain opacity-60 group-hover/footer-logo:opacity-100 group-hover/footer-logo:scale-125 transition-all duration-700" alt="Footer Logo" />
                </div>
                <div className="flex flex-col">
                  <span className={`text-[11px] md:text-[14px] font-black tracking-[0.6em] uppercase mb-1 ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>UKMK KESENIAN</span>
                  <span className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.3em] uppercase metallic-gold drop-shadow-2xl">ETALASE</span>
                </div>
              </Link>
              <div className="max-w-2xl relative pl-6 md:pl-0">
                <span className="absolute -left-4 md:-left-12 top-0 text-5xl md:text-7xl font-serif text-gold-500/20 italic">"</span>
                <p className={`text-xl md:text-2xl lg:text-3xl font-light leading-snug mb-12 md:mb-20 italic tracking-tight ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>
                  {t('footer_tagline')}
                </p>
              </div>
              <div className="flex items-center gap-8 md:gap-16">
                {['INSTAGRAM', 'YOUTUBE', 'TIKTOK'].map(social => (
                  <a key={social} href="#" className={`text-[10px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase transition-all hover:-translate-y-2 hover:text-gold-500 ${isDarkMode ? 'text-white/20' : 'text-black/20'}`}>
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20">
              <div className="pt-0 md:pt-10">
                <h4 className={`text-[11px] md:text-[12px] font-black uppercase tracking-[0.8em] mb-8 md:mb-16 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  EKOSISTEM
                </h4>
                <ul className="space-y-5 md:space-y-8">
                  {['Galeri Masterpiece', 'Editorial Seni', 'Kolektif Kreatif', 'Arsip Digital'].map(item => (
                    <li key={item}><Link href="#" className={`text-base md:text-lg lg:text-xl hover:text-gold-500 transition-all font-light tracking-tight hover:pl-4 ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>{item}</Link></li>
                  ))}
                </ul>
              </div>
              <div className={`p-8 md:p-12 rounded-3xl border flex flex-col justify-center ${isDarkMode ? 'bg-gold-500/[0.02] border-white/[0.05]' : 'bg-black/[0.02] border-black/[0.05]'}`}>
                <h4 className={`text-[11px] md:text-[12px] font-black uppercase tracking-[0.8em] mb-6 md:mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  FILOSOFI KARYA
                </h4>
                <p className={`text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-tight ${isDarkMode ? 'text-text-muted' : 'text-gray-600'}`}>
                  "Seni bukan sekadar hiasan, melainkan ekspresi jiwa yang melampaui batas."
                </p>
                <div className={`w-16 h-[1px] mt-6 md:mt-8 ${isDarkMode ? 'bg-gold-500/30' : 'bg-gold-500/50'}`}></div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className={`pt-8 md:pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
            <span className={`text-[10px] md:text-[11px] font-black tracking-[0.5em] md:tracking-[0.8em] uppercase text-center md:text-left ${isDarkMode ? 'text-white/10' : 'text-black/10'}`}>
              &copy; 2026 UKM KESENIAN ETALASE // PRESERVE THE CRAFT
            </span>
            <span className={`text-[10px] md:text-[11px] font-black tracking-[0.5em] md:tracking-[0.8em] uppercase ${isDarkMode ? 'text-white/10' : 'text-black/10'}`}>
              SOVEREIGN STUDIO // DESIGNED FOR THE BOLD
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
