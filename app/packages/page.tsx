'use client'

import { motion } from 'framer-motion'
import { SearchForm } from '@/components/search-from'
import { Button } from '@/components/ui/button'
import { Plane, Hotel, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function PackagesPage() {
  const packages = [
    { 
      name: "City Explorer", 
      description: "3 nights in a bustling metropolis", 
      image: "https://via.placeholder.com/400x300.png?text=City+Explorer" 
    },
    { 
      name: "Beach Getaway", 
      description: "5 nights of sun and relaxation", 
      image: "https://via.placeholder.com/400x300.png?text=Beach+Getaway" 
    },
    { 
      name: "Mountain Retreat", 
      description: "4 nights in scenic highlands", 
      image: "https://via.placeholder.com/400x300.png?text=Mountain+Retreat" 
    },
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
          Flight + Hotel Packages
        </motion.h1>
        <SearchForm />

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Popular Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                  <Button className="w-full bg-[#0071c2] hover:bg-[#005999] text-white">
                    View Details
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
