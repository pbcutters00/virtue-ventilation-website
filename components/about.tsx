
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Heart, Award, Clock } from 'lucide-react'

export default function About() {
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
      id="about" 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Virtue Ventilation
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Virtue Ventilation is a locally owned company built on <strong>integrity, responsibility, 
                and straightforward service</strong>. We don't follow trends or use gimmicks—just proven, 
                conscientious work.
              </p>
              
              <p className="text-lg text-gray-600">
                Our mission is simple: to work with you for the protection of your properties. Allowing you peace of mind. We specialize 
                in professional dryer vent cleaning for residential homes and multi-unit buildings throughout 
                Western Washington.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-3 mx-auto">
                    <Heart className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Locally Owned</h3>
                  <p className="text-sm text-gray-600">Built on community values</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-3 mx-auto">
                    <Award className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">Fully protected service</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-3 mx-auto">
                    <Clock className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Flexible Hours</h3>
                  <p className="text-sm text-gray-600">Monday-Saturday, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/IMG_6853.JPG"
                alt="Virtue Ventilation service truck with professional equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Professional Equipment & Methods
              </h3>
              <p className="text-gray-600">
                Our vehicle-mounted aerial lifts and commercial-grade air compressors ensure 
                we can access and clean every part of your dryer vent system while protecting 
                your building's exterior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
