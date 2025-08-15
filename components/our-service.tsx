
'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertTriangle, Wrench, Shield, TrendingUp } from 'lucide-react'

export default function OurService() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="service" 
      ref={sectionRef}
      className="py-16 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional dryer vent cleaning that reduces fire risk, improves efficiency, 
            and extends appliance life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* How It Works */}
          <div className={`bg-gray-800 p-8 rounded-lg ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-6 mx-auto">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">How It Works</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Inspection of your dryer vent system
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Commercial-grade equipment cleans entire duct length, exterior vent to dryer connection
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Vehicle-mounted aerial lifts protect your property exterior
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Thorough cleanup leaving your property spotless
              </li>
            </ul>
          </div>

          {/* The Problem */}
          <div className={`bg-gray-800 p-8 rounded-lg ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg mb-6 mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">The Problem</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                Lint buildup in dryer vents is a <strong className="text-white">leading cause 
                of residential fires</strong> according to the Washington State Fire Marshall's Office.
              </p>
              <p>
                Many vendors only clean the first few feet of vent, leaving dangerous 
                lint buildup deeper in the system.
              </p>
              <p>
                Blocked vents also reduce dryer efficiency and shorten appliance life.
              </p>
            </div>
          </div>

          {/* Reduce Fire Risk */}
          <div className={`bg-gray-800 p-8 rounded-lg ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-6 mx-auto">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Reduce Fire Risk</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                Our thorough cleaning process removes <strong className="text-white">all lint buildup</strong> 
                throughout the entire vent system.
              </p>
              <p>
                We recommend bi-annual exterior vent maintenance to maintain optimal safety 
                and efficiency.
              </p>
              <div className="flex items-center text-green-400 mt-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-semibold">Improve efficiency up to 30%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className={`bg-gray-800 p-8 rounded-lg text-center ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h3 className="text-2xl font-bold mb-4">Serving Western Washington</h3>
          <p className="text-gray-300 mb-6">
            We proudly serve residential homes and multi-unit buildings across four counties:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold">King County</h4>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold">Pierce County</h4>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold">Kitsap County</h4>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold">Thurston County</h4>
            </div>
          </div>
          
          <button
            onClick={scrollToContact}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Your Service Today
          </button>
        </div>
      </div>
    </section>
  )
}
