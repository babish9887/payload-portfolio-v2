'use client'
import AboutPage from '@/components/AboutPage'
import ContactMePage from '@/components/ContactMePage'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage'
import Navbar from '@/components/Navbar'
import PortfolioPage from '@/components/PortfolioPage'
import ServicesPage from '@/components/ServicesPage'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className="w-full">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <PortfolioPage />
      <ContactMePage />
      <Footer />
    </div>
  )
}
