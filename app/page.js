import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Company from '@/components/Company'
import Choose from '@/components/Choose'
import Join from '@/components/Join'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <Choose />
      <Join />
      <Footer />
    </div>
  )
}
