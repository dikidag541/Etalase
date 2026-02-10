import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-gradient-to-r from-purple-900 to-purple-800 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Etalase</Link>
          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-purple-200">Home</Link>
            <a href="#" className="hover:text-purple-200">Galeri</a>
            <a href="#" className="hover:text-purple-200">Program</a>
            <a href="#" className="hover:text-purple-200">Kontak</a>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 UKM Kesenian Etimpor</p>
        </div>
      </footer>
    </div>
  )
}
