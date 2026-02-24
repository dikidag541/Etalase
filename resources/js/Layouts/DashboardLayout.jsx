import React, { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'

export default function DashboardLayout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsDarkMode(storedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen bg-surface text-text-main font-sans transition-colors duration-500">
            {/* Top Bar */}
            <header className={`sticky top-0 z-50 px-8 py-4 flex items-center justify-between border-b transition-colors duration-500 ${isDarkMode ? 'bg-black/90 border-white/10 backdrop-blur-xl' : 'bg-white/90 border-black/5 backdrop-blur-xl shadow-sm'}`}>

                {/* Left: Branding */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isDarkMode ? 'border-gold-500/30 bg-black/40 group-hover:border-gold-500' : 'border-black/10 bg-white group-hover:border-black'}`}>
                        <img src="/images/Logo UKMK Etalase.png" className="w-4 h-4 object-contain" alt="Logo" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className={`text-[9px] font-black tracking-[0.3em] uppercase ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>UKMK</span>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase metallic-gold">Sovereign Studio</span>
                    </div>
                </Link>

                {/* Right: Actions */}
                <div className="flex items-center gap-6">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`transition-all duration-300 p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5 hover:text-black'}`}
                        title="Toggle theme"
                    >
                        {isDarkMode ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    <div className={`w-[1px] h-4 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>

                    {/* View Site */}
                    <Link
                        href="/"
                        className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all hover:text-gold-500 flex items-center gap-2 ${isDarkMode ? 'text-white/30' : 'text-black/40'}`}
                    >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        View Site
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    );
}
