'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaUtensils, FaHotel, FaLandmark, FaGlobe } from 'react-icons/fa'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    { icon: FaUtensils, title: 'Restaurant Recommendations', description: 'Discover local cuisines and hidden gems' },
    { icon: FaHotel, title: 'Hotel Bookings', description: 'Find and book the perfect accommodations' },
    { icon: FaLandmark, title: 'Attractions', description: 'Explore must-visit sights and experiences' },
    { icon: FaGlobe, title: 'Multilingual Support', description: 'Travel confidently with language assistance' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <HeroSection />
      <FeaturesSection features={features} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      <CTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
        >
          Intelligent Mobile Travel Guide
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Your AI-powered companion for unforgettable journeys
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg backdrop-blur-sm"
        >
          Start Exploring
        </motion.button>
      </motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotateZ: [0, 1, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/api/placeholder/1920/1080"
          alt="Travel collage"
          layout="fill"
          objectFit="cover"
          className="filter brightness-30"
        />
      </motion.div>
    </section>
  )
}

function FeaturesSection({ features, activeFeature, setActiveFeature }) {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Discover Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-xl cursor-pointer backdrop-blur-lg border transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500'
                    : 'bg-white/5 border-gray-700/30'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center gap-4">
                  <feature.icon className={`text-2xl ${
                    activeFeature === index ? 'text-blue-400' : 'text-gray-400'
                  }`} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-lg"
          >
            <Image
              src="/api/placeholder/800/600"
              alt={features[activeFeature].title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Ready to Elevate Your Travel Experience?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl mb-8 text-gray-300"
        >
          Download the Intelligent Mobile Travel Guide app now and embark on your next adventure!
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg backdrop-blur-sm"
          >
            Download for iOS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg backdrop-blur-sm"
          >
            Download for Android
          </motion.button>
        </div>
      </div>
    </section>
  )
}
