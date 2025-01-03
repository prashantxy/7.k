'use client'

import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'

export default function FlightsPage() {
  return (
    <div className="min-h-screen pt-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Search Flights
        </motion.h1>
        <SearchForm />
      </div>
    </div>
  )
}

