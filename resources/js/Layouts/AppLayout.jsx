export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-lg transition-shadow">
                ✨
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Etalase</p>
                <p className="text-xs text-purple-600 font-semibold">UKM Kesenian</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Beranda
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Galeri
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Program
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Kontak
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            {/* CTA Button */}
            <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95">
              Login
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                  ✨
                </div>
                <p className="text-lg font-bold">Etalase</p>
              </div>
              <p className="text-gray-400 text-sm">Membantu seniman lokal menampilkan karya terbaik mereka ke dunia.</p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Navigasi</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Beranda</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Galeri</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Tentang Kami</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-white mb-4">Sumber Daya</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Panduan</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-4">Hubungi Kami</h3>
              <p className="text-sm text-gray-400 mb-3">Email: info@etalase.com</p>
              <p className="text-sm text-gray-400 mb-4">Phone: +62 123 456 7890</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  𝕏
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2026 UKM Kesenian Etimpor. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
