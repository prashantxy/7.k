'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DatePicker } from '@/components/ui/date-picker'
import { Dropdown } from '@/components/ui/dropdown'
import { Search, Calendar, Users } from 'lucide-react'

export function SearchForm() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [guests, setGuests] = useState('2 adults')
  const [isCheckInOpen, setIsCheckInOpen] = useState(false)
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search:', { destination, checkIn, checkOut, guests })
  }

  return (
    <motion.form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white-800 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-950 w-5 h-5" />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsCheckInOpen(!isCheckInOpen)}
            className="w-full px-4 py-2 text-left bg-white border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
          >
            {checkIn ? checkIn.toLocaleDateString() : 'Check-in'}
          </button>
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-950 w-5 h-5" />
          {isCheckInOpen && (
            <div className="absolute z-10 mt-1">
              <DatePicker selected={checkIn} onSelect={(date) => { setCheckIn(date); setIsCheckInOpen(false); }} />
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
            className="w-full px-4 py-2 text-left bg-white border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
          >
            {checkOut ? checkOut.toLocaleDateString() : 'Check-out'}
          </button>
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-950 w-5 h-5" />
          {isCheckOutOpen && (
            <div className="absolute z-10 mt-1">
              <DatePicker selected={checkOut} onSelect={(date) => { setCheckOut(date); setIsCheckOutOpen(false); }} />
            </div>
          )}
        </div>

        <div className="relative">
          <Dropdown
            options={['1 adult', '2 adults', '2 adults, 1 child', '2 adults, 2 children']}
            selected={guests}
            onSelect={setGuests}
            placeholder="Guests"
          />
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-950 w-5 h-5" />
        </div>
      </div>

      <motion.button
        type="submit"
        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Search
      </motion.button>
    </motion.form>
  )
}

