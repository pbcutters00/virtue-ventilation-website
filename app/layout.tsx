
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virtue Ventilation - Professional Dryer Vent Cleaning | Western Washington',
  description: 'Professional dryer vent cleaning for residential homes and multi-unit buildings in Western Washington. Licensed, insured, and specialized in fire prevention. Serving King, Pierce, Kitsap, and Thurston Counties.',
  keywords: 'dryer vent cleaning, fire prevention, residential, apartments, condos, Western Washington, King County, Pierce County, Kitsap County, Thurston County',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
