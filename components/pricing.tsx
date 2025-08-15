
'use client'

import { useState, useRef, useEffect } from 'react'
import { CheckCircle, DollarSign, Calendar, Shield } from 'lucide-react'

export default function Pricing() {
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

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden costs. No surprise fees. Just honest, upfront pricing for quality dryer vent cleaning services.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <div className="bg-white rounded-2xl shadow-xl border-4 border-black p-8 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mb-6 mx-auto">
              <DollarSign className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dryer Vent Cleaning Service
            </h3>
            
            <div className="mb-6">
              <span className="text-6xl font-bold text-gray-900">$150</span>
              <span className="text-xl text-gray-600 ml-2">flat rate</span>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold">No Hidden Costs Guaranteed</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Complete dryer vent inspection and cleaning</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Removal of lint, debris, and blockages</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Professional equipment and expert service</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Trained and insured technicians</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Post-service safety report</span>
              </div>
            </div>

            <a
              href="https://virtuescheduling.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Now
            </a>

            <p className="text-sm text-gray-500 mt-4">
              Serving King, Pierce, Kitsap & Thurston Counties
            </p>
          </div>
        </div>

        <div className={`mt-12 text-center ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <p className="text-gray-600 mb-4">
            Questions about our pricing or services?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:2535098004"
              className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors font-medium"
            >
              <span>Call us at (253) 509-8004</span>
            </a>
            <span className="hidden sm:block text-gray-400">|</span>
            <a
              href="mailto:corporate@virtueventilation.com"
              className="text-black hover:text-gray-700 transition-colors font-medium"
            >
              corporate@virtueventilation.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
