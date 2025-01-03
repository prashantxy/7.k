'use client'

import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { Ship, Anchor, Compass, Waves } from 'lucide-react'
import Image from 'next/image'

export default function CruisesPage() {
  const cruises = [
    { name: "Caribbean Adventure", duration: "7 nights", destinations: ["Bahamas", "Jamaica", "Mexico"], image: "/placeholder.svg?height=300&width=500" },
    { name: "Mediterranean Explorer", duration: "10 nights", destinations: ["Italy", "Greece", "Croatia"], image: "/placeholder.svg?height=300&width=500" },
    { name: "Alaska Wilderness", duration: "7 nights", destinations: ["Juneau", "Skagway", "Ketchikan"], image: "/placeholder.svg?height=300&width=500" },
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
          Cruise Adventures
        </motion.h1>
        <SearchForm />

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Featured Cruises</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cruises.map((cruise, index) => (
              <motion.div
                key={cruise.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={cruise.image}
                  alt={cruise.name}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cruise.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Ship className="w-4 h-4 mr-1" />
                      {cruise.duration}
                    </div>
                    <div className="flex items-center">
                      <Anchor className="w-4 h-4 mr-1" />
                      {cruise.destinations.length} ports
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Destinations: {cruise.destinations.join(", ")}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Compass className="w-4 h-4 mr-1" />
                      Guided tours
                    </div>
                    <div className="flex items-center">
                      <Waves className="w-4 h-4 mr-1" />
                      Ocean view cabins
                    </div>
                  </div>
                  <Button className="w-full bg-[#0071c2] hover:bg-[#005999] text-white">
                    View Itinerary
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

