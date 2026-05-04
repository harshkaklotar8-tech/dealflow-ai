import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import Ticker from '@/components/landing/Ticker'
import Problem from '@/components/landing/Problem'
import Features from '@/components/landing/Features'
import Demo from '@/components/landing/Demo'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707]">
      <Navbar />
      <Hero />
      <Ticker />
      <Problem />
      <Features />
      <Demo />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
