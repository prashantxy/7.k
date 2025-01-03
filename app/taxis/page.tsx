'use client'

import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { CarTaxiFrontIcon as CarTaxi, Users, Briefcase, CreditCard } from 'lucide-react'
import Image from 'next/image'

export default function TaxisPage() {
  const taxiOptions = [
    { name: "Standard Sedan", capacity: 4, luggage: 2, price: "$30", image: "/placeholder.svg?height=200&width=300" },
    { name: "Executive Sedan", capacity: 4, luggage: 3, price: "$45", image: "/placeholder.svg?height=200&width=300" },
    { name: "Minivan", capacity: 6, luggage: 4, price: "$55", image: "/placeholder.svg?height=200&width=300" },
    { name: "Large Van", capacity: 8, luggage: 6, price: "$70", image: "/placeholder.svg?height=200&width=300" },
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
          Airport Taxis
        </motion.h1>
        <SearchForm />

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Choose Your Ride</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taxiOptions.map((taxi, index) => (
              <motion.div
                key={taxi.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={taxi.image}
                  alt={taxi.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{taxi.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {taxi.capacity} passengers
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {taxi.luggage} luggage
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <CreditCard className="w-4 h-4 mr-1" />
                      Pay at destination
                    </div>
                    <div className="text-lg font-semibold text-[#0071c2]">
                      {taxi.price}
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

