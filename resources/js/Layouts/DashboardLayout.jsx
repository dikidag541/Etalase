import React, { useState, useEffect } from 'react'
import { usePage, Link } from '@inertiajs/react'

export default function DashboardLayout({ children }) {
  const { auth = {} } = usePage().props
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
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>Dashboard</span>
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

          {/* Right Actions */}
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

              {/* Logout Button */}
              <Link
                href="/logout"
                method="post"
                as="button"
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-[9px] font-black tracking-widest uppercase transition-all ${isDarkMode ? 'bg-white/10 text-white hover:bg-etalase-red hover:text-white' : 'bg-black/5 text-black hover:bg-etalase-red hover:text-white'}`}
              >
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mt-40">
        {children}
      </div>
    </div>
  )
}
