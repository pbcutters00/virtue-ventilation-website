
'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Shield, Truck, Users } from 'lucide-react'

export default function WhyVirtue() {
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

  const benefits = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Reduce fire risk with thorough duct cleaning - addressing a leading cause of residential fires."
    },
    {
      icon: Truck,
      title: "Professional Equipment",
      description: "Commercial-grade vehicle-mounted air compressor with specialty equipment for complete duct cleaning."
    },
    {
      icon: Users,
      title: "Trusted Team",
      description: "Background-checked, uniformed, and trained professionals specialized in multi-family environments."
    },
    {
      icon: CheckCircle,
      title: "Complete Service",
      description: "We clean the entire duct length, not just the first few feet as others use drills and brushes for."
    }
  ]

  return (
    <section 
      id="why-virtue" 
      ref={sectionRef}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Virtue?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principled, dependable, and fully insured—no gimmicks, just honest work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={benefit.title}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'fade-in-up animate' : 'fade-in-up'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className={`mt-12 text-center ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Specialized in Multi-Family Properties
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              Apartments, condos, and multi-family properties require specialized expertise. Our team is trained 
              specifically for these environments with flexible scheduling for both homeowners and property managers.
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                King County
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                Pierce County
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                Kitsap County
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                Thurston County
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
