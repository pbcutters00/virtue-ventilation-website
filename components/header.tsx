
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative aspect-[3/1] w-48 sm:w-56">
              <Image
                src="/images/Virtue logo final PNG LRG .png"
                alt="Virtue Ventilation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('why-virtue')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Why Virtue?
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('service')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Our Service
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:2535098004"
              className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(253) 509-8004</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('why-virtue')}
                className="text-gray-700 hover:text-black transition-colors text-left"
              >
                Why Virtue?
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-black transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('service')}
                className="text-gray-700 hover:text-black transition-colors text-left"
              >
                Our Service
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-black transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="tel:2535098004"
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>(253) 509-8004</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
