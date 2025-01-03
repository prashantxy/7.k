'use client'
import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { Plane, Hotel, Briefcase, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function PackagesPage() {
  const packages = [
    { 
      name: "City Explorer", 
      description: "3 nights in a bustling metropolis",
      price: "$599",
      image: "/api/placeholder/400/300"
    },
    { 
      name: "Beach Getaway", 
      description: "5 nights of sun and relaxation",
      price: "$799", 
      image: "/api/placeholder/400/300"
    },
    { 
      name: "Mountain Retreat", 
      description: "4 nights in scenic highlands",
      price: "$699",
      image: "/api/placeholder/400/300"
    },
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
            Discover Perfect Travel Packages
          </h1>
          <p className="text-gray-400">Curated combinations of flights, hotels, and experiences</p>
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
          <h2 className="text-2xl font-bold mb-8 text-white">Featured Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className="bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden border border-gray-700"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover brightness-75"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Plane className="w-4 h-4 mr-1" />
                      Flight
                    </div>
                    <div className="flex items-center">
                      <Hotel className="w-4 h-4 mr-1" />
                      Hotel
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      Activities
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white group">
                    Explore Package
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
