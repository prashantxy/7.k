'use client'
import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { CarTaxiFrontIcon as CarTaxi, Users, Briefcase, CreditCard, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function TaxisPage() {
  const taxiOptions = [
    { name: "Standard Sedan", capacity: 4, luggage: 2, price: "$30", image: "/api/placeholder/300/200" },
    { name: "Executive Sedan", capacity: 4, luggage: 3, price: "$45", image: "/api/placeholder/300/200" },
    { name: "Minivan", capacity: 6, luggage: 4, price: "$55", image: "/api/placeholder/300/200" },
    { name: "Large Van", capacity: 8, luggage: 6, price: "$70", image: "/api/placeholder/300/200" },
  ]

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Airport Transfer Services
          </h1>
          <p className="text-gray-400">Reliable and comfortable rides to your destination</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 shadow-2xl"
        >
          <SearchForm />
        </motion.div>

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-white">Select Your Vehicle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taxiOptions.map((taxi, index) => (
              <motion.div
                key={taxi.name}
                className="bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden border border-gray-700"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <Image
                  src={taxi.image}
                  alt={taxi.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover brightness-75"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{taxi.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {taxi.capacity}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {taxi.luggage}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <CreditCard className="w-4 h-4 mr-1" />
                      Pay later
                    </div>
                    <div className="text-lg font-semibold text-blue-400">
                      {taxi.price}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white group">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
