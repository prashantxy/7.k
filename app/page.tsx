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
    <main className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Intelligent Mobile Travel Guide</h1>
        <p className="text-xl md:text-2xl mb-8">Your AI-powered companion for unforgettable journeys</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Exploring
        </motion.button>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Travel collage"
          layout="fill"
          objectFit="cover"
          className="filter brightness-50"
        />
      </motion.div>
    </section>
  )
}

interface Feature {
  icon: React.ComponentType; // Icon components (e.g., FaUtensils) are React components
  title: string;
  description: string;
}
interface FeaturesSectionProps {
  features: Feature[];
  activeFeature: number;
  setActiveFeature: (index: number) => void; // Function to set active feature index
}

function FeaturesSection({ features, activeFeature, setActiveFeature }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Discover Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-lg cursor-pointer transition-colors ${
                  activeFeature === index ? 'bg-blue-600 text-white' : 'bg-gray-800 shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <feature.icon />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={`/placeholder.svg?height=600&width=800&text=${features[activeFeature].title}`}
              alt={features[activeFeature].title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Travel Experience?</h2>
        <p className="text-xl mb-8">Download the Intelligent Mobile Travel Guide app now and embark on your next adventure!</p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Download for iOS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Download for Android
          </motion.button>
        </div>
      </div>
    </section>
  );
}
