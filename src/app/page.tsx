import AboutUs from '@/components/global/AboutUs'
import BakeryCard from '@/components/global/BakeryCard'
import BakeryShowcase from '@/components/global/BakeryShowcase'
import BakingArt from '@/components/global/BakingArt'
import Delight from '@/components/global/delight'
import HeroSection from '@/components/global/hero-section'
import Products from '@/components/global/Products'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full mx-auto px-4'>
      <HeroSection />
      <Delight />
      <Products />
      <BakingArt />
      <AboutUs />
      <BakeryShowcase />
      <BakeryCard />
    </div>
  )
}

export default page
