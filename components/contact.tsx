
'use client'

import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'

export default function Contact() {
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
      id="contact" 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to schedule your dryer vent cleaning? Get in touch with us today or book your appointment online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <a
                href="tel:2535098004"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mr-4 group-hover:bg-gray-800">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">(253) 509-8004</p>
                </div>
              </a>

              <a
                href="mailto:corporate@virtueventilation.com"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mr-4 group-hover:bg-gray-800">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">corporate@virtueventilation.com</p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mailing Address</h4>
                  <p className="text-gray-600">1883 W Royal Hunte Dr<br />Suite 200A<br />Cedar City, Utah 84720</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Service Area</h4>
                  <p className="text-gray-600">King, Pierce, Kitsap & Thurston Counties</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">Monday-Saturday, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scheduling Section */}
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            <div className="bg-gray-50 p-8 rounded-lg h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-black text-white rounded-full mb-6 mx-auto">
                  <Calendar className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Schedule Your Service
                </h3>
                
                <p className="text-lg text-gray-600 mb-8">
                  Book your dryer vent cleaning appointment online. Choose a time that works best for you.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-black mb-8">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">$150</span>
                    <span className="text-lg text-gray-600 ml-2">flat rate</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold">No Hidden Costs</p>
                </div>
                
                <a
                  href="https://virtuescheduling.as.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg w-full justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Online
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>

                <p className="text-sm text-gray-500 mt-4">
                  Prefer to call? Contact us at (253) 509-8004
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
