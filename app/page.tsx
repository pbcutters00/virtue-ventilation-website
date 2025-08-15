
import Header from '../components/header'
import Hero from '../components/hero'
import WhyVirtue from '../components/why-virtue'
import About from '../components/about'
import OurService from '../components/our-service'
import Pricing from '../components/pricing'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyVirtue />
      <About />
      <OurService />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
