'use client'

import { Calendar, Medal, Menu, Search, User, X } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

const Navbar = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full px-20 py-3 shadow-md bg-white">
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-green-500">
          <Medal className="w-6 h-6" />
        </div>

        {/* Center: Inputs (Desktop) */}
        <div className="hidden sm:flex gap-4 items-center">
          <div className="flex items-center bg-white shadow rounded-full px-4 py-2">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="outline-none text-sm text-gray-600 bg-transparent"
            />
            <Calendar className="w-4 h-4 text-green-500 ml-2" />
          </div>

          <div className="flex items-center bg-white shadow rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm text-gray-600 bg-transparent"
            />
            <Search className="w-4 h-4 text-gray-500 ml-2" />
          </div>
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="flex items-center gap-1 bg-gray-100 text-green-900 font-medium rounded-full px-4 py-2">
            <Medal className="w-4 h-4" />
            <span className="text-sm">Leaderboard</span>
          </button>

          <button className="border border-green-900 text-green-900 font-medium rounded-full px-4 py-2 text-sm">
            Login / Sign up
          </button>

          <div className="flex items-center justify-center w-10 h-10 rounded-full border shadow bg-white">
            <Menu className="w-4 h-4 mr-1 text-gray-600" />
            <User className="w-5 h-5 text-gray-800" />
          </div>
        </div>

        {/* Right: Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 sm:hidden',
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center bg-white shadow rounded-full px-4 py-2">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="outline-none text-sm text-gray-600 bg-transparent w-full"
            />
            <Calendar className="w-4 h-4 text-green-500 ml-2" />
          </div>

          <div className="flex items-center bg-white shadow rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm text-gray-600 bg-transparent w-full"
            />
            <Search className="w-4 h-4 text-gray-500 ml-2" />
          </div>

          <button className="flex items-center gap-1 bg-gray-100 text-green-900 font-medium rounded-full px-4 py-2">
            <Medal className="w-4 h-4" />
            <span className="text-sm">Leaderboard</span>
          </button>

          <button className="border border-green-900 text-green-900 font-medium rounded-full px-4 py-2 text-sm">
            Login / Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
