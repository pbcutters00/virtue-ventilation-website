
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Shield, Phone, Mail } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <div 
        ref={heroRef}
        className="hero-bg parallax-bg"
        style={{
          backgroundImage: 'url(/images/AdobeStock_266588437.jpeg)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in-up animate">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Protect Your Properties.
            <br />
            <span className="text-gray-200">Breathe Easy.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional Dryer-Vent Cleaning for Residential & Multi-Unit Buildings in Western Washington
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-6 h-6 mr-2" />
            <span className="text-lg">Licensed & Insured • No Gimmicks, Just Honest Work</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToPricing}
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              See Pricing
            </button>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:2535098004"
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">(253) 509-8004</span>
              </a>
              
              <a
                href="mailto:corporate@virtueventilation.com"
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg">corporate@virtueventilation.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
