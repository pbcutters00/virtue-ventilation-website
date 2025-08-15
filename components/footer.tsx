
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/1] w-32 mb-6">
              <Image
                src="/images/Virtue invert v png.png"
                alt="Virtue Ventilation"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional dryer vent cleaning for residential homes and multi-unit buildings 
              in Western Washington. Licensed, insured, and built on integrity.
            </p>
            <p className="text-sm text-gray-400">
              © {currentYear} Virtue Ventilation. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:2535098004"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (253) 509-8004
              </a>
              
              <a
                href="mailto:corporate@virtueventilation.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                corporate@virtueventilation.com
              </a>
              
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                PO BOX 1368, Olympia, WA 98507
              </div>
              
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-2" />
                Mon-Fri: 8:00 AM - 6:00 PM
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <div className="space-y-2">
              <p className="text-gray-300">King County</p>
              <p className="text-gray-300">Pierce County</p>
              <p className="text-gray-300">Kitsap County</p>
              <p className="text-gray-300">Thurston County</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 sm:mb-0">
              Licensed & Insured • No Gimmicks, Just Honest Work
            </p>
            <p className="text-sm text-gray-400">
              Virtue is expanding across Western Washington
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
