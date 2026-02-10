import React, { useState, useEffect } from 'react'

export default function Home() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items')
      if (!response.ok) throw new Error('Failed to fetch items')
      const data = await response.json()
      setItems(data.data || [])
    } catch (err) {
      setError(err.message)
      // Demo data jika API error
      setItems([
        { id: 1, title: 'Karya Seni 1', description: 'Deskripsi karya seni pertama', artist: 'Seniman 1' },
        { id: 2, title: 'Karya Seni 2', description: 'Deskripsi karya seni kedua', artist: 'Seniman 2' },
        { id: 3, title: 'Karya Seni 3', description: 'Deskripsi karya seni ketiga', artist: 'Seniman 3' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Etalase UKM Kesenian Etimpor
        </h1>
        <p className="text-lg text-gray-600">
          Pamerkan karya seni terbaik Anda kepada dunia
        </p>
      </div>

      {loading && <div className="text-center py-12">Loading...</div>}

      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-8">
          <p className="text-yellow-800">Catatan: {error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-48 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-sm text-purple-600 font-semibold mb-4">
                Seniman: {item.artist}
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
