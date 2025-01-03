'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Compass, UtensilsCrossed, Building2, Landmark, Globe, ArrowRight, Phone, MapPin } from 'lucide-react'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    { 
      icon: UtensilsCrossed, 
      title: 'Smart Dining', 
      description: 'AI-powered restaurant recommendations based on your preferences',
      image: "/api/placeholder/800/600"
    },
    { 
      icon: Building2, 
      title: 'Premium Stays', 
      description: 'Curated selection of hotels and unique accommodations',
      image: "/api/placeholder/800/600"
    },
    { 
      icon: Landmark, 
      title: 'Local Experiences', 
      description: 'Discover hidden gems and authentic local attractions',
      image: "/api/placeholder/800/600"
    },
    { 
      icon: Globe, 
      title: 'Global Support', 
      description: 'Real-time translation and 24/7 travel assistance',
      image: "/api/placeholder/800/600"
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <HeroSection />
      <FeaturesSection features={features} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      <CTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="/api/placeholder/1920/1080"
        alt="Travel background"
        layout="fill"
        objectFit="cover"
        className="object-center"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Compass className="w-20 h-20 mx-auto text-blue-400 mb-6" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Travel Smarter, Journey Further
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">Your AI-powered companion for extraordinary adventures</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg inline-flex items-center group"
        >
          Begin Your Journey
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  )
}

function FeaturesSection({ features, activeFeature, setActiveFeature }) {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Intelligent Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl cursor-pointer backdrop-blur-lg transition-all duration-300 border ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50' 
                    : 'bg-white/5 border-gray-700'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <feature.icon className={`w-6 h-6 ${
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-700"
          >
            <Image
              src={features[activeFeature].image}
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Travel Experience?
          </motion.h2>
          <p className="text-xl mb-12 text-gray-300">Download now and unlock a world of intelligent travel assistance</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg flex items-center justify-center group"
            >
              <Phone className="mr-2" />
              iOS App
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg flex items-center justify-center group"
            >
              <Phone className="mr-2" />
              Android App
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
