'use client'

import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { Car, Users, Fuel, Cog, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function CarsPage() {
  const carTypes = [
    { name: "Economy", seats: 4, luggage: 2, image: "/placeholder.svg?height=200&width=300" },
    { name: "SUV", seats: 5, luggage: 3, image: "/placeholder.svg?height=200&width=300" },
    { name: "Luxury", seats: 4, luggage: 2, image: "/placeholder.svg?height=200&width=300" },
    { name: "Van", seats: 7, luggage: 4, image: "/placeholder.svg?height=200&width=300" },
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
          Rent a Car
        </motion.h1>
        <SearchForm />

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Available Car Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carTypes.map((car, index) => (
              <motion.div
                key={car.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {car.seats} seats
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {car.luggage} luggage
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-1" />
                      Fuel efficient
                    </div>
                    <div className="flex items-center">
                      <Cog className="w-4 h-4 mr-1" />
                      Automatic
                    </div>
                  </div>
                  <Button className="w-full bg-[#0071c2] hover:bg-[#005999] text-white">
                    Select
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

