'use client'
import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'

export default function StaysPage() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Find Your Perfect Stay
          </h1>
          <p className="text-gray-400 text-lg">Discover comfortable accommodations worldwide</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 shadow-2xl"
        >
          <SearchForm />
        </motion.div>
      </div>
    </div>
  )
}
