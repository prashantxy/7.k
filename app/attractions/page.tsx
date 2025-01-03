'use client'

import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { Landmark, Clock, Star, Users } from 'lucide-react'
import Image from 'next/image'

export default function AttractionsPage() {
  const attractions = [
    { name: "Eiffel Tower", location: "Paris, France", rating: 4.5, duration: "2-3 hours", image: "/placeholder.svg?height=300&width=400" },
    { name: "Colosseum", location: "Rome, Italy", rating: 4.7, duration: "1-2 hours", image: "/placeholder.svg?height=300&width=400" },
    { name: "Statue of Liberty", location: "New York, USA", rating: 4.6, duration: "2-3 hours", image: "/placeholder.svg?height=300&width=400" },
    { name: "Great Wall of China", location: "Beijing, China", rating: 4.8, duration: "3-4 hours", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <div className="min-h-screen pt-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Attractions
        </motion.h1>
        <SearchForm />

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Popular Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-2">{attraction.location}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {attraction.rating}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {attraction.duration}
                    </div>
                  </div>
                  <Button className="w-full bg-[#0071c2] hover:bg-[#005999] text-white">
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

